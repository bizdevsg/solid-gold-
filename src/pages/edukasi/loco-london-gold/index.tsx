import React from "react";
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";
import { useI18n } from "@/i18n/useI18n";

type TextMap = { id: string; en: string };
const pick = (locale: string, value: TextMap) => (locale === "en" ? value.en : value.id);

export default function LocoLondonGoldPage() {
  const { locale } = useI18n();
  const title = "Loco London Gold";
  const subtitle = "PT. Solid Gold Berjangka";

  return (
    <PageTemplates title={title}>
      <div className="container text-gray-200">
        <Header title={title} subtitle={subtitle} />

        {/* LOCO LONDON GOLD */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Emas merupakan salah satu jenis komoditi yang paling banyak diminati untuk tujuan investasi. Di samping itu, emas juga digunakan sebagai standar keuangan atau ekonomi, cadangan devisa dan alat pembayaran yang paling utama di beberapa negara. Para investor umumnya membeli emas untuk hedge atau safe haven terhadap beberapa krisis termasuk ekonomi, politik, sosial atau krisis yang berbasis mata uang.",
                en: "Gold is one of the most popular commodities for investment. It is also used as a financial/economic standard, foreign exchange reserve, and a primary means of payment in several countries. Investors typically buy gold as a hedge or safe haven against crises including economic, political, social, or currency-based crises.",
              })}
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Permintaan emas fisik mengalami peningkatan cukup signifikan dari tahun ke tahun. Padahal cadangan emas dunia sangatlah terbatas. Oleh karena itu, dibeberapa negara maju telah menyediakan investasi alternatif berupa produk derivatif emas dengan menarik sejumlah margin sebagai jaminan transaksinya (margin trading). Mengapa diperlukan margin?. Ini karena adanya faktor harga, dimana harga emas juga dapat berfluktuasi sebagaimana komoditas lainnya.",
                en: "Physical gold demand has increased significantly year by year, while global reserves are limited. Therefore, some developed countries offer alternative investments in gold derivatives using margin as collateral (margin trading). Margin is needed because gold prices can fluctuate like other commodities.",
              })}
            </p>
          </div>

          {/* A. Sejarah Perdagangan Emas */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                A
              </span>
              {locale === "en" ? "History of Gold Trading" : "Sejarah Perdagangan Emas"}
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Di dalam pasar komoditas istilah \"Loco\" berarti \"di\". Berasal dari bahasa latin Locus yang berarti tempat. Loco London merepresentasikan basis perdagangan dan penyelesaian emas dan perak internasional di London. Pelaksanaan pasar ini di bawah naungan London Bullion Market Association (LBMA), namun bukan bursa.",
                en: "In commodity markets, the term \"Loco\" means \"in\". It comes from Latin 'Locus' meaning place. Loco London represents the base for international gold and silver trading and settlement in London. This market is under the London Bullion Market Association (LBMA), but it is not an exchange.",
              })}
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Pasar emas fisik (spot gold) terbesar dunia adalah London dan Zurich, akan tetapi London yang paling menonjol. London tumbuh mendominasi pasar emas pada saat emas menjadi mata uang utama. Penemuan signifikan di Ural (Rusia) telah meningkatkan produksi emas global di abad 18.",
                en: "The largest physical gold (spot) markets are London and Zurich, with London being the most prominent. London rose to dominance when gold became the primary currency. Significant discoveries in the Ural (Russia) boosted global gold production in the 18th century.",
              })}
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {pick(locale, {
                id: "Pertengahan abad 19 menjadi momen bagi Inggris untuk mendominasi perdagangan dan keuangan dunia, sebagai sumber modal untuk pertambangan emas, dan menjadi standar emas mata uang lokal, British Pound. Sehingga London menjadi pusat perdagangan dan penyelesaian emas dunia.",
                en: "In the mid-19th century, the UK dominated global trade and finance, supplying capital for gold mining and adopting the gold standard for the British Pound. This made London the center of global gold trading and settlement.",
              })}
            </p>

            {/* Perdagangan Over-the-Counter (OTC) */}
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              {locale === "en" ? "Over-the-Counter (OTC) Trading" : "Perdagangan Over-the-Counter (OTC)"}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Pasar emas London merupakan pasar Over-The-Counter yang berarti perdagangan dilakukan secara langsung antara dua pihak yang terlibat, dan tidak melalui pihak ketiga yang mengatur perdagangan, seperti bursa.",
                en: "The London gold market is an Over-The-Counter market, meaning trades occur directly between two parties without a third-party exchange.",
              })}
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Pasar OTC berlangsung selama 24 jam sehari dan tidak mempunyai struktur formal dan tidak ada tempat pertemuan sentral. Sebagian besar perdagangan dilakukan melalui telpon atau sistem dealing elektronik.",
                en: "OTC markets run 24 hours a day without a formal structure or central meeting place. Most trading is done by phone or electronic dealing systems.",
              })}
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {pick(locale, {
                id: "Di pasar finansial global saat ini, perdagangan emas di London hampir terselenggara sepanjang waktu diseluruh dunia. Harga bid dan ask dikuotasikan secara kontinu di dalam sistem informasi pasar finansial yang dapat diakses seperti Reuters. Selain di London, pusat perdagangan utama lainnya untuk emas London termasuk New York, Zurich, Tokyo, Sydney dan Hong Kong, dimana Hong Kong menjadi pusat perdagangan di Asia.",
                en: "In today’s global financial market, London gold trades almost continuously worldwide. Bid and ask prices are quoted continuously via financial information systems such as Reuters. Other major centers include New York, Zurich, Tokyo, Sydney, and Hong Kong (the main hub in Asia).",
              })}
            </p>

            {/* Mengapa berinvestasi di emas (Spot OTC) */}
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              {locale === "en"
                ? "Why invest in gold (Spot OTC)"
                : "Mengapa berinvestasi di emas (Spot OTC)"}
            </h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>{pick(locale, { id: "Harga biasanya dikuotasikan dan diperdagangkan terhadap dolar AS;", en: "Prices are usually quoted and traded against the US dollar;" })}</li>
              <li>{pick(locale, { id: "Loco London Market dapat melayani beberapa tujuan transaksi seperti hedging, investasi dan spekulasi;", en: "The Loco London Market serves hedging, investment, and speculation purposes;" })}</li>
              <li>{pick(locale, { id: "Di pasar OTC, investor dapat mempertahankan posisi mereka selama waktu yang mereka inginkan tanpa ada jatuh tempo;", en: "In OTC markets, investors can hold positions for as long as they want without expiration;" })}</li>
              <li>{pick(locale, { id: "Menerima bunga saat menjual emas atau perak Loco-London pada suku bunga terakhir;", en: "Receive interest when selling Loco-London gold or silver at the prevailing rate;" })}</li>
              <li>{pick(locale, { id: "Transaksi leverage pada margin;", en: "Leverage transactions with margin;" })}</li>
              <li>{pick(locale, { id: "Diversifikasi portfolio investasi.", en: "Investment portfolio diversification." })}</li>
            </ol>
          </div>

          {/* B. Pasar Emas Dunia */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                B
              </span>
              {locale === "en" ? "Global Gold Markets" : "Pasar Emas Dunia"}
            </h2>

            {/* 1. Loco London Gold Market */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "1. Loco London Gold Market" : "1. Loco London Gold Market"}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Di London, emas dan perak diperdagangkan oleh anggota-anggota London Bullion Market Association (LBMA), diawasi oleh Bank of England. Sebagian besar anggota-anggotanya adalah bank-bank internasional atau bullion dealer dan sejumlah refiner raksasa.",
                  en: "In London, gold and silver are traded by LBMA members under the supervision of the Bank of England. Most members are international banks or bullion dealers and major refiners.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Perdagangan emas di pasar London memiliki sejarah panjang selama 3 abad, dan Gold Fixing (penetapan harga emas) hanya dibentuk setelah Perang Dunia I pada tahun 1919. Sistem Fixing ini berasal dari pasar perak London dan suatu konsep bagi investor seluruh dunia untuk melakukan beli dan jual emas pada single quoted price.",
                  en: "Gold trading in London has a 3-century history. Gold Fixing was established after World War I in 1919, originating from the London silver market, providing a single quoted price for global investors.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "The Fixing secara harian dilakukan 2 kali yakni pada pukul 10:30 am (16:30 wib) dan 15:00 pm (21:00 wib) di London dengan melibatkan 5 Anggota Fixing sebagai berikut:",
                  en: "The Fixing is conducted twice daily at 10:30 am (16:30 WIB) and 3:00 pm (21:00 WIB) in London, involving five Fixing members:",
                })}
              </p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>{pick(locale, { id: "Scotia-Mocatta, suksesor Mocatta & Goldsmid dan menjadi bagian Bank of Scotia", en: "Scotia-Mocatta, successor of Mocatta & Goldsmid, part of Bank of Scotia" })}</li>
                <li>{pick(locale, { id: "Barclays Capital, menggantikan N. M. Rothschild & Sons Limited", en: "Barclays Capital, replacing N. M. Rothschild & Sons Limited" })}</li>
                <li>{pick(locale, { id: "Deutsche Bank, owner Sharps Pixley", en: "Deutsche Bank, owner of Sharps Pixley" })}</li>
                <li>{pick(locale, { id: "HSBC, owner Samuel Montagu & Co.", en: "HSBC, owner of Samuel Montagu & Co." })}</li>
                <li>{pick(locale, { id: "Société Générale, menggantikan Johnson Matthey dan CSFB (Credit Suisse First Boston)", en: "Société Générale, replacing Johnson Matthey and CSFB (Credit Suisse First Boston)" })}</li>
              </ul>
            </div>

            {/* 2. Pasar Emas Amerika */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "2. US Gold Market" : "2. Pasar Emas Amerika"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {pick(locale, {
                  id: "Di tahun 1975, America NewYork Commodity Exchange COMEX memulai perdagangan forward emas, menjadi sentral perdagangan forward emas dunia. Kini, pasar berjangka emas New York menggantikan status pasar di London dalam mengatur harga emas dunia. Alasan mengapa hal ini terjadi? Karena pasar New York memiliki keuntungan di dalam metode transaksi, aggregate supply, marked price dan waktu transaksi.",
                  en: "In 1975, the New York Commodity Exchange (COMEX) started gold forward trading, becoming the global center for gold forwards. Today, the New York gold futures market has replaced London in setting global gold prices due to advantages in trading methods, aggregate supply, marked price, and trading hours.",
                })}
              </p>
            </div>

            {/* 3. Pasar Emas Hong Kong */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "3. Hong Kong Gold Market" : "3. Pasar Emas Hong Kong"}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Pasar emas di Hong Kong dikenal juga sebagai pasar emas Loco (Local) London. Kini market mempunyai sekitar 70 partisipan yang bertransaksi aktif, sebagian besar bank, perusahaan investasi dan pedagang emas lokal untuk hedge terhadap posisi-posisi mereka di pasar berjangka. Pasar emas Loco London ini dikuotasikan dalam US dollar per troy ounce emas murni 99,99% dan dengan penyerahan di London.",
                  en: "The Hong Kong gold market is also known as the Loco (Local) London market. It has around 70 active participants, mostly banks, investment firms, and local gold dealers hedging futures positions. Loco London gold is quoted in USD per troy ounce of 99.99% pure gold with delivery in London.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                {pick(locale, {
                  id: "Chinese Gold and Silver Exchange Society mengoperasikan salah satu pasar emas terbesar di dunia. Emas yang diperdagangkan melalui lembaga ini memiliki kemurnian 99%, satuan berat dengan tael dan dikuotasikan dalam dolar Hong Kong. Harganya hampir mengikuti pasar emas besar lainnya di London, Zurich dan New York. Turnover di dalam bursa sebanyak 4,3 juta tael di 2001.",
                  en: "The Chinese Gold and Silver Exchange Society operates one of the world’s largest gold markets. Gold traded has 99% purity, measured in tael and quoted in HKD. Prices generally track London, Zurich, and New York. Turnover reached 4.3 million tael in 2001.",
                })}
              </p>
            </div>
          </div>

          {/* C. Analisis Harga Emas */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                C
              </span>
              {locale === "en" ? "Gold Price Analysis" : "Analisis Harga Emas"}
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {pick(locale, {
                id: "Pada kenyataan sehari-hari, harga emas tidak hanya tergantung kepada situasi permintaan dan penawaran, atau supply and demand. Harga emas juga dipengaruhi oleh situasi perekonomian secara keseluruhan.",
                en: "In practice, gold prices are not only driven by supply and demand, but also by overall economic conditions.",
              })}
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {locale === "en" ? "Several economic situations often affect gold prices:" : "Berikut ini beberapa situasi ekonomi yang sering mempengaruhi harga emas:"}
            </p>

            {/* 1. Perubahan kurs */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "1. Exchange rate changes" : "1. Perubahan kurs"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {pick(locale, {
                  id: "Melemahnya kurs dolar AS biasanya mendorong kenaikan harga emas dunia. Hal ini disebabkan karena para investor memilih untuk menjual mata uang dollar milik mereka dan kemudian membeli emas yang dinilai mampu melindungi nilai asset yang mereka miliki. Sebagai contoh, pada medio Oktober 2009, nilai tukar mata uang dolar terhadap mata uang lain terus menurun, sementara harga emas terus naik sampai ke level $1.070 per troy ounce yang merupakan harga emas tertinggi sepanjang sejarah.",
                  en: "A weaker US dollar usually pushes gold prices higher. Investors sell dollars and buy gold to protect asset value. For example, in mid‑October 2009, the dollar weakened while gold rose to $1,070 per troy ounce—its highest level at the time.",
                })}
              </p>
            </div>

            {/* 2. Situasi politik dunia */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "2. Global political situations" : "2. Situasi politik dunia"}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {pick(locale, {
                  id: "Kenaikan harga emas pada akhir tahun 2002 dan awal tahun 2003 terjadi sebagai dampak dari akan dilakukannya serangan ke Irak oleh sekutu yang dikomando AS. Pelaku pasar beralih investasi dari pasar uang dan pasar saham ke investasi emas sehingga permintaan emas melonjak tajam.",
                  en: "Gold prices rose in late 2002 and early 2003 due to the upcoming Iraq invasion led by the US. Investors shifted from money and stock markets to gold, sharply increasing demand.",
                })}
              </p>
            </div>

            {/* 3. Suplai dan permintaan */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "3. Supply and demand" : "3. Suplai dan permintaan"}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Salah satu contoh hal yang dapat mempengaruhi suplai dan permintaan (supply and demand) dari emas adalah seperti kejadian pada pertengahan tahun 1980. Pada saat itu, penjualan forward oleh perusahaan pertambangan selalu dipersalahkan atas terjadinya kenaikan pada harga emas. Dalam kerangka bisnis, sebenarnya perilaku perusahaan pertambangan tersebut masuk akal. Dengan melakukan penjualan forward ketika harga emas menguat, mereka dapat mengamankan harga output tambang pada harga yang cukup menarik.",
                  en: "An example of supply-demand effects occurred in the mid‑1980s when mining companies’ forward sales were blamed for gold price changes. In business terms, forward selling when prices rose helped secure favorable output prices.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                {pick(locale, {
                  id: "Contoh lainnya, kasus pada pertengahan tahun 1998 di mana harga emas terus merosot. Saat itu, bank-bank sentral di Eropa menyatakan akan mengurangi cadangan emasnya sehubungan rencana pemberlakuan mata uang euro. Harga emas langsung anjlok di sekitar 290 dolar per troy ounce.",
                  en: "Another example was mid‑1998 when gold prices fell sharply after European central banks announced plans to reduce gold reserves ahead of the euro. Prices dropped to around $290 per troy ounce.",
                })}
              </p>
            </div>

            {/* 4. Situasi ekonomi global */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "4. Global economic conditions" : "4. Situasi ekonomi global"}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Sekitar 80 persen dari total suplai emas digunakan industri perhiasan. Konsumsi perhiasan merupakan pengaruh yang besar pada sisi permintaan.",
                  en: "About 80% of gold supply is used by the jewelry industry. Jewelry demand strongly affects overall demand.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Ketika kondisi ekonomi meningkat, kebutuhan akan perhiasan cenderung naik. Namun, dari data statistik terlihat kebutuhan akan perhiasan lebih sensitif terhadap naik turunnya harga emas dibandingkan meningkatnya kondisi ekonomi.",
                  en: "When economic conditions improve, jewelry demand tends to rise. However, data shows it is more sensitive to gold price changes than to economic growth.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Jatuhnya tingkat kebutuhan perhiasan pada masa resesi di tahun 1982-1983 terutama akibat naiknya harga emas secara simultan. Jatuhnya tingkat kebutuhan perhiasan di masa resesi awal 90-an lebih selaras dengan hal di atas, pada saat itu harga emas menjadi turun.",
                  en: "The decline in jewelry demand during the 1982–83 recession was mainly due to simultaneous gold price increases. In the early 1990s recession, demand fell as gold prices dropped.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Situasi ekonomi yang tidak menentu dapat mengakibatkan inflasi tinggi. Emas biasa digunakan sebagai alat lindung nilai terhadap inflasi. Manfaat ini sudah dirasakan investor sejak lama. Dengan emas, investor mendapat perlindungan sempurna terhadap merosotnya daya beli. Ketika tahun 1978-1980 harga emas sedang booming; sementara inflasi di AS naik dari 4 persen menjadi 14 persen, harga emas naik 3 (tiga) kali lipat.",
                  en: "Uncertain economic conditions can lead to high inflation. Gold is commonly used as an inflation hedge. This benefit has long been recognized: during 1978–1980, while US inflation rose from 4% to 14%, gold prices tripled.",
                })}
              </p>
            </div>

            {/* 5. Suku bunga */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "5. Interest rates" : "5. Suku bunga"}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Ketika tingkat suku bunga naik, ada usaha yang besar untuk tetap menyimpan uang pada deposito ketimbang emas yang tidak menghasilkan bunga (non interest-bearing). Ini akan menimbulkan tekanan pada harga emas. Sebaliknya, ketika suku bunga turun, harga emas akan cenderung naik.",
                  en: "When interest rates rise, investors prefer deposits over non‑interest‑bearing gold, pressuring gold prices. Conversely, lower interest rates tend to support higher gold prices.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Secara teori, jika suku bunga jangka pendek naik, harga emas turun. Di Indonesia teori ini tidak selalu berjalan.",
                  en: "In theory, higher short‑term interest rates mean lower gold prices, but this does not always hold in Indonesia.",
                })}
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                {pick(locale, {
                  id: "Pada tahun 1998, karena nilai tukar rupiah merosot tajam terhadap mata uang dolar AS, pemerintah menaikkan tingkat suku bunga secara signifikan. Harapannya, menahan laju kenaikan nilai tukar dolar AS. Akibatnya, walaupun tingkat suku bunga naik, harga emas juga naik.",
                  en: "In 1998, the rupiah fell sharply against the US dollar, prompting the government to raise interest rates significantly. Despite higher rates, gold prices still rose.",
                })}
              </p>
            </div>
          </div>

          {/* D. Kontrak Derivatif Emas Loco London (SPA) */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                D
              </span>
              {locale === "en" ? "Loco London Gold Derivative Contract (SPA)" : "Kontrak Derivatif Emas Loco London (SPA)"}
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Kini kontrak derivatif emas Loco London sebagai objek transaksi derivatif melalui Sistem Perdagangan Alternatif (SPA), berdasarkan Peraturan Kepala Badan Pengawas Perdagangan Berjangka Komoditi (Bappebti) bernomor 72/BAPPEBTI/Per/9/2009. Selain emas, dua produk lainnya adalah kontrak derivatif antar mata uang asing (foreign cross currencies) dan indeks.",
                en: "Loco London gold derivative contracts are traded via the Alternative Trading System (SPA) under Bappebti Regulation No. 72/BAPPEBTI/Per/9/2009. Other products include foreign cross currency derivatives and index derivatives.",
              })}
            </p>
            
            <p className="text-gray-400 text-sm italic">
              {locale === "en" ? "*) Compiled from multiple sources" : "*) Diolah dari beberapa sumber"}
            </p>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}
