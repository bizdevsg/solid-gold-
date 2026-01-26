import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import SertifikatCard from "@/components/molecules/SertifikatCard";

export default function SertifikatPage() {
  // Data sertifikat sementara
  const sertifikatData = [
    {
      id: 1,
      image: "/assets/Penghargaan-TransaksiTerbanyak.png",
      title: "Sertifikat Izin Usaha Pialang Berjangka dari Bappebti Nomor: 11/BAPPEBTI/SI/06/2007"
    },
  ];

  return (
    <PageTemplates title="Sertifikat">
      <div className="container mx-auto px-4 py-12 text-gray-200">
        {/* Header Section - Konsisten dengan halaman lain */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sertifikat</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Grid Sertifikat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sertifikatData.map((sertifikat) => (
            <SertifikatCard
              key={sertifikat.id}
              image={sertifikat.image}
              title={sertifikat.title}
            />
          ))}
        </div>

        {/* Empty State jika tidak ada data */}
        {sertifikatData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">
              📜
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Belum Ada Sertifikat
            </h3>
            <p className="text-gray-500">
              Sertifikat akan segera ditambahkan.
            </p>
          </div>
        )}
      </div>
    </PageTemplates>
  );
}