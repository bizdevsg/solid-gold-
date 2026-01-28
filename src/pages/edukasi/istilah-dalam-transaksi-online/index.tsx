import React from 'react';
import PageTemplates from "@/components/templates/PageTemplates";
import Header from "@/components/moleculs/Header";
import { useI18n } from "@/i18n/useI18n";

export default function IstilahDalamTransaksiOnlinePage() {
  const { t } = useI18n();
  return (
    <PageTemplates title={t("education.terms.title")}>
      <div className="container text-gray-200">
        <Header 
          title={t("education.terms.title")} 
          subtitle={t("common.company")} 
        />

        {/* ISTILAH DALAM TRANSAKSI ONLINE */}
        <div className="bg-neutral-800 rounded-lg p-8 shadow-lg">

          {/* Market Order */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">{t("education.terms.marketOrder.title")}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t("education.terms.marketOrder.desc")}
            </p>
          </div>

          {/* Limit Order */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">{t("education.terms.limitOrder.title")}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t("education.terms.limitOrder.desc")}
            </p>
          </div>

          {/* Stop Order */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">{t("education.terms.stopOrder.title")}</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("education.terms.stopOrder.p1")}
            </p>
            <p className="text-gray-300 leading-relaxed mb-10">
              {t("education.terms.stopOrder.p2")}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t("education.terms.stopOrder.listTitle")}
            </p>
          </div>

          {/* Sell Stop Order */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white text-yellow-500 mb-3">{t("education.terms.sellStop.title")}</h4>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("education.terms.sellStop.desc")}
            </p>
          </div>

          {/* Buy Stop Order */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white text-yellow-500 mb-3">{t("education.terms.buyStop.title")}</h4>
            <p className="text-gray-300 leading-relaxed">
              {t("education.terms.buyStop.desc")}
            </p>
          </div>

          {/* Stop Limit Order */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white text-yellow-500 mb-3">{t("education.terms.stopLimit.title")}</h4>
            <p className="text-gray-300 leading-relaxed">
              {t("education.terms.stopLimit.desc")}
            </p>
          </div>

          {/* One Cancel the Others (OCO) */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">{t("education.terms.oco.title")}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t("education.terms.oco.desc")}
            </p>
          </div>

          {/* Good Till Cancel (GTC) */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">{t("education.terms.gtc.title")}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t("education.terms.gtc.desc")}
            </p>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}
