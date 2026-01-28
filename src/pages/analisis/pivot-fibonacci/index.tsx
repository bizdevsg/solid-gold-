import HistoricalData from "@/components/organism/HistoricalData";
import PivotFibonacciWidget from "@/components/organism/PivotFibonnaci";
import PageTemplates from "@/components/templates/PageTemplates";
import { useI18n } from "@/i18n/useI18n";

export default function PivotFibonacciPage() {
    const { t } = useI18n();
    return (
        <PageTemplates title={t("analysis.pivot")}>
            <PivotFibonacciWidget />

            <HistoricalData />
        </PageTemplates>
    );
}
