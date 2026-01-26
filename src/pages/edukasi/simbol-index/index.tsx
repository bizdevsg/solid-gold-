import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";

export default function SimbolIndexPage() {
  return (
    <PageTemplates title="Simbol Index">
      <div className="container text-gray-200">
        <Header 
          title="Simbol Index" 
          subtitle="PT. Solid Gold Berjangka" 
        />

        {/* SIMBOL INDEX */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
          {/* Index Symbols */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                1
              </span>
              Simbol Index
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">HSIV9</span>
                <p className="text-gray-300 text-sm mt-1">Hang Seng Index (Futures) untuk kontrak Oktober 2009</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">HSI</span>
                <p className="text-gray-300 text-sm mt-1">Hang Seng Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">SN1Z9</span>
                <p className="text-gray-300 text-sm mt-1">Nikkei 225 Index (Futures) untuk kontrak Desember 2009</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">SNI</span>
                <p className="text-gray-300 text-sm mt-1">Nikkei 225 Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">JKSCI</span>
                <p className="text-gray-300 text-sm mt-1">Jakarta Composite Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">SISE4</span>
                <p className="text-gray-300 text-sm mt-1">Straits Times Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">KCOM</span>
                <p className="text-gray-300 text-sm mt-1">Kuala Lumpur Composite Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">SHICOM</span>
                <p className="text-gray-300 text-sm mt-1">Shanghai Composite Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">SZICOM</span>
                <p className="text-gray-300 text-sm mt-1">Shenzhen Composite Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">TOPX</span>
                <p className="text-gray-300 text-sm mt-1">Tokyo Stock Price Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">BSET</span>
                <p className="text-gray-300 text-sm mt-1">Bangkok Stock Price Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">KSCI</span>
                <p className="text-gray-300 text-sm mt-1">Korea Stock Composite Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">DJIA</span>
                <p className="text-gray-300 text-sm mt-1">Dow Jones Industrial Average (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">NDX</span>
                <p className="text-gray-300 text-sm mt-1">Nasdaq 100 Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">NDXI</span>
                <p className="text-gray-300 text-sm mt-1">Nasdaq Composite Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">SPX</span>
                <p className="text-gray-300 text-sm mt-1">Standard & Poor's 500 Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">FTSE</span>
                <p className="text-gray-300 text-sm mt-1">Financial Times Stock Exchange (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">DAX</span>
                <p className="text-gray-300 text-sm mt-1">Deutscher Aktien Index / German Stock Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">NYSEI</span>
                <p className="text-gray-300 text-sm mt-1">New York Stock Index (Spot)</p>
              </div>
              
              <div className="bg-neutral-700 rounded-lg p-4">
                <span className="text-yellow-500 font-mono font-bold">LGD</span>
                <p className="text-gray-300 text-sm mt-1">Loco Gold London (Spot)</p>
              </div>
            </div>
          </div>

          {/* Simbol Bulan Kontrak */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                2
              </span>
              Simbol Bulan Kontrak
            </h2>

            {/* Hang Seng Futures */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">Hang Seng Futures</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">F</span>
                  <p className="text-gray-300 text-sm mt-1">Januari</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">G</span>
                  <p className="text-gray-300 text-sm mt-1">Februari</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">H</span>
                  <p className="text-gray-300 text-sm mt-1">Maret</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">J</span>
                  <p className="text-gray-300 text-sm mt-1">April</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">K</span>
                  <p className="text-gray-300 text-sm mt-1">Mei</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">M</span>
                  <p className="text-gray-300 text-sm mt-1">Juni</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">N</span>
                  <p className="text-gray-300 text-sm mt-1">Juli</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">Q</span>
                  <p className="text-gray-300 text-sm mt-1">Agustus</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">U</span>
                  <p className="text-gray-300 text-sm mt-1">September</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">V</span>
                  <p className="text-gray-300 text-sm mt-1">Oktober</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">X</span>
                  <p className="text-gray-300 text-sm mt-1">November</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">Z</span>
                  <p className="text-gray-300 text-sm mt-1">Desember</p>
                </div>
              </div>
            </div>

            {/* Nikkei 225 Futures */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">Nikkei 225 Futures</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">H</span>
                  <p className="text-gray-300 text-sm mt-1">Maret</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">M</span>
                  <p className="text-gray-300 text-sm mt-1">Juni</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">U</span>
                  <p className="text-gray-300 text-sm mt-1">September</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">Z</span>
                  <p className="text-gray-300 text-sm mt-1">Desember</p>
                </div>
              </div>
            </div>

            {/* Brent Crude Oil Futures */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">Brent Crude Oil Futures</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">F</span>
                  <p className="text-gray-300 text-sm mt-1">Januari</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">G</span>
                  <p className="text-gray-300 text-sm mt-1">Februari</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">H</span>
                  <p className="text-gray-300 text-sm mt-1">Maret</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">J</span>
                  <p className="text-gray-300 text-sm mt-1">April</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">K</span>
                  <p className="text-gray-300 text-sm mt-1">Mei</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">M</span>
                  <p className="text-gray-300 text-sm mt-1">Juni</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">N</span>
                  <p className="text-gray-300 text-sm mt-1">Juli</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">Q</span>
                  <p className="text-gray-300 text-sm mt-1">Agustus</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">U</span>
                  <p className="text-gray-300 text-sm mt-1">September</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">V</span>
                  <p className="text-gray-300 text-sm mt-1">Oktober</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">X</span>
                  <p className="text-gray-300 text-sm mt-1">November</p>
                </div>
                <div className="bg-neutral-700 rounded p-3 text-center">
                  <span className="text-yellow-500 font-mono font-bold text-lg">Z</span>
                  <p className="text-gray-300 text-sm mt-1">Desember</p>
                </div>
              </div>
            </div>

            {/* Example */}
            <div className="bg-neutral-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">Contoh Kontrak</h3>
              <div className="bg-neutral-600 rounded p-4">
                <p className="text-yellow-500 font-mono font-bold text-lg mb-3">LCOPZ9 = Brent Crude Oil Contract</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-mono font-bold mr-3">LCOP</span>
                    <span className="text-gray-300">= Brent Crude Oil Code</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-mono font-bold mr-3">Z</span>
                    <span className="text-gray-300">= Futures Contract for 2 Months ahead</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-mono font-bold mr-3">9</span>
                    <span className="text-gray-300">= Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}