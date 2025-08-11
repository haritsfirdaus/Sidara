import React, { useEffect, useState, useRef } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";
import LogoSidara from "../assets/sidara-logo.png";
import { ClipboardList } from "lucide-react";

const COLORS = ["#0B5269", "#D9D9D9"];
// const getColor = (persentase) => {
//   if (persentase <= 40) return "#16a34a"; // hijau
//   if (persentase <= 70) return "#facc15"; // kuning
//   return "#dc2626"; // merah
// };
// const PieChartCustom = ({ item }) => {
//   const warnaUtama = getColor(item.persentase);


export default function HasilDiagnosis() {
  const navigate = useNavigate();
  const [hasil, setHasil] = useState([]);
  const [tanggalDiagnosis, setTanggalDiagnosis] = useState("");
  const [loadingCetak, setLoadingCetak] = useState(false);
  const [loading, setLoading] = useState(true);
  const printRef = useRef();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const diagnosisResult = localStorage.getItem("diagnosisResult");
    const userInfo = localStorage.getItem("user");
    
    if (diagnosisResult) {
      try {
        const data = JSON.parse(diagnosisResult);
        const userData = userInfo ? JSON.parse(userInfo) : null;
        
        // Konversi hasil dari backend ke format yang dibutuhkan komponen
        const formattedResults = Array.isArray(data.hasilDiagnosis)
          ? data.hasilDiagnosis
          : [];

        setHasil(formattedResults.sort((a, b) => b.persentase - a.persentase));
        // setHasil(formattedResults);

        setUserData(userData);

        const today = new Date();
        const tgl = today.toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        });
        setTanggalDiagnosis(tgl);
      } catch (error) {
        console.error("Error parsing diagnosis result:", error);
        navigate("/diagnosis");
      }
    } else {
      navigate("/diagnosis");
    }
    setLoading(false);
  }, [navigate]);

  const getKategoriRisiko = (persentase) => {
    if (persentase <= 40) {
      return { label: "Aman", color: "text-green-600", bg: "bg-green-100" };
    } else if (persentase <= 65) {
      return { label: "Cukup Aman", color: "text-yellow-700", bg: "bg-yellow-100" };
    } else if (persentase <= 85) {
      return { label: "Waspada", color: "text-orange-700", bg: "bg-orange-100" };
    } else {
      return { label: "Bahaya", color: "text-red-600", bg: "bg-red-100" };
    }
  };

 const getSaranRisiko = (penyakit, persentase) => {
  switch (penyakit.toLowerCase()) {
    case "low back pain":
      if (persentase <= 40) {
        return "Tetap jaga postur tubuh saat duduk dan hindari mengangkat beban berat.";
      } else if (persentase <= 70) {
        return "Perhatikan nyeri punggung yang terjadi berulang dan konsultasikan ke fisioterapis bila perlu.";
      } else {
        return "Segera konsultasikan ke dokter spesialis saraf atau ortopedi untuk pemeriksaan lanjutan.";
      }

    case "vertigo":
      if (persentase <= 40) {
        return "Hindari gerakan kepala tiba-tiba dan cukupkan istirahat.";
      } else if (persentase <= 70) {
        return "Jika sering merasa pusing berputar, pertimbangkan konsultasi ke dokter THT atau saraf.";
      } else {
        return "Segera periksa ke dokter karena vertigo berat bisa mengganggu aktivitas harian secara signifikan.";
      }

    case "stroke iskemik":
      if (persentase <= 40) {
        return "Tetap jaga tekanan darah dan pola hidup sehat untuk mencegah risiko stroke.";
      } else if (persentase <= 70) {
        return "Jika ada gejala seperti kelemahan tubuh atau kesulitan bicara, segera lakukan pemeriksaan medis.";
      } else {
        return "Segera ke IGD atau dokter saraf karena stroke iskemik termasuk kondisi darurat medis.";
      }

    case "epilepsi":
      if (persentase <= 40) {
        return "Pantau kondisi tubuh dan hindari pencetus seperti stres atau kurang tidur.";
      } else if (persentase <= 70) {
        return "Jika terjadi kejang sesekali, pertimbangkan konsultasi untuk evaluasi lanjutan.";
      } else {
        return "Segera konsultasikan ke dokter saraf karena epilepsi dengan risiko tinggi memerlukan penanganan khusus.";
      }

    case "neuropati perifer":
      if (persentase <= 40) {
        return "Jaga kadar gula darah dan rutin olahraga ringan untuk menjaga kesehatan saraf.";
      } else if (persentase <= 70) {
        return "Jika sering kesemutan atau mati rasa, segera periksa ke fasilitas kesehatan.";
      } else {
        return "Segera konsultasi ke dokter karena neuropati perifer dapat berkembang menjadi kerusakan saraf kronis.";
      }

    default:
      if (persentase <= 40) {
        return "Tetap jaga kesehatan dengan pola makan bergizi dan olahraga ringan.";
      } else if (persentase <= 70) {
        return "Perhatikan gejala yang dirasakan dan pertimbangkan konsultasi ke tenaga medis.";
      } else {
        return "Segera konsultasikan ke dokter spesialis untuk penanganan lebih lanjut.";
      }
  }
};


  const handleCetak = async () => {
    const element = document.getElementById("pdf-layout");
    if (!element) return;

    setLoadingCetak(true);
    element.classList.remove("hidden");

    await new Promise((resolve) => setTimeout(resolve, 200));

    html2pdf()
      .set({
        margin: 15,
        filename: `laporan_diagnosis.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(element)
      .save()
      .then(() => {
        element.classList.add("hidden");
        setLoadingCetak(false);
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-primary relative">
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {loadingCetak && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-silver rounded-lg px-6 py-4 shadow-md text-center">
                <p className="text-lg font-semibold mb-2">Sedang menyiapkan PDF...</p>
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            </div>
          )}

          {/* Tampilan web */}
          <div ref={printRef}>
            <h1 className="text-3xl font-bold my-6 text-center text-primary">
              Hasil Diagnosis
            </h1>

           {/* Info Pasien */}
            {userData && (
              <div className="mb-8 p-6 bg-silver rounded-xl border border-primary/10">
                <h2 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-primary" />
                  Informasi Pasien
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-primary">
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Nama</p>
                    <p className="text-base font-medium text-primary">{userData.nama}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Usia</p>
                    <p className="text-base font-medium text-primary">{userData.usia} tahun</p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Tanggal Diagnosis</p>
                    <p className="text-base font-medium text-primary">{tanggalDiagnosis}</p>
                  </div>
                </div>
              </div>
            )}

            <h2 className="text-xl font-bold text-primary mb-6 text-center border-b border-primary/10 pb-2">
              Visualisasi Diagnosis
            </h2>

            {hasil.length > 0 && (() => {
              const nilaiTertinggi = hasil[0].persentase;
              if (nilaiTertinggi < 40) return null;

              const penyakitTertinggi = hasil.filter(item => item.persentase === nilaiTertinggi).map(item => item.penyakit);
              const penyakitText = penyakitTertinggi.join(" dan ");

              return (
                <div className="bg-primary/5 border-l-4 border-primary/70 text-primary p-4 rounded mb-6">
                  <p className="text-sm leading-relaxed">
                    Berdasarkan gejala yang dipilih, pasien memiliki risiko tertinggi mengalami{" "}
                    <span className="font-semibold">{penyakitText}</span> dengan persentase{" "}
                    <span className="font-semibold">{Math.round(nilaiTertinggi)}%</span>.{" "}
                    {getSaranRisiko(penyakitTertinggi[0], nilaiTertinggi)}
                  </p>
                </div>
              );
            })()}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hasil.map((item, index) => {
                const risiko = getKategoriRisiko(item.persentase);
                return (
                  <div
                    key={index}
                    className="bg-silver border border-primary/10 rounded-xl p-6 flex flex-col items-center space-y-3"
                  >
                  <h3 className="text-lg font-semibold text-gray-700">{item.penyakit}</h3>

                  <div className="w-full h-52">
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Hasil", value: item.persentase },
                            { name: "Sisa", value: 100 - item.persentase },
                          ]}
                          innerRadius={50}
                          outerRadius={80}
                          dataKey="value"
                          stroke="none"
                        >
                          {COLORS.map((color, i) => (
                            <Cell key={`cell-${i}`} fill={color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${Math.round(value)}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="text-sm text-gray-600">
                    Persentase :{" "}
                    <span className="font-bold text-gray-800">
                      {Math.round(item.persentase)}%
                    </span>
                  </div>

                  <div className={`text-sm font-semibold px-4 py-1 rounded-full ${risiko.bg} ${risiko.color}`}>{risiko.label}
                  </div>

                  <p className="text-sm text-gray-700 text-center italic px-4">
                    {getSaranRisiko(item.penyakit, item.persentase)}
                  </p>
                </div>
              );
            })}
          </div>
          </div>

          {/* Ringkasan Diagnosis Bahaya */}
          {hasil.some(item => getKategoriRisiko(item.persentase).label === "Bahaya") && (
            <div className="mt-10 bg-red-50 border border-red-200 p-5 rounded-xl">
              <h2 className="text-xl font-bold text-red-700 mb-3">⚠️ Ringkasan Diagnosis Risiko Tinggi</h2>
              <ul className="list-disc pl-6 text-red-800 text-sm space-y-1">
                {hasil
                  .filter(item => getKategoriRisiko(item.persentase).label === "Bahaya")
                  .map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold">{item.penyakit}</span> memiliki tingkat risiko <span className="font-bold">{Math.round(item.persentase)}%</span>. Segera konsultasikan ke dokter spesialis saraf.
                    </li>
                  ))}
              </ul>
              <p className="text-sm mt-3 text-red-700">
                Disarankan segera berkonsultasi ke fasilitas kesehatan terdekat untuk mendapatkan pemeriksaan dan penanganan lebih lanjut.
              </p>
            </div>
          )}

          <p className="text-gray-600 text-sm mt-6 italic leading-relaxed">
            Catatan: <br />Laporan ini merupakan hasil dari sistem pakar berbasis fuzzy Mamdani dan hanya bersifat bantuan awal. Untuk diagnosis lebih lanjut dan penanganan yang tepat, silakan berkonsultasi dengan dokter spesialis saraf atau tenaga medis profesional.
          </p>

          {/* Layout khusus PDF */}
          <div id="pdf-layout" className="hidden">
            <div className="font-sans p-8 text-black text-[14px] max-w-2xl mx-auto">
              {/* Header dengan logo dan tanggal */}
              <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <img src={LogoSidara} alt="Logo SIDARA" className="w-32" />
                  <div className="ml-4">
                    {/* <h1 className="text-xl font-bold text-primary">SIDARA</h1>
                    <p className="text-sm text-gray-600">Sistem Pakar Diagnosis Penyakit Saraf</p> */}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Tanggal Diagnosis</p>
                  <p className="font-semibold text-primary">{tanggalDiagnosis}</p>
                </div>
              </div>

              {/* Judul Laporan */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-primary mb-2">Laporan Hasil Diagnosis</h1>
                <p className="text-gray-600">Berdasarkan Metode Fuzzy Mamdani</p>
              </div>

              {/* Informasi Pasien */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">
                  Informasi Pasien
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Nama</p>
                    <p className="font-medium text-primary">{userData?.nama || "-"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Usia</p>
                    <p className="font-medium text-primary">{userData?.usia || "-"} tahun</p>
                  </div>
                </div>
              </div>

              {/* Ringkasan Diagnosis */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">
                  Ringkasan Diagnosis
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary rounded-lg text-white">
                        <th className="px-4 py-3 text-left rounded-l-lg">Penyakit</th>
                        <th className="px-4 py-3 text-center">Persentase</th>
                        <th className="px-4 py-3 text-center rounded-r-lg">Tingkat Risiko</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hasil.map((item, i) => {
                        const risiko = getKategoriRisiko(item.persentase);
                        return (
                          <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3">{item.penyakit}</td>
                            <td className="px-4 py-3 text-center">{Math.round(item.persentase)}%</td>
                            <td className="px-4 py-3 text-center">
                              <span className={`px-3 py-2 rounded-full text-sm ${risiko.bg} ${risiko.color}`}>
                                {risiko.label}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Saran dan Catatan */}
              {/* <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">
                  Saran dan Rekomendasi
                </h2>
                {hasil.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Berdasarkan hasil diagnosis, pasien memiliki risiko tertinggi mengalami{" "}
                      <span className="font-semibold">{hasil[0].penyakit}</span> dengan persentase{" "}
                      <span className="font-semibold">{Math.round(hasil[0].persentase)}%</span>.
                    </p>
                    <p className="text-gray-700">
                      {getSaranRisiko(hasil[0].penyakit, hasil[0].persentase)}
                    </p>
                  </div>
                )}
              </div> */}

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  Catatan: Laporan ini merupakan hasil dari sistem pakar berbasis fuzzy Mamdani dan hanya bersifat bantuan awal. 
                  Untuk diagnosis lebih lanjut dan penanganan yang tepat, silakan berkonsultasi dengan dokter spesialis saraf 
                  atau tenaga medis profesional.
                </p>
                {/* <div className="mt-4 text-center text-sm text-gray-500">
                  <p>© {new Date().getFullYear()} SIDARA - Sistem Pakar Diagnosis Penyakit Saraf</p>
                  <p>Dokumen ini digenerate secara otomatis oleh sistem</p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate("/diagnosis")}
              className="bg-primary hover:bg-secondary text-white font-semibold px-5 py-3 rounded mr-3 transition duration-300"
            >
              Kembali Diagnosis
            </button>
            <button
              onClick={handleCetak}
              disabled={hasil.length === 0}
              className="bg-primary hover:bg-secondary text-white font-semibold px-5 py-3 rounded transition duration-300 disabled:opacity-50"
            >
              {loadingCetak ? "Menyiapkan PDF..." : "Cetak Hasil"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
