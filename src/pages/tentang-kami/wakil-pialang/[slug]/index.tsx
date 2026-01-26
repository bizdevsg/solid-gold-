import PageTemplates from "@/components/templates/PageTemplates";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const API_BASE = (
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  "https://sg-admin.newsmaker.id"
).replace(/\/+$/, "");

const MEDIA_BASE = (
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  process.env.NEXT_PUBLIC_BASE_URL ??
  "https://sg-admin.newsmaker.id"
).replace(/\/+$/, "");

const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN ?? "SGB-c7b0604664fd48d9";

type WakilPialang = {
  id: number;
  image?: string | null;
  nomor_id: string;
  nama: string;
  status: string;
  kantor_cabang_id?: string | number | null;
  kantor_cabang?: {
    id: number;
    nama_kantor_cabang: string;
    alamat_kantor_cabang?: string | null;
    telepon_kantor_cabang?: string | null;
    maps_kantor_cabang?: string | null;
  } | null;
  created_at?: string;
  updated_at?: string;
};

type ApiResponse<T> = { data: T } & Record<string, unknown>;

function mediaUrl(p?: string | null) {
  if (!p) return "/images/placeholder.jpg";
  if (/^https?:\/\//i.test(p)) return p;
  return `${MEDIA_BASE}/${String(p).replace(/^\/+/, "")}`;
}

const fetcher = async (url: string): Promise<WakilPialang | null> => {
  const r = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const json = (await r.json()) as ApiResponse<WakilPialang[]>;
  const list = Array.isArray(json?.data) ? json.data : [];
  if (list.length === 0) return null;

  // Backend kadang balikin list (bukan single) walau sudah pakai query `id=...`
  // Jadi kita ambil yang paling cocok dengan id yang diminta.
  try {
    const u = new URL(url, "https://example.com");
    const requestedId = Number(u.searchParams.get("id"));
    if (Number.isFinite(requestedId)) {
      const found = list.find((x) => Number(x?.id) === requestedId);
      if (found) return found;
    }
  } catch {
    // ignore
  }

  return list[0];
};

export default function WakilPialangDetailPage() {
  const router = useRouter();
  const raw = router.query.slug;
  const id = typeof raw === "string" ? Number(raw) : Array.isArray(raw) ? Number(raw[0]) : NaN;

  const { data, error, isLoading } = useSWR<WakilPialang | null>(
    Number.isFinite(id) ? `${API_BASE}/api/v1/wakil-pialang?id=${encodeURIComponent(String(id))}` : null,
    fetcher
  );

  return (
    <PageTemplates title="Detail Wakil Pialang">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.push("/tentang-kami/wakil-pialang")}
            className="flex items-center text-yellow-500 hover:text-yellow-400 mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Kembali
          </button>

          {isLoading ? (
            <div className="text-center text-gray-300">Memuat data…</div>
          ) : error ? (
            <div className="text-center text-red-400">Gagal memuat detail wakil pialang.</div>
          ) : !data ? (
            <div className="text-center text-gray-300">Data tidak ditemukan.</div>
          ) : (
            <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-neutral-700 flex flex-col md:flex-row md:items-center gap-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-neutral-900 shrink-0">
                  <Image
                    src={mediaUrl(data.image)}
                    alt={data.nama}
                    fill
                    className="object-cover"
                    sizes="96px"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <h1 className="text-2xl md:text-3xl font-bold text-white truncate">{data.nama}</h1>
                  <p className="text-gray-300 mt-1">{data.nomor_id}</p>
                  <div className="mt-3">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        String(data.status).toLowerCase() === "aktif"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {data.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 text-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-neutral-900/50 rounded p-4">
                    <div className="text-gray-400">ID</div>
                    <div className="text-white font-semibold">{data.id}</div>
                  </div>
                  <div className="bg-neutral-900/50 rounded p-4">
                    <div className="text-gray-400">Nomor ID</div>
                    <div className="text-white font-semibold">{data.nomor_id}</div>
                  </div>
                  <div className="bg-neutral-900/50 rounded p-4 md:col-span-2">
                    <div className="text-gray-400">Cabang</div>
                    <div className="text-white font-semibold">
                      {data.kantor_cabang?.nama_kantor_cabang ?? "-"}
                    </div>
                    {data.kantor_cabang?.alamat_kantor_cabang && (
                      <div className="text-gray-300 mt-2">{data.kantor_cabang.alamat_kantor_cabang}</div>
                    )}
                    {data.kantor_cabang?.maps_kantor_cabang && (
                      <a
                        href={data.kantor_cabang.maps_kantor_cabang}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-yellow-500 hover:text-yellow-400"
                      >
                        Lihat Maps
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTemplates>
  );
}
