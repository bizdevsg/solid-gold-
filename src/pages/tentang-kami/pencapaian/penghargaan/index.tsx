import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import PenghargaanCard from "@/components/molecules/PenghargaanCard";

export default function PenghargaanPage() {
  // Data penghargaan sementara
  const penghargaanData = [
    {
      id: 1,
      image: "/assets/Penghargaan-TransaksiTerbanyak.png",
      title: "Penghargaan Dengan Volume Transaksi Bilateral Terbanyak ke-2 Tahun 2011"
    },
    {
      id: 2,
      image: "/assets/Penghargaan-AnggotaTrilingTerbaik.png",
      title: "Penghargaan Anggota Kliring Terbaik ke-2 Tahun 2014"
    }
  ];

  return (
    <PageTemplates title="Penghargaan">
      <div className="container mx-auto px-4 py-12 text-gray-200">
        {/* Header Section - Konsisten dengan halaman lain */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Penghargaan</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Grid Penghargaan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {penghargaanData.map((penghargaan) => (
            <PenghargaanCard
              key={penghargaan.id}
              image={penghargaan.image}
              title={penghargaan.title}
            />
          ))}
        </div>

        {/* Empty State jika tidak ada data */}
        {penghargaanData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">
              🏆
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Belum Ada Penghargaan
            </h3>
            <p className="text-gray-500">
              Penghargaan akan segera ditambahkan.
            </p>
          </div>
        )}
      </div>
    </PageTemplates>
  );
}