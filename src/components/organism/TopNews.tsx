"use client";

import useSWR from "swr";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDataLoader } from "@/providers/DataLoaderProvider";

interface Quote {
    symbol: string;
    last: number;
    valueChange: number;
    percentChange: number;
}

interface Berita {
    id: number;
    title: string;
    slug: string;
    created_at?: string;
}

type DisplayItem =
    | { type: "news"; content: string }
    | { type: "market"; content: string; value?: number; percentChange?: number }
    | { type: "sep" };

const numberFmt = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 });

// ---------------- Fetchers & normalizers ----------------

const baseFetcher = (url: string) =>
    fetch(url, { headers: { accept: "application/json" }, cache: "no-store" }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} on ${url}`);
        return r.json();
    });

// robust: ambil array dari berbagai bentuk respons
function pickArray<T = unknown>(raw: any): T[] {
    if (Array.isArray(raw)) return raw as T[];
    if (raw && Array.isArray(raw.data)) return raw.data as T[];
    if (raw && raw.data && Array.isArray(raw.data.data)) return raw.data.data as T[];
    return [];
}

const newsFetcher = async (url: string) => pickArray<Berita>(await baseFetcher(url));
const marketFetcher = async (url: string) => pickArray<Quote>(await baseFetcher(url));

function normalizeMarket(raw: unknown[]): Quote[] {
    return raw.filter(
        (d): d is Quote =>
            d &&
            typeof d === "object" &&
            typeof (d as any).symbol === "string" &&
            typeof (d as any).last === "number" &&
            typeof (d as any).percentChange === "number"
    );
}

function normalizeNews(raw: unknown[]): Berita[] {
    return raw
        .filter(
            (d): d is Berita =>
                d && typeof d === "object" && typeof (d as any).id === "number" && typeof (d as any).title === "string"
        )
        .sort((a, b) => {
            const ta = a.created_at ? Date.parse(a.created_at) : 0;
            const tb = b.created_at ? Date.parse(b.created_at) : 0;
            return tb - ta;
        });
}

/** builder item marquee */
function buildDisplayItems(market: Quote[], news: Berita[]): DisplayItem[] {
    const topNews = news.slice(0, 3).map((n) => n.title.trim()).filter(Boolean);
    const newsContent = topNews.length ? topNews.join(" • ") : "Tidak ada berita terbaru";
    const newsItem: DisplayItem = { type: "news", content: newsContent };
    const marketItems: DisplayItem[] = market.map((m) => ({
        type: "market",
        content: m.symbol,
        value: Number.isFinite(m.last) ? m.last : undefined,
        percentChange: Number.isFinite(m.percentChange) ? m.percentChange : undefined,
    }));
    return [{ type: "sep" }, newsItem, { type: "sep" }, ...marketItems, { type: "sep" }];
}

export default function TopNews() {
    const { track } = useDataLoader();

    // refs untuk hitung kecepatan marquee
    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [marqueeDuration, setMarqueeDuration] = useState<number>(25); // default (detik)
    const [marqueeActive, setMarqueeActive] = useState<boolean>(true);

    // SWR News
    const {
        data: newsRaw,
        error: newsErr,
        isLoading: newsLoading,
        mutate: mutateNews,
    } = useSWR("/api/berita", newsFetcher, {
        refreshInterval: 15_000, // 15 detik
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
    });

    // SWR Market
    const {
        data: marketRaw,
        error: marketErr,
        isLoading: marketLoading,
        mutate: mutateMarket,
    } = useSWR("/api/Market", marketFetcher, {
        refreshInterval: 15_000, // 15 detik
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
    });

    // initial revalidate via tracker (paksa fetch pertama kali)
    useEffect(() => {
        const p = Promise.all([
            mutateNews(undefined, { revalidate: true }),
            mutateMarket(undefined, { revalidate: true }),
        ]);
        track(p);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const news = useMemo(() => normalizeNews(newsRaw ?? []), [newsRaw]);
    const market = useMemo(() => normalizeMarket(marketRaw ?? []), [marketRaw]);
    const items: DisplayItem[] = useMemo(() => buildDisplayItems(market, news), [market, news]);

    // Duplikasi untuk efek marquee tak terputus (pangkas 'sep' terakhir)
    const displayItems: DisplayItem[] = useMemo(() => {
        if (!items.length) return [];
        const trimmed = items[items.length - 1]?.type === "sep" ? items.slice(0, -1) : items;
        return [...trimmed, ...trimmed];
    }, [items]);

    const loading = newsLoading || marketLoading;
    const hasError = Boolean(newsErr || marketErr);

    // Hitung durasi animasi berdasar lebar konten
    useEffect(() => {
        if (!contentRef.current || !containerRef.current) return;

        const contentWidth = contentRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;

        // kalau konten <= container (nggak perlu jalan)
        if (contentWidth <= containerWidth) {
            setMarqueeActive(false);
            return;
        }

        // pixels per second (semakin besar → semakin cepat)
        const SPEED = 140; // tweak: 140–200 nyaman; kamu bilang terlalu lama → naikin
        const duration = contentWidth / SPEED; // detik
        setMarqueeDuration(Math.max(8, Math.min(duration, 50))); // clamp 8s – 35s
        setMarqueeActive(true);
    }, [displayItems]);

    return (
        <div className="bg-[#111827] rounded w-full overflow-hidden">
            <div className="flex items-center p-2">
                <div className="bg-red-600 text-white font-bold text-sm px-3 py-1 rounded flex-shrink-0 select-none">
                    TOP NEWS
                </div>

                <div className="flex-1 overflow-hidden relative ml-3" ref={containerRef}>
                    {loading ? (
                        <div className="flex items-center gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-4 w-28 rounded bg-neutral-700 animate-pulse" />
                            ))}
                        </div>
                    ) : hasError ? (
                        <div className="text-red-400">Gagal memuat data.</div>
                    ) : displayItems.length === 0 ? (
                        <div className="text-gray-300">Tidak ada data.</div>
                    ) : (
                        <div
                            ref={contentRef}
                            className={`whitespace-nowrap flex gap-6 will-change-transform ${marqueeActive ? "marquee" : ""}`}
                            style={
                                marqueeActive
                                    ? ({ ["--marquee-duration" as any]: `${marqueeDuration}s` } as React.CSSProperties)
                                    : undefined
                            }
                            aria-live="polite"
                            aria-label="Ticker berita dan pasar"
                        >
                            {displayItems.map((item, idx) => {
                                if (item.type === "sep") {
                                    return (
                                        <div
                                            key={`sep-${idx}`}
                                            className="flex-shrink-0 mx-1 text-neutral-500"
                                            role="separator"
                                            aria-hidden="true"
                                        >
                                            | |
                                        </div>
                                    );
                                }

                                if (item.type === "market") {
                                    const hasPct =
                                        typeof item.percentChange === "number" && Number.isFinite(item.percentChange);
                                    const pct = hasPct ? item.percentChange! : undefined;
                                    const isUp = typeof pct === "number" ? pct >= 0 : undefined;

                                    return (
                                        <div
                                            key={`mkt-${item.content}-${idx}`}
                                            className="flex-shrink-0 text-gray-200"
                                            aria-label={`${item.content} ${typeof item.value === "number" ? numberFmt.format(item.value) : "-"
                                                }`}
                                        >
                                            <span className="font-semibold">{item.content}</span>:{" "}
                                            <span>{typeof item.value === "number" ? numberFmt.format(item.value) : "-"}</span>{" "}
                                            <span
                                                className={
                                                    isUp === undefined
                                                        ? "text-gray-300"
                                                        : isUp
                                                            ? "text-green-400"
                                                            : "text-red-400"
                                                }
                                            >
                                                ({hasPct ? pct!.toFixed(2) : "-"}%)
                                            </span>
                                        </div>
                                    );
                                }

                                // news
                                return (
                                    <div key={`news-${idx}`} className="flex-shrink-0 text-gray-200 italic">
                                        {item.content}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee {
          display: inline-flex;
          animation: marquee var(--marquee-duration, 25s) linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none !important;
          }
        }
      `}</style>
        </div>
    );
}
