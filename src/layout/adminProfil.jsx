import React, { useState } from 'react';

const AdminProfil = () => {
  const [profile, setProfile] = useState({
    nama: 'Admin Sistem',
    email: 'admin@example.com',
    username: 'admin123',
    foto: '', // Base64 atau URL lokal
  });

  const [editMode, setEditMode] = useState(false);

  const handleChangeProfile = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, foto: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProfile = () => {
    // Kirim ke server jika pakai backend
    alert('Profil berhasil diperbarui.');
    setEditMode(false);
  };

  return (
    <div className="max-w- mx-auto p-6 bg-silver rounded-xl shadow- text-gray-800 space-y-8">
      {/* <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Profil Admin</h2>
        <p className="text-sm text-gray-500">Kelola informasi dasar akun admin Anda.</p>
      </div> */}

      {/* Foto Profil */}
      <div className="flex flex-col sm:flex-col items-center gap-6 justify-center">
        <div className="w-32 h-32">
          <img
            src={profile.foto || 'https://via.placeholder.com/150?text=Foto'}
            alt="Foto Profil"
            className="w-full h-full rounded-full object-cover border border-gray-300 text-gray-500 text-xs place-content-center"
          />
        </div>
        <div>
          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handleFotoChange}
              className="text-sm text-gray-600"
            />
          )}
          {!editMode && (
            <p className="text-sm text-gray-500">Foto hanya dapat diubah saat edit profil.</p>
          )}
        </div>
      </div>

      {/* Form Profil */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
          <input
            type="text"
            name="nama"
            value={profile.nama}
            onChange={handleChangeProfile}
            disabled={!editMode}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              editMode
                ? 'bg-silver border-primary focus:ring-2 focus:ring-primary'
                : 'bg-silver cursor-not-allowed'
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChangeProfile}
            disabled={!editMode}
            className={`w-full p-3 border rounded-md focus:outline-none ${
              editMode
                ? 'bg-silver border-primary focus:ring-2 focus:ring-primary'
                : 'bg-silver cursor-not-allowed'
            }`}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            disabled
            className="w-full p-3 border rounded-md bg-silver cursor-not-allowed text-gray-500"
          />
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="pt-4">
        {!editMode ? (
          <button
            onClick={() => setEditMode(true)}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition"
          >
            Edit Profil
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleSaveProfile}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition"
            >
              Simpan
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md transition"
            >
              Batal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfil;
