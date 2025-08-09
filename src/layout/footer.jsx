import { Link } from "react-router-dom";
import LogoSidara from '../assets/sidara-logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-primary/10 to-primary/10 text-primary">
            <div className="container mx-auto px-4 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 container">
                    {/* Logo & Deskripsi */}
                    <div className="space-y-4 max-w-md">
                        <div className="flex items-center">
                            <img src={LogoSidara} className="w-32" alt="SIDARA Logo" />
                        </div>
                        <p className="text-sm leading-relaxed w-[300px]">
                            <strong>SIDARA</strong> — Sistem Pakar Diagnosis Penyakit Saraf yang Cerdas, Cepat, dan Andal untuk Mendukung Keputusan Medis Anda.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="text-primary hover:text-primary/85 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-primary hover:text-primary/85 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-primary hover:text-primary/85 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-primary hover:text-primary/85 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <span>

                    </span>

                    <div className="flex flex-col lg:flex-row gap-6 mt-0 lg:mt-9">
                        {/* Menu Utama */}
                        <div className="min-w-[150px]">
                            <h4 className="text-lg font-bold mb-4 border-b-2 border-primary/20 pb-2">Menu</h4>
                            <ul className="space-y-3 text-primary">
                                <li>
                                    <Link to="/" className="hover:text-primary/85 transition-colors flex items-center text-primary">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/diagnosis" className="hover:text-primary/85 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        Diagnosa
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq" className="hover:text-primary/85 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Informasi */}
                        <div className="min-w-[150px]">
                            <h4 className="text-lg font-bold mb-4 border-b-2 border-primary/20 pb-2">Informasi</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/informasi/panduan" className="hover:text-primary/85 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        Panduan
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/informasi/gejala" className="hover:text-primary/85 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        Daftar Gejala
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/informasi/penyakit" className="hover:text-primary/85 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        Daftar Penyakit
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link to="/informasi/artikel" className="hover:text-primary/85 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        Artikel
                                    </Link>
                                </li> */}
                            </ul>
                        </div>

                        {/* Kontak */}
                        <div className="min-w-[150px]">
                            <h4 className="text-lg font-bold mb-4 border-b-2 border-primary/20 pb-2">Kontak</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/informasi/tentang-kami" className="hover:text-primary/85 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        Tentang Kami
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/informasi/kontak" className="hover:text-primary/85 transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        Kontak Kami
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-primary/20 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center text-center">
                        <p className="text-sm text-gray-600">
                            &copy; {new Date().getFullYear()} SIDARA Sistem Pakar Penyakit Saraf
                            Dibuat dengan ❤️ dan Fuzzy Logic
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
