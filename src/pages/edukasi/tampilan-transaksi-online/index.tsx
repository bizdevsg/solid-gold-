import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";

export default function TampilanTransaksiOnlinePage() {
  return (
    <PageTemplates title="Tampilan Transaksi Online">
      <div className="container text-gray-200">
        <Header 
          title="Tampilan Transaksi Online" 
          subtitle="PT. Solid Gold Berjangka" 
        />

        {/* HAL YANG PERLU DIKETAHUI DALAM ONLINE TRADING */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
              1
            </span>
            HAL YANG PERLU DIKETAHUI DALAM ONLINE TRADING
          </h2>

          {/* Updating Harga */}
          <div className="bg-neutral-800 rounded-lg p-6 mb-6 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">UPDATING HARGA</h3>
            <p className="text-gray-300 leading-relaxed">
              Pergantian harga pada sistem Online Trading mengacu pada harga Winquote yang bergerak, harga terakhir (last trade) ditambah 10 poin untuk beli dan dikurangi 10 poin untuk jual (spread 20 point).
            </p>
          </div>

          {/* Price Has Change */}
          <div className="bg-neutral-800 rounded-lg p-6 mb-6 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">PRICE HAS CHANGE</h3>
            <p className="text-gray-300 leading-relaxed">
              "Price has change" dalam pengambilan harga dapat saja terjadi kepada setiap Nasabah atau Kuasa Nasabah yang melakukan transaksi di Online Trading ataupun manual trading, dikarenakan bergeraknya harga yang terus menerus yang mengacu pada pergerakan harga di Winquote.
            </p>
          </div>

          {/* Harga yang dieksekusi berbeda */}
          <div className="bg-neutral-800 rounded-lg p-6 mb-6 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Harga yang dieksekusi berbeda dengan harga yang terjadi (Done)</h3>
            <p className="text-gray-300 leading-relaxed">
              Dalam bertransaksi menggunakan online trading ataupun manual trading (e-quote) kita juga sering jumpai harga yang kita eksekusi berbeda. Dan kejadian tersebut biasa terjadi karena harga yang muncul bergerak terus mengacu pada Winquote (Uptodate).
            </p>
          </div>

          {/* Kendala yang sering timbul */}
          <div className="bg-neutral-800 rounded-lg p-6 mb-6 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">KENDALA YANG SERING TIMBUL DALAM MENGGUNAKAN ONLINE TRADING</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Kendala yang sering terjadi pada saat bertransaksi menggunakan online trading disebabkan oleh beberapa faktor baik dari perangkat keras dan perangkat lunak yang kita gunakan ataupun user yang kurang memahami mekanisme transaksi online trading. Dalam beberapa faktor tersebut lebih banyak kita jumpai dari sisi perangkat lunak yang tidak kasat mata seperti faktor internet provider dan user. Pada saat kita akan bertransaksi sebaiknya user terlebih dahulu memahami mekanisme transaksi online trading dan melakukan simulasi dengan menggunakan account simulasi sebelum user melakukan transaksi pada "real account" dengan fasilitas internet yang digunakan mempunyai akses yang cepat dan stabil.
            </p>
          </div>

          {/* Loading lama */}
          <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Pada saat eksekusi harga Loading-nya lama</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Kejadian seperti ini juga sering kita jumpai pada saat bertransaksi menggunakan online trading, yang mana pada saat kita mengeksekusi posisi beli/jual, perolehan harganya (loading) sangat lama dan posisi dalam etrade tidak berubah-ubah. Kejadian seperti ini disebabkan oleh faktor perubahan harga secara drastis atau harga tidak stabil (market hectic), ataupun internet koneksi loss dari data yang terkirim ke online trading service, sehingga data tersebut tidak sampai ke online trading service. Apabila nasabah atau kuasa nasabah mengalami hal pada saat market hectic, sebaiknya refresh online trading tersebut, ataumenghubungi ke bagian dealing untuk melakukan pengecekan dari sisi perangkat lunak ataupun perangkat kerasnya.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Dapat disimpulkan dari penjelasan tersebut apabila mengalami kejadian seperti ini ada 2 sebab yaitu:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Market sedang hectic, sehingga pada saat masuk transaksi menggunakan "Market Order" akan mengalami kesulitan, oleh karena itu disarankan kepada nasabah untuk menggunakan 2 fasilitas yang tersedia dalam online trading yaitu dengan cara menggunakan "LIMIT ORDER" dan "STOP ORDER".</li>
              <li>Murni karena internet koneksi yang loss dan tidak stabil sehingga pada saat eksekusi data yang terkirim tidak sampai ke online trading service.</li>
            </ul>
          </div>
        </div>

        {/* PERINGATAN DALAM ONLINE TRADING */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
              2
            </span>
            PERINGATAN DALAM ONLINE TRADING
          </h2>

          <div className="space-y-6">
            {/* 1. Insufficient Margin */}
            <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">1. Insufficient Margin</h3>
              <p className="text-gray-300 leading-relaxed">
                Dalam online trading akan tertera peringatan "Insufficient Margin" apabila Effective Margin akun anda tidak mencukupi dengan jumlah lot transaksi yang diambil. Insufficient Margin juga akan muncul apabila pada saat mengambil posisi dengan jumlah lot yang lebih dimana pada saat bersamaan anda sedang memasang Limit atau Stop Order sehingga Effective Margin akan terpakai untuk sementara sesuai jumlah lot yang dipasang di Limit atau Stop Order, dana tersebut akan kembali lagi ke Effective Margin apabila pemasangan Limit atau Stop order tersebut dibatalkan (Cancel) sebelum pesanan/order harga beli/jual yang ditempatkan tersebut tereksekusi (Done).
              </p>
            </div>

            {/* 2. Price too Close / Price too Far */}
            <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">2. Price too Close / Price too Far</h3>
              <p className="text-gray-300 leading-relaxed">
                "Price too Close atau Price to Far" terjadi pada saat menggunakan limit atau stop order, yang mana harga yang di limit terlalu dekat atau terlalu jauh dari ketentuan Mekanisme Transaksi pada Online Trading. Perhatikanlah mekanisme transaksi pengambilan harga dengan menggunkan limit atau stop order tersebut. Apabila anda dalam bertransaksi menggunakan fasilitas tersebut dan dalam pengambilan harga dibawah 10 pts dari harga screen etrade atau diatas 500 pts dari harga screen maka keluarlah peringatan "price too close / price too far"
              </p>
            </div>

            {/* 3. Validation error */}
            <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">3. Validation error</h3>
              <p className="text-gray-300 leading-relaxed">
                "Validation Error"terjadiadanya kesalahan user pada saat transaksi menggunakan Market Order atau pun Limit Order dan Stop Order, yang mana kejadian tersebut disebabkan adanya kekurangan pengisian pada kolom-kolom yang tersedia atau pengambilan posisi melebihi batas transaksi lot (diatas 20 lot)
              </p>
            </div>

            {/* 4. Invalid Stop Order */}
            <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">4. Invalid Stop Order</h3>
              <p className="text-gray-300 leading-relaxed">
                Peringatan "Invalid Stop Order"terjadi pada saat anda menggunakan Limit Order untuk pengambilan posisi baru, yang mana dalam pengambilan posisi tersebut tidak sesuai dengan mekanisme transaksi (Pengambilan Harga berlawanan dari mekanisme transaksi Limit order). Contohnya, apabila mengambil posisi menggunakan Limit Order Sell New diharga 20490, sedangkan Screen etrade harga Sell di harga 20593, dan pada saat harga tersebut kita ambil keluarlah pesan "Invalid Stop Order" karena harga yang anda ambil berlawanan dengan Mekanisme Limit Order. Jadi harga yang bisa anda ambil adalah harga Sell pada Screen etrade (20593 + 10 pts sampai 500 pts) dan bukannya harga Sell pada Screen etrade (20593 – 10 pts sampai 500 pts).
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}