import React from "react";
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";
import { useI18n } from "@/i18n/useI18n";

type TextMap = { id: string; en: string };

const pick = (locale: string, value: TextMap) => (locale === "en" ? value.en : value.id);

export default function SimbolIndexPage() {
  const { locale } = useI18n();

  const title = locale === "en" ? "Index Symbols" : "Simbol Index";
  const subtitle = "PT. Solid Gold Berjangka";

  const symbolCards = [
    { code: "HSIV9", desc: { id: "Hang Seng Index (Futures) untuk kontrak Oktober 2009", en: "Hang Seng Index (Futures) for October 2009 contract" } },
    { code: "HSI", desc: { id: "Hang Seng Index (Spot)", en: "Hang Seng Index (Spot)" } },
    { code: "SN1Z9", desc: { id: "Nikkei 225 Index (Futures) untuk kontrak Desember 2009", en: "Nikkei 225 Index (Futures) for December 2009 contract" } },
    { code: "SNI", desc: { id: "Nikkei 225 Index (Spot)", en: "Nikkei 225 Index (Spot)" } },
    { code: "JKSCI", desc: { id: "Jakarta Composite Index (Spot)", en: "Jakarta Composite Index (Spot)" } },
    { code: "SISE4", desc: { id: "Straits Times Index (Spot)", en: "Straits Times Index (Spot)" } },
    { code: "KCOM", desc: { id: "Kuala Lumpur Composite Index (Spot)", en: "Kuala Lumpur Composite Index (Spot)" } },
    { code: "SHICOM", desc: { id: "Shanghai Composite Index (Spot)", en: "Shanghai Composite Index (Spot)" } },
    { code: "SZICOM", desc: { id: "Shenzhen Composite Index (Spot)", en: "Shenzhen Composite Index (Spot)" } },
    { code: "TOPX", desc: { id: "Tokyo Stock Price Index (Spot)", en: "Tokyo Stock Price Index (Spot)" } },
    { code: "BSET", desc: { id: "Bangkok Stock Price Index (Spot)", en: "Bangkok Stock Price Index (Spot)" } },
    { code: "KSCI", desc: { id: "Korea Stock Composite Index (Spot)", en: "Korea Stock Composite Index (Spot)" } },
    { code: "DJIA", desc: { id: "Dow Jones Industrial Average (Spot)", en: "Dow Jones Industrial Average (Spot)" } },
    { code: "NDX", desc: { id: "Nasdaq 100 Index (Spot)", en: "Nasdaq 100 Index (Spot)" } },
    { code: "NDXI", desc: { id: "Nasdaq Composite Index (Spot)", en: "Nasdaq Composite Index (Spot)" } },
    { code: "SPX", desc: { id: "Standard & Poor's 500 Index (Spot)", en: "Standard & Poor's 500 Index (Spot)" } },
    { code: "FTSE", desc: { id: "Financial Times Stock Exchange (Spot)", en: "Financial Times Stock Exchange (Spot)" } },
    { code: "DAX", desc: { id: "Deutscher Aktien Index / German Stock Index (Spot)", en: "Deutscher Aktien Index / German Stock Index (Spot)" } },
    { code: "NYSEI", desc: { id: "New York Stock Index (Spot)", en: "New York Stock Index (Spot)" } },
    { code: "LGD", desc: { id: "Loco Gold London (Spot)", en: "Loco Gold London (Spot)" } },
  ];

  const monthSymbols = {
    hangSeng: [
      { code: "F", id: "Januari", en: "January" },
      { code: "G", id: "Februari", en: "February" },
      { code: "H", id: "Maret", en: "March" },
      { code: "J", id: "April", en: "April" },
      { code: "K", id: "Mei", en: "May" },
      { code: "M", id: "Juni", en: "June" },
      { code: "N", id: "Juli", en: "July" },
      { code: "Q", id: "Agustus", en: "August" },
      { code: "U", id: "September", en: "September" },
      { code: "V", id: "Oktober", en: "October" },
      { code: "X", id: "November", en: "November" },
      { code: "Z", id: "Desember", en: "December" },
    ],
    nikkei: [
      { code: "H", id: "Maret", en: "March" },
      { code: "M", id: "Juni", en: "June" },
      { code: "U", id: "September", en: "September" },
      { code: "Z", id: "Desember", en: "December" },
    ],
    brent: [
      { code: "F", id: "Januari", en: "January" },
      { code: "G", id: "Februari", en: "February" },
      { code: "H", id: "Maret", en: "March" },
      { code: "J", id: "April", en: "April" },
      { code: "K", id: "Mei", en: "May" },
      { code: "M", id: "Juni", en: "June" },
      { code: "N", id: "Juli", en: "July" },
      { code: "Q", id: "Agustus", en: "August" },
      { code: "U", id: "September", en: "September" },
      { code: "V", id: "Oktober", en: "October" },
      { code: "X", id: "November", en: "November" },
      { code: "Z", id: "Desember", en: "December" },
    ],
  };

  return (
    <PageTemplates title={title}>
      <div className="container text-gray-200">
        <Header title={title} subtitle={subtitle} />

        {/* SIMBOL INDEX */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">
          {/* Index Symbols */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                1
              </span>
              {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {symbolCards.map((item) => (
                <div key={item.code} className="bg-neutral-700 rounded-lg p-4">
                  <span className="text-yellow-500 font-mono font-bold">{item.code}</span>
                  <p className="text-gray-300 text-sm mt-1">{pick(locale, item.desc)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Simbol Bulan Kontrak */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                2
              </span>
              {locale === "en" ? "Contract Month Symbols" : "Simbol Bulan Kontrak"}
            </h2>

            {/* Hang Seng Futures */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">Hang Seng Futures</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {monthSymbols.hangSeng.map((m) => (
                  <div key={m.code} className="bg-neutral-700 rounded p-3 text-center">
                    <span className="text-yellow-500 font-mono font-bold text-lg">{m.code}</span>
                    <p className="text-gray-300 text-sm mt-1">{locale === "en" ? m.en : m.id}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nikkei 225 Futures */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">Nikkei 225 Futures</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {monthSymbols.nikkei.map((m) => (
                  <div key={m.code} className="bg-neutral-700 rounded p-3 text-center">
                    <span className="text-yellow-500 font-mono font-bold text-lg">{m.code}</span>
                    <p className="text-gray-300 text-sm mt-1">{locale === "en" ? m.en : m.id}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Brent Crude Oil Futures */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">Brent Crude Oil Futures</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {monthSymbols.brent.map((m) => (
                  <div key={m.code} className="bg-neutral-700 rounded p-3 text-center">
                    <span className="text-yellow-500 font-mono font-bold text-lg">{m.code}</span>
                    <p className="text-gray-300 text-sm mt-1">{locale === "en" ? m.en : m.id}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Example */}
            <div className="bg-neutral-700 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                {locale === "en" ? "Contract Example" : "Contoh Kontrak"}
              </h3>
              <div className="bg-neutral-600 rounded p-4">
                <p className="text-yellow-500 font-mono font-bold text-lg mb-3">
                  LCOPZ9 = {locale === "en" ? "Brent Crude Oil Contract" : "Brent Crude Oil Contract"}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-mono font-bold mr-3">LCOP</span>
                    <span className="text-gray-300">
                      {locale === "en" ? "= Brent Crude Oil Code" : "= Brent Crude Oil Code"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-mono font-bold mr-3">Z</span>
                    <span className="text-gray-300">
                      {locale === "en"
                        ? "= Futures contract for 2 months ahead"
                        : "= Futures Contract for 2 Months ahead"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-mono font-bold mr-3">9</span>
                    <span className="text-gray-300">{locale === "en" ? "= Year" : "= Year"}</span>
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
