import React, { useEffect, useState } from 'react';
import { MailIcon, RefreshCwIcon, Trash2Icon, XIcon } from 'lucide-react';

const AdminKelolaPesan = () => {
  const [pesanList, setPesanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // const fetchPesan = async () => {
  //   setLoading(true);
  //   setError(false);
  //   try {
  //     const response = await fetch('http://localhost:5001/api/kontak');
  //     if (!response.ok) throw new Error('Gagal memuat data');
  //     const data = await response.json();
  //     setPesanList(data);
  //   } catch (err) {
  //     console.error('Error:', err);
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const API_URL = `${import.meta.env.VITE_API}/api/kontak`;

  const fetchPesan = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(API_URL, {
        headers: { "ngrok-skip-browser-warning": "true" },
        credentials: "include"
      });
      if (!response.ok) throw new Error('Gagal memuat data');
      const data = await response.json();
      setPesanList(data);
    } catch (err) {
      console.error('Error:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPesan();
  }, []);

  // const handleDelete = async () => {
  //   if (!selectedId) return;
  //   setDeleting(true);

  //   try {
  //     const response = await fetch(`http://localhost:5001/kontak/${selectedId}`, {
  //       method: 'DELETE',
  //     });
  //     if (response.ok) {
  //       fetchPesan();
  //       setShowConfirm(false);
  //       setSelectedId(null);
  //     } else {
  //       console.error('Gagal menghapus pesan.');
  //     }
  //   } catch (error) {
  //     console.error('Gagal:', error);
  //   } finally {
  //     setDeleting(false);
  //   }
  // };

  const handleDelete = async () => {
    if (!selectedId) return;
    setDeleting(true);

    try {
      const response = await fetch(`${API_URL}/${selectedId}`, {
        method: 'DELETE',
        headers: { "ngrok-skip-browser-warning": "true" },
        credentials: "include"
      });
      if (response.ok) {
        fetchPesan();
        setShowConfirm(false);
        setSelectedId(null);
      } else {
        console.error('Gagal menghapus pesan.');
      }
    } catch (error) {
      console.error('Gagal:', error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-6 relative p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
          <MailIcon className="w-5 h-5" />
          Daftar Pesan Masuk
        </h2>
        <button
          onClick={fetchPesan}
          className="flex items-center gap-2 bg-primary hover:bg-primary/95 text-white px-4 py-2 rounded-lg text-sm shadow"
        >
          <RefreshCwIcon className="w-4 h-4" />
          Muat Ulang
        </button>
      </div>

      {loading ? (
        <div className="text-center text-gray-600">Memuat pesan...</div>
      ) : error ? (
        <div className="text-red-600 text-center">Gagal memuat data pesan.</div>
      ) : pesanList.length === 0 ? (
        <div className="text-center text-gray-600">Belum ada pesan yang masuk.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-fixed min-w-full bg-white border rounded-lg overflow-hidden shadow text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 w-[150px] sm:w-[180px] text-left">Nama</th>
                <th className="py-3 px-4 w-[200px] sm:w-[240px] text-left">Email</th>
                <th className="py-3 px-4 w-[400px] md:w-[600px] text-left">Pesan</th>
                <th className="py-3 px-4 w-[100px] sm:w-[120px] text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pesanList.map((pesan) => (
                <tr key={pesan.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800 truncate text-justify">{pesan.nama}</td>
                  <td className="px-4 py-3 text-blue-600 underline truncate text-justify">{pesan.email}</td>
                  <td className="px-4 py-3 text-gray-700 whitespace-pre-wrap break-words text-justify">
                    {pesan.pesan}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => {
                        setSelectedId(pesan.id);
                        setShowConfirm(true);
                      }}
                      className="text-red-600 hover:text-red-800"
                      title="Hapus Pesan"
                    >
                      <Trash2Icon className="w-5 h-5 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Konfirmasi Hapus */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-red-600">Konfirmasi Hapus</h3>
              <button onClick={() => setShowConfirm(false)} className="text-gray-500 hover:text-gray-700">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-700 mb-6">
              Apakah Anda yakin ingin menghapus pesan ini? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                {deleting ? 'Menghapus...' : 'Hapus'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminKelolaPesan;
