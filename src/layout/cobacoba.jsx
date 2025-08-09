import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../jsconfig.json";


export default function Coba() {
  const [inputs, setInputs] = useState({
    luasTanah: "",
    luasBangunan: "",
    lokasi: "",
    jumlahKamar: "",
    aksesJalan: ""
  });
  const [harga, setHarga] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const hitungSugeno = () => {
    let { luasTanah, luasBangunan, lokasi, jumlahKamar, aksesJalan } = inputs;
    luasTanah = parseFloat(luasTanah);
    luasBangunan = parseFloat(luasBangunan);
    jumlahKamar = parseInt(jumlahKamar);
    aksesJalan = parseFloat(aksesJalan);

    // Fuzzy Membership Function
    const LT_sedang = luasTanah >= 300 && luasTanah <= 600 ? 1 : 0;
    const LT_besar = luasTanah > 600 ? 1 : 0;
    const LB_sedang = luasBangunan >= 200 && luasBangunan <= 500 ? 1 : 0;
    const LB_besar = luasBangunan > 500 ? 1 : 0;
    const Lokasi_strategis = lokasi.toLowerCase() === "strategis" ? 1 : 0;
    
    // Aturan Fuzzy Sugeno
    let rules = [
      { alpha: Math.min(LT_sedang, LB_sedang, Lokasi_strategis), harga: 500 },
      { alpha: Math.min(LT_besar, LB_besar, Lokasi_strategis), harga: 1200 },
      { alpha: Math.min(LT_besar, LB_sedang, Lokasi_strategis), harga: 850 },
      { alpha: Math.min(LT_sedang, LB_sedang, 1 - Lokasi_strategis), harga: 400 },
      { alpha: Math.min(1 - LT_sedang, 1 - LB_sedang, 1 - Lokasi_strategis), harga: 250 }
    ];
    
    // Perhitungan Sugeno (Weighted Average)
    let numerator = rules.reduce((acc, rule) => acc + rule.alpha * rule.harga, 0);
    let denominator = rules.reduce((acc, rule) => acc + rule.alpha, 0);
    let hasil = denominator === 0 ? "Tidak dapat dihitung" : (numerator / denominator).toFixed(2);

    setHarga(hasil);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Input Data Properti</h2>
          <Input type="number" name="luasTanah" placeholder="Luas Tanah (m²)" onChange={handleChange} />
          <Input type="number" name="luasBangunan" placeholder="Luas Bangunan (m²)" onChange={handleChange} />
          <Input type="text" name="lokasi" placeholder="Lokasi (Strategis/Tidak)" onChange={handleChange} />
          <Input type="number" name="jumlahKamar" placeholder="Jumlah Kamar" onChange={handleChange} />
          <Input type="number" name="aksesJalan" placeholder="Lebar Akses Jalan (m)" onChange={handleChange} />
          <Button onClick={hitungSugeno} className="w-full bg-blue-600 text-white">Hitung Harga</Button>
          {harga && <p className="text-lg font-semibold">Harga Rumah: Rp {harga} Juta</p>}
        </CardContent>
      </Card>
    </div>
  );
}
