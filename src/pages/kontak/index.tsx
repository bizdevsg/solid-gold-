import KantorCabangSection from "@/components/organism/KantorCabang";
import KantorPusat from "@/components/organism/KantorPusat";
import StatsSection from "@/components/organism/Stats";
import Watcher from "@/components/organism/Watcher";
import PageTemplates from "@/components/templates/PageTemplates";
import { useI18n } from "@/i18n/useI18n";

export default function TentangKami() {
    const { t } = useI18n();
    return (
        <PageTemplates title={t("nav.contact")}>
            <KantorPusat />

            <div className="py-10 border-y border-neutral-600" data-aos="fade-right">
                <div className="flex flex-col gap-5">
                    <a href="https://penggaduan.bappebti.go.id/" className="text-2xl w-fit font-bold text-gray-300 hover:text-yellow-500 transition uppercase">
                        {t("contact.onlineComplaint")}
                    </a>
                    <a href="mailto:customer.care@solidgold.co.id" className="text-2xl w-fit font-bold text-gray-300 hover:text-yellow-500 transition uppercase">
                        {t("contact.onlineComplaintAlt")}
                    </a>
                </div>
            </div>

            <KantorCabangSection />
        </PageTemplates>
    );
}
