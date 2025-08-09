// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const RiwayatUser = () => {
//   const [riwayat, setRiwayat] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//  useEffect(() => {
//   const fetchRiwayat = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("user"));
//       const userId = user?.id; 
//       console.log("User dari localStorage:", user);
//       console.log("User ID:", userId);

//       if (!userId) {
//         setError("User tidak ditemukan. Silakan login kembali.");
//         return;
//       }

//       const response = await axios.get(`http://localhost:5001/api/diagnosis/${userId}`);
//       setRiwayat(response.data);
//     } catch (err) {
//       console.error("Gagal mengambil data riwayat:", err);
//       setError("Gagal mengambil data. Silakan coba lagi.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchRiwayat();
// }, []);


//   return (
//     <div className="min-h-screen bg-silver px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold text-primary mb-6">Riwayat Diagnosis</h1>

//         {loading ? (
//           <div className="text-gray-600">Memuat data...</div>
//         ) : error ? (
//           <div className="text-red-500">{error}</div>
//         ) : riwayat.length === 0 ? (
//           <div className="text-center text-gray-600">Belum ada data riwayat.</div>
//         ) : (
//           <div className="grid gap-6 md:grid-cols-2">
//             {riwayat.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-primary transition hover:shadow-lg"
//               >
//                 <div className="mb-2">
//                   <h2 className="text-xl font-semibold text-primary">User ID: {item.userId}</h2>
//                   <p className="text-sm text-gray-500">Diagnosis: {item.penyakit}</p>
//                   <p className="text-sm text-gray-500">Persentase: <span className="font-semibold text-primary">{item.persentase}%</span></p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RiwayatUser;


import React, { useEffect, useState } from "react";
import axios from "axios";

const RiwayatUser = () => {
  const [riwayat, setRiwayat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRiwayat = async () => {
      try {
        // Ambil ID user diagnosis dari localStorage (bukan user login)
        const diagnosisUser = JSON.parse(localStorage.getItem("diagnosisUser"));
        console.log("LocalStorage diagnosisUser:", diagnosisUser);
        const userId = diagnosisUser?.id;

        if (!userId) {
          setError("Belum ada riwayat diagnosis. Silakan lakukan diagnosis terlebih dahulu.");
          setLoading(false);
          return;
        }

        const response = await axios.get(`http://localhost:5001/api/diagnosis/${userId}`);
        console.log("Data riwayat dari backend:", response.data);
        setRiwayat(response.data);
      } catch (err) {
        console.error("Gagal mengambil data riwayat:", err);
        setError("Gagal mengambil data. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchRiwayat();
  }, []);

  // ...existing code...
    const handleSubmit = async () => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:5001/api/diagnosis", {
          nama: userData.nama,
          usia: userData.usia,
          answers,
        });
        // Simpan hasil diagnosis dan ID user diagnosis
        localStorage.setItem("diagnosisResult", JSON.stringify(response.data.hasilDiagnosis));
        localStorage.setItem("diagnosisUser", JSON.stringify({ id: response.data.userId }));
        navigate("/history");
      } catch (err) {
        setError("Gagal melakukan diagnosis. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    // ...existing code...

  return (
    <div className="min-h-screen bg-silver px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">Riwayat Diagnosis</h1>

        {loading ? (
          <div className="text-gray-600">Memuat data...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : riwayat.length === 0 ? (
          <div className="text-center text-gray-600">Belum ada data riwayat.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {riwayat.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-primary transition hover:shadow-lg"
              >
                <div className="mb-2">
                  <h2 className="text-xl font-semibold text-primary">User ID: {item.user_id}</h2>
                  <p className="text-sm text-gray-500">Diagnosis: {item.penyakit}</p>
                  <p className="text-sm text-gray-500">Persentase: <span className="font-semibold text-primary">{item.persentase}%</span></p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RiwayatUser;
// ...existing code...