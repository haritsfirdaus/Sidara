import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoKeren from "../assets/sidara-logo.png";
import { UserIcon, LogInIcon, ChevronDown, CircleUser, LogOut, History } from "lucide-react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowDropdown(false);
      setShowUserMenu(false);
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin keluar?")) {
      localStorage.removeItem("user");
      window.dispatchEvent(new Event("storage")); 
      navigate("/login");
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full bg-silver shadow z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="bg-silver container">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img src={LogoKeren} alt="Logo" className="w-[80px]" />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-primary font-semibold">
            <li><Link to="/" className="hover:text-primary/85">Beranda</Link></li>
            <span
              onClick={() => {
                if (!user) {
                  navigate("/login");
                } else {
                  navigate("/diagnosis");
                }
              }}
              className="hover:text-primary/85 cursor-pointer"
            >
              Diagnosis
            </span>

            <li className="relative">
              <button onClick={toggleDropdown} className="flex items-center gap-1 hover:text-primary/85">
                Informasi
                <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
              </button>
              {showDropdown && (
                <ul className="absolute bg-silver text-primary shadow-md rounded-md mt-2 w-36 z-50 text-sm">
                  <li><Link to="/informasi/panduan" className="block px-4 py-2 hover:bg-gray-100">Panduan</Link></li>
                  <li><Link to="/informasi/gejala" className="block px-4 py-2 hover:bg-gray-100">Daftar Gejala</Link></li>
                  <li><Link to="/informasi/penyakit" className="block px-4 py-2 hover:bg-gray-100">Daftar Penyakit</Link></li>
                  <li><Link to="/informasi/tentang-kami" className="block px-4 py-2 hover:bg-gray-100">Tentang Kami</Link></li>
                  <li><Link to="/informasi/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/kontak" className="hover:text-primary/85">Kontak</Link></li>

            <li className="relative">
              {!user ? (
                <Link to="/login" className="flex items-center gap-2 px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white text-sm transition">
                  <LogInIcon className="w-4 h-4" /> Login
                </Link>
              ) : (
                <div>
                  <button onClick={toggleUserMenu} className="flex items-center gap-2 hover:text-primary">
                    <CircleUser className="w-6 h-6" />
                    <span>{user.nama?.split(" ")[0]}</span>
                    <ChevronDown className={`w-4 h-4 transition ${showUserMenu ? "rotate-180" : ""}`} />
                  </button>
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 bg-silver shadow rounded w-40 z-50">
                      <Link to="/profil" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                        <UserIcon className="w-4 h-4" /> Profil
                      </Link>
                      <Link to="/history" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100">
                        <History className="w-4 h-4" /> Riwayat
                      </Link>
                      <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100">
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>

          <div className="md:hidden">
            <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden bg-silver px-4 pb-4 text-primary space-y-2 font-semibold text-sm">
            <Link to="/" className="block hover:text-sky" onClick={() => setShowMobileMenu(false)}>Beranda</Link>
            <span
              onClick={() => {
                setShowMobileMenu(false);
                if (!user) {
                  navigate("/login");
                } else {
                  navigate("/diagnosis");
                }
              }}
              className="block hover:text-sky cursor-pointer"
            >
              Diagnosis
            </span>

            <p className="mt-2 font-bold">Informasi</p>
            <Link to="/informasi/panduan" className="block ml-2 hover:text-sky" onClick={() => setShowMobileMenu(false)}>Panduan</Link>
            <Link to="/informasi/gejala" className="block ml-2 hover:text-sky" onClick={() => setShowMobileMenu(false)}>Daftar Gejala</Link>
            <Link to="/informasi/penyakit" className="block ml-2 hover:text-sky" onClick={() => setShowMobileMenu(false)}>Daftar Penyakit</Link>
            <Link to="/informasi/tentang-kami" className="block ml-2 hover:text-sky" onClick={() => setShowMobileMenu(false)}>Tentang Kami</Link>
            <Link to="/informasi/faq" className="block ml-2 hover:text-sky" onClick={() => setShowMobileMenu(false)}>FAQ</Link>
            <Link to="/kontak" className="block hover:text-sky" onClick={() => setShowMobileMenu(false)}>Kontak Kami</Link>
            {!user ? (
              <Link to="/login" className="block hover:text-sky" onClick={() => setShowMobileMenu(false)}>Login</Link>
            ) : (
              <>
                <Link to="/profil" className="block hover:text-sky" onClick={() => setShowMobileMenu(false)}>Profil</Link>
                <Link to="/history" className="block hover:text-sky" onClick={() => setShowMobileMenu(false)}>Riwayat</Link>
                <button onClick={handleLogout} className="block text-left text-red-500 hover:text-red-700">Logout</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
