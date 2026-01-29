import Link from "next/link";
import PageTemplates from "@/components/templates/PageTemplates";

export default function PencapaianIndex() {
  return (
    <PageTemplates title="Pencapaian">
      <div className="container mx-auto px-4 py-12 text-gray-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pencapaian
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/tentang-kami/pencapaian/penghargaan"
            className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="h-56 w-full overflow-hidden bg-neutral-800">
              <img
                src="/assets/Penghargaan-TransaksiTerbanyak.png"
                alt="Penghargaan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Penghargaan
              </h2>
              <p className="text-sm text-neutral-300">
                Lihat daftar penghargaan yang telah diraih.
              </p>
            </div>
          </Link>

          <Link
            href="/tentang-kami/pencapaian/sertifikat"
            className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="h-56 w-full overflow-hidden bg-neutral-800">
              <img
                src="/assets/Sertifikat-Legalitas.jpg"
                alt="Sertifikat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Sertifikat
              </h2>
              <p className="text-sm text-neutral-300">
                Lihat dokumen sertifikat perusahaan.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </PageTemplates>
  );
}
