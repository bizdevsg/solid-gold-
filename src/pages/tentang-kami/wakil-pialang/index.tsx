import PageTemplates from "@/components/templates/PageTemplates";
import { dummyWakilPialang } from "@/types/wakilPialang";
import { FaCity, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function WakilPialangPage() {
  const router = useRouter();
  
  // Group by city
  const cities = dummyWakilPialang.reduce((acc, curr) => {
    if (!acc[curr.kota]) {
      acc[curr.kota] = [];
    }
    acc[curr.kota].push(curr);
    return acc;
  }, {} as Record<string, typeof dummyWakilPialang>);

  const cityCounts = Object.entries(cities).map(([city, reps]) => ({
    name: city,
    count: reps.length,
    activeCount: reps.filter(rep => rep.status === 'Aktif').length
  }));

  return (
    <PageTemplates>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Daftar Wakil Pialang</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              Berikut adalah daftar kota dengan perwakilan resmi Wakil Pialang Berjangka PT. Solid Gold Berjangka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityCounts.map((city, index) => (
              <div 
                key={city.name}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500 cursor-pointer"
                onClick={() => router.push(`/tentang-kami/wakil-pialang/${city.name.toLowerCase()}`)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-yellow-50 bg-opacity-10 rounded-full mr-4">
                      <FaCity className="text-2xl text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{city.name}</h3>
                  </div>
                  <div className="pl-16 space-y-2">
                    <div className="flex items-center text-gray-300">
                      <FaUsers className="mr-2 text-yellow-500" />
                      <span>Total Wakil Pialang: {city.count}</span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span>Aktif: {city.activeCount}</span>
                    </div>
                    <div className="flex items-center text-red-400">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <span>Tidak Aktif: {city.count - city.activeCount}</span>
                    </div>
                    <div className="pt-2">
                      <button 
                        className="text-yellow-500 hover:text-yellow-400 text-sm font-medium flex items-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/tentang-kami/wakil-pialang/${city.name.toLowerCase()}`);
                        }}
                      >
                        Lihat Detail <span className="ml-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}