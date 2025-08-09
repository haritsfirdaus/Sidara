import React from 'react';
import { Target, Laptop, Star, Users, Award, Heart, Brain, Shield } from 'lucide-react';

const TentangKami = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-silver/30 container">
            {/* Hero Section */}
            <section className="bg-white pt-20 pb-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                            Tentang SIDARA
                        </h1>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            Mengenal lebih dekat tim di balik SIDARA – Sistem Informasi Diagnosa Saraf yang mengubah cara kita memahami kesehatan saraf
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4  space-y-16">
                {/* Tujuan Kami Section */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-primary/10 p-3 rounded-xl">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-primary">Tujuan Kami</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    SIDARA dikembangkan sebagai solusi teknologi untuk membantu masyarakat mengenali potensi gangguan saraf sejak dini. Dengan memanfaatkan metode kecerdasan buatan seperti Fuzzy Logic Mamdani, kami ingin menghadirkan sistem pendukung diagnosis yang sederhana, cepat, dan dapat diakses siapa saja.
                                </p>
                                <div className="flex items-center gap-4 text-primary">
                                    <Brain className="w-6 h-6" />
                                    <span className="font-medium">Kecerdasan Buatan</span>
                                </div>
                                <div className="flex items-center gap-4 text-primary">
                                    <Shield className="w-6 h-6" />
                                    <span className="font-medium">Diagnosis Akurat</span>
                                </div>
                            </div>
                            <div className="bg-primary/5 rounded-xl p-6">
                                <h3 className="font-semibold text-lg mb-4">Keunggulan Sistem Ini</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Diagnosis cepat dan akurat</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Antarmuka yang mudah digunakan</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Informasi medis yang terpercaya</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span>Dukungan 24/7</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tim Pengembang Section */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-primary/10 p-3 rounded-xl">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-primary">Tim Pengembang</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Kami adalah mahasiswa dari jurusan Informatika yang berfokus pada pengembangan teknologi bermanfaat berbasis web. SIDARA adalah bagian dari proyek akhir kami yang bertujuan menggabungkan pemrograman, kecerdasan buatan, dan desain interaktif.
                                </p>
                                <div className="bg-primary/5 rounded-xl p-6">
                                    <h3 className="font-semibold text-lg mb-4">Profil Pengembang</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Award className="w-5 h-5 text-primary" />
                                            <span className="font-medium">Muhammad Harits Firdaus</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Laptop className="w-5 h-5 text-primary" />
                                            <span>Universitas Nusa Putra</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Star className="w-5 h-5 text-primary" />
                                            <span>Software Development</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary/5 rounded-xl p-6">
                                <h3 className="font-semibold text-lg mb-4">Keahlian</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-medium mb-2">Web Development</h4>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-medium mb-2">AI/ML</h4>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{width: '25%'}}></div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-medium mb-2">UI/UX Design</h4>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{width: '50%'}}></div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-medium mb-2">Database</h4>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{width: '35%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visi & Misi Section */}
                <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-primary/10 p-3 rounded-xl">
                                <Heart className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-primary">Visi & Misi</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-primary/5 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-primary" />
                                    Visi
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Menjadi sistem pendukung keputusan medis berbasis web yang terpercaya dalam membantu deteksi gangguan saraf secara cepat dan akurat.
                                </p>
                            </div>
                            <div className="bg-primary/5 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-primary" />
                                    Misi
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Menghadirkan sistem yang mudah digunakan oleh masyarakat awam</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Mengintegrasikan metode kecerdasan buatan dalam diagnosa medis</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                        <span>Menyediakan edukasi tentang gejala dan penyakit saraf</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Penutup Section */}
                <section className="text-center py-12">
                    <div className="max-w-2xl mx-auto">
                        <p className="text-xl italic text-gray-700 mb-6">
                            "Kami percaya bahwa pencegahan dan pemahaman dini terhadap penyakit adalah kunci hidup yang lebih sehat."
                        </p>
                        <div className="flex justify-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Heart className="w-6 h-6 text-primary" />
                            </div>
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Brain className="w-6 h-6 text-primary" />
                            </div>
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Shield className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default TentangKami;
