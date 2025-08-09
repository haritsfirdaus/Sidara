import React from 'react';

const StrokeHemoragik = () => {
  return (
    <div className="px-4 md:px-10 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Stroke Hemoragik
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Apa itu Stroke Hemoragik?</h2>
        <p className="text-gray-700 leading-relaxed">
          Stroke hemoragik adalah jenis stroke yang terjadi ketika pembuluh darah di otak pecah,
          menyebabkan perdarahan (hemoragi) di dalam atau sekitar otak. Perdarahan ini menyebabkan
          tekanan pada jaringan otak dan dapat merusak sel-sel otak. Stroke jenis ini merupakan sekitar
          10–15% dari semua kasus stroke, namun sering kali lebih fatal dibandingkan stroke iskemik.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Penyebab Utama</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Tekanan darah tinggi (hipertensi) kronis</li>
          <li>Trauma kepala</li>
          <li>Aneurisma otak (pelebaran pembuluh darah yang melemah)</li>
          <li>Kelainan pembuluh darah (malformasi arteri dan vena)</li>
          <li>Penyakit darah seperti hemofilia</li>
          <li>Penggunaan obat pengencer darah secara berlebihan</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Gejala Stroke Hemoragik</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Nyeri kepala yang tiba-tiba dan sangat hebat</li>
          <li>Mual dan muntah secara mendadak</li>
          <li>Kehilangan keseimbangan atau koordinasi tubuh</li>
          <li>Gangguan penglihatan mendadak</li>
          <li>Kelumpuhan wajah atau tubuh secara tiba-tiba</li>
          <li>Kesulitan bicara atau memahami ucapan</li>
          <li>Kehilangan kesadaran atau pingsan</li>
          <li>Keadaan kebingungan, kejang, atau koma</li>
        </ul>
      </section>

      {/* 🔹 Faktor Risiko - Tambahan Baru */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Faktor Risiko</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Hipertensi yang tidak terkontrol</li>
          <li>Kebiasaan merokok</li>
          <li>Konsumsi alkohol berlebihan</li>
          <li>Riwayat keluarga dengan penyakit pembuluh darah</li>
          <li>Penggunaan narkoba, terutama kokain atau amfetamin</li>
          <li>Usia lanjut</li>
          <li>Kolesterol tinggi dan gaya hidup tidak sehat</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Diagnosis</h2>
        <p className="text-gray-700 leading-relaxed">
          Diagnosis stroke hemoragik dilakukan melalui kombinasi pemeriksaan fisik, riwayat medis,
          serta pemeriksaan penunjang seperti:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>CT Scan kepala untuk mendeteksi perdarahan</li>
          <li>MRI otak untuk melihat area otak yang rusak</li>
          <li>Angiografi serebral untuk melihat pembuluh darah otak</li>
          <li>Pemeriksaan tekanan darah dan tes darah lengkap</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Pengobatan</h2>
        <p className="text-gray-700 leading-relaxed">
          Penanganan stroke hemoragik bersifat darurat dan tergantung pada lokasi serta tingkat keparahan
          perdarahan. Penanganan meliputi:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
          <li>Obat untuk menurunkan tekanan darah dan mengurangi pembengkakan otak</li>
          <li>Operasi untuk memperbaiki pembuluh darah yang rusak atau mengangkat darah beku</li>
          <li>Manajemen medis intensif di ICU</li>
          <li>Rehabilitasi untuk pemulihan fungsi otak, bicara, dan motorik</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Pencegahan</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Menjaga tekanan darah tetap normal</li>
          <li>Menghindari merokok dan alkohol berlebihan</li>
          <li>Menjaga pola makan rendah garam dan lemak</li>
          <li>Rutin olahraga dan mengelola stres</li>
          <li>Mengecek kesehatan secara berkala</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-secondary mb-3">Prognosis</h2>
        <p className="text-gray-700 leading-relaxed">
          Prognosis stroke hemoragik sangat bervariasi tergantung lokasi perdarahan, kecepatan penanganan,
          usia pasien, dan kondisi medis lainnya. Meskipun tingkat kematian cukup tinggi, deteksi dini
          dan pengobatan segera dapat meningkatkan peluang pemulihan.
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

export default StrokeHemoragik;
