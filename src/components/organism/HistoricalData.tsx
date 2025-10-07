// src/components/organism/HistoricalDataTable.tsx
"use client";

import useSWR from "swr";
import { useMemo, useState } from "react";

type Row = {
    id: number;
    tanggal: string;
    open: string;
    high: string;
    low: string;
    close: string;
    category: string;
    created_at?: string;
    updated_at?: string;
};

const fetcher = (url: string) =>
    fetch(url, {
        headers: {
            Authorization: "Bearer SGB-c7b0604664fd48d9",
            Accept: "application/json",
        },
        cache: "no-store",
    }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} on ${url}`);
        return r.json();
    });

// Convert API baru ke Row[]
function normalizeApi(raw: any): Row[] {
    if (!raw || !Array.isArray(raw.data)) return [];

    const rows: Row[] = [];

    raw.data.forEach((group: any) => {
        const symbol = group.symbol;
        if (Array.isArray(group.data)) {
            group.data.forEach((item: any) => {
                rows.push({
                    id: item.id,
                    tanggal: item.date, // API pakai "date"
                    open: String(item.open),
                    high: String(item.high),
                    low: String(item.low),
                    close: String(item.close),
                    category: symbol, // ganti "symbol" jadi category
                    created_at: item.createdAt,
                    updated_at: item.updatedAt,
                });
            });
        }
    });

    return rows;
}

const numFmt = new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
const dateFmt = (s?: string) => {
    if (!s) return "-";
    const d = new Date(s);
    return Number.isNaN(d.getTime())
        ? s
        : d.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "2-digit",
        });
};

// Tanpa "All"
const FILTERS = [
    "LGD Daily",
    "BCO Daily",
    "LSI Daily",
    "HSI Daily",
    "SNI Daily",
    "AUD/USD",
    "EUR/USD",
    "GBP/USD",
    "USD/CHF",
    "USD/JPY",
] as const;
type FilterType = (typeof FILTERS)[number];

// Alias supaya tetap nyambung
const ALIAS: Record<string, string> = {
    "lgs daily": "lgd daily",
};

export default function HistoricalDataTable() {
    const DEFAULT_FILTER: FilterType = "LGD Daily";
    const [activeFilter, setActiveFilter] = useState<FilterType>(DEFAULT_FILTER);

    const { data, error, isLoading, mutate } = useSWR<unknown>(
        "https://endpoapi-production-3202.up.railway.app/api/historical?dateFrom=2025-07-01",
        fetcher,
        {
            refreshInterval: 60_000,
            revalidateOnFocus: true,
            revalidateOnReconnect: true,
            keepPreviousData: true,
        }
    );

    const rows: Row[] = useMemo(() => {
        const arr = normalizeApi(data);
        return arr
            .slice()
            .sort((a, b) => {
                const ta = Date.parse(a.tanggal ?? "");
                const tb = Date.parse(b.tanggal ?? "");
                return (isNaN(tb) ? 0 : tb) - (isNaN(ta) ? 0 : ta);
            });
    }, [data]);

    const filteredRows = useMemo(() => {
        const targetRaw = activeFilter.toLowerCase();
        const target = (ALIAS[targetRaw] ?? targetRaw).trim();
        return rows.filter(
            (r) => (r.category || "").toLowerCase().trim() === target
        );
    }, [rows, activeFilter]);

    const limitedRows = filteredRows.slice(0, 5);

    return (
        <div className="w-full mb-4">
            {/* Header & Controls */}
            <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-white font-semibold text-lg">Historical Data</h2>
                <div className="flex items-center gap-2">
                    {/* Dropdown filter */}
                    <select
                        value={activeFilter}
                        onChange={(e) => setActiveFilter(e.target.value as FilterType)}
                        className="px-3 py-1.5 text-sm rounded border border-neutral-600 bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        {FILTERS.map((f) => (
                            <option key={f} value={f}>
                                {f}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-auto rounded border border-neutral-800">
                <table className="min-w-[720px] w-full text-sm">
                    <thead className="bg-neutral-900/70 text-neutral-300">
                        <tr>
                            <th className="px-3 py-2 text-left">Tanggal</th>
                            <th className="px-3 py-2 text-right">Open</th>
                            <th className="px-3 py-2 text-right">High</th>
                            <th className="px-3 py-2 text-right">Low</th>
                            <th className="px-3 py-2 text-right">Close</th>
                        </tr>
                    </thead>
                    <tbody className="bg-neutral-900/40 text-white">
                        {isLoading ? (
                            Array.from({ length: 6 }).map((_, i) => (
                                <tr key={`sk-${i}`} className="animate-pulse">
                                    <td className="px-3 py-2">
                                        <div className="h-4 w-24 bg-neutral-700 rounded" />
                                    </td>
                                    <td className="px-3 py-2 text-right">
                                        <div className="h-4 w-16 bg-neutral-700 rounded inline-block" />
                                    </td>
                                    <td className="px-3 py-2 text-right">
                                        <div className="h-4 w-16 bg-neutral-700 rounded inline-block" />
                                    </td>
                                    <td className="px-3 py-2 text-right">
                                        <div className="h-4 w-16 bg-neutral-700 rounded inline-block" />
                                    </td>
                                    <td className="px-3 py-2 text-right">
                                        <div className="h-4 w-16 bg-neutral-700 rounded inline-block" />
                                    </td>
                                </tr>
                            ))
                        ) : error ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-3 py-6 text-center text-red-400"
                                >
                                    Gagal memuat data.
                                </td>
                            </tr>
                        ) : limitedRows.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-3 py-6 text-center text-neutral-300"
                                >
                                    Tidak ada data pada kategori <b>{activeFilter}</b>.
                                </td>
                            </tr>
                        ) : (
                            limitedRows.map((r) => (
                                <tr
                                    key={r.id}
                                    className="border-t border-neutral-800 hover:bg-neutral-800/40"
                                >
                                    <td className="px-3 py-2">{dateFmt(r.tanggal)}</td>
                                    <td className="px-3 py-2 text-right">
                                        {numFmt.format(parseFloat(r.open))}
                                    </td>
                                    <td className="px-3 py-2 text-right">
                                        {numFmt.format(parseFloat(r.high))}
                                    </td>
                                    <td className="px-3 py-2 text-right">
                                        {numFmt.format(parseFloat(r.low))}
                                    </td>
                                    <td className="px-3 py-2 text-right">
                                        {numFmt.format(parseFloat(r.close))}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
