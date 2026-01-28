import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";
import Image from 'next/image';

export default function TransaksiSistemOnlinePage() {
  return (
    <PageTemplates title="Transaksi Sistem Online">
      <div className="container text-gray-200">
        <Header 
          title="Transaksi Sistem Online" 
          subtitle="PT. Solid Gold Berjangka" 
        />

        {/* PENJELASAN DALAM TAMPILAN ONLINE TRADING */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
              1
            </span>
            PENJELASAN DALAM TAMPILAN ONLINE TRADING
          </h2>

          {/* Main Image */}
          <div className="mb-8">
            <div className="relative w-full h-96 bg-gray-900/50 rounded-lg overflow-hidden">
              <Image
                src="/assets/TOS-image1.jpg"
                alt="Tampilan Online Trading"
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
              Tabel yang menginformasikan pergerakan harga acuan untuk produk HKK50 dan JPK50, beberapa kolom berfungsi sebagai market order dan limit order untuk membuka posisi baru (open position).
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dalam tabel "PRICES" terdapat beberapa kolom yang berfungsi sebagai order adalah:
            </p>

            {/* a. Sell / Buy (Market Order) */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">a. Sell / Buy (Market Order)</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                adalah klik/tombol order untuk membuka posisi jual/beli yang harus segera dilaksanakan/dieksekusi pada harga terbaik yang bisa diperoleh saat itu.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Contoh: apabila klik market order sell akan tampil tabel seperti dibawah ini:
              </p>
              <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden">
                <Image
                  src="/assets/TOS-image2.jpg"
                  alt="Market Order Example"
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
                adalah klik/tombol order untuk membuka posisi jual/beli dengan ditempatkan terlebih dahulu harga yang dikehendaki pada tingkat/batasan tertentu (minimal 10 poin dan maksimum 500 poin dari harga yang tengah berjalan saat itu), dan limit order tersebut akan tereksekusi (done) bilamana harga yang tengah berjalan mengenai limit order tersebut.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Apabila kolom order di klik maka akan muncul tabel seperti dibawah ini:
              </p>
              <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/assets/TOS-image3.jpg"
                  alt="Limit Order Example"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Contoh harga */}
            <div className="bg-neutral-700 rounded-lg p-4 mb-4">
              <h4 className="text-lg font-semibold text-white mb-3">Contoh (harga HKK50 pada layar monitor SPA):</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-red-900/30 border border-red-600 rounded p-3">
                  <p className="text-red-400 font-semibold">Sell = 25.420</p>
                </div>
                <div className="bg-green-900/30 border border-green-600 rounded p-3">
                  <p className="text-green-400 font-semibold">Buy = 25.440</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Untuk melakukan transaksi, kolom HKK50 yang harus diisi adalah:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                <li>BUY di harga 25.450 ke atas sampai dengan 500 pts</li>
                <li>SELL di harga 25.410 ke bawah sampai dengan 500 pts</li>
              </ul>
            </div>

            <div className="relative w-full h-64 bg-gray-900/50 rounded-lg overflow-hidden">
              <Image
                src="/assets/TOS-image4.jpg"
                alt="Price Example"
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
              adalah tabel yang memberikan informasi status order transaksi (Pending / Done) bilamana eksekusi harga menggunakan Limit Order/Stop Loss.
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
                <p className="text-gray-300"><strong>Main:</strong> digunakan untuk kembali ke tampilan semula (refresh atau kembali ke menu utama).</p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300"><strong>Trade History:</strong> rekaman transaksi terdiri dari: TradeID, Account, Item, Sell/Buy, Quantity, Time, New / Liq / Order, dan Status.</p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300"><strong>Temporary Statement:</strong> adalah laporan transaksi sementara berdasarkan posisi transaksi terakhir dari user.</p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300"><strong>Daily Statement:</strong> menampilkan laporan transaksi harian secara penuh di hari sebelumnya (T – 1).</p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300"><strong>User Options:</strong> menjelaskan status user dan digunakan apabila hendak mengganti password.</p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300"><strong>News/Announcements:</strong> adalah headline news berikut isinya, berupa berita ekonomi dan bisnis terpilih yang relevan dengan perkembangan indeks saham di beberapa bursa saham Asia dan dunia.</p>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <p className="text-gray-300"><strong>Logout:</strong> digunakan apabila user akan keluar dari trading login / offline.</p>
              </div>
            </div>
          </div>

          {/* OPEN POSITIONS */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">OPEN POSITIONS</h3>
            <p className="text-gray-300 leading-relaxed">
              adalah informasi yang menunjukkan posisi yang dibuka pada harga, dan jumlah lot di hari tersebut telah terlaksana/tereksekusi dan tercatat dalam sistem online trading.
            </p>
          </div>

          {/* GTC Order (Liquidation) */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">GTC Order (Liquidation)</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Adalah kolom klik untuk limit order yang digunakan untuk melikuidasi posisi terbuka yang ada.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bila kolom GTC Order (Liq) pada tabel Open Positions di klik, maka akan muncul tabel seperti dibawah ini:
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
              Merupakan kolom klik untuk market order yang digunakan untuk melikuidasi posisi terbuka dengan terlebih dahulu memilih posisi yang akan dilikuidasi (pada kolom open position di screen).
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bila kolom Buy/Sell (Liq) pada tabel Open Positions di klik, maka akan muncul tabel seperti dibawah ini:
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
