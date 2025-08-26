"use client";

import useSWR from "swr";

type Setting = {
    id: number;
    web_title: string;
    web_description: string;
    address: string;
    maps_link?: string | null;
    phone: string;
    fax: string;
    email: string;
    created_at?: string;
    updated_at?: string;
};

// API /pages/api/settings.ts already returns an array of settings
const fetcher = (url: string) =>
    fetch(url, { headers: { Accept: "application/json" }, cache: "no-store" }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<Setting[]>;
    });

export default function AboutSection() {
    const { data, error, isLoading } = useSWR<Setting[]>("/api/settings", fetcher, {
        refreshInterval: 60_000,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        keepPreviousData: true,
        dedupingInterval: 0,
    });

    const setting = data?.[0];

    return (
        <section className="text-white py-8 md:py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
                {/* Foto di kiri */}
                <div className="md:w-1/2 w-full" data-aos="fade-right">
                    <div className="bg-neutral-800 p-16 rounded-lg h-full">
                        <img
                            src="/assets/LOGO-SGB.png"
                            alt="Tentang Kami"
                            className="w-full max-h-70 object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Teks di kanan (dinamis dari API) */}
                <div className="md:w-1/2 w-full text-center" data-aos="fade-left">
                    <h2 className="font-bold mb-2 uppercase text-yellow-500">Tentang Kami</h2>

                    {isLoading ? (
                        <>
                            <div className="h-8 w-3/4 mx-auto bg-neutral-800 rounded animate-pulse mb-4" />
                            <div className="space-y-3">
                                <div className="h-4 w-full bg-neutral-800 rounded animate-pulse" />
                                <div className="h-4 w-11/12 bg-neutral-800 rounded animate-pulse" />
                                <div className="h-4 w-10/12 bg-neutral-800 rounded animate-pulse" />
                            </div>
                        </>
                    ) : error ? (
                        <p className="text-red-400">Gagal memuat data perusahaan.</p>
                    ) : (
                        <>
                            <h1 className="font-bold mb-4 uppercase text-2xl sm:text-3xl md:text-4xl">
                                {setting?.web_title || "—"}
                            </h1>

                            <p className="text-gray-300 mb-4 whitespace-pre-line">
                                {setting?.web_description || "—"}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section >
    );
}
