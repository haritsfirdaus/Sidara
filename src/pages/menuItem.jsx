import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import slide1 from '../assets/doctor.svg';
import slide2 from '../assets/logo-1.svg';
import slide3 from '../assets/list-1.svg';

const MenuItem = () => {
    return (
        <div className="mt-24 px-4 md:px-10">
            {/* SLIDER */}
            <div className="mb-12">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="rounded-xl overflow-hidden shadow-md"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="Slide 1" className="w-auto h-auto md:h-96 object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="Slide 2" className="w-auto h-auto md:h-96 object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="Slide 3" className="w-auto h-auto md:h-96 object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* INFORMASI UMUM */}
            <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Selamat Datang di SIDARA</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    <strong>SIDARA</strong> (Sistem Pakar Diagnosis Penyakit Saraf) adalah aplikasi berbasis web yang dirancang untuk membantu masyarakat dalam mengetahui kemungkinan penyakit saraf berdasarkan gejala yang dirasakan.
                    Dengan memanfaatkan logika fuzzy dan decision tree, SIDARA memberikan estimasi hasil diagnosa secara cepat dan informatif.
                </p>
                <p className="mt-4 text-base text-gray-600">
                    Silakan mulai dengan menjawab pertanyaan gejala untuk mendapatkan hasil diagnosis awal. SIDARA bukan pengganti dokter, tetapi alat bantu awal sebelum konsultasi lebih lanjut.
                </p>
            </section>
        </div>
    );
};

export default MenuItem;
