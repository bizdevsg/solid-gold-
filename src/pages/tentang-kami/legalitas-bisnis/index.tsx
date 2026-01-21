import PageTemplates from "@/components/templates/PageTemplates";
import { FaFileAlt, FaBalanceScale, FaBuilding, FaHandshake, FaLaptopHouse, FaChartLine, FaFileContract, FaShieldAlt, FaFileSignature } from 'react-icons/fa';

type LegalDocument = {
  id: number;
  title: string;
  number: string;
  description: string;
  icon: React.ReactNode;
};

export default function LegalitasBisnis() {
  const legalDocuments: LegalDocument[] = [
    {
      id: 1,
      title: 'Akta Pendirian Perseroan Terbatas',
      number: '52',
      description: 'Tanggal 18 Januari 2002 oleh Notaris Soehendro Gautama, SH, PT. Solid Gold Berjangka',
      icon: <FaFileAlt className="text-3xl text-yellow-500" />
    },
    {
      id: 2,
      title: 'Pengesahan Departemen Kehakiman dan HAM',
      number: 'C-05612 HT.01.01.TH.2002',
      description: 'Pengesahan resmi dari Kementerian Hukum dan HAM',
      icon: <FaBalanceScale className="text-3xl text-yellow-500" />
    },
    {
      id: 3,
      title: 'Surat Persetujuan Anggota Bursa (SPAB)',
      number: 'SPAB-047/BBJ/07/02',
      description: 'Persetujuan keanggotaan bursa berjangka',
      icon: <FaFileAlt className="text-3xl text-yellow-500" />
    },
    {
      id: 4,
      title: 'Izin Usaha Pialang Berjangka',
      number: '161/BAPPEBTI/SI/IX/2002',
      description: 'Keputusan Kepala BAPPEBTI',
      icon: <FaBuilding className="text-3xl text-yellow-500" />
    },
    {
      id: 5,
      title: 'Keanggotaan Lembaga Kliring Berjangka',
      number: '15/AK-KBI/V/2003',
      description: 'Keanggotaan resmi di Lembaga Kliring Berjangka',
      icon: <FaHandshake className="text-3xl text-yellow-500" />
    },
    {
      id: 6,
      title: 'Izin Pialang Berjangka untuk Transaksi Luar Negeri',
      number: '287/BAPPEBTI/SP/I/2004',
      description: 'Izin sebagai Pialang Berjangka yang menawarkan dan/atau menyalurkan amanat nasabah untuk transaksi kontrak berjangka ke bursa berjangka luar negeri',
      icon: <FaChartLine className="text-3xl text-yellow-500" />
    },
    {
      id: 7,
      title: 'Perjanjian Kerjasama dengan PT. Royal Assetindo',
      number: '262/CO-BOD/SGB/VI/2005',
      description: 'Perjanjian Kerjasama dengan Pedagang Penyelenggara Sistem Perdagangan Alternatif',
      icon: <FaFileContract className="text-3xl text-yellow-500" />
    },
    {
      id: 8,
      title: 'Persetujuan sebagai Peserta SPA',
      number: '1156/BAPPEBTI/SI/3/2007',
      description: 'Pemberian Persetujuan sebagai peserta Sistem Perdagangan Alternatif (SPA)',
      icon: <FaShieldAlt className="text-3xl text-yellow-500" />
    },
    {
      id: 9,
      title: 'Penerimaan Nasabah Secara Elektronik',
      number: '27/BAPPEBTI/KEP-PBK/09/2014',
      description: 'Penetapan sebagai Pialang Berjangka yang Melakukan Kegiatan Penerimaan Nasabah secara Elektronik On-Line',
      icon: <FaLaptopHouse className="text-3xl text-yellow-500" />
    },
    {
      id: 10,
      title: 'Perantara Perdagangan Efek Derivatif Keuangan',
      number: 'S-373/PM.02/2025',
      description: 'Pesetujuan Prinsip Pelaku Derivatif Keuangan sebagai Perantara Perdagangan Efek Derivatif Keuangan di Otoritas Jasa Keuangan',
      icon: <FaFileSignature className="text-3xl text-yellow-500" />
    },
    {
      id: 11,
      title: 'Peserta Sistem Perdagangan Alternatif Derivatif PUVA',
      number: '27/663/DPPK/Srt/B',
      description: 'Terdaftar sebagai Pialang Berjangka – Peserta Sistem Perdagangan Alternatif Derivatif PUVA di Bank Indonesia',
      icon: <FaBuilding className="text-3xl text-yellow-500" />
    }
  ];

  return (
    <PageTemplates>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Legalitas Bisnis</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              <span className="text-gray-300">Berikut adalah dokumen-dokumen legal yang menjadi dasar hukum dan pengakuan resmi atas operasional PT. Solid Gold Berjangka</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalDocuments.map((doc) => (
              <div 
                key={doc.id}
                className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500"
                data-aos="fade-up"
                data-aos-delay={doc.id * 100}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-yellow-50 rounded-full mr-4">
                      {doc.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{doc.title}</h3>
                  </div>
                  <div className="pl-16">
                    <p className="text-yellow-400 font-medium mb-2">No. {doc.number}</p>
                    <p className="text-gray-300">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Legalitas Lengkap dan Terverifikasi</h2>
              <p className="text-gray-300 mb-6">
                Seluruh dokumen legalitas dapat dilihat langsung di kantor kami atau melalui salinan resmi yang telah dilegalisir.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                Hubungi Kami untuk Info Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}
