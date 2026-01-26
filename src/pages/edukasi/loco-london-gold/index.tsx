import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";

export default function LocoLondonGoldPage() {
  return (
    <PageTemplates title="Loco London Gold">
      <div className="container text-gray-200">
        <Header 
          title="Loco London Gold" 
          subtitle="PT. Solid Gold Berjangka" 
        />

        {/* LOCO LONDON GOLD */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              Emas merupakan salah satu jenis komoditi yang paling banyak diminati untuk tujuan investasi. Di samping itu, emas juga digunakan sebagai standar keuangan atau ekonomi, cadangan devisa dan alat pembayaran yang paling utama di beberapa negara. Para investor umumnya membeli emas untuk hedge atau safe haven terhadap beberapa krisis termasuk ekonomi, politik, sosial atau krisis yang berbasis mata uang.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Permintaan emas fisik mengalami peningkatan cukup signifikan dari tahun ke tahun. Padahal cadangan emas dunia sangatlah terbatas. Oleh karena itu, dibeberapa negara maju telah menyediakan investasi alternatif berupa produk derivatif emas dengan menarik sejumlah margin sebagai jaminan transaksinya (margin trading). Mengapa diperlukan margin?. Ini karena adanya faktor harga, dimana harga emas juga dapat berfluktuasi sebagaimana komoditas lainnya.
            </p>
          </div>

          {/* A. Sejarah Perdagangan Emas */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                A
              </span>
              Sejarah Perdagangan Emas
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Di dalam pasar komoditas istilah "Loco" berarti "di". Berasal dari bahasa latin Locus yang berarti tempat. Loco London merepresentasikan basis perdagangan dan penyelesaian emas dan perak internasional di London. Pelaksanaan pasar ini di bawah naungan London Bullion Market Association (LBMA), namun bukan bursa.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Pasar emas fisik (spot gold) terbesar dunia adalah London dan Zurich, akan tetapi London yang paling menonjol. London tumbuh mendominasi pasar emas pada saat emas menjadi mata uang utama. Penemuan signifikan di Ural (Rusia) telah meningkatkan produksi emas global di abad 18.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Pertengahan abad 19 menjadi momen bagi Inggris untuk mendominasi perdagangan dan keuangan dunia, sebagai sumber modal untuk pertambangan emas, dan menjadi standar emas mata uang lokal, British Pound. Sehingga London menjadi pusat perdagangan dan penyelesaian emas dunia.
            </p>

            {/* Perdagangan Over-the-Counter (OTC) */}
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">Perdagangan Over-the-Counter (OTC)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pasar emas London merupakan pasar Over-The-Counter yang berarti perdagangan dilakukan secara langsung antara dua pihak yang terlibat, dan tidak melalui pihak ketiga yang mengatur perdagangan, seperti bursa.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Pasar OTC berlangsung selama 24 jam sehari dan tidak mempunyai struktur formal dan tidak ada tempat pertemuan sentral. Sebagian besar perdagangan dilakukan melalui telpon atau sistem dealing elektronik.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Di pasar finansial global saat ini, perdagangan emas di London hampir terselenggara sepanjang waktu diseluruh dunia. Harga bid dan ask dikuotasikan secara kontinu di dalam sistem informasi pasar finansial yang dapat diakses seperti Reuters. Selain di London, pusat perdagangan utama lainnya untuk emas London termasuk New York, Zurich, Tokyo, Sydney dan Hong Kong, dimana Hong Kong menjadi pusat perdagangan di Asia.
            </p>

            {/* Mengapa berinvestasi di emas (Spot OTC) */}
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">Mengapa berinvestasi di emas (Spot OTC)</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Harga biasanya dikuotasikan dan diperdagangkan terhadap dolar AS;</li>
              <li>Loco London Market dapat melayani beberapa tujuan transaksi seperti hedging, investasi dan spekulasi;</li>
              <li>Di pasar OTC, investor dapat mempertahankan posisi mereka selama waktu yang mereka inginkan tanpa ada jatuh tempo;</li>
              <li>Menerima bunga saat menjual emas atau perak Loco-London pada suku bunga terakhir;</li>
              <li>Transaksi leverage pada margin;</li>
              <li>Diversifikasi portfolio investasi.</li>
            </ol>
          </div>

          {/* B. Pasar Emas Dunia */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                B
              </span>
              Pasar Emas Dunia
            </h2>

            {/* 1. Loco London Gold Market */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">1. Loco London Gold Market</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Di London, emas dan perak diperdagangkan oleh anggota-anggota London Bullion Market Association (LBMA), diawasi oleh Bank of England. Sebagian besar anggota-anggotanya adalah bank-bank internasional atau bullion dealer dan sejumlah refiner raksasa.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Perdagangan emas di pasar London memiliki sejarah panjang selama 3 abad, dan Gold Fixing (penetapan harga emas) hanya dibentuk setelah Perang Dunia I pada tahun 1919. Sistem Fixing ini berasal dari pasar perak London dan suatu konsep bagi investor seluruh dunia untuk melakukan beli dan jual emas pada single quoted price.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                The Fixing secara harian dilakukan 2 kali yakni pada pukul 10:30 am (16:30 wib) dan 15:00 pm (21:00 wib) di London dengan melibatkan 5 Anggota Fixing sebagai berikut:
              </p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Scotia-Mocatta, suksesor Mocatta & Goldsmid dan menjadi bagian Bank of Scotia</li>
                <li>Barclays Capital, menggantikan N. M. Rothschild & Sons Limited</li>
                <li>Deutsche Bank, owner Sharps Pixley</li>
                <li>HSBC, owner Samuel Montagu & Co.</li>
                <li>Société Générale, menggantikan Johnson Matthey dan CSFB (Credit Suisse First Boston)</li>
              </ul>
            </div>

            {/* 2. Pasar Emas Amerika */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">2. Pasar Emas Amerika</h3>
              <p className="text-gray-300 leading-relaxed">
                Di tahun 1975, America NewYork Commodity Exchange COMEX memulai perdagangan forward emas, menjadi sentral perdagangan forward emas dunia. Kini, pasar berjangka emas New York menggantikan status pasar di London dalam mengatur harga emas dunia. Alasan mengapa hal ini terjadi? Karena pasar New York memiliki keuntungan di dalam metode transaksi, aggregate supply, marked price dan waktu transaksi.
              </p>
            </div>

            {/* 3. Pasar Emas Hong Kong */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">3. Pasar Emas Hong Kong</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pasar emas di Hong Kong dikenal juga sebagai pasar emas Loco (Local) London. Kini market mempunyai sekitar 70 partisipan yang bertransaksi aktif, sebagian besar bank, perusahaan investasi dan pedagang emas lokal untuk hedge terhadap posisi-posisi mereka di pasar berjangka. Pasar emas Loco London ini dikuotasikan dalam US dollar per troy ounce emas murni 99,99% dan dengan penyerahan di London.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Chinese Gold and Silver Exchange Society mengoperasikan salah satu pasar emas terbesar di dunia. Emas yang diperdagangkan melalui lembaga ini memiliki kemurnian 99%, satuan berat dengan tael dan dikuotasikan dalam dolar Hong Kong. Harganya hampir mengikuti pasar emas besar lainnya di London, Zurich dan New York. Turnover di dalam bursa sebanyak 4,3 juta tael di 2001.
              </p>
            </div>
          </div>

          {/* C. Analisis Harga Emas */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                C
              </span>
              Analisis Harga Emas
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Pada kenyataan sehari-hari, harga emas tidak hanya tergantung kepada situasi permintaan dan penawaran, atau supply and demand. Harga emas juga dipengaruhi oleh situasi perekonomian secara keseluruhan.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Berikut ini beberapa situasi ekonomi yang sering mempengaruhi harga emas:
            </p>

            {/* 1. Perubahan kurs */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">1. Perubahan kurs</h3>
              <p className="text-gray-300 leading-relaxed">
                Melemahnya kurs dolar AS biasanya mendorong kenaikan harga emas dunia. Hal ini disebabkan karena para investor memilih untuk menjual mata uang dollar milik mereka dan kemudian membeli emas yang dinilai mampu melindungi nilai asset yang mereka miliki. Sebagai contoh, pada medio Oktober 2009, nilai tukar mata uang dolar terhadap mata uang lain terus menurun, sementara harga emas terus naik sampai ke level $1.070 per troy ounce yang merupakan harga emas tertinggi sepanjang sejarah.
              </p>
            </div>

            {/* 2. Situasi politik dunia */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">2. Situasi politik dunia</h3>
              <p className="text-gray-300 leading-relaxed">
                Kenaikan harga emas pada akhir tahun 2002 dan awal tahun 2003 terjadi sebagai dampak dari akan dilakukannya serangan ke Irak oleh sekutu yang dikomando AS. Pelaku pasar beralih investasi dari pasar uang dan pasar saham ke investasi emas sehingga permintaan emas melonjak tajam.
              </p>
            </div>

            {/* 3. Suplai dan permintaan */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">3. Suplai dan permintaan</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Salah satu contoh hal yang dapat mempengaruhi suplai dan permintaan (supply and demand) dari emas adalah seperti kejadian pada pertengahan tahun 1980. Pada saat itu, penjualan forward oleh perusahaan pertambangan selalu dipersalahkan atas terjadinya kenaikan pada harga emas. Dalam kerangka bisnis, sebenarnya perilaku perusahaan pertambangan tersebut masuk akal. Dengan melakukan penjualan forward ketika harga emas menguat, mereka dapat mengamankan harga output tambang pada harga yang cukup menarik.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Contoh lainnya, kasus pada pertengahan tahun 1998 di mana harga emas terus merosot. Saat itu, bank-bank sentral di Eropa menyatakan akan mengurangi cadangan emasnya sehubungan rencana pemberlakuan mata uang euro. Harga emas langsung anjlok di sekitar 290 dolar per troy ounce.
              </p>
            </div>

            {/* 4. Situasi ekonomi global */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">4. Situasi ekonomi global</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sekitar 80 persen dari total suplai emas digunakan industri perhiasan. Konsumsi perhiasan merupakan pengaruh yang besar pada sisi permintaan.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Ketika kondisi ekonomi meningkat, kebutuhan akan perhiasan cenderung naik. Namun, dari data statistik terlihat kebutuhan akan perhiasan lebih sensitif terhadap naik turunnya harga emas dibandingkan meningkatnya kondisi ekonomi.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Jatuhnya tingkat kebutuhan perhiasan pada masa resesi di tahun 1982-1983 terutama akibat naiknya harga emas secara simultan. Jatuhnya tingkat kebutuhan perhiasan di masa resesi awal 90-an lebih selaras dengan hal di atas, pada saat itu harga emas menjadi turun.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Situasi ekonomi yang tidak menentu dapat mengakibatkan inflasi tinggi. Emas biasa digunakan sebagai alat lindung nilai terhadap inflasi. Manfaat ini sudah dirasakan investor sejak lama. Dengan emas, investor mendapat perlindungan sempurna terhadap merosotnya daya beli. Ketika tahun 1978-1980 harga emas sedang booming; sementara inflasi di AS naik dari 4 persen menjadi 14 persen, harga emas naik 3 (tiga) kali lipat.
              </p>
            </div>

            {/* 5. Suku bunga */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">5. Suku bunga</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ketika tingkat suku bunga naik, ada usaha yang besar untuk tetap menyimpan uang pada deposito ketimbang emas yang tidak menghasilkan bunga (non interest-bearing). Ini akan menimbulkan tekanan pada harga emas. Sebaliknya, ketika suku bunga turun, harga emas akan cenderung naik.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Secara teori, jika suku bunga jangka pendek naik, harga emas turun. Di Indonesia teori ini tidak selalu berjalan.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Pada tahun 1998, karena nilai tukar rupiah merosot tajam terhadap mata uang dolar AS, pemerintah menaikkan tingkat suku bunga secara signifikan. Harapannya, menahan laju kenaikan nilai tukar dolar AS. Akibatnya, walaupun tingkat suku bunga naik, harga emas juga naik.
              </p>
            </div>
          </div>

          {/* D. Kontrak Derivatif Emas Loco London (SPA) */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                D
              </span>
              Kontrak Derivatif Emas Loco London (SPA)
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              Kini kontrak derivatif emas Loco London sebagai objek transaksi derivatif melalui Sistem Perdagangan Alternatif (SPA), berdasarkan Peraturan Kepala Badan Pengawas Perdagangan Berjangka Komoditi (Bappebti) bernomor 72/BAPPEBTI/Per/9/2009. Selain emas, dua produk lainnya adalah kontrak derivatif antar mata uang asing (foreign cross currencies) dan indeks.
            </p>
            
            <p className="text-gray-400 text-sm italic">
              *) Diolah dari beberapa sumber
            </p>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}