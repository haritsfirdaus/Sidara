const Content = () => {
    return (
        <div className="mt-12 space-y-12 container">
            {/* Konten Tambahan di Bawah */}
            <section className="mt-12 bg-white/70 backdrop-blur-sm shadow-md p-6 rounded-xl animate-fade-in container">
                <h2 className="text-lg font-semibold text-primary mb-3">Kenapa Memilih SIDARA?</h2>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                    <li>🔍 Diagnosa cepat, mandiri & terpercaya</li>
                    <li>🧠 Berbasis Fuzzy Logic & Decision Tree</li>
                    <li>📊 Dirancang khusus untuk penyakit saraf</li>
                    <li>📍 Integrasi lokasi fasilitas medis (segera hadir)</li>
                </ul>
            </section>
            {/* Seksi 1: Keunggulan SIDARA */}
            <section className="bg-white shadow-lg p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-primary mb-4">✨ Keunggulan SIDARA</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Menggunakan gabungan metode Fuzzy Mamdani dan Decision Tree C4.5</li>
                    <li>Hasil diagnosis berbasis persentase keyakinan</li>
                    <li>Antarmuka sederhana dan mudah digunakan</li>
                    <li>Ramah untuk pasien awam tanpa latar medis</li>
                </ul>
            </section>

            {/* Seksi 2: Cara Penggunaan */}
            <section className="bg-white shadow-lg p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-primary mb-4">🧭 Cara Menggunakan SIDARA</h2>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Masukkan nama dan usia</li>
                    <li>Isi pertanyaan gejala secara jujur</li>
                    <li>Tekan tombol "Kirim"</li>
                    <li>Lihat hasil diagnosis dan persentasenya</li>
                </ol>
            </section>

            {/* Seksi 3: Tentang Metode */}
            <section className="bg-white shadow-lg p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-primary mb-4">🧠 Tentang Metode Diagnosa</h2>
                <p className="text-gray-700 text-sm md:text-base">
                    SIDARA menggabungkan logika fuzzy untuk menangani ketidakpastian gejala yang tidak tegas, serta Decision Tree C4.5 untuk klasifikasi berdasarkan data pelatihan medis. Kombinasi ini memungkinkan sistem memberikan hasil diagnosis yang lebih presisi dan akurat.
                </p>
            </section>

            {/* Seksi 4: Tentang Kami */}
            <section className="bg-white shadow-lg p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-primary mb-4">👩‍⚕️ Tentang Kami</h2>
                <p className="text-gray-700 text-sm md:text-base">
                    SIDARA dikembangkan oleh tim mahasiswa informatika dengan misi sosial untuk membantu masyarakat mengenali potensi gangguan saraf secara dini, menggunakan teknologi kecerdasan buatan.
                </p>
            </section>
        </div>
    );
};

export default Content;
