import { FaShieldAlt, FaLaptop, FaFileAlt, FaHandHoldingUsd, FaUserTie, FaChartLine } from 'react-icons/fa';
import PageTemplates from "@/components/templates/PageTemplates";
import { useI18n } from "@/i18n/useI18n";

export default function AlasanMemilihKami() {
  const { t } = useI18n();
  const reasons = [
    {
      icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
      title: t("reasons.items.1.title"),
      description: t("reasons.items.1.desc"),
    },
    {
      icon: <FaLaptop className="text-yellow-500 text-2xl" />,
      title: t("reasons.items.2.title"),
      description: t("reasons.items.2.desc"),
    },
    {
      icon: <FaFileAlt className="text-yellow-500 text-2xl" />,
      title: t("reasons.items.3.title"),
      description: t("reasons.items.3.desc"),
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
      title: t("reasons.items.4.title"),
      description: t("reasons.items.4.desc"),
    },
    {
      icon: <FaHandHoldingUsd className="text-yellow-500 text-2xl" />,
      title: t("reasons.items.5.title"),
      description: t("reasons.items.5.desc"),
    },
    {
      icon: <FaUserTie className="text-yellow-500 text-2xl" />,
      title: t("reasons.items.6.title"),
      description: t("reasons.items.6.desc"),
    },
    {
      icon: <FaChartLine className="text-yellow-500 text-2xl" />,
      title: t("reasons.items.7.title"),
      description: t("reasons.items.7.desc"),
    }
  ];

  return (
    <PageTemplates title={t("reasons.title")}>
      <div className="container mx-auto px-4 py-12 text-white">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("reasons.heading")}</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        <div/>

        <div className="text-left mb-12">
            <p className="mb-6">
              {t("reasons.intro1")}
            </p>
            <p>
              {t("reasons.intro2")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-600/30 hover:border-yellow-500/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start">
                <div className="bg-yellow-500/20 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTemplates>
  );
}
