import { useEffect } from 'react';
import L, { icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
    useEffect(() => {
        // Inisialisasi peta
        const map = L.map('map').setView([-6.9271, 106.9294], 13); // Sukabumi
    
        // Tambahkan layer OSM
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Fasilitas Publik Darurat'
        }).addTo(map);


        const icon = L.icon({
          iconUrl: 'leaf-green.png',
      
          iconSize:     [38, 95], // size of the icon
          shadowSize:   [50, 64], // size of the shadow
          iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        })
    
        // Data lokasi fasilitas publik darurat
        const fasilitas = [
          { nama: "RSUD R. Syamsudin", koordinat: [-6.915113218154771, 106.93517737034985], deskripsi: "Rumah Sakit Umum Daerah" },
          { nama: "RS Ridogalih", koordinat: [-6.921844065096543, 106.93431685682917], deskripsi: "Rumah Sakit Umum" },
          { nama: "3R Klinik", koordinat: [-6.919694453103487, 106.95446718539826], deskripsi: "Klinik Rumah Sakit" },
          {nama: "RSUD Al-Mulk", koordinat: [-6.958725817472039, 106.89784265985558], deskripsi: "Rumah Sakit Umum Daerah"},
          {nama: "RSI Assyifa Sukabumi", koordinat: [-6.919090264687342, 106.91686232294826], deskripsi: "Rumah Sakit Swasta"},
          {nama: "RS Kartika Asih", koordinat: [-6.922004513826675, 106.9238383610598], deskripsi: "Rumah Sakit Umum"},
          {nama: "RS Bhayangkara Setukpa", koordinat: [-6.9121087296463095, 106.92248639204261], deskripsi: "Rumah Sakit Umum"},
          {nama: "dr. Narami", koordinat: [-6.955716609837169, 106.94733200945362], deskripsi: "Prakter Dokter"},
          {nama: "Klinik Rawat Inap Permata", koordinat: [-6.922652105111918, 106.94062190237892], deskripsi: "Klinik 24 Jam"},
          {nama: "Primaya Hospital Sukabumi", koordinat: [-6.918629592424504, 106.95782460271425], deskripsi: "Rumah Sakit Umum"},
          {nama: "RSU Hermina Sukabumi", koordinat: [-6.917896457113508, 106.96144481899717], deskripsi: "Rumah Sakit Umum"},
          {nama: "Pemadam Kebakaran", koordinat: [-6.923045839336479, 106.92573212104385], deskripsi: "Pemadam Kebakaran"},
          {nama: "Polsek Lembur Situ", koordinat: [-6.970891284454382, 106.90400850896454], deskripsi: "Kantor Polisi"},
          {nama: "Polsek Baros", koordinat: [-6.964604483733282, 106.93936612517629], deskripsi: "Kantor Polisi"},
          {nama: "Polsek Cibeureum", koordinat: [-6.955685370029496, 106.94833706744737], deskripsi: "Kantor Polisi"},
          {nama: "Polsek Citamiang", koordinat: [-6.943776347772926, 106.92824975742131], deskripsi: "Kantor Polisi"},
          {nama: "Pos Singgah Patroli Polsek", koordinat: [-6.946551844491898, 106.92438718400079], deskripsi: "Polisi Lalu Lintas"},
          {nama: "Polsek Gunung Guruh", koordinat: [-6.938315077264482, 106.90536082807309], deskripsi: "Kantor Polisi"},
          {nama: "Polsek Warudoyong", koordinat: [-6.924831725176666, 106.90351526432023], deskripsi: "Kantor Polisi"},
          {nama: "Pos Polisi Citamiang", koordinat: [-6.925598483740472, 106.93058483960851], deskripsi: "Polisi Lalu Lintas"},
          {nama: "Polres Sukabumi Kota", koordinat: [-6.921050791859194, 106.92664175838188], deskripsi: "Kantor Polisi"},
          {nama: "Satlantas Polres Sukabumi Kota", koordinat: [-6.919255537824438, 106.91535943229927], deskripsi: "Kantor Polisi Lalu Lintas"},
          {nama: "Satpas Polres Sukabumi Kota", koordinat: [-6.919223369196405, 106.91527135669575], deskripsi: "Kantor Pelayanan STNK & SIM"},
          {nama: "Polsek Gunung Puyuh", koordinat: [-6.912458829757776, 106.91322989080727], deskripsi: "Kantor Polisi"},
          {nama: "Polsek Cikole", koordinat: [-6.9106965514226575, 106.93337769714883], deskripsi: "Kantor Polisi"},
          {nama: "Satlantas Polres Sukabumi Kota", koordinat: [-6.904750195410692, 106.92955063144784], deskripsi: "Kantor Keselamatan Publik"},

        ];
    
        // Tambahkan marker untuk setiap fasilitas
        fasilitas.forEach(fas => {
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
        <main className='border-teal-900 border-t-8'>
          <h1 className='text-center font-bold text-teal-900 text-2xl p-2'>WebGIS Kota Sukabumi</h1>
          <div className='flex flex-col items-center my-2'>
            <div id="map" style={{ height: '400px', width: '50%' }}></div>
          </div>
        </main>
        </>
      );
    }

export default Map