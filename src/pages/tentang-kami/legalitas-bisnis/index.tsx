import PageTemplates from "@/components/templates/PageTemplates";
import { FaFileAlt, FaBalanceScale, FaBuilding, FaHandshake, FaLaptopHouse, FaChartLine, FaFileContract, FaShieldAlt, FaFileSignature } from 'react-icons/fa';
import { useI18n } from "@/i18n/useI18n";

type LegalDocument = {
  id: number;
  title: string;
  number: string;
  description: string;
  icon: React.ReactNode;
};

export default function LegalitasBisnis() {
  const { t } = useI18n();
  const legalDocuments: LegalDocument[] = [
    {
      id: 1,
      title: t("legal.docs.1.title"),
      number: '52',
      description: t("legal.docs.1.desc"),
      icon: <FaFileAlt className="text-3xl text-yellow-500" />
    },
    {
      id: 2,
      title: t("legal.docs.2.title"),
      number: 'C-05612 HT.01.01.TH.2002',
      description: t("legal.docs.2.desc"),
      icon: <FaBalanceScale className="text-3xl text-yellow-500" />
    },
    {
      id: 3,
      title: t("legal.docs.3.title"),
      number: 'SPAB-047/BBJ/07/02',
      description: t("legal.docs.3.desc"),
      icon: <FaFileAlt className="text-3xl text-yellow-500" />
    },
    {
      id: 4,
      title: t("legal.docs.4.title"),
      number: '161/BAPPEBTI/SI/IX/2002',
      description: t("legal.docs.4.desc"),
      icon: <FaBuilding className="text-3xl text-yellow-500" />
    },
    {
      id: 5,
      title: t("legal.docs.5.title"),
      number: '15/AK-KBI/V/2003',
      description: t("legal.docs.5.desc"),
      icon: <FaHandshake className="text-3xl text-yellow-500" />
    },
    {
      id: 6,
      title: t("legal.docs.6.title"),
      number: '287/BAPPEBTI/SP/I/2004',
      description: t("legal.docs.6.desc"),
      icon: <FaChartLine className="text-3xl text-yellow-500" />
    },
    {
      id: 7,
      title: t("legal.docs.7.title"),
      number: '262/CO-BOD/SGB/VI/2005',
      description: t("legal.docs.7.desc"),
      icon: <FaFileContract className="text-3xl text-yellow-500" />
    },
    {
      id: 8,
      title: t("legal.docs.8.title"),
      number: '1156/BAPPEBTI/SI/3/2007',
      description: t("legal.docs.8.desc"),
      icon: <FaShieldAlt className="text-3xl text-yellow-500" />
    },
    {
      id: 9,
      title: t("legal.docs.9.title"),
      number: '27/BAPPEBTI/KEP-PBK/09/2014',
      description: t("legal.docs.9.desc"),
      icon: <FaLaptopHouse className="text-3xl text-yellow-500" />
    },
    {
      id: 10,
      title: t("legal.docs.10.title"),
      number: 'S-373/PM.02/2025',
      description: t("legal.docs.10.desc"),
      icon: <FaFileSignature className="text-3xl text-yellow-500" />
    },
    {
      id: 11,
      title: t("legal.docs.11.title"),
      number: '27/663/DPPK/Srt/B',
      description: t("legal.docs.11.desc"),
      icon: <FaBuilding className="text-3xl text-yellow-500" />
    }
  ];

  return (
    <PageTemplates title={t("legal.title")}>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("legal.title")}</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              <span className="text-gray-300">{t("legal.subtitle")}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalDocuments.map((doc) => (
              <div 
                key={doc.id}
                className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500"
                data-aos="fade-up"
                data-aos-delay={doc.id * 100}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-yellow-50 rounded-full mr-4">
                      {doc.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{doc.title}</h3>
                  </div>
                  <div className="pl-16">
                    <p className="text-yellow-400 font-medium mb-2">{t("legal.numberPrefix")} {doc.number}</p>
                    <p className="text-gray-300">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-lg shadow-md">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">{t("legal.ctaTitle")}</h2>
              <p className="text-gray-300 mb-6">{t("legal.ctaText")}</p>
              <button className="btn-primary py-2 px-6 rounded-md">
                {t("legal.ctaButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}
