"use client";

import useSWR from "swr";
import Error from "next/error";
import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
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
interface NewsContainerProps {
    /** contoh valid: "indexNews", "commodityNews", "currenciesNews", "economicNews", "analisisMarket", "analisisOpini" */
    kategoriSlug: string;
}

/** Peta kategori: slug halaman -> daftar nama kategori pada data */
const kategoriMap: Record<string, string[]> = {
    indexNews: ["Nikkei", "Hangseng"],
    commodityNews: ["Gold", "Silver", "Oil"],
    currenciesNews: ["EUR/USD", "USD/JPY", "USD/CHF", "AUD/USD", "GBP/USD", "US DOLLAR"],
    economicNews: ["Global & Economic"],
    analisisMarket: ["Analisis Market"],
    analisisOpini: ["Analisis & Opini"],
};

/* Utils */
function stripHtml(html: string): string {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, " ");
}
function mediaUrl(p?: string) {
    if (!p) return "/placeholder.jpg";
    if (/^https?:\/\//i.test(p)) return p;
    const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL || "http://portal-backpanel.test";
    return `${base}/${p.replace(/^\/+/, "")}`;
}

/** fetcher dasar */
const fetcher = (url: string) =>
    fetch(url, { headers: { accept: "application/json" }, cache: "no-store" }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} on ${url}`);
        return r.json();
    });

/** Ambil array dari berbagai bentuk respons */
function pickArray<T = unknown>(raw: any): T[] {
    if (Array.isArray(raw)) return raw as T[];
    if (raw && Array.isArray(raw.data)) return raw.data as T[];
    if (raw && raw.data && Array.isArray(raw.data.data)) return raw.data.data as T[];
    return [];
}

export default function NewsContainer({ kategoriSlug }: NewsContainerProps) {
    // 404 guard tanpa redirect
    const allowedSlugs = useMemo(() => new Set(Object.keys(kategoriMap)), []);
    if (!allowedSlugs.has(kategoriSlug)) return <Error statusCode={404} />;

    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Reset filter & search saat kategori berubah
    useEffect(() => {
        setActiveFilter("All");
        setSearchQuery("");
    }, [kategoriSlug]);

    const filters = useMemo(() => ["All", ...(kategoriMap[kategoriSlug] || [])], [kategoriSlug]);

    // === SWR ===
    const { data, error } = useSWR("/api/berita", fetcher, {
        refreshInterval: 15_000,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        keepPreviousData: true,
        dedupingInterval: 5000,
    });

    // === Data hasil & filter ===
    const newsData: Berita[] = useMemo(
        () =>
            pickArray<Berita>(data).filter(
                (b) =>
                    b &&
                    typeof b.id === "number" &&
                    typeof b.title === "string" &&
                    typeof b.slug === "string"
            ),
        [data]
    );

    const filteredNews = useMemo(() => {
        const allowed = (kategoriMap[kategoriSlug] || []).map((c) => c.toLowerCase());

        const byKategoriSlug =
            allowed.length > 0
                ? newsData.filter((item) => {
                    const name = item.kategori?.name?.toLowerCase?.() || "";
                    return allowed.includes(name);
                })
                : newsData;

        const q = searchQuery.trim().toLowerCase();

        const result = byKategoriSlug.filter((n) => {
            const katName = n.kategori?.name || "";
            const matchFilter =
                activeFilter.toLowerCase() === "all" ||
                katName.toLowerCase() === activeFilter.toLowerCase();

            const text = (n.title || "").toLowerCase() + " " + stripHtml(n.content || "").toLowerCase();
            const matchSearch = q === "" || text.includes(q);

            return matchFilter && matchSearch;
        });

        return result
            .slice()
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, 9);
    }, [newsData, kategoriSlug, activeFilter, searchQuery]);

    // Flags tampilan & skeleton count
    const showSkeleton = typeof data === "undefined";
    const showNoData = data !== undefined && filteredNews.length === 0;
    const skeletonCount = filteredNews.length > 0 ? filteredNews.length : 9;

    // Refresh AOS tiap state tampilan berubah
    useEffect(() => {
        const id = requestAnimationFrame(() => AOS.refreshHard());
        return () => cancelAnimationFrame(id);
    }, [showSkeleton, showNoData, skeletonCount, activeFilter, searchQuery, filteredNews.length]);

    // ====== RENDER ======
    if (error) return <div className="text-red-400">Gagal memuat berita.</div>;

    return (
        <div className="space-y-5">
            {/* Filter + Search */}
            <div
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
                data-aos="fade-up"
                data-aos-once="true"
            >
                <div className="flex flex-wrap gap-3">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`uppercase border border-yellow-500 text-white px-3 py-2 rounded-lg transition-all duration-300 ${activeFilter === filter
                                    ? "bg-yellow-500 text-white"
                                    : "bg-gray-100/5 hover:bg-gray-100/10"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder="Cari berita..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-transparent text-white placeholder:text-neutral-400"
                    />
                </div>
            </div>

            {/* Konten */}
            {showSkeleton ? (
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    {Array.from({ length: skeletonCount }).map((_, i) => (
                        <div
                            key={i}
                            className="rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800"
                        >
                            <div className="h-40 w-full bg-neutral-800 animate-pulse" />
                            <div className="p-4 space-y-3">
                                <div className="h-4 w-3/4 bg-neutral-800 rounded animate-pulse" />
                                <div className="h-4 w-1/2 bg-neutral-800 rounded animate-pulse" />
                                <div className="h-4 w-full bg-neutral-800 rounded animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : showNoData ? (
                <div
                    className="text-neutral-300 border border-neutral-800 rounded-lg py-52 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    <div className="flex justify-center">
                        <img
                            src="/assets/No Data Available Illustration.png"
                            alt="No Data"
                            className="h-50"
                        />
                    </div>
                </div>
            ) : (
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
                    data-aos="fade-up"
                    data-aos-once="true"
                >
                    {filteredNews.map((news) => {
                        const cleanDescription = stripHtml(news.content).replace(/&nbsp;/g, " ").trim();
                        return (
                            <NewsCard
                                key={news.id}
                                image={mediaUrl(news.images?.[0])}
                                title={news.title}
                                category={news.kategori?.name || "-"}
                                description={cleanDescription}
                                href={`/${encodeURIComponent(kategoriSlug)}/${encodeURIComponent(news.slug)}`}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
