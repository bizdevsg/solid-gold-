import KantorCabangSection from "@/components/organism/KantorCabang";
import KantorPusat from "@/components/organism/KantorPusat";
import StatsSection from "@/components/organism/Stats";
import Watcher from "@/components/organism/Watcher";
import PageTemplates from "@/components/templates/PageTemplates";

export default function TentangKami() {
    return (
        <PageTemplates title="Tentang Kami">
            <KantorPusat />

            <hr className="border-neutral-700" data-aos="fade" />

            <div className="flex flex-col gap-5">
                <a href="https://penggaduan.bappebti.go.id/" className="text-2xl w-fit font-bold text-gray-300 hover:text-yellow-500 transition uppercase" data-aos="fade-right">Pengaduan Online</a>
                <a href="mailto:customer.care@solidgold.co.id" className="text-2xl w-fit font-bold text-gray-300 hover:text-yellow-500 transition uppercase" data-aos="fade-right">PENYAMPAIAN KELUHAN ONLINE</a>
            </div>

            <hr className="border-neutral-700" data-aos="fade" />

            <KantorCabangSection />
        </PageTemplates>
    );
}
