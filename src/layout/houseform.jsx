import React, { useState } from "react";

const HouseForm = () => {
  const [formData, setFormData] = useState({
    luasTanah: "",
    hargaTanah: "",
    luasBangunan: "",
    lokasi: "",
    kamarTidur: "",
    kamarMandi: "",
    dapur: "",
    lantai: "",
    fasilitasDalam: [],
    kondisiBangunan: "",
    usiaBangunan: "",
    materialBangunan: {
      lantai: "",
      tembok: "",
      jendela: "",
      atap: "",
      pagar: "",
    },
    surat: [],
    fasilitasPublik: [],
    aksesJalan: "",
    keamanan: [],
    hasilPerhitungan: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value),
    }));
  };

  const hitungHargaSugeno = () => {
    const { luasTanah, hargaTanah, luasBangunan, kamarTidur, kamarMandi, dapur, lantai, kondisiBangunan, aksesJalan } = formData;
    
    const kondisiValues = {
      "Baik": 1,
      "Kurang baik": 0.5,
      "Sangat baik": 1.5,
    };
    
    const kondisiScore = kondisiValues[kondisiBangunan] || 1;
    const faktorKamar = parseInt(kamarTidur) * 5 + parseInt(kamarMandi) * 3;
    const faktorDapur = parseInt(dapur) * 2;
    const faktorLantai = parseInt(lantai) * 1.5;
    const faktorAksesJalan = parseFloat(aksesJalan) * 2;
    
    const hargaRumah = ((parseFloat(luasTanah) * parseFloat(hargaTanah)) + (parseFloat(luasBangunan) * 2) + faktorKamar + faktorDapur + faktorLantai + faktorAksesJalan) * kondisiScore;
    
    setFormData((prev) => ({ ...prev, hasilPerhitungan: hargaRumah.toFixed(2) }));
  };

  return (
    <form className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Form Input Data Rumah</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="number" name="luasTanah" placeholder="Luas Tanah (m2)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="hargaTanah" placeholder="Harga Tanah per juta/m2" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="luasBangunan" placeholder="Luas Bangunan (m2)" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="kamarTidur" placeholder="Jumlah Kamar Tidur" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="kamarMandi" placeholder="Jumlah Kamar Mandi" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="dapur" placeholder="Jumlah Dapur" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="lantai" placeholder="Jumlah Lantai" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="aksesJalan" placeholder="Lebar Akses Jalan (m)" onChange={handleChange} className="p-2 border rounded" />
        <select name="kondisiBangunan" onChange={handleChange} className="p-2 border rounded">
          <option value="">Pilih Kondisi Bangunan</option>
          <option value="Baik">Baik</option>
          <option value="Kurang baik">Kurang baik</option>
          <option value="Sangat baik">Sangat baik</option>
        </select>
      </div>
      <button type="button" onClick={hitungHargaSugeno} className="mt-4 p-2 bg-green-500 text-white rounded">Hitung Harga</button>
      {formData.hasilPerhitungan && (
        <div className="mt-4 p-2 bg-blue-200 text-black rounded">Harga Rumah: Rp {formData.hasilPerhitungan} Juta</div>
      )}
    </form>
  );
};

export default HouseForm;
