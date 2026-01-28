import { FaUserTie, FaLaptop, FaFileAlt, FaMoneyBillWave, FaShieldAlt, FaExchangeAlt, FaHandshake, FaEye } from 'react-icons/fa';
import PageTemplates from "@/components/templates/PageTemplates";
import { useI18n } from "@/i18n/useI18n";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ServiceCard = ({ icon, title, children }: ServiceCardProps) => (
  <div className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
    <div className="text-yellow-500 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{children}</p>
  </div>
);

const FasilitasLayanan = () => {
  const { t } = useI18n();
  return (
    <PageTemplates title={t("services.title")}>
      <div className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("services.title")}</h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<FaUserTie />} 
              title={t("services.items.1.title")}
            >
              {t("services.items.1.desc")}
            </ServiceCard>

            <ServiceCard 
              icon={<FaLaptop />} 
              title={t("services.items.2.title")}
            >
              {t("services.items.2.desc")}
            </ServiceCard>

            <ServiceCard 
              icon={<FaFileAlt />} 
              title={t("services.items.3.title")}
            >
              {t("services.items.3.desc")}
            </ServiceCard>

            <ServiceCard 
              icon={<FaMoneyBillWave />} 
              title={t("services.items.4.title")}
            >
              {t("services.items.4.desc")}
            </ServiceCard>

            <ServiceCard 
              icon={<FaShieldAlt />} 
              title={t("services.items.5.title")}
            >
              {t("services.items.5.desc")}
            </ServiceCard>

            <ServiceCard 
              icon={<FaExchangeAlt />} 
              title={t("services.items.6.title")}
            >
              {t("services.items.6.desc")}
            </ServiceCard>

            <ServiceCard 
              icon={<FaHandshake />} 
              title={t("services.items.7.title")}
            >
              {t("services.items.7.desc")}
              <ol className="list-decimal pl-5 mt-2 space-y-1">
                <li>{t("services.items.7.list1")}</li>
                <li>{t("services.items.7.list2")}</li>
                <li>{t("services.items.7.list3")}</li>
              </ol>
            </ServiceCard>

            <ServiceCard 
              icon={<FaEye />} 
              title={t("services.items.8.title")}
            >
              {t("services.items.8.desc")}
            </ServiceCard>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
};

export default FasilitasLayanan;
