import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";

export default function IstilahDalamTransaksiOnlinePage() {
  return (
    <PageTemplates title="Istilah Dalam Transaksi Online">
      <div className="container text-gray-200">
        <Header 
          title="Istilah Dalam Transaksi Online" 
          subtitle="PT. Solid Gold Berjangka" 
        />

        {/* ISTILAH DALAM TRANSAKSI ONLINE */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">

          {/* Market Order */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">Market Order</h3>
            <p className="text-gray-300 leading-relaxed">
              Adalah pengambilan posisi jual/beli yang harus segera dilaksanakan/dieksekusi seketika itu juga pada harga terbaik yang bisa diperoleh saat itu. Order ini digunakan untuk membuka posisi baru atau untuk melikuidasi posisi yang ada.
            </p>
          </div>

          {/* Limit Order */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">Limit Order</h3>
            <p className="text-gray-300 leading-relaxed">
              Adalah pesanan pengambilan harga dengan batasan maksimum/minimum tertentu, dimana limit order ini dapat digunakan untuk membuka posisi baru (open position) dan melikuidasi posisi yang ada (liquidation position)
            </p>
          </div>

          {/* Stop Order */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">Stop Order</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Stop Order (juga disebut stop loss order) adalah order digunakan ketika harga diatas atau dibawah dari batas harga yang telah ditentukan (stop price). Ketika stop price yang ditentukan tercapai, maka stop order tersebut berubah menjadi market order (tidak lagi limit). Order ini digunakan untuk membatasi kerugian/mengurangi resiko atau untuk melindungi keuntungan atas posisi yang terbuka.
            </p>
            <p className="text-gray-300 leading-relaxed mb-10">
              Dengan adanya stop order, pengguna/nasabah tidak harus selalu aktif memonitor pergerakan harga karena stop order akan berfungsi secara otomatis sesuai dengan batas harga yang diinginkan pengguna/nasabah. Dalam situasi fluktuasi harga sangat cepat, stop order yang tereksekusi (menjadi market order) kemungkinan perolehannya bisa berbeda dengan stop price.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Stop Order terdiri dari:
            </p>
          </div>

          {/* Sell Stop Order */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white text-yellow-500 mb-3">Sell Stop Order</h4>
            <p className="text-gray-300 leading-relaxed mb-3">
              adalah instruksi jual di harga terbaik apabila harga berada dibawah stop price. Order ini selalu berada dibawah harga market yang sedang berjalan. Misalnya seorang nasabah hendak mempertahankan posisi beli produk indeks saham di level 25.050 tetapi khawatir bila harganya jatuh maka ia dapat menempatkan sell stop order di level tertentu sesuai keinginannya misal di 25.010. Ketika indeks saham jatuh melampaui 25.010, maka sell stop order tereksekusi (menjadi market order). Dengan demikian nasabah dapat membatasi kerugian atau melindungi atas posisi yang dimilikinya.
            </p>
          </div>

          {/* Buy Stop Order */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white text-yellow-500 mb-3">Buy Stop Order</h4>
            <p className="text-gray-300 leading-relaxed">
              instruksi beli di harga terbaik yang juga digunakan untuk membatasi kerugian atas posisi jual yang ada ketika harga berada diatas stop price dari posisi jual tersebut.
            </p>
          </div>

          {/* Stop Limit Order */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white text-yellow-500 mb-3">Stop Limit Order</h4>
            <p className="text-gray-300 leading-relaxed">
              merupakan kombinasi antara stop order dan limit order. Ketika stop price tercapai, stop limit order berubah menjadi limit order beli/jual di tingkat tidak lebih/kurang dari batas harga yang ditentukan sendiri. Stop limit order digunakan sebagai metode yang efektif dalam memulai atau membuka posisi yang baru (jual atau beli). Akan tetapi karena cara itu bukan alat pelindung yang cukup baik, sebaiknya hanya digunakan terutama jika pasar dalam keadaan sepi atau kurang aktif.
            </p>
          </div>

          {/* One Cancel the Others (OCO) */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">One Cancel the Others (OCO)</h3>
            <p className="text-gray-300 leading-relaxed">
              Merupakan penempatan order pada dua limit price. Apabila limit price pertama dapat dilaksanakan/dieksekusi maka limit price kedua akan secara otomatis dibatalkan.
            </p>
          </div>

          {/* Good Till Cancel (GTC) */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">Good Till Cancel (GTC)</h3>
            <p className="text-gray-300 leading-relaxed">
              Adalah masa tenggang waktu berlakunya limit order hingga hari berikutnya apabila limit order tersebut belum tereksekusi (pending), dan limit order tersebut dapat dibatalkan (cancel).
            </p>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}