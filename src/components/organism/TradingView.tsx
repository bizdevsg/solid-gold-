import { useI18n } from "@/i18n/useI18n";

export default function TradingView() {
    const { t } = useI18n();
    return (
        <div className="w-full bg-linear-to-r from-zinc-900 to-zinc-800 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Gambar dan Teks */}
                    <div className="w-full grow">
                        <img
                            src="/assets/TradingView.png"
                            alt="TradingView"
                            className="w-50 object-contain"
                        />
                        <p className="mt-4 text-justify">{t("tradingview.desc")}</p>
                    </div>

                    {/* Tombol "Live Chart" */}
                    <div className="flex flex-none items-center md:justify-center">
                        <a
                            href="https://id.tradingview.com/chart/"
                            target="_blank"
                            className="btn-primary text-center px-6 py-3 rounded-lg max-w-max"
                        >
                            {t("tradingview.title")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
