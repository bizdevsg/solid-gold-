import MiniHeader from "@/components/atoms/MiniHeader";
import KalenderEkonomi from "@/components/organism/KalenderEkonomi";
import PageTemplates from "@/components/templates/PageTemplates";

export default function Home() {
    return (
        <PageTemplates title="Home">
            <MiniHeader title="Kalender Ekonomi" />

            <KalenderEkonomi />
        </PageTemplates>
    );
}
