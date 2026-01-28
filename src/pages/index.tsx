import AutoModal from "@/components/moleculs/AutoModal";
import Banner from "@/components/organism/Banner";
import CompanyProfileHome from "@/components/organism/CompanyProfileHome";
import MarketUpdate from "@/components/organism/MarketUpdate";
import NewsHome from "@/components/organism/NewsHome";
import ProdukHome from "@/components/organism/ProdukHome";
import VideoGaleri from "@/components/organism/VideoGaleri";
import Watcher from "@/components/organism/Watcher";
import PageTemplates from "@/components/templates/PageTemplates";

export default function Home() {
  return (
    <PageTemplates title="Home">
      <Banner />
      <CompanyProfileHome />
      <MarketUpdate />
      <ProdukHome />
      <Watcher />
      <NewsHome />
      <section className="px-4 sm:px-6 lg:px-8 py-10" data-aos="fade-up">
        <div className="text-center mb-8">
          <p className="text-yellow-500 font-semibold uppercase text-sm md:text-base">
            Galeri
          </p>
          <h2 className="text-white font-bold text-lg md:text-2xl">
            Video & Legalitas
          </h2>
        </div>

        <VideoGaleri />
      </section>
      <AutoModal />
    </PageTemplates>
  );
}
