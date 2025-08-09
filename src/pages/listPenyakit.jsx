import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { penyakitData, gejalaMap } from '../data/dataPenyakit';
import { Brain, Search, AlertCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Penyakit = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPenyakit = penyakitData.filter(penyakit => 
    penyakit.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    penyakit.kode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-silver/30 container">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Daftar Penyakit Saraf
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Kenali berbagai jenis penyakit saraf dan gejalanya untuk deteksi dini
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari penyakit atau kode..."
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 pb-16">
        {/* Info Box */}
        <div className="bg-primary/5 rounded-xl p-6 mb-8 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-primary mb-2">Informasi Penting</h3>
            <p className="text-gray-700 text-sm">
              Daftar ini berisi informasi tentang berbagai penyakit saraf. Hasil diagnosis dari SIDARA adalah analisis awal dan tidak menggantikan konsultasi medis. Segera konsultasikan ke dokter jika Anda mengalami gejala-gejala tersebut.
            </p>
          </div>
        </div>

        {/* Disease List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPenyakit.map((penyakit, idx) => {
            const slug = penyakit.nama.toLowerCase().replace(/\s+/g, "-").replace(/[’']/g, "");

            return (
              <Link
                to={`/informasi/penyakit/${slug}`}
                key={idx}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-gray-100 hover:border-primary/20">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Brain className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors">
                          {penyakit.kode}
                        </h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                      {penyakit.nama}
                    </h4>
                    
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-600">Gejala Terkait:</p>
                      <ul className="space-y-2">
                        {penyakit.gejala.slice(0, 3).map((kode, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{gejalaMap[kode]}</span>
                          </li>
                        ))}
                        {penyakit.gejala.length > 3 && (
                          <li className="text-sm text-primary font-medium">
                            +{penyakit.gejala.length - 3} gejala lainnya
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredPenyakit.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tidak ada hasil</h3>
              <p className="text-gray-600">
                Coba kata kunci lain atau periksa kembali penulisan Anda
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Penyakit;
