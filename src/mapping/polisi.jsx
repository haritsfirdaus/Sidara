import { useEffect } from 'react';
import L, { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Polisi() {
    useEffect(() => {
        // Inisialisasi peta
        const map = L.map('map').setView([-6.9271, 106.9294], 13); // Sukabumi
    
        // Tambahkan layer OSM
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Fasilitas Publik Darurat'
        }).addTo(map);
    
        // Data lokasi fasilitas publik darurat
        const polisi = [
            {nama: "Polsek Lembur Situ", koordinat: [-6.970891284454382, 106.90400850896454], deskripsi: "Kantor Polisi"},
            {nama: "Polsek Baros", koordinat: [-6.964604483733282, 106.93936612517629], deskripsi: "Kantor Polisi"},

        ];
    
        // Tambahkan marker untuk setiap fasilitas
        polisi.forEach(fas => {
          L.marker(fas.koordinat)
            .addTo(map)
            .bindPopup(`<b>${fas.nama}</b><br>${fas.deskripsi}`)
            .openPopup();
        });
    
        return () => {
          map.remove();
        };
      }, []);
    
      return (
        <>
          <h1 className='bg-teal-900 text-center font-bold text-white text-2xl p-2'>WebGIS Kota Sukabumi</h1>
          <div className='flex flex-col items-center my-2 mx-2'>
            <div id="map" style={{ height: '400px', width: '50%' }}></div>
          </div>
        </>
      );
    }

export default Polisi