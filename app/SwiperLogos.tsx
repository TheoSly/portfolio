'use client';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperLogos() {
    return (
        <Swiper
            slidesPerView={4}
            centeredSlides={false}
            loop={true}
            spaceBetween={0}
            autoplay={{
                delay: 800,
            }}
            speed={500}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="h-40"
        >
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="edem.webp" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="extremdrift.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-16" src="aquabion.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="digitallia.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="meteor.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="nathanmaurer.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="cux-design.png" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}