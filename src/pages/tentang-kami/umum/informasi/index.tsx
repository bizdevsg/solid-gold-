import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import InformasiCard from "@/components/molecules/InformasiCard";

export default function InformasiPage() {
  // Data informasi sementara
  const informasiData = [
    {
      id: 1,
      slug: "info-dan-kegiatan-1",
      image: "/assets/Informasi-1.jpg",
      title: "Info dan Kegiatan 1",
      date: "18 Juni 2017",
      content: `The largest and most active brokerage firms in the futures trading industry, PT Solid Gold Berjangka is committed to continue to spearhead the growth of futures transactions in Indonesia through the operation and implementation of a transaction system is orderly, fair, efficient and transparent so that is increasingly accepted by society. Refers to a service oriented, PT Solid Gold Berjangka are always trying to put the interests of its customers by having experience of more than ten years and is supported by a professional staff with good experience and facilities of our online trading system is ready to help to increase the investment value of its customers wherever they are as a manifestation of our dedication to provide the best services. With the optimism that industrial commodity futures and derivatives trading in the country will continue to grow and thrive, PT Solid Gold Berjangka are always ready to move dynamically in order to meet the challenges of the future market.

As one of the largest and most active brokerage firms in the futures trading industry, PT Solid Gold Berjangka is committed to continue to spearhead the growth of futures transactions in Indonesia through the operation and implementation of a transaction system is orderly, fair, efficient and transparent so that is increasingly accepted by society. Refers to a service oriented, PT Solid Gold Berjangka are always trying to put the interests of its customers by having experience of more than ten years and is supported by a professional staff with good experience and facilities of our online trading system is ready to help to increase the investment value of its customers wherever they are as a manifestation of our dedication to provide the best services. With the optimism that industrial commodity futures and derivatives trading in the country will continue to grow and thrive, PT Solid Gold Berjangka are always ready to move dynamically in order to meet the challenges of the future market.`
    }
  ];

  return (
    <PageTemplates title="Informasi">
      <div className="container mx-auto px-4 py-12 text-gray-200">
        {/* Header Section - Konsisten dengan halaman lain */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Informasi</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Grid Informasi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {informasiData.map((informasi) => (
            <InformasiCard
              key={informasi.id}
              slug={informasi.slug}
              image={informasi.image}
              title={informasi.title}
              date={informasi.date}
              content={informasi.content}
            />
          ))}
        </div>

        {/* Empty State jika tidak ada data */}
        {informasiData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">
              📄
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Belum Ada Informasi
            </h3>
            <p className="text-gray-500">
              Informasi akan segera ditambahkan.
            </p>
          </div>
        )}
      </div>
    </PageTemplates>
  );
}