import React from 'react';
import { ArrowLeft, AlertCircle, Brain, Activity, Heart, Stethoscope, Shield, Clock } from 'lucide-react';

const Epilepsi = () => {
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
                Epilepsi
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Epilepsi adalah gangguan sistem saraf pusat di mana aktivitas otak menjadi tidak normal,
              menyebabkan kejang berulang, perilaku atau sensasi yang tidak biasa, dan terkadang hilang
              kesadaran. Kejang pada epilepsi bisa bervariasi dari gangguan singkat perhatian hingga gerakan
              tubuh yang tak terkendali. Epilepsi dapat terjadi pada siapa saja dan di segala usia.
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
                  <span className="text-gray-700">Cedera kepala akibat kecelakaan atau trauma</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Infeksi otak seperti meningitis atau ensefalitis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Stroke atau gangguan pembuluh darah di otak</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Kondisi genetik atau keturunan</span>
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
                  <span className="text-gray-700">Kejang berulang (kejang umum atau parsial)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Kehilangan kesadaran atau tatapan kosong</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Gerakan tiba-tiba dan tak terkendali</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Kebingungan sementara</span>
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
                    <span className="text-gray-700">Riwayat keluarga epilepsi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Cedera otak traumatis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Stroke atau kondisi pembuluh darah</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Infeksi otak</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Masalah perkembangan sejak lahir</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Demam tinggi berkepanjangan</span>
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
                      <span className="text-gray-700">EEG untuk mendeteksi aktivitas listrik otak</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">MRI atau CT Scan untuk kelainan struktur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Pemeriksaan darah dan pencatatan kejang</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Pengobatan</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Obat antiepilepsi (AED)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Terapi diet (diet ketogenik)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Stimulasi saraf vagus (VNS)</span>
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
                      <span className="text-gray-700">Menghindari cedera kepala</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Vaksinasi untuk mencegah infeksi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Mengelola stres dan pola tidur</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Prognosis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Banyak penderita epilepsi dapat hidup normal dan kejang dapat dikendalikan dengan pengobatan rutin.
                    Namun, beberapa kasus bisa mengalami kejang yang menetap atau memerlukan pendekatan gabungan seperti
                    terapi dan operasi. Dukungan keluarga dan edukasi berkelanjutan sangat penting untuk kualitas hidup pasien.
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

export default Epilepsi;
