import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';


const daftarPenyakit = [
  { kode: 'P01', nama: 'Low Back Pain' },
  { kode: 'P02', nama: 'Vertigo' },
  { kode: 'P03', nama: 'Stroke Iskemik' },
  { kode: 'P04', nama: 'Epilepsi' },
  { kode: 'P05', nama: 'Neuropati Perifer' },
];

const API_URL = `${import.meta.env.VITE_API}/api/gejala`

const KelolaGejala = () => {
  const [gejalaList, setGejalaList] = useState([]);
  const [formData, setFormData] = useState({
    kode: '',
    gejala: '',
    subGejala: [''],
    nilaiSubGejala: [''],
    penyakitTerkait: [],
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchGejala();
  }, []);

  // const fetchGejala = async () => {
  //   try {
  //     const res = await axios.get(API_URL);
  //     console.log('Hasil GET /api/gejala:', res.data);
  //     if (Array.isArray(res.data)) {
  //       setGejalaList(res.data);
  //     } else {
  //       console.error('Data bukan array:', res.data);
  //       setGejalaList([]);
  //     }
  //   } catch (err) {
  //     console.error('Gagal ambil data gejala:', err);
  //     setGejalaList([]);
  //   }
  // };

  const fetchGejala = async () => {
    try {
      const res = await axios.get(API_URL, {
        headers: { "ngrok-skip-browser-warning": "true" },
        withCredentials: true
      });
      console.log('Hasil GET /api/gejala:', res.data);
      if (Array.isArray(res.data)) {
        setGejalaList(res.data);
      } else {
        console.error('Data bukan array:', res.data);
        setGejalaList([]);
      }
    } catch (err) {
      console.error('Gagal ambil data gejala:', err);
      setGejalaList([]);
    }
  };

  const handleChange = (e, index, type = 'main') => {
    if (type === 'main') {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    } else if (type === 'sub') {
      const newSub = [...formData.subGejala];
      newSub[index] = e.target.value;
      setFormData({ ...formData, subGejala: newSub });
    } else if (type === 'nilai') {
      const newNilai = [...formData.nilaiSubGejala];
      newNilai[index] = e.target.value;
      setFormData({ ...formData, nilaiSubGejala: newNilai });
    }
  };

  const handleCheckboxChange = (kodePenyakit) => {
    const updated = formData.penyakitTerkait.includes(kodePenyakit)
      ? formData.penyakitTerkait.filter((kode) => kode !== kodePenyakit)
      : [...formData.penyakitTerkait, kodePenyakit];
    setFormData({ ...formData, penyakitTerkait: updated });
  };

  const handleAddSubGejala = () => {
    setFormData({
      ...formData,
      subGejala: [...formData.subGejala, ''],
      nilaiSubGejala: [...formData.nilaiSubGejala, ''],
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!formData.kode || !formData.gejala) return;

  //   const newItem = {
  //     id: editId || Date.now(),
  //     kode: formData.kode,
  //     gejala: formData.gejala,
  //     subGejala: formData.subGejala.map((sg, i) => ({
  //       nama: sg,
  //       nilai: parseInt(formData.nilaiSubGejala[i]) || 0,
  //     })),
  //     penyakitTerkait: formData.penyakitTerkait,
  //   };

  //   try {
  //     if (editId) {
  //       await axios.put(`${API_URL}/${editId}`, newItem);
  //     } else {
  //       await axios.post(API_URL, newItem);
  //     }
  //     fetchGejala();
  //     setFormData({
  //       kode: '',
  //       gejala: '',
  //       subGejala: [''],
  //       nilaiSubGejala: [''],
  //       penyakitTerkait: [],
  //     });
  //     setEditId(null);
  //   } catch (error) {
  //     console.error('Gagal simpan gejala:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.kode || !formData.gejala) return;

    const newItem = {
      id: editId || Date.now(),
      kode: formData.kode,
      gejala: formData.gejala,
      subGejala: formData.subGejala.map((sg, i) => ({
        nama: sg,
        nilai: parseInt(formData.nilaiSubGejala[i]) || 0,
      })),
      penyakitTerkait: formData.penyakitTerkait,
    };

    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, newItem, {
          headers: { "ngrok-skip-browser-warning": "true" },
          withCredentials: true
        });
      } else {
        await axios.post(API_URL, newItem, {
          headers: { "ngrok-skip-browser-warning": "true" },
          withCredentials: true
        });
      }
      fetchGejala();
      setFormData({
        kode: '',
        gejala: '',
        subGejala: [''],
        nilaiSubGejala: [''],
        penyakitTerkait: [],
      });
      setEditId(null);
    } catch (error) {
      console.error('Gagal simpan gejala:', error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      kode: item.kode,
      gejala: item.gejala,
      subGejala: Array.isArray(item.subGejala) ? item.subGejala.map((sg) => sg.nama) : [''],
      nilaiSubGejala: Array.isArray(item.subGejala) ? item.subGejala.map((sg) => sg.nilai.toString()) : [''],
      penyakitTerkait: Array.isArray(item.penyakitTerkait) ? item.penyakitTerkait : [],
    });
    setEditId(item.id);
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${API_URL}/${id}`);
  //     fetchGejala();
  //     if (editId === id) {
  //       setFormData({
  //         kode: '',
  //         gejala: '',
  //         subGejala: [''],
  //         nilaiSubGejala: [''],
  //         penyakitTerkait: [],
  //       });
  //       setEditId(null);
  //     }
  //   } catch (err) {
  //     console.error('Gagal hapus gejala:', err);
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { "ngrok-skip-browser-warning": "true" },
        withCredentials: true
      });
      fetchGejala();
      if (editId === id) {
        setFormData({
          kode: '',
          gejala: '',
          subGejala: [''],
          nilaiSubGejala: [''],
          penyakitTerkait: [],
        });
        setEditId(null);
      }
    } catch (err) {
      console.error('Gagal hapus gejala:', err);
    }
  };

  // mkan,sdjahsdjahskjdhasdjhasdjhaksjdhaksjdhak

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGejala = gejalaList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(gejalaList.length / itemsPerPage);


  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-primary mb-4">
          {editId ? 'Edit Gejala' : 'Tambah Gejala'}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <input name="kode" value={formData.kode} onChange={handleChange} placeholder="Kode Gejala" className="p-2 border rounded w-full" />
          <input name="gejala" value={formData.gejala} onChange={handleChange} placeholder="Nama Gejala" className="p-2 border rounded w-full" />
        </div>

        <div>
          <label className="font-medium text-gray-700">Pilih Penyakit Terkait:</label>
          <div className="flex flex-wrap gap-6 mt-2">
            {daftarPenyakit.map((p) => (
              <label key={p.kode} className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" checked={formData.penyakitTerkait.includes(p.kode)} onChange={() => handleCheckboxChange(p.kode)} className="accent-primary" />
                {p.nama}
              </label>
            ))}
          </div>
        </div>

        {formData.subGejala.map((sg, index) => (
          <div key={index} className="grid sm:grid-cols-2 gap-2">
            <input value={sg} onChange={(e) => handleChange(e, index, 'sub')} placeholder="Sub Gejala" className="p-2 border rounded w-full" />
            <input type="number" value={formData.nilaiSubGejala[index]} onChange={(e) => handleChange(e, index, 'nilai')} placeholder="Nilai Sub Gejala (0–100)" className="p-2 border rounded w-full" />
          </div>
        ))}

        <button type="button" onClick={handleAddSubGejala} className="text-sm text-primary hover:underline">+ Tambah Sub Gejala</button>

        <div>
          <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded mt-2">
            {editId ? 'Update' : 'Tambah'} Gejala
          </button>
        </div>
      </form>

      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="w-full text-sm table-fixed border">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-3 text-center w-[10%]">Kode</th>
              <th className="p-3 text-center w-[20%]">Gejala</th>
              <th className="p-3 text-center w-[35%]">Sub Gejala + Nilai</th>
              <th className="p-3 text-center w-[25%]">Penyakit Terkait</th>
              <th className="p-3 text-center w-[10%]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(gejalaList) && gejalaList.length > 0 ? (
              currentGejala.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3 text-center">{item.kode}</td>
                  <td className="p-3 text-start">{item.gejala}</td>
                  <td className="p-3 space-y-1 text-justify">
                    {item.subGejala.map((sg, i) => (
                      <div key={i}>
                        {sg.nama} — <span className="text-primary">{sg.nilai}</span>
                      </div>
                    ))}
                  </td>
                  <td className="p-3 space-y-1 text-center">
                    {item.penyakitTerkait.map((kode) => (
                      <div key={kode}>{kode}</div>
                    ))}
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-yellow-500 hover:text-yellow-600"
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-600"
                        title="Hapus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Belum ada data gejala.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* knaksdaskdadkja.d */}

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 py-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
            >
              	&#129120;
            </button>
            <span className="text-gray-700">
              Halaman {currentPage} dari {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 bg-primary text-white rounded disabled:opacity-50"
            >
              &#129122;
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default KelolaGejala;
