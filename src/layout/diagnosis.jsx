import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User, CalendarDays, Play } from "lucide-react";

export default function StartDiagnosis() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ nama: "", usia: "" });

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleStart = () => {
    navigate("/diagnosis/question");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-silver text-primary px-4">
      <div className="bg-silver shadow-xl rounded-2xl p-8 w-full max-w-md text-center space-y-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Siap untuk Diagnosis?</h1>
        <p className="text-gray-600">Periksa kembali data Anda sebelum memulai.</p>

        <div className="bg-silver  p-6 text-gray-800 w-full max-w-md mx-auto space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <User className="text-primary w-6 h-6" />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-sm text-gray-500">Nama</span>
              <span className="font-semibold text-sm">{userData?.nama || "Tidak tersedia"}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <CalendarDays className="text-primary w-6 h-6" />
            </div>
            <div className="flex flex-row gap-4">
              <span className="text-sm text-gray-500">Usia</span>
              <span className="font-semibold text-sm">{userData?.usia || "Tidak tersedia"}</span>
            </div>
          </div>
        </div>


        <button
          onClick={handleStart}
          className="flex items-center justify-center gap-2 mt-6 bg-primary text-white px-5 py-2 rounded-full hover:bg-primary-dark transition duration-300"
        >
          <Play size={18} /> Mulai Diagnosis
        </button>
      </div>
    </div>
  );
}