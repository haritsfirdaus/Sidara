import { useEffect } from 'react';
import L, { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Hospital() {
    useEffect(() => {
        // Inisialisasi peta
        const map = L.map('map').setView([-6.9271, 106.9294], 13); // Sukabumi
    
        // Tambahkan layer OSM
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Fasilitas Publik Darurat'
        }).addTo(map);
    
        // Data lokasi fasilitas publik darurat
        const hospital = [
          { nama: "RSUD R. Syamsudin", koordinat: [-6.915113218154771, 106.93517737034985], deskripsi: "Rumah Sakit Umum Daerah" },
          { nama: "RS Ridogalih", koordinat: [-6.921844065096543, 106.93431685682917], deskripsi: "Rumah Sakit Umum" },
          {nama: "RSUD Al-Mulk", koordinat: [-6.958725817472039, 106.89784265985558], deskripsi: "Rumah Sakit Umum Daerah"},
          {nama: "RSI Assyifa Sukabumi", koordinat: [-6.919090264687342, 106.91686232294826], deskripsi: "Rumah Sakit Swasta"},
          {nama: "RS Kartika Asih", koordinat: [-6.922004513826675, 106.9238383610598], deskripsi: "Rumah Sakit Umum"},
          {nama: "RS Bhayangkara Setukpa", koordinat: [-6.9121087296463095, 106.92248639204261], deskripsi: "Rumah Sakit Umum"},
          {nama: "Primaya Hospital Sukabumi", koordinat: [-6.918629592424504, 106.95782460271425], deskripsi: "Rumah Sakit Umum"},
          {nama: "RSU Hermina Sukabumi", koordinat: [-6.917896457113508, 106.96144481899717], deskripsi: "Rumah Sakit Umum"},

        ];
    
        // Tambahkan marker untuk setiap fasilitas
        hospital.forEach(fas => {
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
        <main className='bg-yellow-50'>
          <h1 className='bg-teal-900 text-center font-bold text-white text-2xl p-2'>WebGIS Kota Sukabumi</h1>
          <div className='flex flex-col items-center my-2 mx-2'>
            <div id="map" style={{ height: '400px', width: '50%' }}></div>
          </div>
        </main>
        </>
      );
    }

export default Hospital