'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

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
                    <img className="w-15" src="logos/edem.webp" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="logos/extremdrift.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-16" src="logos/aquabion.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="logos/digitallia.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="logos/meteor.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="logos/nathanmaurer.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="logos/cux-design.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-40">
                <div className="flex justify-center items-center h-full">
                    <img className="w-15" src="logos/salink.png" alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}