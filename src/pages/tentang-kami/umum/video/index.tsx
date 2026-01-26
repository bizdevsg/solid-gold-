import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import VideoCard from "@/components/molecules/VideoCard";

export default function VideoPage() {
  // Data video sementara
  const videoData = [
    {
      id: 1,
      title: "Anniversary SGB Makassar ke - 21",
      date: "21 Desember 2024",
      description: "Merayakan hari jadi ke-21 PT. Solidgold Berjangka cabang Makassar dengan berbagai kegiatan dan acara spesial bersama karyawan dan nasabah setia.",
      videoUrl: "https://www.youtube.com/embed/_fuv2OJf6GE"
    },
    {
      id: 2,
      title: "Anniversary SGB Makassar ke - 21",
      date: "21 Desember 2024",
      description: "Merayakan hari jadi ke-21 PT. Solidgold Berjangka cabang Makassar dengan berbagai kegiatan dan acara spesial bersama karyawan dan nasabah setia.",
      videoUrl: "https://www.youtube.com/embed/_fuv2OJf6GE"
    }
  ];

  return (
    <PageTemplates title="Video">
      <div className="container mx-auto px-4 py-12 text-gray-200">
        {/* Header Section - Konsisten dengan halaman lain */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Video</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Grid Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              date={video.date}
              description={video.description}
              videoUrl={video.videoUrl}
            />
          ))}
        </div>

        {/* Empty State jika tidak ada data */}
        {videoData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">
              🎥
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Belum Ada Video
            </h3>
            <p className="text-gray-500">
              Video akan segera ditambahkan.
            </p>
          </div>
        )}
      </div>
    </PageTemplates>
  );
}