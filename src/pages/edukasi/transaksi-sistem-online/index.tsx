import React from "react";
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";
import Image from "next/image";
import { useI18n } from "@/i18n/useI18n";

type TextMap = { id: string; en: string };
const pick = (locale: string, value: TextMap) => (locale === "en" ? value.en : value.id);

export default function TransaksiSistemOnlinePage() {
  const { locale } = useI18n();
  const title = locale === "en" ? "Online System Transactions" : "Transaksi Sistem Online";
  const subtitle = "PT. Solid Gold Berjangka";

  return (
    <PageTemplates title={title}>
      <div className="container text-gray-200">
        <Header title={title} subtitle={subtitle} />

        {/* PENJELASAN DALAM TAMPILAN ONLINE TRADING */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
              1
            </span>
            {locale === "en"
              ? "Explanation of the Online Trading Screen"
              : "PENJELASAN DALAM TAMPILAN ONLINE TRADING"}
          </h2>

          {/* Main Image */}
          <div className="mb-8">
            <div className="relative w-full h-96 bg-gray-900/50 rounded-lg overflow-hidden">
              <Image
                src="/assets/TOS-image1.jpg"
                alt={locale === "en" ? "Online Trading Screen" : "Tampilan Online Trading"}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* PRICES Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">PRICES</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Tabel yang menginformasikan pergerakan harga acuan untuk produk HKK50 dan JPK50, beberapa kolom berfungsi sebagai market order dan limit order untuk membuka posisi baru (open position).",
                en: "A table showing reference price movements for HKK50 and JPK50. Several columns function as market and limit orders to open new positions.",
              })}
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Dalam tabel \"PRICES\" terdapat beberapa kolom yang berfungsi sebagai order adalah:",
                en: "In the \"PRICES\" table, the following columns function as orders:",
              })}
            </p>

            {/* a. Sell / Buy (Market Order) */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                a. Sell / Buy (Market Order)
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "adalah klik/tombol order untuk membuka posisi jual/beli yang harus segera dilaksanakan/dieksekusi pada harga terbaik yang bisa diperoleh saat itu.",
                  en: "Click/order button to open sell/buy positions that must be executed immediately at the best available price.",
                })}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Contoh: apabila klik market order sell akan tampil tabel seperti dibawah ini:",
                  en: "Example: clicking market sell will show a table like below:",
                })}
              </p>
              <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden">
                <Image
                  src="/assets/TOS-image2.jpg"
                  alt={locale === "en" ? "Market Order Example" : "Contoh Market Order"}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* b. Order (Limit Order) */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">b. Order (Limit Order)</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "adalah klik/tombol order untuk membuka posisi jual/beli dengan ditempatkan terlebih dahulu harga yang dikehendaki pada tingkat/batasan tertentu (minimal 10 poin dan maksimum 500 poin dari harga yang tengah berjalan saat itu), dan limit order tersebut akan tereksekusi (done) bilamana harga yang tengah berjalan mengenai limit order tersebut.",
                  en: "Click/order button to open sell/buy positions by placing a desired price within a certain range (min 10 points, max 500 points from the current price). The limit order executes when the running price reaches the limit.",
                })}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {pick(locale, {
                  id: "Apabila kolom order di klik maka akan muncul tabel seperti dibawah ini:",
                  en: "When the order column is clicked, a table appears like below:",
                })}
              </p>
              <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/assets/TOS-image3.jpg"
                  alt={locale === "en" ? "Limit Order Example" : "Contoh Limit Order"}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Contoh harga */}
            <div className="bg-neutral-700 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">
                {locale === "en"
                  ? "Example (HKK50 price on SPA screen):"
                  : "Contoh (harga HKK50 pada layar monitor SPA):"}
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-red-900/30 border border-red-600 rounded p-3">
                  <p className="text-red-400 font-semibold">Sell = 25.420</p>
                </div>
                <div className="bg-green-900/30 border border-green-600 rounded p-3">
                  <p className="text-green-400 font-semibold">Buy = 25.440</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {locale === "en"
                  ? "For transactions, the HKK50 column should be filled as follows:"
                  : "Untuk melakukan transaksi, kolom HKK50 yang harus diisi adalah:"}
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>{locale === "en" ? "BUY at 25.450 and above up to 500 pts" : "BUY di harga 25.450 ke atas sampai dengan 500 pts"}</li>
                <li>{locale === "en" ? "SELL at 25.410 and below up to 500 pts" : "SELL di harga 25.410 ke bawah sampai dengan 500 pts"}</li>
              </ul>
            </div>

            <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden">
              <Image
                src="/assets/TOS-image4.jpg"
                alt={locale === "en" ? "Price Example" : "Contoh Harga"}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* ORDERS Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">ORDERS</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "adalah tabel yang memberikan informasi status order transaksi (Pending / Done) bilamana eksekusi harga menggunakan Limit Order/Stop Loss.",
                en: "A table showing transaction order status (Pending/Done) when using Limit Order/Stop Loss.",
              })}
            </p>
            <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden">
              <Image
                src="/assets/TOS-image5.jpg"
                alt="Orders Table"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Menu Functions */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Menu Functions</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300">
                  <strong>Main:</strong>{" "}
                  {locale === "en"
                    ? "return to the default view (refresh or main menu)."
                    : "digunakan untuk kembali ke tampilan semula (refresh atau kembali ke menu utama)."}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300">
                  <strong>Trade History:</strong>{" "}
                  {locale === "en"
                    ? "transaction records: TradeID, Account, Item, Sell/Buy, Quantity, Time, New/Liq/Order, Status."
                    : "rekaman transaksi terdiri dari: TradeID, Account, Item, Sell/Buy, Quantity, Time, New / Liq / Order, dan Status."}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300">
                  <strong>Temporary Statement:</strong>{" "}
                  {locale === "en"
                    ? "temporary transaction report based on the latest user position."
                    : "adalah laporan transaksi sementara berdasarkan posisi transaksi terakhir dari user."}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300">
                  <strong>Daily Statement:</strong>{" "}
                  {locale === "en"
                    ? "full daily transaction report for the previous day (T-1)."
                    : "menampilkan laporan transaksi harian secara penuh di hari sebelumnya (T – 1)."}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300">
                  <strong>User Options:</strong>{" "}
                  {locale === "en"
                    ? "shows user status and allows password changes."
                    : "menjelaskan status user dan digunakan apabila hendak mengganti password."}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300">
                  <strong>News/Announcements:</strong>{" "}
                  {locale === "en"
                    ? "headline news and content related to Asian and global stock indices."
                    : "adalah headline news berikut isinya, berupa berita ekonomi dan bisnis terpilih yang relevan dengan perkembangan indeks saham di beberapa bursa saham Asia dan dunia."}
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300">
                  <strong>Logout:</strong>{" "}
                  {locale === "en"
                    ? "used when the user wants to exit trading/login."
                    : "digunakan apabila user akan keluar dari trading login / offline."}
                </p>
              </div>
            </div>
          </div>

          {/* OPEN POSITIONS */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">OPEN POSITIONS</h3>
            <p className="text-gray-300 leading-relaxed">
              {pick(locale, {
                id: "adalah informasi yang menunjukkan posisi yang dibuka pada harga, dan jumlah lot di hari tersebut telah terlaksana/tereksekusi dan tercatat dalam sistem online trading.",
                en: "Information showing opened positions, prices, and lots executed that day recorded in the online trading system.",
              })}
            </p>
          </div>

          {/* GTC Order (Liquidation) */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">GTC Order (Liquidation)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Adalah kolom klik untuk limit order yang digunakan untuk melikuidasi posisi terbuka yang ada.",
                en: "A click column for limit orders used to liquidate open positions.",
              })}
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Bila kolom GTC Order (Liq) pada tabel Open Positions di klik, maka akan muncul tabel seperti dibawah ini:",
                en: "If GTC Order (Liq) is clicked in the Open Positions table, a table appears as below:",
              })}
            </p>
            <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden">
              <Image
                src="/assets/TOS-image6.jpg"
                alt="GTC Order Liquidation"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Buy/Sell (Liquidation) */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Buy/Sell (Liquidation)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Merupakan kolom klik untuk market order yang digunakan untuk melikuidasi posisi terbuka dengan terlebih dahulu memilih posisi yang akan dilikuidasi (pada kolom open position di screen).",
                en: "A click column for market orders used to liquidate open positions by selecting the position to be liquidated in the open position column.",
              })}
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {pick(locale, {
                id: "Bila kolom Buy/Sell (Liq) pada tabel Open Positions di klik, maka akan muncul tabel seperti dibawah ini:",
                en: "If Buy/Sell (Liq) is clicked in Open Positions, a table appears as below:",
              })}
            </p>
            <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden">
              <Image
                src="/assets/TOS-image7.jpg"
                alt="Buy Sell Liquidation"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}
