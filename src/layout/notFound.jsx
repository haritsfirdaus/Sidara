import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12 overflow-hidden">
      {/* Ikon dekoratif */}
      <AlertTriangle className="w-12 h-12 text-primary absolute top-8 left-8 opacity-20 rotate-12" />
      <AlertTriangle className="w-16 h-16 text-primary absolute top-20 right-10 opacity-10 -rotate-6" />
      <AlertTriangle className="w-10 h-10 text-primary absolute bottom-12 left-10 opacity-20 rotate-45" />
      <AlertTriangle className="w-12 h-12 text-primary absolute bottom-16 right-16 opacity-10 -rotate-12" />
      <AlertTriangle className="w-8 h-8 text-primary absolute top-1/2 left-5 opacity-10 rotate-45" />
      <AlertTriangle className="w-8 h-8 text-primary absolute bottom-1/2 right-5 opacity-10 -rotate-45" />

      {/* Konten Utama */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-primary tracking-widest mb-2">404</h1>
      <div className="flex items-center gap-2 bg-primary px-3 py-1 text-sm rounded rotate-12 text-white">
        <AlertTriangle className="w-4 h-4" />
        <span>Page Not Found</span>
      </div>
      <div className="mt-18 text-center">
        <AlertTriangle className="w-20 h-20 mx-auto text-primary mb-2" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Oops! Halaman tidak ditemukan.
        </h2>
        <p className="text-gray-500 mb-4">
          Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
