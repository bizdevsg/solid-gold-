"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import TikTokEmbed from "../moleculs/TikTokEmbed";

/* ========= Types ========= */
type ApiLegalitas = {
    id: number;
    title: string;
    image: string;
    created_at?: string;
    updated_at?: string;
};
type LegalitasItem = { title: string; file: string };

type ApiVideo = {
    id: number;
    title: string;
    image?: string | null;
    embed_code: string;
    created_at?: string;
    updated_at?: string;
};

type VideoItem = {
    id: number;
    title: string;
    thumb: string;
    iframeHtml: string;
};

interface ApiSetting {
    tiktok_id: string;
}

interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
}

/* ========= Utils ========= */
const API_BASE = (
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    "https://sg-admin.newsmaker.id"
).replace(/\/+$/, "");

const fetcher = (url: string) => {
    return fetch(url, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer SGB-c7b0604664fd48d9`,
        },
        cache: "no-store",
    }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} on ${url}`);
        return r.json();
    });
};

function mediaUrl(p?: string | null) {
    if (!p) return "/placeholder.jpg";
    if (/^https?:\/\//i.test(p)) return p;
    const base =
        process.env.NEXT_PUBLIC_MEDIA_BASE_URL || API_BASE;
    return `${base}/${String(p).replace(/^\/+/, "")}`;
}

// Hilangkan <script> dan ambil src dari <iframe ... src="...">
function extractIframeSrc(html?: string): string | undefined {
    if (!html) return;
    const noScript = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
    const m = noScript.match(/<iframe[^>]*\s+src=["']([^"']+)["'][^>]*>/i);
    return m?.[1];
}

// Normalisasi & amankan URL embed (support YouTube/youtu.be + autoplay)
function normalizeEmbedSrc(raw?: string): string | null {
    if (!raw) return null;
    try {
        const base = typeof window !== "undefined" ? window.location.origin : "https://example.com";
        const url = new URL(raw, base);
        const host = url.hostname.toLowerCase();

        // YouTube shortlink → embed
        if (host.includes("youtu.be")) {
            const id = url.pathname.replace("/", "");
            const params = new URLSearchParams(url.search);
            params.set("autoplay", "1");
            params.set("mute", "1");
            params.set("rel", "0");
            params.set("playsinline", "1");
            return `https://www.youtube.com/embed/${encodeURIComponent(id)}?${params.toString()}`;
        }

        // YouTube watch → embed
        if (host.includes("youtube.com")) {
            const path = url.pathname;
            const params = new URLSearchParams(url.search);
            let id = "";
            if (path.startsWith("/watch")) {
                id = params.get("v") || "";
            } else if (path.startsWith("/embed/")) {
                id = path.split("/embed/")[1] || "";
            }
            if (id) {
                params.set("autoplay", "1");
                params.set("mute", "1");
                params.set("rel", "0");
                params.set("playsinline", "1");
                return `https://www.youtube.com/embed/${encodeURIComponent(id)}?${params.toString()}`;
            }
        }

        // Vimeo: tambahkan autoplay kalau belum
        if (host.includes("vimeo.com")) {
            const params = new URLSearchParams(url.search);
            params.set("autoplay", "1");
            const rebuilt = new URL(url.toString());
            rebuilt.search = params.toString();
            return rebuilt.toString();
        }

        // Default: kembalikan src apa adanya
        return url.toString();
    } catch {
        return raw;
    }
}

/* ========= Body Scroll Lock ========= */
function useBodyScrollLock(locked: boolean) {
    React.useEffect(() => {
        if (!locked) return;
        const prevOverflow = document.body.style.overflow;
        const prevPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0)
            document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPaddingRight;
        };
    }, [locked]);
}

export default function VideoGaleri() {
    /* ===== TikTok ID ===== */
    // Perbaikan: API mengembalikan array setting → gunakan ApiSetting[].
    const { data: settingData, error: settingErr } = useSWR<
        ApiResponse<ApiSetting[]>
    >(`${API_BASE}/api/v1/setting`, fetcher);

    const tiktokId =
        Array.isArray(settingData?.data) && settingData.data.length > 0
            ? settingData.data[0].tiktok_id
            : "";

    /* ====== LEGALITAS ====== */
    const {
        data: legalitasData,
        error: legalitasErr,
        isLoading: legalitasLoading,
    } = useSWR<ApiResponse<ApiLegalitas[]>>(
        `${API_BASE}/api/v1/legalitas`,
        fetcher,
        { refreshInterval: 60_000 }
    );

    const legalitasList: LegalitasItem[] = useMemo(() => {
        if (Array.isArray(legalitasData?.data)) {
            return legalitasData.data.map((it) => ({
                title: it.title,
                file: mediaUrl(it.image),
            }));
        }
        return [];
    }, [legalitasData]);

    const [legalitasIndex, setLegalitasIndex] = useState(0);
    useEffect(() => setLegalitasIndex(0), [legalitasList.length]);

    useEffect(() => {
        if (legalitasList.length <= 2) return; // <= 2 tidak perlu slideshow
        const itv = setInterval(
            () => setLegalitasIndex((p) => (p + 1) % legalitasList.length),
            5000
        );
        return () => clearInterval(itv);
    }, [legalitasList.length]);


    const prevLegalitas = () =>
        setLegalitasIndex((p) =>
            legalitasList.length ? (p === 0 ? legalitasList.length - 1 : p - 1) : 0
        );
    const nextLegalitas = () =>
        setLegalitasIndex((p) =>
            legalitasList.length ? (p === legalitasList.length - 1 ? 0 : p + 1) : 0
        );
    const currentLegalitas = legalitasList[legalitasIndex];

    /* ====== VIDEO ====== */
    const [videoModalOpen, setVideoModalOpen] = useState(false);

    const {
        data: videoData,
        error: videoErr,
        isLoading: videoLoading,
    } = useSWR<ApiResponse<ApiVideo[]>>(
        `${API_BASE}/api/v1/video`,
        fetcher,
        { refreshInterval: videoModalOpen ? 0 : 60_000 }
    );

    const videoList: VideoItem[] = useMemo(() => {
        if (Array.isArray(videoData?.data)) {
            return videoData.data.map((v) => ({
                id: v.id,
                title: v.title,
                thumb: mediaUrl(v.image),
                iframeHtml: v.embed_code,
            }));
        }
        return [];
    }, [videoData]);

    const [videoIndex, setVideoIndex] = useState(0);
    useEffect(() => setVideoIndex(0), [videoList.length]);

    useEffect(() => {
        if (videoList.length <= 2 || videoModalOpen) return;
        const itv = setInterval(
            () => setVideoIndex((p) => (p + 1) % videoList.length),
            5000
        );
        return () => clearInterval(itv);
    }, [videoList.length, videoModalOpen]);

    const prevVideo = () =>
        setVideoIndex((p) =>
            videoList.length ? (p === 0 ? videoList.length - 1 : p - 1) : 0
        );
    const nextVideo = () =>
        setVideoIndex((p) =>
            videoList.length ? (p === videoList.length - 1 ? 0 : p + 1) : 0
        );
    const currentVideo = videoList[videoIndex];

    /* ====== Modal Legalitas ====== */
    const [legalitasModalOpen, setLegalitasModalOpen] = useState(false);
    const [activeLegalitas, setActiveLegalitas] = useState<LegalitasItem | null>(
        null
    );
    const openLegalitasModal = useCallback((img: LegalitasItem) => {
        setActiveLegalitas(img);
        setLegalitasModalOpen(true);
    }, []);
    const closeLegalitasModal = useCallback(() => {
        setLegalitasModalOpen(false);
        setActiveLegalitas(null);
    }, []);
    useEffect(() => {
        if (!legalitasModalOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeLegalitasModal();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [legalitasModalOpen, closeLegalitasModal]);

    /* ====== Modal Video ====== */
    const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
    const openVideoModal = useCallback((v: VideoItem) => {
        setActiveVideo(v);
        setVideoModalOpen(true);
    }, []);
    const closeVideoModal = useCallback(() => {
        setVideoModalOpen(false);
        setActiveVideo(null); // unmount iframe → hentikan audio
    }, []);
    useEffect(() => {
        if (!videoModalOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeVideoModal();
            if (e.key === "ArrowLeft") prevVideo();
            if (e.key === "ArrowRight") nextVideo();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [videoModalOpen, closeVideoModal]);

    // src embed siap pakai (autoplay+mute) — berubah saat video atau modal open berubah
    const activeSrc = useMemo(() => {
        const raw = extractIframeSrc(activeVideo?.iframeHtml);
        const norm = normalizeEmbedSrc(raw);
        if (!norm) return undefined;

        // Pastikan autoplay aktif ketika modal terbuka
        try {
            const u = new URL(norm, typeof window !== "undefined" ? window.location.origin : "https://example.com");
            const sp = u.searchParams;
            if (videoModalOpen) {
                sp.set("autoplay", "1");
                sp.set("mute", sp.get("mute") ?? "1");
            }
            u.search = sp.toString();
            return u.toString();
        } catch {
            return norm;
        }
    }, [activeVideo?.id, videoModalOpen]);

    // Kunci scroll body jika ada modal yang terbuka
    const anyModalOpen = legalitasModalOpen || videoModalOpen;
    useBodyScrollLock(anyModalOpen);

    return (
        <div className="flex flex-col lg:flex-row gap-5 p-4">
            {/* TikTok */}
            <section
                className="flex flex-col items-center text-center space-y-5 lg:w-1/3"
                data-aos="fade-right"
            >
                <div className="bg-neutral-800 px-4 py-2 rounded font-semibold text-yellow-500 w-fit">
                    Video TikTok
                </div>

                {settingErr && (
                    <div className="text-red-400 text-sm">Gagal memuat TikTok ID</div>
                )}
                {!tiktokId ? (
                    <div className="text-neutral-300 text-sm">Memuat TikTok ID…</div>
                ) : (
                    <TikTokEmbed videoId={tiktokId} />
                )}
            </section>

            {/* Legalitas & Video */}
            <section className="flex flex-col lg:w-2/3 space-y-10">
                {/* LEGALITAS */}
                <div
                    className="flex flex-col items-center text-center space-y-5"
                    data-aos="fade-left"
                >
                    <div className="bg-neutral-800 px-4 py-2 rounded font-semibold text-yellow-500 w-fit">
                        Legalitas
                    </div>
                    <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg min-h-[16rem] bg-neutral-900">
                        {legalitasLoading ? (
                            <div className="w-full h-full animate-pulse bg-neutral-800" />
                        ) : legalitasErr ? (
                            <div className="p-6 text-red-400">Gagal memuat legalitas.</div>
                        ) : legalitasList.length === 0 ? (
                            <div className="p-6 text-neutral-300">Belum ada data legalitas.</div>
                        ) : legalitasList.length === 1 ? (
                            // Hanya 1 data → tampilkan satu gambar saja, tanpa slideshow
                            <img
                                src={legalitasList[0].file}
                                alt={legalitasList[0].title}
                                className="w-full h-64 object-cover rounded-lg bg-neutral-800 cursor-pointer"
                                onClick={() => openLegalitasModal(legalitasList[0])}
                            />
                        ) : legalitasList.length === 2 ? (
                            // Tepat 2 data → tampilkan dua-duanya sekaligus tanpa tombol/animasi
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {legalitasList.map((item, idx) => (
                                    <img
                                        key={idx}
                                        src={item.file}
                                        alt={item.title}
                                        className="w-full h-64 object-cover rounded-lg bg-neutral-800 cursor-pointer"
                                        onClick={() => openLegalitasModal(item)}
                                    />
                                ))}
                            </div>
                        ) : (
                            // > 2 data → slideshow 2 item per slide
                            <>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={legalitasIndex}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                                        initial={{ x: 300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {Array.from({ length: 2 }).map((_, i) => {
                                            const idx = (legalitasIndex + i) % legalitasList.length;
                                            const item = legalitasList[idx];
                                            return (
                                                <img
                                                    key={idx}
                                                    src={item.file}
                                                    alt={item.title}
                                                    className="w-full h-64 object-cover rounded-lg bg-neutral-800 cursor-pointer"
                                                    onClick={() => openLegalitasModal(item)}
                                                />
                                            );
                                        })}
                                    </motion.div>
                                </AnimatePresence>
                                <button onClick={prevLegalitas} className="absolute top-1/2 left-2">
                                    ❮
                                </button>
                                <button onClick={nextLegalitas} className="absolute top-1/2 right-2">
                                    ❯
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* VIDEO */}
                <div
                    className="flex flex-col items-center text-center space-y-5"
                    data-aos="fade-left"
                >
                    <div className="bg-neutral-800 px-4 py-2 rounded font-semibold text-yellow-500 w-fit">
                        Video Edukasi
                    </div>
                    <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg min-h-[16rem] bg-neutral-900">
                        {videoLoading ? (
                            <div className="w-full h-full animate-pulse bg-neutral-800" />
                        ) : videoErr ? (
                            <div className="p-6 text-red-400">Gagal memuat video.</div>
                        ) : videoList.length === 0 ? (
                            <div className="p-6 text-neutral-300">Belum ada data video.</div>
                        ) : videoList.length === 1 ? (
                            // 1 video → tampil satu saja
                            <img
                                src={videoList[0].thumb}
                                alt={videoList[0].title}
                                className="w-full h-full object-cover rounded-lg bg-neutral-900 cursor-pointer"
                                onClick={() => openVideoModal(videoList[0])}
                            />
                        ) : videoList.length === 2 ? (
                            // 2 video → tampil dua-duanya sekaligus tanpa slide
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {videoList.map((item) => (
                                    <img
                                        key={item.id}
                                        src={item.thumb}
                                        alt={item.title}
                                        className="w-full h-64 object-cover rounded-lg bg-neutral-900 cursor-pointer"
                                        onClick={() => openVideoModal(item)}
                                        loading="lazy"
                                    />
                                ))}
                            </div>
                        ) : (
                            // > 2 → slideshow 2 item per slide
                            <>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={videoIndex}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                                        initial={{ x: 300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        {Array.from({ length: 2 }).map((_, i) => {
                                            const idx = (videoIndex + i) % videoList.length;
                                            const item = videoList[idx];
                                            return (
                                                <img
                                                    key={item.id}
                                                    src={item.thumb}
                                                    alt={item.title}
                                                    className="w-full h-64 object-cover rounded-lg bg-neutral-900 cursor-pointer"
                                                    onClick={() => openVideoModal(item)}
                                                    loading="lazy"
                                                />
                                            );
                                        })}
                                    </motion.div>
                                </AnimatePresence>
                                <button onClick={prevVideo} className="absolute top-1/2 left-2">
                                    ❮
                                </button>
                                <button onClick={nextVideo} className="absolute top-1/2 right-2">
                                    ❯
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Modal Legalitas */}
            {legalitasModalOpen && activeLegalitas && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-[1px] flex justify-center items-center z-50 p-4 overscroll-contain"
                    onClick={closeLegalitasModal}
                >
                    <div
                        className="bg-neutral-900 relative p-3 sm:p-4 rounded-xl shadow-2xl w-fit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeLegalitasModal}
                            className="absolute right-3 top-3 px-3 py-1 text-sm rounded-full bg-neutral-700 text-white hover:bg-neutral-800 transition cursor-pointer"
                            autoFocus
                        >
                            Close
                        </button>

                        <div className="w-full max-h-[90vh] overflow-auto flex items-center justify-center">
                            <img
                                src={activeLegalitas.file}
                                alt={activeLegalitas.title}
                                className="max-h-[85vh] w-auto h-auto rounded-lg"
                            />
                        </div>

                        <div className="mt-3 text-white font-medium">
                            {activeLegalitas.title}
                        </div>
                    </div>
                </div>
            )}

            {/* Modal Video */}
            {videoModalOpen && activeVideo && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-[1px] flex justify-center items-center z-50 p-4 overscroll-contain"
                    onClick={closeVideoModal}
                >
                    <div
                        className="bg-neutral-900 relative p-3 sm:p-4 rounded-xl shadow-2xl w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeVideoModal}
                            className="absolute right-3 top-3 px-3 py-1 z-50 text-sm rounded-full bg-neutral-700 text-white hover:bg-neutral-800 transition cursor-pointer"
                            autoFocus
                        >
                            Close
                        </button>

                        {/* Wrapper rasio 16:9 agar iframe pasti punya tinggi */}
                        <div className="video-frame bg-black rounded-lg overflow-hidden">
                            {activeSrc ? (
                                <iframe
                                    key={activeVideo.id} // force remount tiap ganti video → reset playback
                                    src={activeSrc}
                                    title={activeVideo.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-300">
                                    Embed tidak tersedia
                                </div>
                            )}
                        </div>

                        <div className="mt-3 text-white font-medium">{activeVideo.title}</div>
                    </div>
                </div>
            )}

            {/* Aspect-ratio helper */}
            <style jsx>{`
        .video-frame {
          position: relative;
          width: 100%;
          /* 16:9 */
          padding-top: 56.25%;
        }
        .video-frame > iframe,
        .video-frame > div { /* fallback container "Embed tidak tersedia" */
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
        </div>
    );
}
