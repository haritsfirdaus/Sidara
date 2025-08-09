import React from 'react';

const Meningitis = () => {
  return (
    <div className="px-4 md:px-10 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Meningitis
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Apa itu Meningitis?</h2>
        <p className="text-gray-700 leading-relaxed">
          Meningitis adalah peradangan pada selaput pelindung otak dan sumsum tulang belakang (meninges).
          Kondisi ini dapat disebabkan oleh infeksi virus, bakteri, jamur, atau parasit, dan dapat
          berakibat fatal jika tidak ditangani dengan cepat. Meningitis dapat menimbulkan komplikasi
          serius seperti kerusakan otak, gangguan pendengaran, atau bahkan kematian.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Penyebab Utama</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Infeksi bakteri (misalnya <i>Neisseria meningitidis</i>, <i>Streptococcus pneumoniae</i>)</li>
          <li>Infeksi virus (enterovirus, herpes simplex virus, dll)</li>
          <li>Infeksi jamur (misalnya <i>Cryptococcus</i>, pada individu dengan imunitas rendah)</li>
          <li>Infeksi parasit (jarang terjadi)</li>
          <li>Cedera kepala atau prosedur medis yang melibatkan otak atau tulang belakang</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Gejala Meningitis</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Sakit kepala parah yang tidak kunjung reda</li>
          <li>Demam tinggi mendadak</li>
          <li>Leher kaku (sulit menunduk)</li>
          <li>Mual dan muntah</li>
          <li>Kepekaan terhadap cahaya (fotofobia)</li>
          <li>Kebingungan atau sulit berkonsentrasi</li>
          <li>Kejang</li>
          <li>Ruam kulit (terutama pada meningitis meningokokus)</li>
          <li>Penurunan kesadaran</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Faktor Risiko</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Usia muda (bayi dan anak-anak)</li>
          <li>Lingkungan padat (seperti asrama atau barak)</li>
          <li>Sistem kekebalan tubuh lemah (misalnya pada HIV/AIDS)</li>
          <li>Belum mendapatkan vaksinasi meningitis</li>
          <li>Riwayat cedera kepala atau prosedur tulang belakang</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Diagnosis</h2>
        <p className="text-gray-700 leading-relaxed">
          Diagnosis meningitis dilakukan berdasarkan kombinasi gejala klinis dan pemeriksaan laboratorium:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Pemeriksaan cairan serebrospinal (lumbar puncture)</li>
          <li>CT Scan atau MRI otak</li>
          <li>Uji darah dan kultur mikroorganisme</li>
          <li>Pemeriksaan serologis atau PCR untuk deteksi virus atau bakteri</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Pengobatan</h2>
        <p className="text-gray-700 leading-relaxed">
          Pengobatan meningitis tergantung pada penyebabnya:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Antibiotik intravena untuk meningitis bakteri</li>
          <li>Antiviral untuk beberapa jenis meningitis virus</li>
          <li>Obat antijamur untuk meningitis jamur</li>
          <li>Perawatan suportif: cairan, pengontrol kejang, dan kortikosteroid untuk mengurangi pembengkakan otak</li>
          <li>Rawat inap, sering kali di ICU untuk kasus berat</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Pencegahan</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Vaksinasi (Hib, meningokokus, pneumokokus, dan MMR)</li>
          <li>Menjaga kebersihan tangan dan lingkungan</li>
          <li>Menghindari kontak erat dengan penderita</li>
          <li>Menggunakan masker di lingkungan berisiko tinggi</li>
          <li>Meningkatkan sistem kekebalan tubuh melalui pola hidup sehat</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Prognosis</h2>
        <p className="text-gray-700 leading-relaxed">
          Prognosis meningitis sangat tergantung pada jenis infeksi, usia pasien, dan kecepatan penanganan.
          Meningitis bakteri memiliki tingkat kematian dan komplikasi yang lebih tinggi dibandingkan virus.
          Deteksi dan pengobatan dini sangat penting untuk mencegah kerusakan otak permanen atau kematian.
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

export default Meningitis;
