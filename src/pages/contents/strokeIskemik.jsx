import React from 'react';
import { ArrowLeft, AlertCircle, Brain, Activity, Heart, Stethoscope, Shield, Clock } from 'lucide-react';

const StrokeIskemik = () => {
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
                Stroke Iskemik
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stroke iskemik adalah jenis stroke yang terjadi ketika aliran darah ke otak terhambat atau
              terputus akibat penyumbatan pembuluh darah. Penyumbatan ini dapat disebabkan oleh gumpalan
              darah (trombus) atau materi lain yang berpindah dari bagian tubuh lain (emboli). Sekitar 85%
              dari semua kasus stroke adalah stroke iskemik.
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
                  <span className="text-gray-700">Penyakit aterosklerosis (penumpukan plak di pembuluh darah)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Penggumpalan darah di arteri otak</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Emboli dari jantung (misalnya karena fibrilasi atrium)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Stenosis arteri karotis (penyempitan arteri leher)</span>
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
                  <span className="text-gray-700">Mati rasa atau kelemahan mendadak di wajah, lengan, atau kaki</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Kesulitan berbicara atau memahami pembicaraan</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Gangguan penglihatan pada satu atau kedua mata</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-700">Gangguan berjalan, pusing, atau kehilangan keseimbangan</span>
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
                    <span className="text-gray-700">Hipertensi (tekanan darah tinggi)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Diabetes melitus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Kolesterol tinggi</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Merokok dan obesitas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Riwayat penyakit jantung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-gray-700">Usia lanjut dan riwayat keluarga</span>
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
                      <span className="text-gray-700">CT Scan kepala untuk mengesampingkan perdarahan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">MRI otak untuk melihat area otak yang terdampak</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">USG Doppler karotis dan EKG</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Pengobatan</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Pemberian obat trombolitik (tPA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Obat antiplatelet atau antikoagulan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Rehabilitasi pasca stroke</span>
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
                      <span className="text-gray-700">Kontrol tekanan darah secara rutin</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Berhenti merokok dan hindari alkohol berlebihan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">Olahraga teratur dan pola makan sehat</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Prognosis</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Prognosis stroke iskemik tergantung pada seberapa cepat penanganan dilakukan, lokasi sumbatan,
                    dan kondisi kesehatan pasien secara keseluruhan. Semakin cepat ditangani, semakin besar peluang
                    pemulihan dan menurunnya risiko kecacatan jangka panjang.
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

export default StrokeIskemik;
