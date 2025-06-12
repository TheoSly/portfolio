'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperPhotos() {
    return (
            <Swiper
                direction={'vertical'}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                }}
                pagination={{
                clickable: true,
                }}
                speed={500}
                modules={[Pagination, EffectFade, Autoplay]}
                className="h-100 pointer-events-none"
            >
                <SwiperSlide className="pointer-events-none" ><img className="h-100 w-fit object-cover rounded-2xl pointer-events-none" src="profile.png" alt="" /></SwiperSlide>
                <SwiperSlide className="pointer-events-none"><img className="h-100 w-fit object-cover rounded-2xl pointer-events-none" src="IMG_3809.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className="pointer-events-none"><img className="h-100 w-fit object-cover rounded-2xl pointer-events-none" src="profile.png" alt="" /></SwiperSlide>
                <SwiperSlide className="pointer-events-none"><img className="h-100 w-fit object-cover rounded-2xl pointer-events-none" src="IMG_3809.jpg" alt="" /></SwiperSlide>

        </Swiper>
    );
}