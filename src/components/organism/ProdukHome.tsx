"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ProdukCard from "../moleculs/ProdukCard";

type Produk = {
    id: number;
    nama_produk: string;
    slug: string;
    deskripsi_produk: string;
    specs?: string;
    image?: string | null;
    kategori?: string; // "JFX" | "SPA"
    created_at?: string;
    updated_at?: string;
};

const MAX_PER_CATEGORY = 3;

export default function ProdukHome() {
    const API_BASE = useMemo(
        () =>
            (
                process.env.NEXT_PUBLIC_API_BASE_URL ??
                process.env.NEXT_PUBLIC_BASE_URL ??
                "https://sg-admin.newsmaker.id"
            ).replace(/\/+$/, ""),
        []
    );

    const [produk, setProduk] = useState<Produk[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`${API_BASE}/api/v1/produk`, {
                    cache: "no-store",
                    headers: {
                        Authorization: "Bearer SGB-c7b0604664fd48d9",
                        Accept: "application/json",
                    },
                });
                if (!res.ok) throw new Error("Gagal memuat data produk");

                const json = await res.json();
                const data: Produk[] = json?.data;
                if (!Array.isArray(data)) throw new Error("Format data tidak valid");
                if (!isMounted) return;

                setProduk(data);
            } catch (e: any) {
                if (!isMounted) return;
                setError(e?.message ?? "Terjadi kesalahan saat memuat data");
            } finally {
                if (isMounted) setLoading(false);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [API_BASE]);

    const jfx = useMemo(
        () =>
            produk
                .filter((p) => (p.kategori || "").toUpperCase() === "JFX")
                .slice(0, MAX_PER_CATEGORY),
        [produk]
    );
    const spa = useMemo(
        () =>
            produk
                .filter((p) => (p.kategori || "").toUpperCase() === "SPA")
                .slice(0, MAX_PER_CATEGORY),
        [produk]
    );

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-10" data-aos="fade-up">
            <div className="text-center mb-10">
                <p className="text-yellow-500 font-semibold">PRODUK</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Produk Trading</h2>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-neutral-800 rounded-lg shadow animate-pulse">
                            <div className="w-full h-48 bg-neutral-700 rounded-t-lg" />
                            <div className="p-4">
                                <div className="h-6 bg-neutral-700 rounded w-2/3 mb-3" />
                                <div className="h-4 bg-neutral-700 rounded w-full mb-2" />
                                <div className="h-4 bg-neutral-700 rounded w-5/6 mb-4" />
                                <div className="h-10 bg-neutral-700 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : error ? (
                <div className="text-red-400 bg-neutral-900 border border-red-800 rounded p-4">
                    {error}
                </div>
            ) : (
                <div className="space-y-12">
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Produk Multilateral (JFX)
                            </h3>
                            <Link
                                href="/produk/multilateral"
                                className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
                            >
                                Lihat semua
                            </Link>
                        </div>

                        {jfx.length ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {jfx.map((p) => (
                                    <ProdukCard
                                        key={p.id}
                                        title={p.nama_produk}
                                        description={p.deskripsi_produk}
                                        slug={p.slug}
                                        imagePath={p.image}
                                        href={`/produk/multilateral/${p.slug}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-gray-300 bg-neutral-900 border border-neutral-700 rounded p-4">
                                Belum ada produk untuk kategori JFX.
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                                Produk Bilateral (SPA)
                            </h3>
                            <Link
                                href="/produk/bilateral"
                                className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
                            >
                                Lihat semua
                            </Link>
                        </div>

                        {spa.length ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {spa.map((p) => (
                                    <ProdukCard
                                        key={p.id}
                                        title={p.nama_produk}
                                        description={p.deskripsi_produk}
                                        slug={p.slug}
                                        imagePath={p.image}
                                        href={`/produk/bilateral/${p.slug}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-gray-300 bg-neutral-900 border border-neutral-700 rounded p-4">
                                Belum ada produk untuk kategori SPA.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

