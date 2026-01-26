import { FaUserTie, FaLaptop, FaFileAlt, FaMoneyBillWave, FaShieldAlt, FaExchangeAlt, FaHandshake, FaEye } from 'react-icons/fa';
import PageTemplates from "@/components/templates/PageTemplates";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ServiceCard = ({ icon, title, children }: ServiceCardProps) => (
  <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
    <div className="text-yellow-500 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{children}</p>
  </div>
);

const FasilitasLayanan = () => {
  return (
    <PageTemplates title="Fasilitas & Layanan">
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Fasilitas & Layanan</h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<FaUserTie />} 
              title="Wakil Pialang Berjangka Profesional"
            >
              Perusahaan memiliki Wakil Pialang Berjangka profesional yang selalu siap memberikan pelayanan kepada calon nasabah / nasabah, berupa edukasi, prosedur administrasi dan mekanisme transaksi Sistem Perdagangan Alternatif di Bursa Berjangka Jakarta.
            </ServiceCard>

            <ServiceCard 
              icon={<FaLaptop />} 
              title="Fasilitas Online Trading & Demo Account"
            >
              Fasilitas ini akan memberikan kemudahan bagi setiap nasabah dalam bertransaksi secara online melalui jaringan internet. Kami juga menyediakan Demo Account atau Simulasi Transaksi agar calon nasabah dapat lebih memahami dan menguasai fungsi-fungsi transaksi. Anda cukup menghubungi customer care kami.
            </ServiceCard>

            <ServiceCard 
              icon={<FaFileAlt />} 
              title="Pelaporan Transaksi Setiap Hari"
            >
              Setiap hari nasabah akan mendapat Laporan Transaksi Nasabah yang berisikan catatan transaksi dan perkembangan investasi yang telah dilakukan oleh nasabah, baik via e-mail, fax, maupun melalui surat/pos. Catatan atau rekam transaksi tersebut juga dapat diakses langsung melalui online trading platform dengan memilih menu utama Temporary Statement/Daily Statement.
            </ServiceCard>

            <ServiceCard 
              icon={<FaMoneyBillWave />} 
              title="Penarikan Dana (Withdrawal)"
            >
              Penarikan dana dapat dilakukan sewaktu-waktu oleh nasabah apabila nasabah menghendakinya. PT. Solidgold Berjangka mengupayakan agar penarikan dana dapat diproses satu hari kerja (T+1).
            </ServiceCard>

            <ServiceCard 
              icon={<FaShieldAlt />} 
              title="Rekening Terpisah (Segregated Account)"
            >
              Semua dana investor ditempatkan pada Segregated Account pialang yang ada di Bank Penyimpanan yang disetujui oleh Bappebti yaitu Bank BCA, Bank CIMB Niaga, Bank Mandiri, Bank BNI dan Bank Artha Graha yang terpisah dengan aset-aset perusahaan. Dana tersebut hanya dipergunakan untuk keperluan transaksi nasabah bersangkutan.
            </ServiceCard>

            <ServiceCard 
              icon={<FaExchangeAlt />} 
              title="Fleksibilitas Transaksi"
            >
              Transaksi dua arah memungkinkan bagi para investor untuk mendapatkan keuntungan pada saat market bergerak naik maupun turun. Apalagi likuiditas produk ini sangat tinggi, sehingga memungkinkan mengambil keuntungan optimal.
            </ServiceCard>

            <ServiceCard 
              icon={<FaHandshake />} 
              title="Sarana Penyelesaian Perselisihan"
            >
              Sarana penyelesaian yang dipergunakan apabila terjadi perselisihan dalam kegiatan perdagangan berjangka:
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>Musyawarah untuk Mufakat</li>
                <li>Badan Arbitrase Perdagangan Berjangka Komoditi (BAKTI)</li>
                <li>Pengadilan Negeri</li>
              </ol>
            </ServiceCard>

            <ServiceCard 
              icon={<FaEye />} 
              title="Program Sitna"
            >
              Dalam rangka transparansi transaksi kami menyediakan program Sitna kepada setiap nasabah untuk melihat transaksi tersebut pada Bursa Berjangka Jakarta (BBJ) dan Kliring Berjangka Indonesia.
            </ServiceCard>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
};

export default FasilitasLayanan;