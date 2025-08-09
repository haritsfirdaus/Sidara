import { useEffect } from 'react';
import L, { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Klinik() {
    useEffect(() => {
        // Inisialisasi peta
        const map = L.map('map').setView([-6.9271, 106.9294], 13); // Sukabumi
    
        // Tambahkan layer OSM
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Fasilitas Publik Darurat'
        }).addTo(map);
    
        // Data lokasi fasilitas publik darurat
        const klinik = [
          { nama: "3R Klinik", koordinat: [-6.919694453103487, 106.95446718539826], deskripsi: "Klinik Rumah Sakit" },
          {nama: "Klinik Rawat Inap Permata", koordinat: [-6.922652105111918, 106.94062190237892], deskripsi: "Klinik 24 Jam"},
          {nama: "dr. Narami", koordinat: [-6.955716609837169, 106.94733200945362], deskripsi: "Prakter Dokter"},

        ];
    
        // Tambahkan marker untuk setiap fasilitas
        klinik.forEach(fas => {
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

export default Klinik