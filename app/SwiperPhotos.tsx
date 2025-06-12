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
                className="h-100"
            >
                <SwiperSlide><img className="h-100 w-fit object-cover rounded-2xl" src="profile.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-100 w-fit object-cover rounded-2xl" src="IMG_3809.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-100 w-fit object-cover rounded-2xl" src="profile.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className="h-100 w-fit object-cover  rounded-2xl" src="IMG_3809.jpg" alt="" /></SwiperSlide>

        </Swiper>
    );
}