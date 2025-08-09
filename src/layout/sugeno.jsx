import React, { useState } from "react";

const FuzzySugenoCalculator = () => {
  const [inputs, setInputs] = useState({
    luasTanah: "",
    hargaTanah: "",
    luasBangunan: "",
    kamarTidur: "",
    kamarMandi: "",
    fasilitas: false,
    kondisiBangunan: "kurang_baik",
    materialBangunan: "standar",
    kelengkapanSurat: false,
    aksesJalan: "",
    keamanan: "rawan",
    fasilitasPublik: false
  });
  const [hasil, setHasil] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.checked });
  };

  const hitungHargaRumah = () => {
    let harga = 100; // Harga dasar dalam juta rupiah

    // Faktor Fuzzy Sugeno
    harga += parseFloat(inputs.luasTanah) * 0.8;
    harga += parseFloat(inputs.hargaTanah) * 1.2;
    harga += parseFloat(inputs.luasBangunan) * 0.9;
    harga += parseInt(inputs.kamarTidur) * 5;
    harga += parseInt(inputs.kamarMandi) * 3;
    harga += inputs.fasilitas ? 20 : 0;
    harga += inputs.kondisiBangunan === "sangat_baik" ? 50 : inputs.kondisiBangunan === "baik" ? 30 : 10;
    harga += inputs.materialBangunan === "premium" ? 40 : inputs.materialBangunan === "menengah" ? 20 : 0;
    harga += inputs.kelengkapanSurat ? 50 : 0;
    harga += parseFloat(inputs.aksesJalan) * 2;
    harga += inputs.keamanan === "aman" ? 30 : 0;
    harga += inputs.fasilitasPublik ? 40 : 0;

    setHasil(harga);
  };

  return (
    <div className="p-5 max-w-lg mx-auto bg-teal-100 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Hitung Harga Rumah (Fuzzy Sugeno)</h2>
      <div className="grid grid-cols-2 gap-4">
        <label>Luas Tanah (m²)</label>
        <input type="number" name="luasTanah" value={inputs.luasTanah} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <label>Harga Tanah per m² (Juta)</label>
        <input type="number" name="hargaTanah" value={inputs.hargaTanah} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <label>Luas Bangunan (m²)</label>
        <input type="number" name="luasBangunan" value={inputs.luasBangunan} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <label>Jumlah Kamar Tidur</label>
        <input type="number" name="kamarTidur" value={inputs.kamarTidur} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <label>Jumlah Kamar Mandi</label>
        <input type="number" name="kamarMandi" value={inputs.kamarMandi} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <label>Kondisi Bangunan</label>
        <select name="kondisiBangunan" value={inputs.kondisiBangunan} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="kurang_baik">Kurang Baik</option>
          <option value="baik">Baik</option>
          <option value="sangat_baik">Sangat Baik</option>
        </select>
        
        <label>Material Bangunan</label>
        <select name="materialBangunan" value={inputs.materialBangunan} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="standar">Standar</option>
          <option value="menengah">Menengah</option>
          <option value="premium">Premium</option>
        </select>
        
        <label>Akses Jalan (meter)</label>
        <input type="number" name="aksesJalan" value={inputs.aksesJalan} onChange={handleChange} className="w-full p-2 border rounded" />
        
        <label>Keamanan</label>
        <select name="keamanan" value={inputs.keamanan} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="rawan">Rawan</option>
          <option value="aman">Aman</option>
        </select>
        
        <label>
          <input type="checkbox" name="fasilitas" checked={inputs.fasilitas} onChange={handleCheckboxChange} className="mr-2" />
          Fasilitas Pendukung (Garasi, Taman, dll.)
        </label>
        
        <label>
          <input type="checkbox" name="kelengkapanSurat" checked={inputs.kelengkapanSurat} onChange={handleCheckboxChange} className="mr-2" />
          Kelengkapan Surat (SHM, IMB, dll.)
        </label>
        
        <label>
          <input type="checkbox" name="fasilitasPublik" checked={inputs.fasilitasPublik} onChange={handleCheckboxChange} className="mr-2" />
          Dekat Fasilitas Publik (&lt;10 menit)
        </label>
      </div>
      <button onClick={hitungHargaRumah} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Hitung Harga Rumah
      </button>
      {hasil && <h3 className="mt-4 text-lg font-semibold">Harga Rumah: Rp {hasil.toFixed(2)} Juta</h3>}
    </div>
  );
};

export default FuzzySugenoCalculator;