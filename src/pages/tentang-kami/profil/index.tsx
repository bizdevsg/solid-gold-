import AboutSection from "@/components/organism/AboutSection";
import StatsSection from "@/components/organism/Stats";
import VideoGaleri from "@/components/organism/VideoGaleri";
import Watcher from "@/components/organism/Watcher";
import PageTemplates from "@/components/templates/PageTemplates";
import { useI18n } from "@/i18n/useI18n";

export default function TentangKami() {
    const { t } = useI18n();
    return (
        <PageTemplates title={t("nav.about")}>
            <AboutSection />

            <Watcher />

            <section className="md:py-8 text-white space-y-7 px-4" data-aos="fade-left">
                <div className="text-center mx-auto max-w-xl px-4">
                    <p className="font-bold mb-2 uppercase text-yellow-500 text-sm md:text-base">
                        {t("about.whyChoose")}
                    </p>
                    <h2 className="font-bold mb-4 uppercase text-lg md:text-2xl">
                        {t("about.whyChooseTitle")}
                    </h2>
                </div>
                <StatsSection />
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-10" data-aos="fade-up">
                <div className="text-center mb-8">
                    <p className="text-yellow-500 font-semibold uppercase text-sm md:text-base">
                        {t("home.gallery")}
                    </p>
                    <h2 className="text-white font-bold text-lg md:text-2xl">
                        {t("home.videoLegal")}
                    </h2>
                </div>

                <VideoGaleri />
            </section>

            <hr className="border border-white/25" data-aos="fade-up" />

        </PageTemplates>
    );
}
