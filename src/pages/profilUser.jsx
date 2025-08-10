import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserIcon, MailIcon, ShieldIcon, PencilIcon, SaveIcon, XIcon, KeyRoundIcon } from 'lucide-react';

const ProfilUser = () => {
  const [user, setUser] = useState({});
  const [editData, setEditData] = useState({ nama: '', usia: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const userStorage = JSON.parse(localStorage.getItem('user')) || {};
  const userId = userStorage?.userId;
  const token = userStorage?.token;

  // const fetchUser = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:5001/api/users/${userId}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     setUser(res.data);
  //     setEditData({
  //       nama: res.data.nama || '',
  //       usia: res.data.usia || '',
  //       email: res.data.email || ''
  //     });
  //   } catch {
  //     setError('Gagal memuat data profil.');
  //   }
  // };

  const API_URL = `${import.meta.env.VITE_API}/api/users`;

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${API_URL}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        },
        withCredentials: true
      });
      setUser(res.data);
      setEditData({
        nama: res.data.nama || '',
        usia: res.data.usia || '',
        email: res.data.email || ''
      });
    } catch {
      setError('Gagal memuat data profil.');
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUser();
    } else {
      setError('User ID tidak ditemukan.');
    }
  }, [userId, token]);

//   const handleEditProfile = async (e) => {
//   e.preventDefault();
//   try {
//     await axios.put(`http://localhost:5001/api/users/${userId}`, editData, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
    
//     // Ambil ulang user dari DB, jangan pakai state lama
//     const res = await axios.get(`http://localhost:5001/api/users/${userId}`, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     setUser(res.data);
//     setEditData({ nama: res.data.nama, usia: res.data.usia, email: res.data.email });

//     setEditMode(false);
//     setMessage('Profil berhasil diperbarui.');
//     setError('');
//   } catch (err) {
//     setError('Gagal memperbarui profil.');
//     setMessage('');
//   }
// };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${userId}`, editData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        },
        withCredentials: true
      });

      const res = await axios.get(`${API_URL}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        },
        withCredentials: true
      });
      setUser(res.data);
      setEditData({ nama: res.data.nama, usia: res.data.usia, email: res.data.email });

      setEditMode(false);
      setMessage('Profil berhasil diperbarui.');
      setError('');
    } catch (err) {
      setError('Gagal memperbarui profil.');
      setMessage('');
    }
  };


  // const handleChangePassword = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setMessage('');

  //   if (passwordData.newPassword !== passwordData.confirmNewPassword) {
  //     setError('Konfirmasi password tidak cocok.');
  //     return;
  //   }

  //   try {
  //     await axios.put(`http://localhost:5001/api/users/${userId}/password`, passwordData, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     });
  //     setMessage('Password berhasil diubah.');
  //     setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
  //   } catch (err) {
  //     setError(err.response?.data?.error || 'Gagal mengganti password.');
  //   }
  // };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setError('Konfirmasi password tidak cocok.');
      return;
    }

    try {
      await axios.put(`${API_URL}/${userId}/password`, passwordData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true"
        },
        withCredentials: true
      });
      setMessage('Password berhasil diubah.');
      setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    } catch (err) {
      setError(err.response?.data?.error || 'Gagal mengganti password.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-silver p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
          <UserIcon className="w-6 h-6" /> Profil Pengguna
        </h2>

        {message && <div className="mb-4 text-green-600 font-medium">{message}</div>}
        {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}

        <form onSubmit={handleEditProfile} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-primary">Nama</label>
              <div className="flex items-center border rounded-lg px-3 bg-silver">
                <UserIcon className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  className="w-full py-2 focus:ring-0 border-0 bg-transparent"
                  value={editData.nama}
                  onChange={(e) => setEditData({ ...editData, nama: e.target.value })}
                  disabled={!editMode}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-primary">Usia</label>
              <div className="flex items-center border rounded-lg px-3 bg-silver">
                <ShieldIcon className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="number"
                  className="w-full py-2 focus:ring-0 border-0 bg-transparent"
                  value={editData.usia}
                  onChange={(e) => setEditData({ ...editData, usia: e.target.value })}
                  disabled={!editMode}
                  required
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-primary">Email</label>
              <div className="flex items-center border rounded-lg px-3 bg-silver">
                <MailIcon className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="email"
                  className="w-full py-2 focus:ring-0 border-0 bg-transparent"
                  value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                  disabled={!editMode}
                  required
                />
              </div>
            </div>
          </div>
        <div className="flex justify-end gap-4 pt-4">
          {!editMode ? (
            <button
              type="button"
              onClick={() => {
                setEditMode(true);
                setMessage('');
                setError('');
              }}
              className="flex items-center gap-2 bg-primary text-silver px-5 py-2 rounded-lg hover:bg-primary/90"
            >
              <PencilIcon className="w-4 h-4" /> Edit Profil
            </button>
          ) : null}
        </div>

        {editMode && (
          <form onSubmit={handleEditProfile} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ... input fields kamu di sini persis seperti sebelumnya ... */}
            </div>
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="submit"
                className="flex items-center gap-2 bg-primary text-silver px-5 py-2 rounded-lg hover:bg-primary/90"
              >
                <SaveIcon className="w-4 h-4" /> Simpan
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditMode(false);
                  setEditData({ nama: user.nama, usia: user.usia, email: user.email });
                  setMessage('');
                  setError('');
                }}
                className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
              >
                <XIcon className="w-4 h-4" /> Batal
              </button>
            </div>
          </form>
        )}
        </form>

        <hr className="my-6" />
        <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
          <KeyRoundIcon className="w-5 h-5" /> Ganti Password
        </h3>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm text-primary">Password Lama</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-2 bg-silver focus:ring-2 focus:ring-primary"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-primary">Password Baru</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-2 bg-silver focus:ring-2 focus:ring-primary"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-primary">Ulangi Password Baru</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-2 bg-silver focus:ring-2 focus:ring-primary"
              value={passwordData.confirmNewPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-silver px-6 py-2 rounded-lg hover:bg-primary/90"
          >
            Ubah Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilUser;
