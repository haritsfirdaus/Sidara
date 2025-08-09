import React from 'react';
import { CheckCircle, Brain, User, ListChecks, Send, FileText, Stethoscope, ArrowRight } from 'lucide-react';
import { langkahPanduan } from '../data/dataPanduan';

const Panduan = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-silver/30">
            {/* Hero Section */}
            <section className="bg-white pt-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                            Panduan Penggunaan SIDARA
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Pelajari cara menggunakan sistem diagnosis SIDARA untuk mendapatkan analisis awal gangguan saraf Anda
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 lg:px-8 py-16">
                {/* Overview Section */}
                <section className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-primary/10 p-3 rounded-xl">
                                <Brain className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">Cara Kerja SIDARA</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            SIDARA menggunakan metode Fuzzy Logic Sugeno untuk menganalisis gejala yang Anda alami. Sistem ini akan memproses input gejala dan memberikan hasil diagnosis dengan tingkat kemungkinan yang akurat.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-primary/5 rounded-xl p-4">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <User className="w-5 h-5 text-primary" />
                                    Input Data
                                </h3>
                                <p className="text-sm text-gray-600">Masukkan data diri dan gejala yang dialami</p>
                            </div>
                            <div className="bg-primary/5 rounded-xl p-4">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-primary" />
                                    Analisis
                                </h3>
                                <p className="text-sm text-gray-600">Sistem menganalisis menggunakan Fuzzy Logic</p>
                            </div>
                            <div className="bg-primary/5 rounded-xl p-4">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-primary" />
                                    Hasil
                                </h3>
                                <p className="text-sm text-gray-600">Dapatkan hasil diagnosis dan rekomendasi</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Langkah-langkah Section */}
                <section className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-primary/10 p-3 rounded-xl">
                                <ListChecks className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">Langkah-langkah Diagnosis</h2>
                        </div>
                        
                        <div className="space-y-6">
                            {langkahPanduan.map((item, index) => (
                                <div key={index} className="relative">
                                    {/* Connector Line */}
                                    {index < langkahPanduan.length - 1 && (
                                        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary/20"></div>
                                    )}
                                    
                                    <div className="flex gap-6 items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary/10 p-3 rounded-full">
                                                <CheckCircle className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-lg mb-2 text-primary">
                                                {item.langkah}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {item.deskripsi}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tips Section */}
                <section className="max-w-4xl mx-auto mt-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-primary/10 p-3 rounded-xl">
                                <Stethoscope className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary">Tips Penggunaan</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-primary/5 rounded-xl p-6">
                                <h3 className="font-semibold mb-4">Sebelum Diagnosis</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Persiapkan data diri yang akurat</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Catat gejala yang Anda alami</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Pastikan koneksi internet stabil</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-primary/5 rounded-xl p-6">
                                <h3 className="font-semibold mb-4">Setelah Diagnosis</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Simpan hasil diagnosis</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Konsultasikan ke dokter</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Ikuti rekomendasi yang diberikan</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto mt-16 text-center">
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
        </main>
    );
};

export default Panduan;
