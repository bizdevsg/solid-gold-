// pages/berita/[newsSlug].tsx
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import PageTemplates from "@/components/templates/PageTemplates";
import RandomizeNews from "@/components/organism/RandomizeNews";

interface Berita {
    id: number;
    title: string;
    slug: string;
    content: string;
    kategori?: { name: string };
    images?: string[];
    created_at?: string;
}

export default function BeritaDetailPage() {
    const router = useRouter();
    const rawSlug = router.query.newsSlug;

    const newsSlug = useMemo(() => {
        if (typeof rawSlug === "string") return rawSlug;
        if (Array.isArray(rawSlug)) return rawSlug[0];
        return undefined;
    }, [rawSlug]);

    const [berita, setBerita] = useState<Berita | null>(null);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState<string | null>(null);
    const [redirecting404, setRedirecting404] = useState(false);

    useEffect(() => {
        if (!router.isReady || !newsSlug) return;
        const ac = new AbortController();

        (async () => {
            setLoading(true);
            setErrMsg(null);
            try {
                const res = await fetch(
                    `https://portalnews.newsmaker.id/api/berita/${encodeURIComponent(newsSlug)}`,
                    { signal: ac.signal }
                );

                if (res.status === 404) {
                    setRedirecting404(true);
                    router.replace("/404");
                    return;
                }
                if (!res.ok) throw new Error(`Gagal mengambil data berita (status ${res.status})`);

                const result = await res.json();
                const data: Berita | null = result?.data ?? null;
                if (!data) {
                    setRedirecting404(true);
                    router.replace("/404");
                    return;
                }

                setBerita({ ...data, content: result?.data?.content ?? "" });
            } catch (e: any) {
                if (e?.name !== "AbortError") {
                    setErrMsg(e?.message || "Terjadi kesalahan saat memuat berita");
                    setBerita(null);
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => ac.abort();
    }, [router, router.isReady, newsSlug]);

    if (redirecting404) return null;

    if (loading) {
        return (
            <PageTemplates title="Loading...">
                <p>Memuat data...</p>
            </PageTemplates>
        );
    }

    if (!berita) {
        return (
            <PageTemplates title="Terjadi Kesalahan">
                <p className="text-red-400">{errMsg ?? "Berita tidak ditemukan."}</p>
            </PageTemplates>
        );
    }

    return (
        <PageTemplates title={berita.title}>
            <div className="text-center mb-6">
                {berita.kategori?.name && (
                    <p className="text-yellow-500 font-semibold mb-2">{berita.kategori.name} News</p>
                )}
                <h1 className="text-3xl font-bold text-white mb-2">{berita.title}</h1>
                {berita.created_at && (
                    <p className="text-gray-400 text-sm">
                        {new Date(berita.created_at).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                )}
            </div>

            <div className="bg-neutral-800 rounded-lg shadow-lg">
                {berita.images?.[0] && (
                    <img
                        src={`http://portalnews.newsmaker.id/${berita.images[0]}`}
                        alt={berita.title}
                        className="w-full max-h-[400px] object-cover rounded-t-lg mb-6"
                        loading="lazy"
                    />
                )}
                <div className="px-5 pb-5">
                    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: berita.content }} />
                </div>
            </div>

            <div className="mt-10">
                {/* kirim slug yang sedang dibuka */}
                <RandomizeNews excludedSlug={newsSlug} />
            </div>
        </PageTemplates>
    );
}
