import React from 'react';
import { ArrowLeft, AlertCircle, Brain, Activity, Heart, Stethoscope, Shield, Clock } from 'lucide-react';

const Vertigo = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-silver/30">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-primary">
                Vertigo
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vertigo adalah sensasi palsu seolah-olah diri sendiri atau lingkungan sekitar bergerak atau berputar,
              meskipun sebenarnya tidak. Gejala ini biasanya disebabkan oleh gangguan pada sistem vestibular,
              yaitu bagian telinga dalam dan otak yang mengatur keseimbangan tubuh. Vertigo bukanlah penyakit,
              melainkan gejala dari kondisi medis tertentu.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary">Penyebab Utama</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Benign Paroxysmal Positional Vertigo (BPPV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Penyakit Meniere (gangguan cairan di telinga dalam)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Neuritis vestibular (peradangan saraf keseimbangan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Labirinitis (infeksi telinga dalam)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary">Gejala</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Sensasi berputar atau melayang</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Mual dan muntah</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Gangguan keseimbangan dan sulit berjalan lurus</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Gerakan mata yang tidak normal (nystagmus)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Faktor Risiko */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Faktor Risiko</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Usia lanjut</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Riwayat migrain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Infeksi saluran pernapasan atas</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Cedera kepala</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Penggunaan obat-obatan tertentu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Stres dan kecemasan</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Diagnosis & Pengobatan */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Diagnosis & Pengobatan</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Diagnosis</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Uji keseimbangan dan koordinasi tubuh</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Pemeriksaan telinga dan saraf</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Manuver Dix-Hallpike</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Pengobatan</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Manuver Epley untuk BPPV</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Obat anti vertigo dan anti mual</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Fisioterapi vestibular</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pencegahan & Prognosis */}
            <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Pencegahan & Prognosis</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Pencegahan</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Hindari perubahan posisi kepala yang tiba-tiba</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Kelola stres dan kecemasan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Istirahat cukup dan pola tidur teratur</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Prognosis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sebagian besar kasus vertigo dapat membaik dengan penanganan yang tepat. Namun, beberapa orang dapat mengalami kekambuhan atau vertigo kronis yang membutuhkan manajemen jangka panjang. Latihan vestibular dan perubahan gaya hidup dapat membantu mencegah gejala berulang.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <a
              href="/informasi/penyakit"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Daftar Penyakit
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Vertigo;
