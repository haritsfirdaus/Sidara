import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/api/auth/login`, {
        email,
        password
      });

      const { user, token } = response.data;

      // Simpan data user ke localStorage
      localStorage.setItem('user', JSON.stringify({
        token,
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role
      }));

      // 🚨 PENTING: Biar Navbar langsung update
      window.dispatchEvent(new Event('storage'));

      // Redirect berdasarkan role
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (user.role === 'user') {
        navigate('/');
      } else {
        setError('Role tidak dikenal.');
      }

    } catch (err) {
      console.error("❌ Error saat login:", err);
      setError(err.response?.data?.error || 'Login gagal. Silakan periksa email dan password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-silver to-silver px-4">
      <div className="bg-silver shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Login</h2>

        {error && (
          <div className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-silver"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-silver"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-all"
          >
            Masuk
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Lupa password?{' '}
            <button
              onClick={() => navigate('/chat')}
              className="text-blue-600 hover:underline"
            >
              Hubungi Admin
            </button>
          </p>
          <p className="mt-2">
            Belum punya akun?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-blue-600 hover:underline"
            >
              Buat Akun
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
