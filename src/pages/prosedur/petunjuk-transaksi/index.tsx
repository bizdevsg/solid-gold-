import PageTemplates from "@/components/templates/PageTemplates";
import { FaLaptop, FaUserLock, FaCheckCircle } from 'react-icons/fa';

export default function PetunjukTransaksi() {
  return (
    <PageTemplates>
      <div className="container mx-auto px-4 py-12 text-gray-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Petunjuk Transaksi</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-neutral-800/50 p-8 rounded-lg border border-neutral-600/30">
          <p className="mb-6 text-lg text-white leading-relaxed">
            Nasabah dapat menyampaikan amanat secara online dan atau melalui telepon (dianjurkan nasabah melakukan simulasi terlebih dulu sebelum menggunakan real online trading).
          </p>

          <div className="mb-8 p-6 bg-neutral-800/30 rounded-lg border-l-4 border-yellow-500">
            <div className="flex items-start">
              <FaUserLock className="text-yellow-500 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Akses Online Trading</h3>
                <p className="text-white">
                  Nasabah yang menyampaikan amanat secara online akan memperoleh User ID dan Password dari PT. Solid Gold Berjangka.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Syarat Transaksi Online</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-white">Tersedia Jaringan Internet</span>
              </div>
              
              <div className="flex items-start">
                <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-white">Akses ke <a href="http://etrade.sgberjangka.com/login.php" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">http://etrade.sgberjangka.com/login.php</a></span>
              </div>
              
              <div className="flex items-start">
                <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-white">Nasabah sudah mempunyai User ID dan Password dari PT. Solid Gold Berjangka (Password dapat diganti oleh nasabah)</span>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-start">
              <FaLaptop className="text-yellow-500 text-2xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Panduan Lengkap</h3>
                <p className="text-white">
                  Untuk panduan lebih lengkap tentang penggunaan platform trading online, silakan hubungi customer service kami atau kunjungi kantor cabang terdekat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}