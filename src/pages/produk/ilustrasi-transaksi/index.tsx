import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import { FaCalculator, FaExchangeAlt, FaDollarSign, FaInfoCircle } from 'react-icons/fa';

const IlustrasiTransaksi = () => {
  return (
    <PageTemplates title="Ilustrasi Transaksi">
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Ilustrasi Transaksi</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Formula Section */}
        <section className="mb-12 bg-neutral-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center">
            <FaCalculator className="mr-2" /> Rumus Perhitungan Transaksi
          </h2>
          <div className="bg-neutral-900 p-4 rounded-md mb-4 overflow-x-auto">
            <code className="text-lg text-yellow-400">
              [ (Selling Price – Buying Price) x Contract Size x n Lot ] – [ (Facility Fee + VAT) x n Lot ]
            </code>
          </div>
          
          <div className="space-y-4 text-gray-200">
            <p className="text-yellow-400 font-medium">Keterangan :</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-semibold text-white">Contract Size (nilai kontrak):</span> 
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li className="text-gray-300">US $5 per poin untuk kontrak gulir berkala indeks saham</li>
                  <li className="text-gray-300">100 troy ounce untuk kontrak gulir harian emas Loco London</li>
                </ul>
              </li>
              <li className="text-gray-300"><span className="font-semibold text-white">n Lot:</span> Banyaknya lot yang ditransaksikan</li>
              <li className="text-gray-300"><span className="font-semibold text-white">Facility Fee (biaya komisi):</span> US $15 per lot per sisi (beli/jual)</li>
              <li className="text-gray-300"><span className="font-semibold text-white">Total biaya komisi:</span> US $30 untuk 1 lot settlement</li>
              <li className="text-gray-300"><span className="font-semibold text-white">VAT (Pajak Pertambahan Nilai):</span> 11% dari biaya komisi (US $1.65/lot/side)</li>
              <li className="text-gray-300"><span className="font-semibold text-white">Total biaya VAT:</span> US $3.3 untuk 1 lot settlement</li>
            </ul>
          </div>
        </section>

        {/* Roll Over Fees */}
        <section className="mb-12 bg-neutral-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">Biaya Roll Over (Overnight)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-neutral-900 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-yellow-600 text-white">
                  <th className="px-4 py-2">Kontrak</th>
                  <th className="px-4 py-2">Biaya per Malam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700">
                <tr className="hover:bg-neutral-700/50 transition-colors">
                  <td className="px-4 py-3 text-gray-200">HKK5U dan HKK50</td>
                  <td className="px-4 py-3 text-yellow-400 font-medium">US $3 / malam</td>
                </tr>
                <tr className="hover:bg-neutral-700/50 transition-colors">
                  <td className="px-4 py-3 text-gray-200">JPK5U dan JPK50</td>
                  <td className="px-4 py-3 text-yellow-400 font-medium">US $2 / malam</td>
                </tr>
                <tr className="hover:bg-neutral-700/50 transition-colors">
                  <td className="px-4 py-3 text-gray-200">XULF dan XUL10</td>
                  <td className="px-4 py-3 text-yellow-400 font-medium">US $5 / malam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Sections */}
        <div className="space-y-12">
          {/* Example 1 */}
          <section className="bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-yellow-500 mb-4 flex items-center">
              <FaExchangeAlt className="mr-2" /> Contoh Transaksi Day Trade - Keuntungan
            </h2>
            <div className="space-y-4">
              <p className="text-gray-200">Seorang nasabah mengambil posisi beli HKK5U pada level 24.600 poin sebanyak 2 lot. Kemudian investor menutup/melikuidasi posisi beli 2 lot tersebut ketika indeks berada pada level 24.700 poin.</p>
              
              <div className="bg-neutral-700/30 p-4 rounded-md overflow-x-auto border border-neutral-600/30">
                <code className="text-yellow-300 font-mono text-sm sm:text-base">
                  P/L = [ ( Selling Price – Buying Price ) x Contract Size x n Lot ] – [ ( Fee US $ 10 + VAT ) x n Lot ]<br />
                  P/L = [ ( 24.700 – 24.600 ) x US $ 5 x 2 lot ] – [ ( US $ 30 + US $ 3.3 ) x 2 lot ]<br />
                  P/L = ( 100 poin x US $ 5 x 2 lot ) – ( US $ 33.3 x 2 )<br />
                  P/L = US $ 1000 – US $ 66.6<br />
                  P/L = <span className="text-green-400 font-bold">US $ 933.4 (laba bersih)</span>
                </code>
              </div>
            </div>
          </section>

          {/* Example 2 */}
          <section className="bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-yellow-500 mb-4 flex items-center">
              <FaExchangeAlt className="mr-2" /> Contoh Transaksi Day Trade - Kerugian
            </h2>
            <div className="space-y-4">
              <p className="text-gray-200">Seorang Investor memprediksi Indeks Hang Seng akan mengalami penguatan, maka dia membuka posisi beli HKK5U pada level 24.600 poin sebanyak 1 lot. Namun prediksinya salah dan menutup di 24.550 poin.</p>
              
              <div className="bg-neutral-700/30 p-4 rounded-md overflow-x-auto border border-neutral-600/30">
                <code className="text-yellow-300 font-mono text-sm sm:text-base">
                  P/L = [ ( Selling Price – Buying Price ) x Contract Size x n Lot ] – [ ( Fee US $ 30 + VAT ) x n Lot ]<br />
                  P/L = [ ( 24.550 – 24.600 ) x US $ 5 x 1 lot ] – [ ( US $ 30 + US $ 3.3 ) x 1 lot ]<br />
                  P/L = ( – 50 poin x US $ 5 x 1 lot ) – ( US $ 33.3 x 1 lot )<br />
                  P/L = – US $ 250 – US $ 33.3<br />
                  P/L = <span className="text-red-400 font-bold">– US $ 283.3 (rugi bersih)</span>
                </code>
              </div>
            </div>
          </section>

          {/* Example 3 */}
          <section className="bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-yellow-500 mb-4 flex items-center">
              <FaExchangeAlt className="mr-2" /> Contoh Transaksi Overnight
            </h2>
            <div className="space-y-4">
              <p className="text-gray-200">Seorang investor memperkirakan Indeks Nikkei 225 akan melemah, maka pada tanggal 10 Juni investor membuka posisi jual di level 14.850 poin sebanyak 2 lot. Dua hari kemudian (12 Juni), investor menutup posisi jual 2 lot tersebut ketika indeks berada pada level 14.650 poin.</p>
              
              <div className="bg-neutral-700/30 p-4 rounded-md overflow-x-auto border border-neutral-600/30">
                <code className="text-yellow-300 font-mono text-sm sm:text-base">
                  P/L = [ ( Selling Price – Buying Price ) x Contract Size x n Lot ] - [ ( Fee US $ 30 + VAT ) x n Lot ]<br />
                  P/L = [ ( 14.850 – 14.650 ) x US $ 5 x 2 lot ] – [ ( US $ 30 + US $ 3.3 ) x 2 lot ]<br />
                  P/L = ( 200 poin x US $ 5 x 2 lot ) – ( US $ 33.3 x 2 lot )<br />
                  P/L = US $ 2000 – US $ 66.6<br />
                  P/L = <span className="text-green-400 font-medium">US $ 1933.4 (keuntungan kotor)</span>
                </code>
                
                <div className="mt-4 p-3 bg-neutral-800/50 rounded-md">
                  <p className="text-yellow-300">
                    <span className="text-gray-300">Keuntungan kotor</span> = US $ 1933.4<br />
                    <span className="text-gray-300">Roll over fee (US $ 2 x 2 lot x 2 malam)</span> = <span className="text-red-400">- US $ 8</span><br />
                    <span className="font-bold text-white">Keuntungan bersih = US $ 1925.4</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Forex Section */}
          <section className="bg-neutral-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Kode & Jenis Kontrak</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-neutral-900 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-yellow-600 text-white">
                    <th className="px-4 py-2">Kode Kontrak</th>
                    <th className="px-4 py-2">Dasar</th>
                    <th className="px-4 py-2">Kategori Rates</th>
                    <th className="px-4 py-2">Jenis Kontrak</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-700">
                  {[
                    ['GU1010_BBJ', 'GBP/USD', 'DIRECT', 'Kontrak Gulir Harian Harga Spot Great Britain Pound Sterling (GBP) terhadap US Dollar (USD)'],
                    ['EU1010_BBJ', 'EUR/USD', 'DIRECT', 'Kontrak Gulir Harian Harga Spot Euro (EUR) terhadap US Dollar (USD)'],
                    ['AU1010_BBJ', 'AUD/USD', 'DIRECT', 'Kontrak Gulir Harian Harga Spot Australian Dollar (AUD) terhadap US Dollar (USD)'],
                    ['UC1010_BBJ', 'USD/CHF', 'INDIRECT', 'Kontrak Gulir Harian Harga Spot US Dollar (USD) terhadap Swiss Franc (CHF)'],
                    ['UJ1010_BBJ', 'USD/JPY', 'INDIRECT', 'Kontrak Gulir Harian Harga Spot US Dollar (USD) terhadap Japanese Yen (JPY)']
                  ].map(([code, base, category, desc], idx) => (
                    <tr key={idx} className="hover:bg-neutral-700/50 transition-colors">
                      <td className="px-4 py-3 font-mono text-yellow-400">{code}</td>
                      <td className="px-4 py-3 font-medium text-gray-200">{base}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${category === 'DIRECT' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-300 text-sm">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-700/30 p-4 rounded-lg border border-neutral-600/30">
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">Ilustrasi Perhitungan Transaksi</h3>
                <div className="space-y-2">
                  <p className="text-gray-200">
                    <span className="font-semibold text-white">Untuk DIRECT RATES:</span><br />
                    <code className="block mt-1 bg-neutral-800/50 p-2 rounded text-yellow-300 font-mono text-sm">
                      P/L = (Harga Jual - Harga Beli) x Contract Size x Jumlah Lot
                    </code>
                  </p>
                  <p className="text-gray-200">
                    <span className="font-semibold text-white">Untuk INDIRECT RATES:</span><br />
                    <code className="block mt-1 bg-neutral-800/50 p-2 rounded text-yellow-300 font-mono text-sm">
                      P/L = (Harga Jual - Harga Beli) x Contract Size x Jumlah Lot
                    </code>
                  </p>
                </div>
              </div>

              <div className="bg-neutral-700/30 p-4 rounded-lg border border-neutral-600/30">
                <h4 className="text-lg font-semibold text-yellow-500 mb-3">Contoh Transaksi EU1010_BBJ (Daytrade)</h4>
                <p className="mb-3 text-gray-200">Nasabah beli EU1010_BBJ di 1.3530 sebanyak 2 lot, kemudian jual di 1.3540:</p>
                <div className="bg-neutral-800/50 p-3 rounded-md mb-4 border border-neutral-700/50">
                  <code className="text-yellow-300 font-mono text-sm sm:text-base">
                    P/L = (1.3540 - 1.3530) x 100,000 x 2 - [($30 + $3.3) x 2]<br />
                    = 0.0010 x 100,000 x 2 - ($33.3 x 2)<br />
                    = $200 - $66.6<br />
                    = <span className="text-green-400 font-bold">$133.4 (laba)</span>
                  </code>
                </div>
                <p className="mb-2 text-gray-300 text-sm">Jika harga turun ke 1.3525:</p>
                <div className="bg-neutral-800/50 p-3 rounded-md border border-neutral-700/50">
                  <code className="text-yellow-300 font-mono text-sm sm:text-base">
                    P/L = (1.3525 - 1.3530) x 100,000 x 2 - [($30 + $3.3) x 2]<br />
                    = -0.0005 x 100,000 x 2 - $66.6<br />
                    = -$100 - $66.6<br />
                    = <span className="text-red-400 font-bold">-$166.6 (rugi)</span>
                  </code>
                </div>
              </div>

              <div className="bg-neutral-700/30 p-4 rounded-lg border border-neutral-600/30 mt-6">
                <h4 className="text-lg font-semibold text-yellow-500 mb-3">Contoh Transaksi UJ1010_BBJ (Daytrade)</h4>
                <p className="mb-3 text-gray-200">Nasabah jual UJ1010_BBJ di 102.20 sebanyak 1 lot, kemudian tutup di 102.12:</p>
                <div className="bg-neutral-800/50 p-3 rounded-md mb-4 border border-neutral-700/50">
                  <code className="text-yellow-300 font-mono text-sm sm:text-base">
                    P/L = (102.20 - 102.12) / 102.12 x 100,000 x 1 - [($30 + $3.3) x 1]<br />
                    = 0.0007834 x 100,000 - $33.3<br />
                    = $78.34 - $33.3<br />
                    = <span className="text-green-400 font-bold">$45.04 (laba)</span>
                  </code>
                </div>
                <p className="mb-2 text-gray-300 text-sm">Jika harga naik ke 102.27:</p>
                <div className="bg-neutral-800/50 p-3 rounded-md border border-neutral-700/50">
                  <code className="text-yellow-300 font-mono text-sm sm:text-base">
                    P/L = (102.20 - 102.27) / 102.27 x 100,000 x 1 - [($30 + $3.3) x 1]<br />
                    = -0.0006844 x 100,000 - $33.3<br />
                    = -$68.44 - $33.3<br />
                    = <span className="text-red-400 font-bold">-$101.74 (rugi)</span>
                  </code>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTemplates>
  );
};

export default IlustrasiTransaksi;