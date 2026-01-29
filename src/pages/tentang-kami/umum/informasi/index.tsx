import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import InformasiCard from "@/components/molecules/InformasiCard";
import useSWR from "swr";

interface Informasi {
  id: number;
  slug: string;
  title: string;
  content: string;
  image?: string | null;
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

const fetcher = async (url: string): Promise<Informasi[]> => {
  const r = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!r.ok) throw new Error(`HTTP ${r.status}`);

  const json = (await r.json()) as ApiResponse<Informasi[]>;
  return Array.isArray(json?.data) ? json.data : [];
};

export default function InformasiPage() {
  const { data, error, isLoading } = useSWR<Informasi[]>(
    `${API_BASE}/api/v1/informasi`,
    fetcher
  );

  const informasiData = data ?? [];

  return (
    <PageTemplates title="Informasi">
      <div className="container mx-auto px-4 py-12 text-gray-200">
        {/* Header Section - Konsisten dengan halaman lain */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Informasi</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {isLoading && (
          <div className="text-center py-12 text-gray-300">
            Memuat informasi...
          </div>
        )}

        {error && !isLoading && (
          <div className="text-center py-12 text-red-400">
            Gagal memuat informasi.
          </div>
        )}

        {!isLoading && !error && informasiData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {informasiData.map((informasi) => (
              <InformasiCard
                key={informasi.id}
                slug={informasi.slug}
                image={mediaUrl(informasi.image)}
                title={informasi.title}
                date={formatDate(informasi.created_at)}
                content={informasi.content}
              />
            ))}
          </div>
        )}

        {/* Empty State jika tidak ada data */}
        {!isLoading && !error && informasiData.length === 0 && (
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