import React, { useState } from 'react';

const KontakKami = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError('');

    const { nama, email, pesan } = formData;

    // Validasi sederhana
    if (!nama.trim() || !email.trim() || !pesan.trim()) {
      setError('Semua field wajib diisi.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API}/api/kontak`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nama: '', email: '', pesan: '' });
      } else {
        setError(result.message || 'Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Terjadi kesalahan saat mengirim pesan. Periksa koneksi Anda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-16 text-primary max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Kontak Kami</h1>

      <p className="text-gray-700 text-center mb-10">
        Punya pertanyaan, saran, atau masukan? Silakan hubungi kami melalui formulir di bawah ini.
      </p>

      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
          <p>Terima kasih! Pesan Anda telah terkirim.</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="pesan">Pesan</label>
          <textarea
            id="pesan"
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-sky flex items-center justify-center"
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mr-2"></span>
          ) : null}
          {loading ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>
    </main>
  );
};

export default KontakKami;
