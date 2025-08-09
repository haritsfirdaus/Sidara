import React, { useState } from 'react';

const AdminPengaturan = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Password baru dan konfirmasi tidak cocok!');
      return;
    }

    // Di sini seharusnya ada logic untuk mengirim data ke backend
    alert('Password berhasil diubah.');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div className="dark:bg-secondary dark:text-white bg-silver min-h-screen flex items-start justify-start px-4">
      <div className="max-w-md w-full bg-silver dark:bg-[#1f2937] p-6 space-y-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-center text-primary dark:text-white mb-2">
          Ganti Password
        </h1>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <input
            type="password"
            name="currentPassword"
            placeholder="Password Saat Ini"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            className="w-full p-3 border rounded-md bg-silver dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Password Baru"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            className="w-full p-3 border rounded-md bg-silver dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Konfirmasi Password Baru"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            className="w-full p-3 border rounded-md bg-silver dark:bg-gray-700 dark:text-white"
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md w-full"
          >
            Simpan Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPengaturan;
