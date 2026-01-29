"use client";

import useSWR from "swr";
import TikTokEmbed from "../moleculs/TikTokEmbed";
import { useI18n } from "@/i18n/useI18n";

/* ========= Types ========= */

interface ApiSetting {
    tiktok_id: string;
}

interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
}

/* ========= Utils ========= */
const API_BASE = (
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    "https://sg-admin.newsmaker.id"
).replace(/\/+$/, "");

const fetcher = (url: string) => {
    return fetch(url, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer SGB-c7b0604664fd48d9`,
        },
        cache: "no-store",
    }).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} on ${url}`);
        return r.json();
    });
};


export default function VideoGaleri() {
    const { t } = useI18n();
    /* ===== TikTok ID ===== */
    // Perbaikan: API mengembalikan array setting → gunakan ApiSetting[].
    const { data: settingData, error: settingErr } = useSWR<
        ApiResponse<ApiSetting[]>
    >(`${API_BASE}/api/v1/setting`, fetcher);

    const tiktokId =
        Array.isArray(settingData?.data) && settingData.data.length > 0
            ? settingData.data[0].tiktok_id
            : "";

    return (
        <div className="flex flex-col lg:flex-row gap-5 p-4">
            {/* TikTok */}
            <section
                className="flex flex-col items-center text-center space-y-5 lg:w-1/3"
                data-aos="fade-right"
            >
                <div className="bg-neutral-800 px-4 py-2 rounded font-semibold text-yellow-500 w-fit">
                    @solidgold_news
                </div>

                {settingErr && (
                    <div className="text-red-400 text-sm">{t("gallery.tiktokError")}</div>
                )}
                {!tiktokId ? (
                    <div className="text-neutral-300 text-sm">{t("gallery.tiktokLoading")}</div>
                ) : (
                    <TikTokEmbed videoId={tiktokId} />
                )}
            </section>

            {/* Video */}
            <section className="flex flex-col lg:w-2/3 space-y-10">
                <div
                    className="flex flex-col items-center text-center space-y-5"
                    data-aos="fade-left"
                >
                    <div className="bg-neutral-800 px-4 py-2 rounded font-semibold text-yellow-500 w-fit">
                        {t("gallery.eduVideo")}
                    </div>
                    <div className="relative w-full max-w-3xl overflow-hidden rounded-lg shadow-lg min-h-[16rem] bg-neutral-900">
                        <video
                            className="w-full h-full object-cover rounded-lg bg-neutral-900"
                            controls
                            preload="metadata"
                        >
                            <source src="/assets/Company%20Profile%20SGB%201.2.mp4" type="video/mp4" />
                            {t("gallery.embedUnavailable")}
                        </video>
                    </div>
                </div>
            </section>
        </div>
    );
}
