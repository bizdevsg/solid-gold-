import MiniHeader from "@/components/atoms/MiniHeader";
import KalenderEkonomi from "@/components/organism/KalenderEkonomi";
import PageTemplates from "@/components/templates/PageTemplates";
import { useI18n } from "@/i18n/useI18n";

export default function Home() {
    const { t } = useI18n();
    return (
        <PageTemplates title={t("analysis.calendar")}>
            <MiniHeader title={t("analysis.calendar")} />

            <KalenderEkonomi />
        </PageTemplates>
    );
}
