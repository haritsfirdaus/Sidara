import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CircleHelp, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

const Pertanyaan = () => {
  const navigate = useNavigate();
  const [gejalaData, setGejalaData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
        const fetchGejala = async () => {
        try {
          const res = await axios.get(`${import.meta.env.VITE_API}/api/gejala`, {
            withCredentials: true,
            headers: {
              "ngrok-skip-browser-warning": "true"
            }
          });
          setGejalaData(res.data);
        } catch (err) {
          setError("Gagal memuat data gejala dari server.");
          console.error(err);
        } finally {
          setLoadingData(false);
        }
      };

    fetchGejala();
  }, []);

  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [gejalaData[currentQuestion].kode]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < gejalaData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const userInfo = JSON.parse(localStorage.getItem("userDiagnosis") || "{}");
      console.log("User Info:", userInfo);
      

      const response = await axios.post(`${import.meta.env.VITE_API}/api/diagnosis`, {
        nama: userInfo.nama,
        usia: userInfo.usia,
        answers,
      }, {
        withCredentials: true,
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      });


      localStorage.setItem("diagnosisResult", JSON.stringify(response.data));
      navigate("/diagnosis/hasil");
    } catch (error) {
      console.error("Error detail:", error.response?.data || error);
      alert("Terjadi kesalahan saat memproses diagnosis");
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return <div className="text-center text-gray-600 mt-10">Memuat pertanyaan...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">{error}</div>;
  }

  const currentGejala = gejalaData[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / gejalaData.length) * 100;

  return (
    <div className="p-4 max-w-2xl mx-auto text-primary mt-7">
      <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center gap-2">
        <CircleHelp className="w-6 h-6" /> Pilihlah Jawaban Gejala yang Dirasakan
      </h2>
      <div className="flex justify-between items-center space-y-2">
        <p>Gejala yang sudah dijawab {answeredCount}/{gejalaData.length}</p>
        <p className="text-sm text-gray-500 text-right">{Math.round(progress)}%</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="bg-silver p-6 rounded-lg mt-4 border border-primary/10 h-[350px]">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <CircleHelp className="w-5 h-5" /> Apakah Anda mengalami {currentGejala.gejala}?
        </h3>

        <div className="space-y-3">
          {currentGejala.subGejala.map((sub, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={sub.nama}
                onChange={() => handleAnswer({ nama: sub.nama, nilai: sub.nilai })}
                checked={answers[currentGejala.kode]?.nama === sub.nama}
                className="w-4 h-4 text-primary"
              />
              <span>{`${sub.nama}`}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        >
          <ChevronLeft className="w-4 h-4" /> Sebelumnya
        </button>

        {currentQuestion < gejalaData.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!answers[currentGejala.kode]}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
          >
            Selanjutnya <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading || !answers[currentGejala.kode]}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" /> Memproses...
              </>
            ) : (
              <>Selesai <ChevronRight className="w-4 h-4" /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pertanyaan;
