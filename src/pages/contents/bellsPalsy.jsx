import React from 'react';

const BellsPalsy = () => {
  return (
    <div className="px-4 md:px-10 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Bell's Palsy
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Apa itu Bell's Palsy?</h2>
        <p className="text-gray-700 leading-relaxed">
          Bell's Palsy adalah kondisi medis yang menyebabkan kelumpuhan atau kelemahan tiba-tiba pada otot-otot di satu sisi wajah. Kondisi ini terjadi ketika saraf wajah (nervus fasialis) mengalami peradangan atau tekanan. Meskipun penyebab pastinya belum diketahui secara pasti, Bell's Palsy sering dikaitkan dengan infeksi virus.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Penyebab Utama</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Infeksi virus seperti herpes simpleks</li>
          <li>Peradangan pada saraf wajah</li>
          <li>Stres dan gangguan sistem imun</li>
          <li>Riwayat infeksi saluran pernapasan atas</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Gejala Bell's Palsy</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Kelumpuhan atau kelemahan tiba-tiba di satu sisi wajah</li>
          <li>Sulit tersenyum atau menutup mata di sisi yang terkena</li>
          <li>Mata kering atau berair di sisi yang terdampak</li>
          <li>Penurunan indera pengecap</li>
          <li>Sakit kepala ringan</li>
          <li>Nyeri di sekitar rahang atau belakang telinga</li>
          <li>Peningkatan kepekaan terhadap suara pada satu sisi</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Faktor Risiko</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Kehamilan, terutama trimester ketiga</li>
          <li>Infeksi virus</li>
          <li>Diabetes</li>
          <li>Riwayat keluarga dengan Bell's Palsy</li>
          <li>Stres yang berlebihan</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Diagnosis</h2>
        <p className="text-gray-700 leading-relaxed">
          Diagnosis Bell's Palsy biasanya berdasarkan gejala klinis dan pemeriksaan fisik. Pemeriksaan tambahan dapat dilakukan untuk menyingkirkan kemungkinan penyebab lain:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Elektromiografi (EMG) untuk mengukur aktivitas saraf</li>
          <li>CT Scan atau MRI untuk mendeteksi kerusakan saraf atau tumor</li>
          <li>Tes darah untuk memeriksa infeksi atau diabetes</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Pengobatan</h2>
        <p className="text-gray-700 leading-relaxed">
          Pengobatan Bell's Palsy bertujuan untuk mengurangi peradangan dan mempercepat pemulihan fungsi saraf wajah. Penanganan meliputi:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Kortikosteroid untuk mengurangi peradangan</li>
          <li>Obat antivirus jika dicurigai infeksi virus</li>
          <li>Latihan terapi wajah untuk menguatkan otot</li>
          <li>Obat tetes mata atau penutup mata untuk menjaga kelembapan mata</li>
          <li>Fisioterapi wajah untuk pemulihan fungsi otot</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Pencegahan</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Menjaga daya tahan tubuh</li>
          <li>Mengelola stres dengan baik</li>
          <li>Hindari paparan angin dingin langsung ke wajah</li>
          <li>Menjaga pola hidup sehat</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Prognosis</h2>
        <p className="text-gray-700 leading-relaxed">
          Sebagian besar pasien dengan Bell's Palsy dapat pulih sepenuhnya dalam waktu beberapa minggu hingga bulan. Namun, pada kasus tertentu, dapat terjadi kelemahan wajah permanen atau kekambuhan. Perawatan sejak dini dapat meningkatkan hasil pemulihan.
        </p>
      </section>

      <div className="text-end">
        <a
          href="/informasi/penyakit"
          className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary-dark transition"
        >
          &#129120; Kembali ke Daftar Penyakit
        </a>
      </div>
    </div>
  );
};

export default BellsPalsy;
