import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, FileTextIcon, LayoutDashboardIcon, MenuIcon, XIcon, SettingsIcon, LogOutIcon, UserCircleIcon, MailIcon, History } from 'lucide-react';

import KelolaGejala from './adminKelolaGejala';
import KelolaUser from './adminKelolaUser';
import AdminProfil from './adminProfil';
import AdminPengaturan from './adminPengaturan';
import AdminKelolaPesan from './adminKelolaPesan';
import KelolaRiwayat from './adminKelolaRiwayat';
import logoSidara from '../assets/logo-sidara-putih.png';
import ModalLogout from '../components/modalLogout';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeTab) {
      case 'user':
        return <KelolaUser />;
      case 'gejala':
        return <KelolaGejala />;
      case 'feedback':
        return <AdminKelolaPesan />;
      case 'riwayat':
        return <KelolaRiwayat />;
      case 'profil':
        return <AdminProfil />;
      case 'pengaturan':
        return <AdminPengaturan />;
      default:
        return null;
    }
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="bg-primary text-white w-64 hidden md:flex flex-col fixed h-full p-5 shadow-lg z-40">
        <div className="flex items-center gap-3 mb-6">
          <img src={logoSidara} alt="SIDARA Logo" className="w-10 h-10 rounded-lg" />
          <div className="text-lg font-bold uppercase">Admin</div>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <NavButton label="Kelola User" icon={<UserIcon className="w-5 h-5" />} active={activeTab === 'user'} onClick={() => setActiveTab('user')} />
          <NavButton label="Kelola Gejala" icon={<FileTextIcon className="w-5 h-5" />} active={activeTab === 'gejala'} onClick={() => setActiveTab('gejala')} />
          <NavButton label="Kelola Feedback" icon={<MailIcon className="w-5 h-5" />} active={activeTab === 'feedback'} onClick={() => setActiveTab('feedback')} />
          <NavButton label="Kelola Riwayat" icon={<History className="w-5 h-5" />} active={activeTab === 'riwayat'} onClick={() => setActiveTab('riwayat')} />
          <div className="mt-6 border-t border-white/30 pt-4 text-sm font-semibold text-white/80">Profil</div>
          <NavButton label="Lihat Profil" icon={<UserCircleIcon className="w-5 h-5" />} active={activeTab === 'profil'} onClick={() => setActiveTab('profil')} />
          <NavButton label="Pengaturan" icon={<SettingsIcon className="w-5 h-5" />} active={activeTab === 'pengaturan'} onClick={() => setActiveTab('pengaturan')} />
          <NavButton label="Logout" icon={<LogOutIcon className="w-5 h-5" />} onClick={() => setShowLogoutModal(true)} />
        </nav>
      </aside>

      <div className="md:hidden flex items-center justify-between bg-primary text-white p-4 w-full fixed z-30">
        <div className="text-lg font-bold flex items-center gap-2">
          <LayoutDashboardIcon className="w-5 h-5" /> DASHBOARD ADMIN
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {sidebarOpen && (
        <div className="fixed top-0 left-0 z-50 w-64 h-full bg-primary text-white p-5 shadow-lg md:hidden">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <img src={logoSidara} alt="SIDARA Logo" className="w-8 h-8 rounded-md" />
              <div className="text-lg font-bold">SIDARA</div>
            </div>
            <button onClick={() => setSidebarOpen(false)}>
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-3">
            {['user', 'gejala', 'feedback', 'riwayat', 'profil', 'pengaturan'].map((tab) => {
              const labels = {
                user: 'Kelola User',
                gejala: 'Kelola Gejala',
                feedback: 'Kelola Feedback',
                riwayat: 'Kelola Riwayat',
                profil: 'Lihat Profil',
                pengaturan: 'Pengaturan',
              };
              const icons = {
                user: <UserIcon className="w-5 h-5" />,
                gejala: <FileTextIcon className="w-5 h-5" />,
                feedback: <MailIcon className="w-5 h-5" />,
                riwayat: <FileTextIcon className="w-5 h-5" />,
                profil: <UserCircleIcon className="w-5 h-5" />,
                pengaturan: <SettingsIcon className="w-5 h-5" />,
              };
              return (
                <NavButton
                  key={tab}
                  label={labels[tab]}
                  icon={icons[tab]}
                  active={activeTab === tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSidebarOpen(false);
                  }}
                />
              );
            })}
            <NavButton label="Logout" icon={<LogOutIcon className="w-5 h-5" />} onClick={() => setShowLogoutModal(true)} />
          </nav>
        </div>
      )}

      <main className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 bg-gray-50 mt-14 md:mt-0">
        <div className="text-xl md:text-2xl font-semibold mb-4 text-primary capitalize">
          {activeTab === 'user' && 'Kelola User'}
          {activeTab === 'gejala' && 'Kelola Gejala'}
          {activeTab === 'feedback' && 'Kelola Feedback'}
          {activeTab === 'riwayat' && 'Kelola Riwayat'}
          {activeTab === 'profil' && 'Lihat Profil'}
          {activeTab === 'pengaturan' && 'Pengaturan'}
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md overflow-auto">
          {renderContent()}
        </div>
      </main>

      {showLogoutModal && (
        <ModalLogout
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogoutConfirm}
        />
      )}
    </div>
  );
};

const NavButton = ({ label, icon, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded-md transition font-medium w-full text-left ${
      active ? 'bg-white text-primary' : 'hover:bg-white/20 hover:text-white'
    }`}
  >
    {icon} {label}
  </button>
);

export default AdminDashboard;
