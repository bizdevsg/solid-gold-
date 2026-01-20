"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";
import Link from "next/link";

// ===== Types =====
interface Kategori {
    id: number;
    name: string;
    slug: string;
}
type TitleVariants = {
    default?: string;
    sg?: string;
    [key: string]: string | undefined;
};
interface Berita {
    id: number;
    title: string;
    titles?: TitleVariants;
    slug: string;
    content?: string;
    category_id?: number;
    kategori?: Kategori | null;
    images?: string[];
    created_at?: string;
    updated_at?: string;
}
interface Quote {
    symbol: string;
    last: number;
    valueChange?: number;
    percentChange: number;
}

type DisplayItem =
    | { type: "news"; content: string; href: string }
    | { type: "market"; content: string; value?: number; percentChange?: number }
    | { type: "sep"; variant: "dot" | "bar" }; // ‘•’ atau ‘|’

const numberFmt = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 });

// ===== Kategori mapping (nama kategori API -> slug halaman) =====
const kategoriMap: Record<string, string[]> = {
    indexNews: ["Nikkei", "Hang seng", "Market Update"],
    commodityNews: ["Gold", "Silver", "Oil"],
    currenciesNews: ["EUR/USD", "USD/JPY", "USD/CHF", "AUD/USD", "GBP/USD", "US DOLLAR"],
    economicNews: ["Global Economics"],
    analisisMarket: ["Analisis Market"],
    analisisOpini: ["Analisis & Opini"],
    fiscalMoneter: ["Fiscal & Moneter"],
};
function getKategoriSlugFromName(name?: string): string | null {
    if (!name) return null;
    const n = name.trim().toLowerCase();
    for (const [slug, names] of Object.entries(kategoriMap)) {
        if (names.some((x) => x.trim().toLowerCase() === n)) return slug;
    }
    return null;
}

// ===== fetchers & helpers =====
const baseFetcher = (url: string) =>
    fetch(url, {
        headers: {
            accept: "application/json",
            Authorization: "Bearer SGB-c7b0604664fd48d9",
        },
        cache: "no-store",
    }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} on ${url}`);
        return r.json();
    });

function pickArray<T = unknown>(raw: any): T[] {
    if (Array.isArray(raw)) return raw as T[];
    if (raw && Array.isArray(raw.data)) return raw.data as T[];
    if (raw && raw.data && Array.isArray(raw.data.data)) return raw.data.data as T[];
    return [];
}

function pickTitle(item: Berita): string {
    const t = item.titles ?? {};
    const candidates = [t.sg, t.default, item.title];
    return candidates.find((s): s is string => !!s && s.trim().length > 0) ?? "";
}

function normalizeMarket(raw: unknown): Quote[] {
    if (!Array.isArray(raw)) return [];
    return raw.filter(
        (d): d is Quote =>
            d !== null &&
            typeof d === "object" &&
            typeof (d as any).symbol === "string" &&
            typeof (d as any).last === "number" &&
            typeof (d as any).percentChange === "number"
    );
}

function normalizeNews(raw: unknown): Berita[] {
    const arr = pickArray<Berita>(raw).filter(
        (b) => b && typeof b.id === "number" && typeof b.slug === "string"
    );
    return arr.sort((a, b) => {
        const ta = a.created_at ? Date.parse(a.created_at) : 0;
        const tb = b.created_at ? Date.parse(b.created_at) : 0;
        return tb - ta;
    });
}

// Sisipkan ‘•’ antar berita
function intersperseNewsWithDots(items: DisplayItem[]): DisplayItem[] {
    const out: DisplayItem[] = [];
    items.forEach((it, i) => {
        if (i > 0) out.push({ type: "sep", variant: "dot" }); // ‘•’ antar news
        out.push(it);
    });
    return out;
}

function buildDisplayItems(market: Quote[], news: Berita[]): DisplayItem[] {
    // Ambil 3 berita teratas → masing2 item terpisah dengan href
    const newsItems: DisplayItem[] = news.slice(0, 5).map((n) => {
        const mapped = getKategoriSlugFromName(n.kategori?.name);
        const href =
            mapped && n.slug ? `/${encodeURIComponent(mapped)}/${encodeURIComponent(n.slug)}` : "/#";
        return {
            type: "news" as const,
            content: pickTitle(n).trim() || n.title?.trim() || "(Tanpa judul)",
            href,
        };
    });

    const newsPart: DisplayItem[] =
        newsItems.length > 0
            ? newsItems
            : [{ type: "news", content: "Tidak ada berita terbaru", href: "/#" }];

    const marketItems: DisplayItem[] = market.map((m) => ({
        type: "market",
        content: m.symbol,
        value: Number.isFinite(m.last) ? m.last : undefined,
        percentChange: Number.isFinite(m.percentChange) ? m.percentChange : undefined,
    }));

    // Susunan akhir: | • news • news • news | market... |
    return [
        { type: "sep", variant: "bar" },               // leading |
        ...intersperseNewsWithDots(newsPart),          // • antar news
        { type: "sep", variant: "bar" },               // | sebelum market
        ...marketItems,                                // market...
        { type: "sep", variant: "bar" },               // trailing |
    ];
}

// ===== Komponen =====
export default function TopNews() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [marqueeDuration, setMarqueeDuration] = useState<number>(25);
    const [marqueeActive, setMarqueeActive] = useState<boolean>(true);

    // fetch berita manual sekali
    const [newsRaw, setNewsRaw] = useState<unknown>([]);
    const [newsLoading, setNewsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        let mounted = true;
        async function fetchNews() {
            try {
                setNewsLoading(true);
                setHasError(false);
                const newsRes = await baseFetcher("https://portalnews.newsmaker.id/api/v1/berita");
                if (!mounted) return;
                setNewsRaw(newsRes);
            } catch {
                if (mounted) setHasError(true);
            } finally {
                if (mounted) setNewsLoading(false);
            }
        }
        fetchNews();
        return () => {
            mounted = false;
        };
    }, []);

    // quotes pakai SWR (update 15 detik)
    const {
        data: marketRaw,
        error: marketErr,
        isLoading: marketLoading,
    } = useSWR(
        "https://endpoapi-production-3202.up.railway.app/api/live-quotes",
        async (url) => pickArray<Quote>(await baseFetcher(url)),
        {
            refreshInterval: 15000,
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
        }
    );

    const news = useMemo(() => normalizeNews(newsRaw), [newsRaw]);
    const market = useMemo(() => normalizeMarket(marketRaw ?? []), [marketRaw]);

    const items: DisplayItem[] = useMemo(() => buildDisplayItems(market, news), [market, news]);

    const displayItems: DisplayItem[] = useMemo(() => {
        if (!items.length) return [];
        const trimmed = items[items.length - 1]?.type === "sep" ? items.slice(0, -1) : items;
        // duplikasi untuk efek marquee seamless
        return [...trimmed, ...trimmed];
    }, [items]);

    const loading = newsLoading || marketLoading;
    const error = hasError || marketErr;

    // hitung durasi marquee
    useEffect(() => {
        if (!contentRef.current || !containerRef.current) return;
        const contentWidth = contentRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        if (contentWidth <= containerWidth) {
            setMarqueeActive(false);
            return;
        }
        const SPEED = 140; // px/s
        const duration = contentWidth / SPEED;
        setMarqueeDuration(Math.max(8, Math.min(duration, 50)));
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
                    ) : error ? (
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
                                    const char = item.variant === "bar" ? "|" : "•";
                                    return (
                                        <div
                                            key={`sep-${idx}`}
                                            className={`flex-shrink-0 ${item.variant === "bar" ? "mx-2" : "mx-0"} text-neutral-500`}
                                            role="separator"
                                            aria-hidden="true"
                                        >
                                            {char}
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
                                                } `}
                                        >
                                            <span className="font-semibold">{item.content}</span>:{" "}
                                            <span>{typeof item.value === "number" ? numberFmt.format(item.value) : "-"}</span>{" "}
                                            <span
                                                className={
                                                    isUp === undefined ? "text-gray-300" : isUp ? "text-green-400" : "text-red-400"
                                                }
                                            >
                                                ({hasPct ? pct!.toFixed(2) : "-"}%)
                                            </span>
                                        </div>
                                    );
                                }

                                // ===== NEWS as Link =====
                                return item.href && item.href !== "/#" ? (
                                    <Link
                                        key={`news-${idx}`}
                                        href={item.href}
                                        className="flex-shrink-0 text-gray-200 italic hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-sm transition-colors"
                                        aria-label={`Baca: ${item.content}`}
                                        prefetch
                                    >
                                        {item.content}
                                    </Link>
                                ) : (
                                    <span key={`news-${idx}`} className="flex-shrink-0 text-gray-400 italic">
                                        {item.content}
                                    </span>
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
