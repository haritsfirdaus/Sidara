import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [formData, setFormData] = useState({
    nama: '',
    usia: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await axios.post(`${import.meta.env.VITE_API}/api/auth/register`, {
        ...formData,
        role: activeTab === 'admin' ? 'admin' : 'user',
      }, {
        headers: { "ngrok-skip-browser-warning": "true" },
        withCredentials: true
      });

      setSuccess('Akun berhasil dibuat! Silakan login.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Gagal membuat akun. Coba lagi nanti.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-silver to-silver">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md my-8">

        {/* Tab Pilihan */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => { setActiveTab('user'); setError(''); setSuccess(''); }}
            className={`px-4 py-2 font-semibold rounded-l-lg ${activeTab === 'user' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            User
          </button>
          <button
            onClick={() => { setActiveTab('admin'); setError(''); setSuccess(''); }}
            className={`px-4 py-2 font-semibold rounded-r-lg ${activeTab === 'admin' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
             Admin
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          {activeTab === 'admin' ? 'Form Admin' : 'Form Pengguna'}
        </h2>

        {error && <div className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded mb-4">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField label="Nama Lengkap" name="nama" value={formData.nama} onChange={handleChange} />
          <InputField label="Usia" name="usia" type="number" value={formData.usia} onChange={handleChange} />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
          <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-all"
          >
            Daftar
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Sudah punya akun?{' '}
          <button onClick={() => navigate('/login')} className="text-blue-600 hover:underline">
            Masuk
          </button>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = 'text', value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-1 block w-full rounded-lg border px-4 py-2"
    />
  </div>
);

export default SignupPage;
