// import React, { useEffect, useState } from 'react';
// import { Trash2 } from 'lucide-react';
// import axios from 'axios';

// const KelolaRiwayat = () => {
//   const [riwayat, setRiwayat] = useState([]);

//   useEffect(() => {
//     // Ambil data riwayat dari backend
//     axios
//       .get('/api/riwayat') // Ganti URL sesuai API kamu
//       .then((res) => setRiwayat(res.data))
//       .catch((err) => console.error('Gagal mengambil riwayat:', err));
//   }, []);

//   const handleHapus = (id) => {
//     const konfirmasi = window.confirm('Yakin ingin menghapus riwayat ini?');
//     if (!konfirmasi) return;

//     axios
//       .delete(`/api/riwayat/${id}`)
//       .then(() => {
//         setRiwayat((prev) => prev.filter((item) => item.id !== id));
//       })
//       .catch((err) => console.error('Gagal menghapus riwayat:', err));
//   };

//   return (
//     <main className="min-h-screen bg-silver dark:bg-secondary px-4 py-8">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-6">
//           Kelola Riwayat Diagnosis
//         </h1>

//         {riwayat.length === 0 ? (
//           <p className="text-gray-600 dark:text-gray-300">Tidak ada riwayat ditemukan.</p>
//         ) : (
//           <div className="space-y-4">
//             {riwayat.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow flex justify-between items-center p-4"
//               >
//                 <div>
//                   <p className="text-lg font-semibold capitalize">{item.nama}</p>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">
//                     Usia: {item.usia} tahun &bull; Tanggal: {new Date(item.tanggal).toLocaleDateString()}
//                   </p>
//                   <p className="text-sm mt-1">
//                     Hasil: <span className="font-medium text-primary">{item.hasil}</span>
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => handleHapus(item.id)}
//                   className="text-red-600 hover:text-red-800"
//                   title="Hapus Riwayat"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default KelolaRiwayat;


import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import axios from 'axios';

const KelolaRiwayat = () => {
  const [riwayat, setRiwayat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/diagnosis')
      .then((res) => setRiwayat(res.data))
      .catch((err) => {
        setRiwayat([]);
        console.error('Gagal mengambil riwayat:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleHapus = (id) => {
    const konfirmasi = window.confirm('Yakin ingin menghapus riwayat ini?');
    if (!konfirmasi) return;

    axios
      .delete(`http://localhost:5001/api/diagnosis/${id}`)
      .then(() => {
        setRiwayat((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err) => console.error('Gagal menghapus riwayat:', err));
  };

  return (
    <main className="min-h-screen bg-silver dark:bg-secondary px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-6">
          Kelola Riwayat Diagnosis
        </h1>

        {loading ? (
          <p className="text-gray-600 dark:text-gray-300">Memuat data...</p>
        ) : riwayat.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">Tidak ada riwayat ditemukan.</p>
        ) : (
          <div className="space-y-4">
            {riwayat.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow flex justify-between items-center p-4"
              >
                <div>
                  <p className="text-lg font-semibold capitalize">{item.nama}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Usia: {item.usia} tahun &bull; Tanggal: {item.tanggal_kirim ? new Date(item.tanggal_kirim).toLocaleDateString() : '-'}
                  </p>
                  <p className="text-sm mt-1">
                    Hasil: <span className="font-medium text-primary">{item.penyakit}</span>
                  </p>
                  <p className="text-sm">
                    Persentase: <span className="font-semibold text-primary">{item.persentase}%</span>
                  </p>
                </div>
                <button
                  onClick={() => handleHapus(item.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Hapus Riwayat"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default KelolaRiwayat;