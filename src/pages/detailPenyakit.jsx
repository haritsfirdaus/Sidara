import { useParams } from "react-router-dom";

const penyakitData = [
  {
    kode: "P01",
    nama: "Low Back Pain",
    gejala: ["G01", "G02", "G03", "G20", "G21"],
  },
  {
    kode: "P02",
    nama: "Vertigo",
    gejala: ["G04", "G05", "G06", "G07", "G18", "G24"],
  },
  {
    kode: "P03",
    nama: "Stroke Iskemik",
    gejala: ["G04", "G08", "G09", "G10", "G11", "G12"],
  },
  {
    kode: "P04",
    nama: "Epilepsi",
    gejala: ["G13", "G14", "G19", "G22", "G23"],
  },
  {
    kode: "P05",
    nama: "Neuropati Perifer",
    gejala: ["G12", "G15", "G16", "G17"],
  }
];

const gejalaMap = {
  G01: "Kesulitan untuk berdiri tegak atau berjalan",
  G02: "Gangguan sistem eksresi",
  G03: "Rasa nyeri menusuk pada punggung bagian bawah",
  G04: "Kehilangan keseimbangan secara tiba tiba",
  G05: "Mengalami gangguan pada telinga bagian dalam",
  G06: "Mual dan muntah",
  G07: "Pusing berputar",
  G08: "Nyeri kepala secara tiba tiba",
  G09: "Gangguan penglihatan secara tiba tiba",
  G10: "Kelumpuhan pada salah satu sisi wajah secara tiba tiba",
  G11: "Kesulitan berbicara secara tiba tiba",
  G12: "Kelemahan lengan dan kaki secara tiba tiba",
  G13: "Perubahan kondisi fisik dan psikis",
  G14: "Bengong",
  G15: "Kesemutan pada tangan dan kaki",
  G16: "Sensasi terbakar di tangan/kaki",
  G17: "Penurunan refleks atau kekakuan otot",
  G18: "Demam",
  G19: "Kejang kejang",
  G20: "Nyeri memburuk saat bangun tidur atau duduk lama",
  G21: "Kesulitan membungkuk atau mengangkat beban",
  G22: "Kehilangan kesadaran sesaat",
  G23: "Perubahan perilaku sebelum kejang",
  G24: "Gerakan mata tidak terkontrol (nystagmus)"
};

const DetailPenyakit = () => {
  const { slug } = useParams();

  const penyakit = penyakitData.find((p) =>
    p.nama.toLowerCase().replace(/\s+/g, "-").replace(/[’']/g, "") === slug
  );

  if (!penyakit) {
    return <p className="text-center text-red-500 mt-10">Penyakit tidak ditemukan.</p>;
  }

  return (
    <div className="px-4 py-10 md:px-10 mt-4">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">
        {penyakit.kode} - {penyakit.nama}
      </h2>

      <h3 className="text-lg font-semibold mb-2">Gejala Terkait:</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {penyakit.gejala.map((kode, idx) => (
          <li key={idx}>
            {kode} - {gejalaMap[kode]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailPenyakit;
