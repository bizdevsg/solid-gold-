"use client";

import useSWR from "swr";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import MarketUpdateCard from "../moleculs/MarketUpdateCard";
import { useI18n } from "@/i18n/useI18n";

type Quote = { symbol: string; last: number; valueChange: number; percentChange: number };

const fetcher = (url: string) =>
    fetch(url, { headers: { accept: "application/json" }, cache: "no-store" }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} on ${url}`);
        return r.json();
    });

export default function MarketUpdate() {
    const { t } = useI18n();
    const containerRef = useRef<HTMLDivElement>(null);
    const firstSetRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const lastTsRef = useRef<number>(0);
    const [hovered, setHovered] = useState(false);
    const [repeatCount, setRepeatCount] = useState(2);
    const [loopWidth, setLoopWidth] = useState(0);

    const { data, error } = useSWR<Quote[]>(
        "https://endpoapi-production-3202.up.railway.app/api/live-quotes",
        async (url) => {
            const raw = await fetcher(url);
            if (Array.isArray(raw)) return raw as Quote[];
            if (raw?.data && Array.isArray(raw.data)) return raw.data as Quote[];
            return [];
        },
        {
            refreshInterval: 5_000,
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
            keepPreviousData: true,
            fallbackData: [],
        }
    );

    const quotes = useMemo(() => data ?? [], [data]);
    const loading = !data || (!data.length && !error);

    const scrollLeft = () => containerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    const scrollRight = () => containerRef.current?.scrollBy({ left: 300, behavior: "smooth" });

    useEffect(() => {
        const el = containerRef.current;
        const firstSetEl = firstSetRef.current;
        if (!el || !firstSetEl) return;
        if (!quotes.length) return;

        const calc = () => {
            // lebar 1 set kartu (tanpa duplikasi)
            const setW = Math.ceil(firstSetEl.getBoundingClientRect().width);
            const containerW = Math.ceil(el.getBoundingClientRect().width);
            if (!setW || !containerW) return;

            // target: total konten minimal 2x lebar container biar terlihat "jalan"
            const target = containerW * 2;
            const needed = Math.max(2, Math.min(12, Math.ceil(target / setW) + 1));
            setLoopWidth(setW);
            setRepeatCount(needed);

            // pastikan mulai dari awal set pertama (biar looping rapi)
            el.scrollLeft = 0;
            lastTsRef.current = 0;
        };

        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, [quotes.length]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        if (!quotes.length) return;
        if (!loopWidth) return;

        // Loop mulus: render konten 2x, lalu ketika scrollLeft >= half, balik ke awal set pertama.
        const speedPxPerSec = 70; // cukup pelan biar mirip marquee

        const tick = (ts: number) => {
            if (!lastTsRef.current) lastTsRef.current = ts;
            const dt = Math.min(0.05, (ts - lastTsRef.current) / 1000);
            lastTsRef.current = ts;

            const canScroll = el.scrollWidth > el.clientWidth + 8;
            if (!hovered && canScroll) {
                el.scrollLeft += speedPxPerSec * dt;
                if (loopWidth > 0 && el.scrollLeft >= loopWidth) {
                    el.scrollLeft -= loopWidth;
                }
            }

            rafRef.current = window.requestAnimationFrame(tick);
        };

        rafRef.current = window.requestAnimationFrame(tick);

        const onResize = () => {
            // reset biar tidak nyangkut di tengah saat ukuran berubah
            el.scrollLeft = 0;
            lastTsRef.current = 0;
        };
        window.addEventListener("resize", onResize);

        return () => {
            if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
            lastTsRef.current = 0;
        };
    }, [quotes.length, hovered, loopWidth]);

    if (loading) return <p className="text-white">{t("market.loading")}</p>;
    if (error) return <p className="text-red-400">{t("market.error")}</p>;

    return (
        <div className="relative w-full">
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                aria-label={t("market.scrollLeft")}
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                aria-label={t("market.scrollRight")}
            >
                <FaChevronRight />
            </button>

            <div
                className="overflow-x-auto scrollbar-hide"
                ref={containerRef}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onTouchStart={() => setHovered(true)}
                onTouchEnd={() => setHovered(false)}
            >
                <div className="flex">
                    <div ref={firstSetRef} className="flex gap-4 py-2 w-max">
                        {quotes.map((q) => (
                            <MarketUpdateCard key={q.symbol} quote={q} />
                        ))}
                    </div>
                    {Array.from({ length: Math.max(0, repeatCount - 1) }).map((_, repIdx) => (
                        <div key={`rep-${repIdx}`} className="flex gap-4 py-2 w-max" aria-hidden="true">
                            {quotes.map((q) => (
                                <MarketUpdateCard key={`${q.symbol}-rep-${repIdx}`} quote={q} />
                            ))}
                        </div>
                    ))}
                    {quotes.length === 0 && (
                        <div className="text-gray-300 px-4 py-2">{t("market.empty")}</div>
                    )}
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    );
}
