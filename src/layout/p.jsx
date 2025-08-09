import React, { useState } from "react";

const gejalaList = [
  { kode: "G01", nama: "Nyeri kepala secara tiba-tiba" },
  { kode: "G02", nama: "Muntah secara tiba-tiba" },
  { kode: "G03", nama: "Kehilangan keseimbangan secara tiba-tiba" },
  { kode: "G04", nama: "Gangguan penglihatan secara tiba-tiba" },
  { kode: "G05", nama: "Kelumpuhan pada salah satu sisi wajah secara tiba-tiba" },
  { kode: "G06", nama: "Kelemahan lengan dan kaki secara tiba-tiba" },
  { kode: "G07", nama: "Kesulitan berbicara secara tiba-tiba" },
  { kode: "G08", nama: "Kesadaran menurun secara tiba-tiba" },
  { kode: "G09", nama: "Demam" },
  { kode: "G10", nama: "Sakit kepala" },
  { kode: "G11", nama: "Kaku duduk (leher menjadi kaku)" },
  { kode: "G12", nama: "Kejang-kejang" },
  { kode: "G13", nama: "Perubahan kondisi fisik dan psikis" },
  { kode: "G14", nama: "Bengong" },
  { kode: "G15", nama: "Perubahan pengecapan" },
  { kode: "G16", nama: "Kesemutan pada dagu dan mulut" },
  { kode: "G17", nama: "Kelopak mata menutup tidak sempurna" },
  { kode: "G18", nama: "Nyeri tajam pada telinga" },
  { kode: "G19", nama: "Hiperakusis (bising pada telinga)" },
  { kode: "G20", nama: "Rasa nyeri menusuk pada punggung bagian bawah" },
  { kode: "G21", nama: "Kesulitan untuk berdiri tegak atau berjalan" },
  { kode: "G22", nama: "Gangguan sistem eksresi" },
  { kode: "G23", nama: "Mual dan muntah" },
  { kode: "G24", nama: "Pusing berputar" },
  { kode: "G25", nama: "Mengalami gangguan pada telinga bagian dalam" },
];

const penyakitData = {
  "Stroke Hemoragik": {
    G02: 5, G03: 5, G04: 5, G07: 5, G08: 10, G01: 20, G05: 20, G06: 30
  },
  "Stroke Iskemik": {
    G01: 10, G03: 10, G04: 10, G05: 20, G07: 20, G06: 30
  },
  "Meningitis": {
    G09: 10, G10: 30, G11: 60
  },
  "Epilepsi": {
    G13: 10, G14: 10, G12: 80
  },
  "Bell’s Palsy": {
    G16: 5, G18: 5, G19: 5, G15: 10, G17: 15, G05: 60
  },
  "Low Back Pain": {
    G21: 10, G22: 10, G20: 80
  },
  "Vertigo": {
    G03: 10, G09: 10, G25: 10, G23: 20, G24: 50
  }
};

export default function DiagnosisApp() {
  const [gejala, setGejala] = useState({});
  const [hasil, setHasil] = useState(null);

  const handleChange = (kode, checked) => {
    setGejala({ ...gejala, [kode]: checked });
  };

  const hitungDiagnosa = () => {
    const skorPenyakit = {};
    for (const [penyakit, gejalanya] of Object.entries(penyakitData)) {
      let skor = 0;
      for (const [kode, bobot] of Object.entries(gejalanya)) {
        if (gejala[kode]) skor += bobot;
      }
      skorPenyakit[penyakit] = skor;
    }

    const sorted = Object.entries(skorPenyakit).sort((a, b) => b[1] - a[1]);
    setHasil(sorted);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Diagnosis Penyakit Saraf</h1>
      <div className="grid grid-cols-1 gap-2">
        {gejalaList.map((g) => (
          <label key={g.kode} className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => handleChange(g.kode, e.target.checked)}
            />
            {g.kode} - {g.nama}
          </label>
        ))}
      </div>
      <button
        onClick={hitungDiagnosa}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Diagnosa
      </button>

      {hasil && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Hasil Diagnosa:</h2>
          <ul>
            {hasil.map(([penyakit, skor]) => (
              <li key={penyakit}>
                {penyakit}: <strong>{skor}%</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}