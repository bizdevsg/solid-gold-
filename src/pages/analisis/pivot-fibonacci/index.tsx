import HistoricalData from "@/components/organism/HistoricalData";
import PivotFibonacciWidget from "@/components/organism/PivotFibonnaci";
import PageTemplates from "@/components/templates/PageTemplates";

export default function PivotFibonacciPage() {
    return (
        <PageTemplates title="Pivot & Fibonacci">
            <PivotFibonacciWidget />

            <HistoricalData />
        </PageTemplates>
    );
}