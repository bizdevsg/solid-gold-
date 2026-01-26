import { FaShieldAlt, FaLaptop, FaFileAlt, FaHandHoldingUsd, FaUserTie, FaChartLine } from 'react-icons/fa';
import PageTemplates from "@/components/templates/PageTemplates";

export default function AlasanMemilihKami() {
  const reasons = [
    {
      icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
      title: "Legalitas",
      description: "Transaksi keseluruhan produk indeks kami (berjangka kontrak Hong Kong dan Jepang Saham Index) mencatat di Bursa Berjangka Jakarta, dana kesetiaan klien (margin) disampaikan kepada PT Kliring Berjangka Indonesia, dan transaksi langsung diamati oleh BAPPEBTI (Pengawas Perdagangan Berjangka Komoditi Badan)."
    },
    {
      icon: <FaLaptop className="text-yellow-500 text-2xl" />,
      title: "Fasilitas Online Trading",
      description: "Dengan kemajuan teknologi yang ada, dan memberikan kepuasan klien dan kemantapan dalam melakukan transaksi, klien mampu melakukan transaksi nya melalui akses internet keluar, dan juga mampu untuk memantau akunnya di layar setiap kali transaksi."
    },
    {
      icon: <FaFileAlt className="text-yellow-500 text-2xl" />,
      title: "Laporan Transaksi Harian",
      description: "Setiap hari investor akan mendapatkan Laporan Rekening klien yang terdiri dari sekitar transaksi yang dilakukan oleh investor; sehingga investor bisa selalu melihat muka investasi mereka."
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
      title: "Keamanan Dana dan Jaminan Keselamatan",
      description: "PT. Solid Gold Berjangka ini, merupakan perusahaan keuangan yang sangat terpercaya, hal ini di awali dengan adanya pengakuan dari anggota bursa, yang menyerahkan surat persetujuan anggota bursa (SPAB) yang menyatakan bahwa PT. Solid Gold Berjangka telah resmi menjadi anggota Bursa Berjangka Jakarta."
    },
    {
      icon: <FaHandHoldingUsd className="text-yellow-500 text-2xl" />,
      title: "Proses Penarikan Cepat",
      description: "Proses penarikan dana investor melalui mekanisme biasa selama tiga hari kerja (T +3), namun PT. Solid Gold Berjangka upaya untuk memproses penarikan dana hanya selama aktivitas pekerjaan satu hari saja (T +1)."
    },
    {
      icon: <FaUserTie className="text-yellow-500 text-2xl" />,
      title: "Profesional Resmi Broker",
      description: "PT. Solid Gold Berjangka didukung pejabat broker profesional, lulusan nasional dan luar negeri, memiliki kemampuan handal yang dapat memberikan saran berdasarkan analisis pasar, baik fundamental maupun teknis juga untuk membantu investor dalam mengambil keputusan."
    },
    {
      icon: <FaChartLine className="text-yellow-500 text-2xl" />,
      title: "Departemen Research & Development",
      description: "PT. Solidgold Berjangka memiliki departemen R&D yang dapat membantu para nasabah melakukan transaksi, R&D selalu memberikan analisa - analisa baik secara teknikal atau fundamental dan memberikan berita - berita ter-update tentang pasar maupun global yang akan memberikan informasi kepada nasabah selama 24 jam."
    }
  ];

  return (
    <PageTemplates title="Alasan Memilih Kami">
      <div className="container mx-auto px-4 py-12 text-white">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Mengapa Memilih Kami?</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        <div/>

        <div className="text-left mb-12">
            <p className="mb-6">
              PT. Solid Gold Berjangka merupakan perusahaan keuangan yang sangat terpercaya, hal ini di awali dengan adanya pengakuan dari anggota bursa, yang menyerahkan surat persetujuan anggota bursa atau disingkat dengan SPAB, yang isinya menyatakan bahwa "PT. Solid Gold Berjangka ini telah resmi menjadi anggota Bursa Berjangka Jakarta".
            </p>
            <p>
              Selain dari sertifikasi yang diberikan oleh anggota bursa untuk PT. Solid Gold Berjangka, perusahaan keuangan ini juga telah mendapatkan legalitas yang tentunya akan memberikan peningkatan keamanan untuk para nasabah dan calon nasabahnya (para investor).
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30 hover:border-yellow-500/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start">
                <div className="bg-yellow-500/20 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplates>
  );
}