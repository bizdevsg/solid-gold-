import PageTemplates from "@/components/templates/PageTemplates";
import { FaMoneyBillWave, FaFileAlt, FaClock, FaExchangeAlt, FaCheckCircle } from 'react-icons/fa';

export default function ProsedurPenarikan() {
  return (
    <PageTemplates>
      <div className="container mx-auto px-4 py-12 text-white">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Prosedur Penarikan Dana</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-neutral-800/50 p-8 rounded-lg border border-neutral-600/30">
          <div className="mb-8">
            <div className="flex items-start mb-6">
              <FaMoneyBillWave className="text-yellow-500 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">Informasi Umum</h2>
                <p className="leading-relaxed">
                  Penarikan dana dapat dilakukan kapan saja oleh para nasabah selama jam perbankan dengan kondisi tidak melebihi dari effective margin yang ada didalam laporan transaksi harian nasabah (statement report).
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="p-3 bg-yellow-500/20 rounded-full mr-4 mt-1 flex-shrink-0">
                <FaExchangeAlt className="text-yellow-500 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Tahapan Penarikan Dana</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-yellow-400 text-sm font-semibold">1</span>
                    </div>
                    <p>Nasabah masuk ke menu withdrawal pada akun transaksi rill-nya untuk melakukan permohonan penarikan dana dengan mengikuti syarat dan ketentuan yang berlaku.</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-yellow-500/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-yellow-400 text-sm font-semibold">2</span>
                    </div>
                    <p>Nasabah mengisi formulir permohonan penarikan dana.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <div className="flex items-start">
                <FaFileAlt className="text-yellow-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Ketentuan Rekening Tujuan</h3>
                  <p>
                    Penarikan dana Nasabah hanya dapat di transfer ke rekening atas nama nasabah bersangkutan yang tertera pada Dokumen Aplikasi Pembukaan Rekening Nasabah.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start p-6 bg-neutral-800/30 rounded-lg border-l-4 border-yellow-500">
              <FaClock className="text-yellow-500 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Waktu Proses</h3>
                <p>
                  Proses penarikan dana oleh nasabah melalui mekanisme standar membutuhkan waktu tiga hari kerja (T+3), namun PT. Solid Gold Berjangka mengupayakan agar proses penarikan dana hanya selama satu hari kerja saja (T+1).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}