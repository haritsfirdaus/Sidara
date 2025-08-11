import React from "react";
import { Button } from "@/components/ui/button";
import { BrainCog, Stethoscope, SearchCheck, Activity, ArrowRight, Users, BookOpen, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
      const handleStorageChange = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          setUser("null");
        }
      };
  
      handleStorageChange();
      window.addEventListener("storage", handleStorageChange);
      return () => window.removeEventListener("storage", handleStorageChange);
    }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="w-full h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center relative">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="z-10 max-w-3xl container">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Sistem Pakar Diagnosa Penyakit Saraf
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl">
            Berdasarkan Metode <span className="font-semibold text-emas">Fuzzy Logic Mamdani</span>
          </p>
          {/* <Button
            className="mt-6 text-base px-8 py-4 rounded-2xl drop-shadow-md hover:bg-primary bg-secondary/20 text-black"
            onClick={() => (window.location.href = "/diagnosis")}
          >
            Mulai Diagnosis
          </Button> */}
          <button
              onClick={() => {
                if (!user) {
                  navigate("/diagnosis");
                } else {
                  navigate("/login");
                }
              }}
               className="mt-6 text-base px-8 py-4 rounded-2xl drop-shadow-md hover:bg-primary bg-secondary/20 text-silver"
            >
              Mulai Diagnosis
            </button>
        </div>
      </section>

      {/* Fitur Utama */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-primary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mengapa Menggunakan Sistem Ini?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <BrainCog className="w-12 h-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold">Berbasis Fuzzy Mamdani</h3>
              <p className="mt-2 text-gray-600">Akurasi tinggi dengan pendekatan logika fuzzy modern.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Stethoscope className="w-12 h-12 text-green-600" />
              <h3 className="mt-4 text-xl font-semibold">Membantu Diagnosis Awal</h3>
              <p className="mt-2 text-gray-600">Sebagai referensi awal sebelum ke dokter spesialis.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <SearchCheck className="w-12 h-12 text-yellow-600" />
              <h3 className="mt-4 text-xl font-semibold">Mudah Digunakan</h3>
              <p className="mt-2 text-gray-600">Tinggal isi gejala, klik, dan dapatkan hasil.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Activity className="w-12 h-12 text-red-500" />
              <h3 className="mt-4 text-xl font-semibold">Responsif & Cepat</h3>
              <p className="mt-2 text-gray-600">Akses mudah dari semua perangkat, kapan pun.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Sistem */}
      <section className="bg-primary py-16 px-6">
        <div className="max-w-5xl mx-auto text-center text-silver container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Sistem</h2>
          <p className="text-lg">
            Sistem ini dirancang untuk membantu pengguna dalam mendiagnosis penyakit saraf berdasarkan gejala yang dialami. 
            Menggunakan metode Fuzzy Logic Mamdani, sistem ini mampu menangani ketidakpastian data medis dan memberikan estimasi 
            jenis penyakit saraf dengan tingkat kepercayaan tertentu. Cocok digunakan untuk deteksi awal sebelum berkonsultasi ke dokter ahli.
          </p>
        </div>
      </section>

      {/* Penyakit yang Didiagnosis */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Penyakit yang Dapat Didiagnosis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BrainCog className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Low Back Pain</h3>
              </div>
              <p className="text-gray-600">
                Nyeri punggung bawah yang dapat disebabkan oleh berbagai faktor seperti postur tubuh, aktivitas fisik, atau kondisi medis tertentu.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Vertigo</h3>
              </div>
              <p className="text-gray-600">
                Gangguan keseimbangan yang menyebabkan sensasi berputar dan pusing, seringkali terkait dengan masalah telinga bagian dalam.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Stroke Iskemik</h3>
              </div>
              <p className="text-gray-600">
                Kondisi serius yang terjadi ketika aliran darah ke otak terhambat, menyebabkan kerusakan jaringan otak.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BrainCog className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Epilepsi</h3>
              </div>
              <p className="text-gray-600">
                Gangguan sistem saraf pusat yang menyebabkan kejang berulang dan perubahan perilaku akibat aktivitas listrik otak yang tidak normal.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Neuropati Perifer</h3>
              </div>
              <p className="text-gray-600">
                Kerusakan pada saraf perifer yang menyebabkan gejala seperti kesemutan, mati rasa, dan nyeri pada tangan dan kaki.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Penggunaan */}
      <section className="py-20 px-6 bg-silver/30">
        <div className="max-w-7xl mx-auto container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Cara Menggunakan Sistem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary">1. Pelajari Gejala</h3>
              </div>
              <p className="text-gray-600">
                Kenali gejala yang Anda alami dengan mempelajari daftar gejala yang tersedia di sistem.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <SearchCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary">2. Pilih Gejala</h3>
              </div>
              <p className="text-gray-600">
                Pilih gejala yang sesuai dengan kondisi Anda pada form diagnosis yang tersedia.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-primary">3. Dapatkan Hasil</h3>
              </div>
              <p className="text-gray-600">
                Sistem akan menganalisis gejala dan memberikan hasil diagnosis dengan tingkat kepercayaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mb-8 text-center">
          <div className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                  Siap untuk Memulai Diagnosis?
              </h2>
              <p className="text-gray-700 mb-6">
                  Gunakan SIDARA sekarang untuk mendapatkan analisis awal gangguan saraf Anda
              </p>
              <a 
                  href="/diagnosis" 
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                  Mulai Diagnosis
                  <ArrowRight className="w-5 h-5" />
              </a>
          </div>
      </section>

    </div>
  );
};

export default Home;
