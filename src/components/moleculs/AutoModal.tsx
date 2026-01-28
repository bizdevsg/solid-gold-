"use client";
import React, { useState, useEffect } from "react";
import { useI18n } from "@/i18n/useI18n";

export default function AutoModal() {
    const [modalOpen, setModalOpen] = useState(false);
    const { t } = useI18n();

    // Tampilkan modal otomatis saat halaman dibuka
    useEffect(() => {
        setModalOpen(true);
    }, []);

    // Disable scroll saat modal terbuka
    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [modalOpen]);

    const closeModal = () => setModalOpen(false);

    return (
        <div>
            {/* Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative"
                        onClick={(e) => e.stopPropagation()} // klik di dalam modal tidak menutup
                    >
                        {/* Tombol Close di pojok kanan atas */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold cursor-pointer"
                            aria-label="Close Modal"
                        >
                            ✕
                        </button>

                        <div className="space-y-3">
                            {/* Judul */}
                            <h2 className="text-2xl text-center text-yellow-500 font-bold mb-4">
                                {t("modal.title")}
                            </h2>
                            {/* Gambar */}
                            <img
                                src="/assets/mobile.jpg"
                                alt="App"
                                className="w-full max-w-50 mx-auto rounded-lg"
                            />
                            {/* Deskripsi */}
                            <p className="text-center text-gray-700 mb-4 px-2">
                                {t("modal.desc")}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
