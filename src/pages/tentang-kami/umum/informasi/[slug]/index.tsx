import React from 'react';
import { useRouter } from 'next/router';
import PageTemplates from "@/components/templates/PageTemplates";
import Image from 'next/image';

interface InformasiDetail {
  id: number;
  slug: string;
  image: string;
  title: string;
  content: string;
  date: string;
}

// Data informasi sementara (dalam real app, ini akan diambil dari API)
const informasiData: InformasiDetail[] = [
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

export default function InformasiDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Find informasi by slug
  const informasi = informasiData.find(item => item.slug === slug);

  // Handle loading state
  if (router.isFallback) {
    return (
      <PageTemplates title="Loading...">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
            <p className="text-white mt-4">Loading...</p>
          </div>
        </div>
      </PageTemplates>
    );
  }

  // Handle not found
  if (!informasi) {
    return (
      <PageTemplates title="Informasi Tidak Ditemukan">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">📄</div>
            <h1 className="text-3xl font-bold text-white mb-4">Informasi Tidak Ditemukan</h1>
            <p className="text-gray-300 mb-8">Maaf, informasi yang Anda cari tidak tersedia.</p>
            <button
              onClick={() => router.push('/tentang-kami/umum/informasi')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Kembali ke Informasi
            </button>
          </div>
        </div>
      </PageTemplates>
    );
  }

  return (
    <PageTemplates title={informasi.title}>
      <div className="container mx-auto px-4 py-12">
        {/* Article Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {informasi.title}
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-64 md:h-96 bg-gray-900/50">
              <Image
                src={informasi.image}
                alt={informasi.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            {/* Date below image */}
            <div className="p-4 border-t border-neutral-700">
              <p className="text-gray-400 text-center">
                <svg className="inline-block w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {informasi.date}
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
            <div className="prose prose-invert max-w-none">
              <div className="text-white leading-relaxed whitespace-pre-wrap text-base">
                {informasi.content}
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/tentang-kami/umum/informasi')}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Informasi
            </button>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}

// Generate static paths for all informasi slugs
export async function getStaticPaths() {
  const paths = informasiData.map((informasi) => ({
    params: { slug: informasi.slug },
  }));

  return {
    paths,
    fallback: true, // Show loading state for new paths
  };
}

// Generate static props for each informasi
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const informasi = informasiData.find(item => item.slug === params.slug);

  return {
    props: {
      informasi,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
