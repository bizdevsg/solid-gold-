import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

export default function Banner() {
    const { t } = useI18n();
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">

                {/* Image Section */}
                <div className="flex-shrink-0 order-1 lg:order-2" data-aos="fade-left">
                    <img
                        src="/assets/People-SGB.png"
                        alt="Banner"
                        className="max-w-md w-full h-auto object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="text-center max-w-lg order-2 lg:order-1" data-aos="fade-right">
                    <p className="text-lg text-yellow-500 font-semibold mb-2">
                        {t("banner.company")}
                    </p>
                    <h3 className="text-3xl md:text-4xl   font-bold leading-snug mb-4 text-white">
                        {t("banner.title")} <br /> {t("banner.subtitle")}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {t("banner.member")}
                    </p>
                    {/* Buttons */}
                    <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 px-4">
                        <Link
                            href="https://demo.sgberjangka.com/login" target="_blank"
                            className="btn-primary px-10 py-5 rounded text-center shadow"
                        >
                            {t("banner.demo")}
                        </Link>
                        <Link
                            href="https://etrade.sgberjangka.com/login" target="_blank"
                            className="btn-primary px-10 py-5 rounded text-center shadow"
                        >
                            {t("banner.live")}
                        </Link>
                    </div>
                </div>

            </div>
        </div >
    );
}
