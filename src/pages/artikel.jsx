import React from "react";

const penyakitSaraf = [
  {
    nama: "Stroke Iskemik",
    penjelasan:
      "Terjadi akibat penyumbatan pembuluh darah ke otak yang menyebabkan sel otak kekurangan oksigen.",
    gejala: [
      "Kelemahan mendadak di wajah/lengan/kaki",
      "Kesulitan berbicara atau memahami",
      "Penglihatan kabur"
    ],
    pencegahan: "Kontrol tekanan darah, hindari merokok, dan jaga pola makan sehat."
  },
  {
    nama: "Vertigo",
    penjelasan:
      "Kondisi di mana seseorang merasa pusing berputar, biasanya karena gangguan di telinga dalam.",
    gejala: [
      "Pusing berputar",
      "Mual dan muntah",
      "Gangguan keseimbangan"
    ],
    pencegahan: "Hindari gerakan kepala tiba-tiba dan cukup istirahat."
  },
  {
    nama: "Epilepsi",
    penjelasan:
      "Gangguan sistem saraf pusat yang menyebabkan kejang berulang akibat aktivitas listrik otak yang tidak normal.",
    gejala: [
      "Kejang mendadak",
      "Tatapan kosong",
      "Kehilangan kesadaran sesaat"
    ],
    pencegahan: "Minum obat secara teratur dan hindari stres atau kurang tidur."
  },
  {
    nama: "Low Back Pain (Sakit Pinggang)",
    penjelasan:
      "Nyeri yang terjadi di bagian bawah punggung, bisa akibat postur tubuh, cedera, atau degenerasi tulang belakang.",
    gejala: [
      "Nyeri di punggung bagian bawah",
      "Kaku atau sulit bergerak",
      "Kesemutan di kaki"
    ],
    pencegahan: "Latihan peregangan, hindari duduk terlalu lama, dan posisi duduk yang benar."
  },
  {
    nama: "Neuropati Perifer",
    penjelasan:
      "Kerusakan saraf perifer yang menyebabkan kesemutan, nyeri, dan kelemahan otot, biasanya pada tangan dan kaki.",
    gejala: [
      "Kesemutan",
      "Kebas",
      "Nyeri seperti terbakar"
    ],
    pencegahan: "Kendalikan diabetes, konsumsi vitamin B, dan hindari alkohol berlebihan."
  }
];

const Edukasi = () => {
  return (
    <main className="container mx-auto px-4 py-16 text-primary">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Edukasi Penyakit Saraf
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container">
        {penyakitSaraf.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">{item.nama}</h2>
            <p className="text-gray-700 mb-3 text-sm">{item.penjelasan}</p>

            <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-1">
              Gejala Umum:
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mb-3">
              {item.gejala.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              Pencegahan:
            </h3>
            <p className="text-sm text-green-700 italic">{item.pencegahan}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Edukasi;
