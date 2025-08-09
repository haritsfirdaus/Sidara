import React from 'react';
import { XIcon, LogOutIcon, ShieldOffIcon } from 'lucide-react';

const ModalLogout = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-silver rounded-2xl p-6 shadow-xl w-[90%] max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="flex justify-center items-center mb-4">
          <ShieldOffIcon className="w-10 h-10 text-primary" />
        </div>

        <h2 className="text-lg font-bold text-primary text-center mb-2">Konfirmasi Logout</h2>
        <p className="text-center text-primary text-sm">Apakah kamu yakin ingin keluar dari akun ini?</p>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={onConfirm}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90"
          >
            <LogOutIcon className="w-4 h-4" /> Ya, Logout
          </button>
          <button
            onClick={onClose}
            className="border border-primary text-primary px-4 py-2 rounded-lg text-sm hover:bg-primary/10"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
