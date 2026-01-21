import PageTemplates from "@/components/templates/PageTemplates";
import { FaGlobe, FaUserEdit, FaFileAlt, FaCheckCircle, FaMoneyBillWave, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

export default function ProsedurRegol() {
  return (
    <PageTemplates>
      <div className="container mx-auto px-4 py-12 text-white">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Prosedur Registrasi Online</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Langkah 1 */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30">
            <div className="flex items-start">
              <div className="bg-yellow-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <FaGlobe className="text-yellow-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">1. Membuka Website Perusahaan</h2>
                <p className="leading-relaxed">
                  Akses website resmi PT. Solid Gold Berjangka untuk memulai proses registrasi online.
                </p>
              </div>
            </div>
          </div>

          {/* Langkah 2 */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30">
            <div className="flex items-start">
              <div className="bg-yellow-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <FaUserEdit className="text-yellow-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">2. Registrasi Demo Account</h2>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Input Data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Demo Account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Melakukan simulasi transaksi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Langkah 3 */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30">
            <div className="flex items-start">
              <div className="bg-yellow-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <FaFileAlt className="text-yellow-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">3. Input Dokumen Perjanjian</h2>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Aplikasi Perjanjian</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Dokumen Pemberitahuan Adanya Risiko (DPAR)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Perjanjian Pemberian Amanat (PPA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Mekanisme Transaksi (Trading Rules)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Input data pendukung (KTP dan lainnya)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Langkah 4 */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-yellow-500/30">
            <div className="flex items-start">
              <div className="bg-yellow-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <FaCheckCircle className="text-yellow-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">4. Verifikasi Data</h2>
                <p className="mb-4">
                  Wakil Pialang yang ditunjuk melakukan verifikasi data calon Nasabah, yaitu:
                </p>
                <ul className="space-y-2 pl-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Data pribadi calon Nasabah</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Penyetoran Dana Calon Nasabah ke Rekening Terpisah Pialang</span>
                  </li>
                </ul>

                <div className="overflow-x-auto">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-3">Rekening Tujuan Transfer</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {/* Bank BCA */}
                    <div className="bg-neutral-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">Bank BCA Cabang Sudirman, Jakarta</h4>
                      <p className="text-sm">No. Rekening IDR : 035-311-596-8</p>
                      <p className="text-sm">No. Rekening USD: 035-311-797-9</p>
                    </div>

                    {/* Bank CIMB Niaga */}
                    <div className="bg-neutral-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">Bank CIMB Niaga Cabang Gajahmada, Jakarta</h4>
                      <p className="text-sm">No. Rekening IDR : 800-12-97469-00</p>
                      <p className="text-sm">No. Rekening USD: 800-00-06176-40</p>
                    </div>

                    {/* Bank BNI */}
                    <div className="bg-neutral-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">Bank BNI Cabang Gambir, Jakarta</h4>
                      <p className="text-sm">No. Rekening IDR : 017-068–2500</p>
                      <p className="text-sm">No. Rekening USD: 017-075–0300</p>
                    </div>

                    {/* Bank Mandiri */}
                    <div className="bg-neutral-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">Bank Mandiri Cabang Imam Bonjol, Jakarta</h4>
                      <p className="text-sm">No. Rekening IDR : 122-000-665-6063</p>
                      <p className="text-sm">No. Rekening USD: 122-000-665-60710</p>
                    </div>

                    {/* Bank Artha Graha */}
                    <div className="bg-neutral-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">Bank Artha Graha Cabang KPO Sudirman, Jakarta</h4>
                      <p className="text-sm">No. Rekening IDR : 107-996-4073</p>
                    </div>

                    {/* Bank BRI */}
                    <div className="bg-neutral-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">Bank Rakyat Indonesia KC Ciputat, Tangerang</h4>
                      <p className="text-sm">No. Rekening IDR : 038201001510301</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-white">
                    Kirim slip transfer bank melalui fax/email ke PT. Solid Gold Berjangka.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Langkah 5-8 */}
          <div className="space-y-4">
            {[
              {
                icon: <FaMoneyBillWave />,
                text: "Nasabah mendapat konfirmasi bahwa dana/margin tersebut sudah dikreditkan di Rekening Terpisah PT. Solid Gold Berjangka."
              },
              {
                icon: <FaUserEdit />,
                text: "Nasabah mendapatkan nomor account dari PT. Solid Gold Berjangka yang sudah teregistrasi."
              },
              {
                icon: <FaFileAlt />,
                text: "Nasabah mendapatkan Tanda Terima (Official Receipt) dari PT. Solid Gold Berjangka."
              },
              {
                icon: <FaMobileAlt />,
                text: "Apabila semua prosedur diatas telah dipenuhi, maka nasabah akan dikonfirmasikan untuk dapat melakukan transaksi setelah menerima User ID dan Password online trading yang dikirimkan melalui SMS dan email nasabah sesuai yang tertera di dalam aplikasi pembukaan rekening."
              }
            ].map((step, index) => {
              const IconComponent = step.icon.type;
              return (
                <div key={index} className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30">
                  <div className="flex items-start">
                    <div className="flex items-center mr-4">
                      <div className="bg-yellow-500/20 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <IconComponent className="text-yellow-500" />
                      </div>
                      <span className="text-xl font-semibold text-yellow-400">{index + 5}.</span>
                    </div>
                    <p className="mt-0.5">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}