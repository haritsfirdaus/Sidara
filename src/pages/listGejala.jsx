import { useEffect, useState } from 'react';
import { Search, AlertCircle, Brain, Activity, Heart, Shield } from 'lucide-react';
import { penyakitMap } from '../data/dataGejala'; // pastikan tetap ada ini untuk map kode ke nama

const Gejala = () => {
  const [gejalaData, setGejalaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/api/gejala`,{
      withCredentials: true,
      headers: {
        "ngrok-skip-browser-warning": "true"
         }
      })
      .then((res) => res.json())
      .then((data) => setGejalaData(data))
      .catch((err) => console.error('Gagal fetch gejala:', err));
  }, []);

  const filteredGejala = gejalaData.filter(item =>
    item.gejala.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.kode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-silver/30 container">
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-8 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-primary">
                Daftar Gejala Penyakit Saraf
              </h1>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              Berikut adalah daftar lengkap gejala yang digunakan dalam sistem diagnosis SIDARA.
              Setiap gejala memiliki kode unik dan dapat terkait dengan satu atau lebih penyakit saraf.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari gejala atau kode..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/10">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Informasi Penting</h3>
                <p className="text-gray-700">
                  Gejala-gejala ini digunakan dalam sistem diagnosis SIDARA untuk mengidentifikasi penyakit saraf.
                  Pilih gejala yang sesuai dengan kondisi Anda saat melakukan diagnosis.
                </p>
              </div>
            </div>
          </div>

          {/* Gejala Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 text-center font-semibold">Kode</th>
                    <th className="py-4 px-6 text-center font-semibold">Gejala</th>
                    <th className="py-4 px-6 text-center font-semibold">Terkait Penyakit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredGejala.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-semibold text-primary">{item.kode}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">{item.gejala}</td>
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-2">
                          {item.penyakitTerkait.map((kode, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                            >
                              {penyakitMap[kode] || kode}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State */}
          {filteredGejala.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Tidak ada hasil ditemukan</h3>
              <p className="text-gray-500">
                Coba kata kunci pencarian yang berbeda atau periksa kembali ejaan Anda.
              </p>
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary">Total Gejala</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">{gejalaData.length}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary">Penyakit Terkait</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">{Object.keys(penyakitMap).length}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary">Gejala Umum</h3>
              </div>
              <p className="text-3xl font-bold text-gray-800">
                {gejalaData.filter(item => item.penyakitTerkait.length > 1).length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gejala;
