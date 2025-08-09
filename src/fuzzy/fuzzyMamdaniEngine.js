
// fuzzyMamdaniEngine.js

// Contoh fungsi keanggotaan segitiga
function triangular(x, a, b, c) {
  if (x <= a || x >= c) return 0;
  if (x === b) return 1;
  if (x > a && x < b) return (x - a) / (b - a);
  if (x > b && x < c) return (c - x) / (c - b);
}

// Contoh fungsi keanggotaan trapesium
function trapezoidal(x, a, b, c, d) {
  if (x <= a || x >= d) return 0;
  if (x >= b && x <= c) return 1;
  if (x > a && x < b) return (x - a) / (b - a);
  if (x > c && x < d) return (d - x) / (d - c);
}

// Fuzzifikasi berdasarkan nilai densitas ke dalam kategori fuzzy (misal: ringan, sedang, berat)
function fuzzify(value) {
  return {
    ringan: triangular(value, 0, 20, 40),
    sedang: triangular(value, 30, 50, 70),
    berat: triangular(value, 60, 80, 100)
  };
}

// Basis aturan fuzzy sederhana (contoh rule untuk 1 penyakit)
const rules = [
  {
    penyakit: "Stroke Iskemik",
    kondisi: [
      { kode: "G08", label: "berat" },
      { kode: "G10", label: "berat" },
    ],
    output: 0.9
  },
  {
    penyakit: "Epilepsi",
    kondisi: [
      { kode: "G19", label: "berat" },
      { kode: "G22", label: "sedang" }
    ],
    output: 0.85
  }
];

// Mesin inferensi fuzzy Mamdani (menggunakan min dan max)
function mamdaniInference(inputDensitas) {
  const hasil = {};

  rules.forEach((rule) => {
    const firingStrengths = rule.kondisi.map(({ kode, label }) => {
      const fuzzy = fuzzify(inputDensitas[kode] || 0);
      return fuzzy[label] || 0;
    });

    const alpha = Math.min(...firingStrengths);

    if (!hasil[rule.penyakit]) hasil[rule.penyakit] = [];
    hasil[rule.penyakit].push(alpha);
  });

  // Agregasi dan defuzzifikasi (pakai rata-rata α * nilai konsekuen)
  const hasilAkhir = Object.entries(hasil).map(([penyakit, alphas]) => {
    const weightedSum = alphas.reduce((sum, a) => sum + a * 100, 0);
    const sumAlpha = alphas.reduce((sum, a) => sum + a, 0);
    const nilai = sumAlpha === 0 ? 0 : weightedSum / sumAlpha;
    return { penyakit, nilai: parseFloat(nilai.toFixed(2)) };
  });

  return hasilAkhir.sort((a, b) => b.nilai - a.nilai);
}

// Export modul untuk digunakan di halaman hasil
export { fuzzify, mamdaniInference };
