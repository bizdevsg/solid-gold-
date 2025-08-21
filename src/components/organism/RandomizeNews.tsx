"use client";

import { useEffect, useRef, useState } from "react";
import NewsCard from "../moleculs/NewsCard";

interface Kategori {
    id: number;
    name: string;
    slug: string;
}
interface Berita {
    id: number;
    title: string;
    slug: string;
    content: string;
    category_id: number;
    kategori: Kategori | null;
    images: string[];
    created_at: string;
    updated_at: string;
}

function stripHtml(html?: string) {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "");
}
function mediaUrl(p?: string) {
    if (!p) return "/placeholder.jpg";
    if (/^https?:\/\//i.test(p)) return p;
    const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL || "https://portalnews.newsmaker.id";;
    return `${base}/${p.replace(/^\/+/, "")}`;
}
function pickRandom<T>(list: T[], n: number): T[] {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(n, copy.length));
}

export default function RandomizeNews({ excludedSlug }: { excludedSlug?: string }) {
    const [news, setNews] = useState<Berita[]>([]);
    const [loading, setLoading] = useState(true);
    const abortRef = useRef<AbortController | null>(null);

    useEffect(() => {
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        (async () => {
            try {
                const res = await fetch("/api/berita", {
                    method: "GET",
                    cache: "no-store",
                    signal: controller.signal,
                    headers: { accept: "application/json" },
                });
                if (!res.ok) throw new Error(`Gagal ambil berita (HTTP ${res.status})`);

                const data: unknown = await res.json();
                const arr = Array.isArray(data) ? (data as Berita[]) : [];

                const cur = (excludedSlug ?? "").toLowerCase().trim();
                const filtered = cur
                    ? arr.filter((b) => (b.slug || "").toLowerCase().trim() !== cur)
                    : arr;

                setNews(pickRandom(filtered, 3));
            } catch (error) {
                if (!controller.signal.aborted) {
                    console.error("Gagal ambil berita:", error);
                    setNews([]);
                }
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [excludedSlug]);

    return (
        <div>
            <div className="text-center mb-10">
                <p className="text-yellow-500 font-semibold">Suggested News</p>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                    Rekomendasi pilihan, biar kamu gak ketinggalan.
                </h1>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700">
                            <div className="h-48 w-full bg-neutral-700 animate-pulse" />
                            <div className="p-4 space-y-3">
                                <div className="h-4 w-24 bg-neutral-700 rounded animate-pulse" />
                                <div className="h-5 w-3/4 bg-neutral-700 rounded animate-pulse" />
                                <div className="h-4 w-full bg-neutral-700 rounded animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {news.map((item) => {
                        const cleanDescription = stripHtml(item.content).replace(/&nbsp;/g, " ").trim();
                        const img = mediaUrl(item.images?.[0]);

                        // Link ke halaman detail berita (sesuai pages/berita/[newsSlug].tsx)
                        const href = item.slug ? `/berita/${encodeURIComponent(item.slug)}` : "/#";

                        return (
                            <NewsCard
                                key={item.id}
                                image={img}
                                title={item.title}
                                category={item.kategori?.name || "-"}
                                description={cleanDescription}
                                href={href}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
