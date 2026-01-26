import PageTemplates from "@/components/templates/PageTemplates";
import { dummyWakilPialang, WakilPialang } from "@/types/wakilPialang";
import { FaUserTie, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function WakilPialangKota() {
  const router = useRouter();
  const { slug } = router.query;
  const [wakilPialang, setWakilPialang] = useState<WakilPialang[]>([]);
  const [kota, setKota] = useState('');

  useEffect(() => {
    if (slug) {
      const cityName = decodeURIComponent(slug as string);
      setKota(cityName);
      
      // Format nama kota untuk pencocokan yang lebih fleksibel
      const formattedCity = cityName.toLowerCase().trim();
      
      // Filter wakil pialang berdasarkan kota
      const filtered = dummyWakilPialang.filter(
        wp => wp.kota.toLowerCase() === formattedCity
      );
      
      setWakilPialang(filtered);
    }
  }, [slug]);

  if (!kota) {
    return (
      <PageTemplates>
        <div className="py-12 text-center">
          <p className="text-gray-300">Memuat data...</p>
        </div>
      </PageTemplates>
    );
  }

  return (
    <PageTemplates>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-yellow-500 hover:text-yellow-400 mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Kembali ke Daftar Kota
          </button>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                    Daftar Wakil Pialang
                  </h1>
                  <div className="flex items-center mt-2 text-yellow-500">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="text-lg">{kota}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {wakilPialang.length} Wakil Pialang
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Nama
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Nomor Izin WPB
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Kontak
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {wakilPialang.map((wp, index) => (
                    <tr key={wp.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center">
                            <FaUserTie className="h-5 w-5 text-white" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">{wp.nama}</div>
                            <div className="text-xs text-gray-400">{wp.alamat}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {wp.nomorIzinWPB}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          wp.status === 'Aktif' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {wp.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center">
                            <FaPhone className="text-yellow-500 mr-2" size={12} />
                            <span>{wp.telepon}</span>
                          </div>
                          <div className="flex items-center">
                            <FaEnvelope className="text-yellow-500 mr-2" size={12} />
                            <span className="text-xs">{wp.email}</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/tentang-kami/wakil-pialang')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
            >
              Kembali ke Daftar Kota
            </button>
          </div>
        </div>
      </div>
    </PageTemplates>
  );
}