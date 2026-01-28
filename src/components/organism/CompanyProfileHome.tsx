"use client";

import Link from "next/link";
import { FiCheckCircle, FiEye, FiTarget } from "react-icons/fi";

export default function CompanyProfileHome() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12" data-aos="fade-up">
            <div className="max-w-6xl mx-auto mb-8 text-center">
                <p className="text-yellow-500 font-semibold uppercase text-sm md:text-base">
                    Tentang Kami
                </p>
                <h2 className="text-white font-bold text-xl md:text-2xl">
                    Profil Perusahaan
                </h2>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="order-2 lg:order-2">
                    <div className="space-y-5 text-gray-300 leading-relaxed">
                        <p>
                            Berdiri sejak tahun 2002, PT Solid Gold Berjangka ("SGB") merupakan perusahaan pialang berjangka terdaftar dan diawasi oleh Badan Pengawas Perdagangan Berjangka Komoditi (BAPPEBTI). Berpengalaman lebih dari 20 tahun di industri Perdagangan Berjangka Komoditi, SGB adalah anggota dari PT Bursa Berjangka Jakarta (BBJ) dan PT Kliring Berjangka Indonesia (Persero).
                        </p>
                        <p>
                            Saat ini pelayanan transaksi PT Solid Gold Berjangka terus meluas dengan total kantor operasional mencapai 3 kantor tersebar di Jakarta, Semarang, Makassar.
                        </p>

                        <div className="pt-2 space-y-5">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-yellow-500 text-lg">
                                        <FiTarget />
                                    </span>
                                    <h3 className="text-white font-semibold">Misi Perusahaan</h3>
                                </div>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <FiCheckCircle className="text-yellow-500 mt-1" />
                                        <span>
                                            Menjadi sebuah perusahaan pialang berjangka yang memiliki skala
                                            internasional
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FiCheckCircle className="text-yellow-500 mt-1" />
                                        <span>
                                            Menjadi market leader, baik itu secara regional ataupun
                                            internasional
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-yellow-500 text-lg">
                                        <FiEye />
                                    </span>
                                    <h3 className="text-white font-semibold">Visi Perusahaan</h3>
                                </div>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <FiCheckCircle className="text-yellow-500 mt-1" />
                                        <span>
                                            Mengembangkan dan memajukan Perdagangan Berjangka di Indonesia
                                            sehingga dapat memberikan dampak positif kepada perekonomian
                                            Nasional baik dari segi mikro dan makro
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FiCheckCircle className="text-yellow-500 mt-1" />
                                        <span>
                                            Memberdayakan Perdagangan Berjangka di Indonesia dan membantu
                                            semua pihak yang membutuhkannya untuk dapat mempergunakannya
                                            sebagai sarana lindung nilai (Hedging)
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="mt-6 flex justify-center lg:justify-start">
                        <Link
                            href="/tentang-kami/profil"
                            className="btn-primary inline-flex items-center justify-center px-5 py-2 rounded"
                        >
                            Pelajari Lebih Lanjut
                        </Link>
                    </div>
                </div>

                <div className="order-1 lg:order-1 self-start">
                    <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 flex items-center justify-center">
                        <img
                            src="/assets/TCC TOWER SGB.png"
                            alt="TCC Tower - Solid Gold Berjangka"
                            className="w-full max-w-md h-auto object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
