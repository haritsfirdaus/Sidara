import React, { useState } from 'react';

const calculateFuzzySugenoPrice = (inputs) => {
  // Implementasi logika Fuzzy Sugeno (fuzzifikasi, inferensi, defuzzifikasi)
  // berdasarkan aturan dan fungsi keanggotaan yang Anda definisikan.
  // Saat ini hanya mengembalikan nilai dummy.
  console.log("Inputs to Fuzzy Calculation:", inputs);
  return 0; // Ganti dengan implementasi Fuzzy Sugeno Anda
};

const HousePriceCalculator = () => {
  const [inputs, setInputs] = useState({
    luasTanah: '',
    hargaTanahPerMeter: '',
    luasBangunan: '',
    lokasiBangunan: '',
    jumlahKamarTidur: '',
    jumlahKamarMandi: '',
    jumlahDapur: '',
    jumlahLantai: '',
    dapur: false,
    ruangMakan: false,
    ruangKeluarga: false,
    ruangTamu: false,
    mushola: false,
    taman: false,
    kolam: false,
    garasi: false,
    kebun: false,
    kondisiBangunan: 'Baik',
    usiaBangunan: '',
    lantai: 'Keramik',
    tembok: 'Bata Ringan/Hebel',
    jendela: 'Kayu',
    atap: 'Genteng',
    pagar: 'Besi',
    sertifikatTanahBangunan: false,
    aktaJualBeli: false,
    spptPBB: false,
    imb: false,
    spjb: false,
    sekolah: false,
    puskesmas: false,
    rumahSakit: false,
    klinik: false,
    kantorPolisi: false,
    pasar: false,
    terminal: false,
    stasiun: false,
    mall: false,
    alunAlunKota: false,
    aksesJalan: '',
    kriminalitas: 'Rendah',
    gengMotor: 'Rendah',
    banjir: false,
    gempaBumi: 'Rendah',
    longsor: false,
  });

  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCalculatePrice = () => {
    // Pastikan semua input numerik diubah ke angka sebelum dikirim ke fungsi perhitungan
    const parsedInputs = Object.keys(inputs).reduce((acc, key) => {
      if (typeof inputs[key] === 'string' && !isNaN(inputs[key]) && inputs[key] !== '') {
        acc[key] = parseFloat(inputs[key]);
      } else {
        acc[key] = inputs[key];
      }
      return acc;
    }, {});
    const price = calculateFuzzySugenoPrice(parsedInputs);
    setPredictedPrice(price);
  };

  return (
    <div className='text-primary'>
      <h1 className='flex justify-center font-bold text-xl'>Kalkulator Harga Jual Rumah (Fuzzy Sugeno)</h1>
      <form>
        <div>
          <label htmlFor="luasTanah">Luas Tanah (m²):</label>
          <input type="number" id="luasTanah" name="luasTanah" value={inputs.luasTanah} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="hargaTanahPerMeter">Harga Tanah /m² (Juta):</label>
          <input type="number" id="hargaTanahPerMeter" name="hargaTanahPerMeter" value={inputs.hargaTanahPerMeter} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="luasBangunan">Luas Bangunan (m²):</label>
          <input type="number" id="luasBangunan" name="luasBangunan" value={inputs.luasBangunan} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="lokasiBangunan">Lokasi Bangunan (Skala 1-10):</label>
          <input type="number" id="lokasiBangunan" name="lokasiBangunan" value={inputs.lokasiBangunan} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="jumlahKamarTidur">Jumlah Kamar Tidur:</label>
          <input type="number" id="jumlahKamarTidur" name="jumlahKamarTidur" value={inputs.jumlahKamarTidur} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="jumlahKamarMandi">Jumlah Kamar Mandi:</label>
          <input type="number" id="jumlahKamarMandi" name="jumlahKamarMandi" value={inputs.jumlahKamarMandi} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="jumlahDapur">Jumlah Dapur:</label>
          <input type="number" id="jumlahDapur" name="jumlahDapur" value={inputs.jumlahDapur} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="jumlahLantai">Jumlah Lantai:</label>
          <input type="number" id="jumlahLantai" name="jumlahLantai" value={inputs.jumlahLantai} onChange={handleInputChange} />
        </div>
        <div>
          <label>Fasilitas Pendukung Dalam Rumah:</label>
          <label><input type="checkbox" name="dapur" checked={inputs.dapur} onChange={handleInputChange} /> Dapur</label>
          <label><input type="checkbox" name="ruangMakan" checked={inputs.ruangMakan} onChange={handleInputChange} /> Ruang Makan</label>
          <label><input type="checkbox" name="ruangKeluarga" checked={inputs.ruangKeluarga} onChange={handleInputChange} /> Ruang Keluarga</label>
          <label><input type="checkbox" name="ruangTamu" checked={inputs.ruangTamu} onChange={handleInputChange} /> Ruang Tamu</label>
          <label><input type="checkbox" name="mushola" checked={inputs.mushola} onChange={handleInputChange} /> Mushola</label>
          <label><input type="checkbox" name="taman" checked={inputs.taman} onChange={handleInputChange} /> Taman</label>
          <label><input type="checkbox" name="kolam" checked={inputs.kolam} onChange={handleInputChange} /> Kolam</label>
          <label><input type="checkbox" name="garasi" checked={inputs.garasi} onChange={handleInputChange} /> Garasi</label>
          <label><input type="checkbox" name="kebun" checked={inputs.kebun} onChange={handleInputChange} /> Kebun</label>
        </div>
        <div>
          <label htmlFor="kondisiBangunan">Kondisi Bangunan:</label>
          <select id="kondisiBangunan" name="kondisiBangunan" value={inputs.kondisiBangunan} onChange={handleInputChange}>
            <option value="Baik">Baik</option>
            <option value="Kurang baik">Kurang baik</option>
            <option value="Sangat baik">Sangat baik</option>
          </select>
        </div>
        <div>
          <label htmlFor="usiaBangunan">Usia Bangunan (Tahun):</label>
          <input type="number" id="usiaBangunan" name="usiaBangunan" value={inputs.usiaBangunan} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="lantai">Material Lantai:</label>
          <select id="lantai" name="lantai" value={inputs.lantai} onChange={handleInputChange}>
            <option value="Keramik">Keramik</option>
            <option value="Vinyl">Vinyl</option>
            <option value="Granit">Granit</option>
            <option value="Kayu">Kayu</option>
            <option value="Karpet">Karpet</option>
            <option value="Marmer">Marmer</option>
            <option value="Batu Alam">Batu Alam</option>
            <option value="Karet">Karet</option>
          </select>
        </div>
        <div>
          <label htmlFor="tembok">Material Tembok:</label>
          <select id="tembok" name="tembok" value={inputs.tembok} onChange={handleInputChange}>
            <option value="Bata Ringan/Hebel">Bata Ringan/Hebel</option>
            <option value="Batako">Batako</option>
            <option value="Bata Merah">Bata Merah</option>
            <option value="GRC (Glassfiber Reinforced Concrete)">GRC</option>
            <option value="Beton">Beton</option>
            <option value="PVC (Unplasticized Polyvinyl Chloride)">PVC</option>
            <option value="Kayu">Kayu</option>
            <option value="Bambu/Bilik">Bambu/Bilik</option>
          </select>
        </div>
        <div>
          <label htmlFor="jendela">Material Jendela:</label>
          <select id="jendela" name="jendela" value={inputs.jendela} onChange={handleInputChange}>
            <option value="Kayu">Kayu</option>
            <option value="Stainless steel">Stainless steel</option>
            <option value="Baja ringan">Baja ringan</option>
          </select>
        </div>
        <div>
          <label htmlFor="atap">Material Atap:</label>
          <select id="atap" name="atap" value={inputs.atap} onChange={handleInputChange}>
            <option value="Genteng">Genteng</option>
            <option value="Baja ringan">Baja ringan</option>
            <option value="Asbes">Asbes</option>
            <option value="Beton">Beton</option>
            <option value="Kaca">Kaca</option>
            <option value="Metal">Metal</option>
            <option value="Multiroof">Multiroof</option>
            <option value="Keramik">Keramik</option>
            <option value="Sirap/ulin">Sirap/ulin</option>
            <option value="Pvc">Pvc</option>
          </select>
        </div>
        <div>
          <label htmlFor="pagar">Material Pagar:</label>
          <select id="pagar" name="pagar" value={inputs.pagar} onChange={handleInputChange}>
            <option value="Besi">Besi</option>
            <option value="Aluminium">Aluminium</option>
            <option value="Kayu">Kayu</option>
            <option value="Tembok">Tembok</option>
            <option value="Baja">Baja</option>
          </select>
        </div>
        <div>
          <label>Kelengkapan Surat:</label>
          <label><input type="checkbox" name="sertifikatTanahBangunan" checked={inputs.sertifikatTanahBangunan} onChange={handleInputChange} /> Sertifikat Tanah & Bangunan</label>
          <label><input type="checkbox" name="aktaJualBeli" checked={inputs.aktaJualBeli} onChange={handleInputChange} /> Akta Jual Beli (AJB)</label>
          <label><input type="checkbox" name="spptPBB" checked={inputs.spptPBB} onChange={handleInputChange} /> Surat Pajak Bumi & Bangunan (SPPT PBB)</label>
          <label><input type="checkbox" name="imb" checked={inputs.imb} onChange={handleInputChange} /> Surat Izin Mendirikan Bangunan (IMB)</label>
          <label><input type="checkbox" name="spjb" checked={inputs.spjb} onChange={handleInputChange} /> Surat Perjanjian Jual Beli (SPJB)</label>
        </div>
        <div>
          <label>Fasilitas Publik:</label>
          <label><input type="checkbox" name="sekolah" checked={inputs.sekolah} onChange={handleInputChange} /> Sekolah</label>
          <label><input type="checkbox" name="puskesmas" checked={inputs.puskesmas} onChange={handleInputChange} /> Puskesmas</label>
          <label><input type="checkbox" name="rumahSakit" checked={inputs.rumahSakit} onChange={handleInputChange} /> Rumah Sakit</label>
          <label><input type="checkbox" name="klinik" checked={inputs.klinik} onChange={handleInputChange} /> Klinik</label>
          <label><input type="checkbox" name="kantorPolisi" checked={inputs.kantorPolisi} onChange={handleInputChange} /> Kantor Polisi</label>
          <label><input type="checkbox" name="pasar" checked={inputs.pasar} onChange={handleInputChange} /> Pasar</label>
          <label><input type="checkbox" name="terminal" checked={inputs.terminal} onChange={handleInputChange} /> Terminal</label>
          <label><input type="checkbox" name="stasiun" checked={inputs.stasiun} onChange={handleInputChange} /> Stasiun</label>
          <label><input type="checkbox" name="mall" checked={inputs.mall} onChange={handleInputChange} /> Mall</label>
          <label><input type="checkbox" name="alunAlunKota" checked={inputs.alunAlunKota} onChange={handleInputChange} /> Alun-alun Kota</label>
        </div>
        <div>
          <label htmlFor="aksesJalan">Akses Jalan (Meter):</label>
          <input type="number" id="aksesJalan" name="aksesJalan" value={inputs.aksesJalan} onChange={handleInputChange} />
        </div>
        <div>
          <label>Keamanan:</label>
          <label htmlFor="kriminalitas">Kriminalitas:</label>
          <select id="kriminalitas" name="kriminalitas" value={inputs.kriminalitas} onChange={handleInputChange}>
            <option value="Rendah">Rendah</option>
            <option value="Sedang">Sedang</option>
            <option value="Tinggi">Tinggi</option>
          </select>
          <label htmlFor="gengMotor">Geng Motor:</label>
          <select id="gengMotor" name="gengMotor" value={inputs.gengMotor} onChange={handleInputChange}>
            <option value="Rendah">Rendah</option>
            <option value="Sedang">Sedang</option>
            <option value="Tinggi">Tinggi</option>
          </select>
          <label><input type="checkbox" name="banjir" checked={inputs.banjir} onChange={handleInputChange} /> Banjir</label>
          <label htmlFor="gempaBumi">Potensi Gempa Bumi:</label>
          <select id="gempaBumi" name="gempaBumi" value={inputs.gempaBumi} onChange={handleInputChange}>
            <option value="Rendah">Rendah</option>
            <option value="Sedang">Sedang</option>
            <option value="Tinggi">Tinggi</option>
          </select>
          <label><input type="checkbox" name="longsor" checked={inputs.longsor} onChange={handleInputChange} /> Longsor</label>
        </div>

        <button type="button" onClick={handleCalculatePrice}>Hitung Harga</button>
      </form>

      {predictedPrice !== null && (
        <div className='flex gap-4'>
          <h2>Harga Jual Prediksi:</h2>
          <p>{predictedPrice.toFixed(2)} Juta Rupiah</p>
        </div>
      )}
    </div>
  );
};

export default HousePriceCalculator;