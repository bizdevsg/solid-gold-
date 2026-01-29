import React from 'react';
import { useRouter } from 'next/router';
import PageTemplates from "@/components/templates/PageTemplates";
import Image from 'next/image';
import useSWR from 'swr';

interface InformasiDetail {
  id: number;
  slug: string;
  image?: string | null;
  title: string;
  content: string;
  created_at?: string | null;
  updated_at?: string | null;
}

type ApiResponse<T> = { data: T } & Record<string, unknown>;

const API_BASE = (
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  "https://sg-admin.newsmaker.id/test"
).replace(/\/+$/, "");

const MEDIA_BASE = (
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  "https://sg-admin.newsmaker.id/test"
).replace(/\/+$/, "");

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN ?? "SGB-c7b0604664fd48d9";

function mediaUrl(p?: string | null) {
  if (!p) return "/assets/Informasi-1.jpg";
  if (/^https?:\/\//i.test(p)) return p;
  return `${MEDIA_BASE}/${String(p).replace(/^\/+/, "")}`;
}

function formatDate(ts?: string | null): string {
  if (!ts) return "-";
  const d = new Date(ts);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const fetcher = async (url: string): Promise<InformasiDetail | null> => {
  const r = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    cache: "no-store",
  });

  if (r.status === 404) {
    return null;
  }

  if (!r.ok) throw new Error(`HTTP ${r.status}`);

  const json = (await r.json()) as ApiResponse<InformasiDetail | null>;
  return (json?.data as InformasiDetail | null) ?? null;
};

export default function InformasiDetailPage() {
  const router = useRouter();
  const rawSlug = router.query.slug;
  const slug =
    typeof rawSlug === 'string'
      ? rawSlug
      : Array.isArray(rawSlug)
      ? rawSlug[0]
      : '';

  const { data, error, isLoading } = useSWR<InformasiDetail | null>(
    slug ? `${API_BASE}/api/v1/informasi/${encodeURIComponent(slug)}` : null,
    fetcher
  );

  // Handle loading state (awal / slug belum siap)
  if (!slug || isLoading) {
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

  if (error) {
    return (
      <PageTemplates title="Terjadi Kesalahan">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="text-gray-400 text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold text-white mb-4">Gagal memuat informasi</h1>
            <p className="text-gray-300 mb-8">Silakan coba beberapa saat lagi.</p>
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

  // Handle not found
  if (!data) {
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

  const informasi = data;

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
                src={mediaUrl(informasi.image)}
                alt={informasi.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            {/* Date below image */}
            <div className="p-4 border-t border-neutral-700">
              <p className="text-yellow-500 text-center">
                <svg className="inline-block w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {formatDate(informasi.created_at)}
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
            <div
              className="prose prose-invert max-w-none text-white leading-relaxed text-base"
              dangerouslySetInnerHTML={{ __html: informasi.content || "" }}
            />
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

