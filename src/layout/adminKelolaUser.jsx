import React, { useState, useEffect } from 'react';
import { EyeIcon, PencilIcon, TrashIcon, InfoIcon, DownloadIcon, XIcon } from 'lucide-react';

const KelolaUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('❌ Gagal mengambil data user:', err);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await fetch(`http://localhost:5001/api/users/${id}/status`, {
        method: 'PATCH'
      });
      fetchUsers();
    } catch (err) {
      alert('❌ Gagal mengubah status');
    }
  };

  const handleApprove = async (id) => {
    try {
      await fetch(`http://localhost:5001/api/auth/approve/${id}`, {
        method: 'PUT'
      });
      fetchUsers();
    } catch (err) {
      alert('❌ Gagal menyetujui user');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus user ini?')) {
      try {
        await fetch(`http://localhost:5001/api/users/${id}`, {
          method: 'DELETE'
        });
        fetchUsers();
      } catch (err) {
        alert('❌ Gagal menghapus user');
      }
    }
  };

  const handleResetPassword = async (email) => {
    try {
      const res = await fetch('http://localhost:5001/api/users/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      alert(`Password user telah direset: ${data.passwordBaru}`);
    } catch (err) {
      alert('Gagal mereset password');
    }
  };

  const handleExport = () => {
    const headers = ['ID', 'Nama', 'Usia', 'Email', 'Role', 'Status', 'Tanggal Daftar'];
    const rows = users.map(u => [u.id, u.nama, u.usia, u.email, u.role, u.status, u.tanggal_daftar]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data_user.csv';
    a.click();
  };

  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const offsetDate = new Date(date.getTime() + (7 * 60 * 60 * 1000)); // Waktu lokal WIB (UTC+7)
  return offsetDate.toISOString().slice(0, 10);
  };


  return (
    <div className="space-y-6 p-4 sm:p-6 md:p-8">
      <button
        onClick={handleExport}
        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded text-sm shadow"
      >
        <DownloadIcon className="w-4 h-4" /> Export CSV
      </button>

      <div className="overflow-x-auto">
        <table className="w-[1200px] table-fixed text-xs sm:text-sm text-left border shadow rounded-lg">
          <thead className="bg-gray-100">
            <tr className='text-center'>
              <th className="border px-3 sm:px-4 py-2 w-[40px]">No</th>
              <th className="border px-3 sm:px-4 py-2 w-[200px]">Nama</th>
              <th className="border px-3 sm:px-2 py-2 w-[40px]">Usia</th>
              <th className="border px-3 sm:px-4 py-2 w-[200px]">Email</th>
              <th className="border px-3 sm:px-4 py-2 w-[60px]">Role</th>
              <th className="border px-3 sm:px-2 py-2 w-[80px]">Status</th>
              <th className="border px-3 sm:px-4 py-2 w-[100px]">Tanggal Daftar</th>
              <th className="border px-3 sm:px-4 py-2 w-[90px]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="border px-3 sm:px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-3 sm:px-4 py-2 truncate">{user.nama}</td>
                <td className="border px-3 sm:px-4 py-2">{user.usia}</td>
                <td className="border px-3 sm:px-4 py-2 truncate">{user.email}</td>
                <td className="border px-3 sm:px-4 py-2 capitalize">{user.role}</td>
                <td className="border px-3 sm:px-4 py-2 text-center">
                  <span className={`px-2 py-1 rounded text-white text-xs ${
                    user.status === 'aktif' ? 'bg-green-500' : 'bg-gray-400'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="border px-3 sm:px-4 py-2">{formatDate(user.tanggal_daftar)}</td>
                <td className="border px-3 sm:px-4 py-2 space-x-2 text-center"> 
                  <button onClick={() => setSelectedUser(user)} className="text-blue-500">
                    <EyeIcon className="w-4 h-4 inline" />
                  </button>
                  <button onClick={() => handleToggleStatus(user.id)} className="text-yellow-500">
                    <InfoIcon className="w-4 h-4 inline" />
                  </button>
                  <button onClick={() => handleResetPassword(user.email)} className="text-indigo-500">
                    <PencilIcon className="w-4 h-4 inline" />
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="text-red-500">
                    <TrashIcon className="w-4 h-4 inline" />
                  </button>

                  {user.role === 'admin' && user.status === 'pending' && (
                    <button
                      onClick={() => handleApprove(user.id)}
                      className="text-green-600 font-semibold text-xs hover:underline"
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  Belum ada user terdaftar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-primary mb-6 text-center">
              Detail Informasi Pengguna
            </h2>

            <div className="grid grid-cols-3 gap-y-3 gap-x-4 text-sm text-gray-700">
              <span className="font-semibold">Nama</span>
              <span className="col-span-2">{selectedUser.nama}</span>

              <span className="font-semibold">Usia</span>
              <span className="col-span-2">{selectedUser.usia} tahun</span>

              <span className="font-semibold">Email</span>
              <span className="col-span-2 break-all">{selectedUser.email}</span>

              <span className="font-semibold">Role</span>
              <span className="col-span-2 capitalize">{selectedUser.role}</span>

              <span className="font-semibold">Status</span>
              <span className="col-span-2 capitalize">
                <span className={`inline-block px-2 py-1 rounded text-xs text-white ${
                  selectedUser.status === 'aktif' ? 'bg-green-500' : 'bg-gray-400'
                }`}>
                  {selectedUser.status}
                </span>
              </span>

              <span className="font-semibold">Tgl Daftar</span>
              <span className="col-span-2">{formatDate(selectedUser.tanggal_daftar)}</span>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedUser(null)}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 text-sm transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KelolaUser;
