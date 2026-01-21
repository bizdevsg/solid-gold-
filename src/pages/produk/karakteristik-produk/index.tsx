import PageTemplates from "@/components/templates/PageTemplates";
import { FaExchangeAlt, FaChartLine, FaMoneyBillWave, FaDollarSign, FaLock, FaGlobe } from 'react-icons/fa';

export default function KarakteristikProduk() {
  return (
    <PageTemplates>
      <div className="container mx-auto px-4 py-12 text-gray-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Karakteristik Produk</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Efisiensi Modal */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30 hover:border-yellow-500/30 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-500/20 rounded-full mr-4">
                <FaMoneyBillWave className="text-yellow-500 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-yellow-400">Efisiensi Modal</h2>
            </div>
            <p className="text-gray-300">
              Dalam bertransaksi menggunakan Margin Trading (dana jaminan), dengan demikian para investor dapat melakukan transaksi yang besar dengan modal yang relatif kecil. Dengan dana minimal sebesar 10% dari nilai total transaksi, tidak perlu dana 100%.
            </p>
          </div>

          {/* Fleksibilitas Transaksi */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30 hover:border-yellow-500/30 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-500/20 rounded-full mr-4">
                <FaExchangeAlt className="text-yellow-500 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-yellow-400">Fleksibilitas Transaksi</h2>
            </div>
            <p className="text-gray-300">
              Transaksi dua arah yang memungkinkan para investor untuk mendapatkan peluang pada saat pasar bergerak naik maupun turun.
            </p>
          </div>

          {/* Pergerakan Harga Sangat Fluktuatif */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30 hover:border-yellow-500/30 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-500/20 rounded-full mr-4">
                <FaChartLine className="text-yellow-500 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-yellow-400">Pergerakan Harga Sangat Fluktuatif</h2>
            </div>
            <p className="text-gray-300">
              Pergerakan harga harian yang besar dengan range berkisar 100 - 500 poin memberikan peluang keuntungan yang besar dengan kontrak size US $ 5 / point dan hanya dibebankan biaya transaksi / Fee sebesar 3 (Tiga) poin ditambah PPN 11%.
            </p>
          </div>

          {/* Likuiditas Tinggi */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30 hover:border-yellow-500/30 transition-all">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-500/20 rounded-full mr-4">
                <FaGlobe className="text-yellow-500 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-yellow-400">Likuiditas Tinggi</h2>
            </div>
            <p className="text-gray-300">
              Produk ini memiliki tingkat likuiditas yang sangat tinggi, dengan begitu para investor dapat melakukan transaksi beli dan jual kapan saja selama market berjalan, tanpa harus ada antrian di harga pasar.
            </p>
          </div>
        </div>

        {/* Jenis Investasi */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-yellow-500 flex items-center">
            <FaLock className="mr-2" /> Jenis Investasi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Fixed Rate */}
            <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Fixed Rate / Kurs Tetap</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>US $ 1 = Rp. 10.000 (kurs tetap)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Terhindar dari Risiko kerugian akibat fluktuasi USD terhadap Rupiah</span>
                </li>
              </ul>
            </div>

            {/* Floating Rate */}
            <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Floating Rate / Kurs Berjalan</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>US $ 1 = US $ 1 (sesuai kurs USD terhadap Rupiah)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Tidak dikenakan fee dari pembukaan dan penarikan dana USD baik sebagian atau seluruhnya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}