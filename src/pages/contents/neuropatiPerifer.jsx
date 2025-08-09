import React from 'react';
import { ArrowLeft, AlertCircle, Brain, Activity, Heart, Stethoscope, Shield } from 'lucide-react';

const NeuropatiPerifer = () => {
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
                Neuropati Perifer
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Neuropati perifer adalah gangguan pada sistem saraf tepi yang menyebabkan kelemahan, mati rasa, dan nyeri, umumnya di tangan dan kaki. Kondisi ini dapat disebabkan oleh berbagai faktor termasuk diabetes, infeksi, cedera, atau paparan racun.
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
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Diabetes melitus</span></li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Cedera saraf akibat trauma atau kecelakaan</span></li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Infeksi (misalnya: herpes zoster, HIV)</span></li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Paparan zat toksik atau efek samping obat</span></li>
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
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Kesemutan atau mati rasa di tangan dan kaki</span></li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Nyeri tajam, terbakar, atau menusuk</span></li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Kelemahan otot atau kelumpuhan ringan</span></li>
                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Sensitivitas tinggi terhadap sentuhan</span></li>
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
                  <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Riwayat diabetes yang tidak terkontrol</span></li>
                  <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Konsumsi alkohol berlebihan</span></li>
                  <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Pajanan zat kimia tertentu dalam jangka panjang</span></li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Infeksi kronis atau sistemik</span></li>
                  <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Riwayat keluarga dengan neuropati</span></li>
                  <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Penyakit autoimun seperti lupus atau rheumatoid arthritis</span></li>
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
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Pemeriksaan fisik dan neurologis</span></li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Tes darah untuk deteksi diabetes atau defisiensi vitamin</span></li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Elektromiografi (EMG) dan tes kecepatan konduksi saraf</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Pengobatan</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Obat pereda nyeri saraf seperti antidepresan atau antikonvulsan</span></li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Pengobatan penyakit yang mendasari seperti diabetes</span></li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Terapi fisik untuk memperbaiki fungsi motorik</span></li>
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
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Menjaga kadar gula darah tetap stabil</span></li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Menghindari konsumsi alkohol berlebihan</span></li>
                    <li className="flex items-start gap-3"><div className="w-2 h-2 bg-primary rounded-full mt-2"></div><span className="text-gray-700">Asupan nutrisi dan vitamin yang cukup</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Prognosis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Prognosis tergantung pada penyebab dan tingkat kerusakan saraf. Pengobatan dini dapat memperbaiki gejala secara signifikan dan memperlambat perkembangan neuropati. Manajemen gaya hidup sangat penting untuk mencegah kerusakan lebih lanjut.
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

export default NeuropatiPerifer;
