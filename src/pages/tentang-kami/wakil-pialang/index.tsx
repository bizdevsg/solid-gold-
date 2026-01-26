import PageTemplates from "@/components/templates/PageTemplates";
import useSWR from "swr";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { FaUserTie } from "react-icons/fa";

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
  kantor_cabang?: { id: number; nama_kantor_cabang: string } | null;
};

type KantorCabang = {
  id: number;
  nama_kantor_cabang: string;
};

type ApiResponse<T> = { data: T } & Record<string, unknown>;

function mediaUrl(p?: string | null) {
  if (!p) return "/images/placeholder.jpg";
  if (/^https?:\/\//i.test(p)) return p;
  return `${MEDIA_BASE}/${String(p).replace(/^\/+/, "")}`;
}

const fetcher = async (url: string): Promise<WakilPialang[]> => {
  const r = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const json = (await r.json()) as ApiResponse<WakilPialang[]>;
  return Array.isArray(json?.data) ? json.data : [];
};

const kantorFetcher = async (url: string): Promise<KantorCabang[]> => {
  const r = await fetch(url, { headers: { Accept: "application/json" }, cache: "no-store" });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const json = (await r.json()) as ApiResponse<KantorCabang[]>;
  return Array.isArray(json?.data) ? json.data : [];
};

export default function WakilPialangPage() {
  const router = useRouter();

  const [selectedCabangId, setSelectedCabangId] = useState<string>("0");

  const wakilUrl = useMemo(() => {
    const sp = new URLSearchParams();
    sp.set("per_page", "100");
    if (selectedCabangId) sp.set("kantor_cabang_id", selectedCabangId);
    return `${API_BASE}/api/v1/wakil-pialang?${sp.toString()}`;
  }, [selectedCabangId]);

  const { data, error, isLoading } = useSWR<WakilPialang[]>(
    wakilUrl,
    fetcher,
    { refreshInterval: 60_000 }
  );

  const { data: kantorCabangList } = useSWR<KantorCabang[]>(
    `${API_BASE}/api/v1/kantor-cabang`,
    kantorFetcher
  );

  const stats = useMemo(() => {
    const list = data ?? [];
    const active = list.filter((x) => String(x.status).toLowerCase() === "aktif").length;
    return { total: list.length, active, inactive: list.length - active };
  }, [data]);

  return (
    <PageTemplates title="Wakil Pialang">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Daftar Wakil Pialang
            </h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              Berikut adalah daftar Wakil Pialang Berjangka PT. Solid Gold Berjangka.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-8">
            <div className="block text-sm text-gray-300 mb-2 text-center">Pilih Cabang</div>
            <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/40 p-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-2 whitespace-nowrap w-max mx-auto">
                <button
                  type="button"
                  onClick={() => setSelectedCabangId("0")}
                  className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                    selectedCabangId === "0"
                      ? "bg-yellow-500 text-black border-yellow-500 shadow"
                      : "bg-neutral-950 text-white border-neutral-700 hover:border-yellow-500"
                  }`}
                >
                  PT. Solid Gold Berjangka - Jakarta
                </button>
                {(kantorCabangList ?? []).map((k) => {
                  const id = String(k.id);
                  const active = selectedCabangId === id;
                  return (
                    <button
                      key={k.id}
                      type="button"
                      onClick={() => setSelectedCabangId(id)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-colors shrink-0 ${
                        active
                          ? "bg-yellow-500 text-black border-yellow-500 shadow"
                          : "bg-neutral-950 text-white border-neutral-700 hover:border-yellow-500"
                      }`}
                    >
                      {k.nama_kantor_cabang}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center text-gray-300">Memuat data…</div>
          ) : error ? (
            <div className="text-center text-red-400">Gagal memuat data wakil pialang.</div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-sm">
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-gray-200">
                  Total: {stats.total}
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-green-300">
                  Aktif: {stats.active}
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-800 text-red-300">
                  Non-Aktif: {stats.inactive}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(data ?? []).map((wp, index) => (
                  <div
                    key={wp.id}
                    className="bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500 cursor-pointer"
                    onClick={() => router.push(`/tentang-kami/wakil-pialang/${wp.id}`)}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-900 shrink-0">
                          <Image
                            src={mediaUrl(wp.image)}
                            alt={wp.nama}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-white truncate">{wp.nama}</h3>
                          <p className="text-sm text-gray-300 truncate">{wp.nomor_id}</p>
                          <p className="text-xs text-gray-400 truncate">
                            {wp.kantor_cabang?.nama_kantor_cabang ??
                              (wp.kantor_cabang_id === 0 ||
                              wp.kantor_cabang_id === "0" ||
                              wp.kantor_cabang_id == null ||
                              String(wp.kantor_cabang_id).trim() === ""
                                ? "PT. Solid Gold Berjangka - Jakarta"
                                : "-")}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            String(wp.status).toLowerCase() === "aktif"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {wp.status}
                        </span>
                        <button
                          type="button"
                          className="text-yellow-500 hover:text-yellow-400 text-sm font-medium flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/tentang-kami/wakil-pialang/${wp.id}`);
                          }}
                        >
                          <FaUserTie /> Detail
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </PageTemplates>
  );
}
