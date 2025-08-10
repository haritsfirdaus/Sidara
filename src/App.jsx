import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/navbar";
import Home from "./layout/home";
import Footer from "./layout/footer";
import Diagnosis from "./layout/diagnosis";
import Informasi from "./layout/informasi";
import Polisi from "./mapping/polisi";
import RumahSakit from "./mapping/hospital";
import Klinik from "./mapping/klinik";
import FAQ from "./layout/faq";
import Question from './pages/pertanyaan';
import Hasil from "./pages/hasilDiagnosis";
import StrokeHemoragik from "./pages/contents/strokeHemoragik";
import StrokeIskemik from "./pages/contents/strokeIskemik";
import Meningitis from "./pages/contents/meningitis";
import Epilepsi from "./pages/contents/epilepsi";
import BellsPalsy from "./pages/contents/bellsPalsy";
import LowBackPain from "./pages/contents/lowBackPain";
import Vertigo from "./pages/contents/vertigo";
import NeuropatiPerifer from "./pages/contents/neuropatiPerifer";
import LoginPages from "./layout/loginPages";
import AdminDashboard from "./layout/adminDashboard";
import ListGejala from "./pages/listGejala";
import ListPenyakit from "./pages/listPenyakit";
import About from './pages/about';
import KontakKami from "./pages/contact";
import Artikel from "./pages/artikel";
import Panduan from "./pages/panduan";
import Signup from "./layout/signup";
import ProfilUser from "./pages/profilUser";
import ChatPage from "./pages/chatPage";
import NotFound from "./layout/notFound";
import Riwayat from "./pages/riwayatUser";

// Wrapper supaya bisa pakai useLocation
const AppWrapper = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin") || location.pathname.startsWith("/chat");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <main className={`min-h-screen ${!isAdminRoute ? 'pt-20 bg-silver' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/polisi" element={<Polisi />} />
          <Route path="/rumah_sakit" element={<RumahSakit />} />
          <Route path="/klinik_24_jam" element={<Klinik />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/informasi/faq" element={<FAQ />} />
          <Route path="/diagnosis/question" element={<Question />} />
          <Route path="/diagnosis/hasil" element={<Hasil />} />
          <Route path="/informasi/tentang-kami" element={<About />} />
          <Route path="/kontak" element={<KontakKami />} />
          <Route path="/informasi/artikel" element={<Artikel />} />
          <Route path="/informasi/panduan" element={<Panduan />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/profil" element={<ProfilUser />} />
          <Route path="/informasi/gejala" element={<ListGejala />} />
          <Route path="/informasi/penyakit" element={<ListPenyakit />} />
          <Route path="/informasi/penyakit/stroke-hemoragik" element={<StrokeHemoragik />} />
          <Route path="/informasi/penyakit/stroke-iskemik" element={<StrokeIskemik />} />
          <Route path="/informasi/penyakit/meningitis" element={<Meningitis />} />
          <Route path="/informasi/penyakit/epilepsi" element={<Epilepsi />} />
          <Route path="/informasi/penyakit/bells-palsy" element={<BellsPalsy />} />
          <Route path="/informasi/penyakit/low-back-pain" element={<LowBackPain />} />
          <Route path="/informasi/penyakit/vertigo" element={<Vertigo />} />
          <Route path="/informasi/penyakit/neuropati-perifer" element={<NeuropatiPerifer />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/history" element={<Riwayat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
