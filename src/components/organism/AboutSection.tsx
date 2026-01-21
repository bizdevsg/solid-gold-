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

// fetcher dengan bearer token + mengambil data.data
const fetcher = (url: string) =>
    fetch(url, {
        headers: {
            Accept: "application/json",
            Authorization: "Bearer SGB-c7b0604664fd48d9",
        },
        cache: "no-store",
    }).then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = await r.json();
        return json.data as Setting[]; // hanya ambil bagian data
    });

export default function AboutSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Section - Image */}
                    <div className="w-full md:w-5/12 lg:w-1/2" data-aos="fade-right">
                        <div className="bg-neutral-800 p-6 md:p-8 lg:p-10 rounded-lg h-full flex items-center justify-center">
                            <img
                                src="/assets/Logo Solid-Calibri-Fix.png"
                                alt="Tentang Kami - PT Solid Gold Berjangka"
                                className="w-full max-h-80 object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right Section - Content */}
                    <div className="w-full md:w-7/12 lg:w-1/2 text-left" data-aos="fade-left">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-500 uppercase tracking-wider">
                            Profil Perusahaan
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <p className="leading-relaxed">
                                Berdiri sejak tahun 2002, PT Solid Gold Berjangka ("SGB") merupakan perusahaan pialang berjangka terdaftar dan diawasi oleh Badan Pengawas Perdagangan Berjangka Komoditi (BAPPEBTI). Berpengalaman lebih dari 20 tahun di industri Perdagangan Berjangka Komoditi, SGB adalah anggota dari PT Bursa Berjangka Jakarta (BBJ) dan PT Kliring Berjangka Indonesia (Persero).
                            </p>
                            <p className="leading-relaxed">
                                Saat ini pelayanan transaksi PT Solid Gold Berjangka terus meluas dengan total kantor operasional mencapai 3 kantor tersebar di Jakarta, Semarang, Makassar.
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    );
}
