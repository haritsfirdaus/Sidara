import React from 'react';
import { ArrowLeft, AlertCircle, Brain, Activity, Heart, Stethoscope, Shield, Clock } from 'lucide-react';

const LowBackPain = () => {
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
                Low Back Pain
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Low Back Pain (LBP) atau nyeri punggung bawah adalah kondisi nyeri yang terjadi di area bawah punggung, tepatnya di antara tulang rusuk dan bokong. Kondisi ini bisa bersifat akut (tiba-tiba) maupun kronis (berkepanjangan), dan merupakan salah satu penyebab utama gangguan aktivitas harian pada orang dewasa.
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
                  <span className="text-gray-700">Ketegangan otot atau ligamen karena postur tubuh yang buruk</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Angkat beban berat dengan teknik yang salah</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Hernia nukleus pulposus (saraf terjepit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Artritis tulang belakang atau osteoarthritis</span>
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
                  <span className="text-gray-700">Nyeri di punggung bawah, bisa menjalar ke bokong atau paha</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Kekakuan dan keterbatasan gerak</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Nyeri bertambah saat duduk lama atau berdiri lama</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Kram otot punggung bawah</span>
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
                    <span className="text-gray-700">Postur tubuh yang buruk saat duduk atau berdiri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Kurangnya aktivitas fisik dan kebugaran otot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Berat badan berlebih</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Pekerjaan yang mengharuskan mengangkat beban berat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Usia lanjut</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Merokok dan stres</span>
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
                      <span className="text-gray-700">Pemeriksaan fisik dan riwayat gejala</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Rontgen tulang belakang</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">MRI atau CT scan</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Pengobatan</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Obat pereda nyeri dan antiinflamasi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Terapi fisik dan olahraga</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Perubahan gaya hidup</span>
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
                      <span className="text-gray-700">Menjaga postur tubuh yang baik</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Melatih kekuatan otot punggung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Menjaga berat badan ideal</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Prognosis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sebagian besar kasus LBP membaik dalam beberapa minggu dengan pengobatan konservatif. Namun, pada kasus kronis, perlu pendekatan jangka panjang. Pencegahan dan manajemen gaya hidup menjadi kunci untuk mencegah kekambuhan.
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

export default LowBackPain;
