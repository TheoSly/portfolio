'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const images = [
    'bar.jpg',
    'canne.jpg',
    'strasbourg.jpg',
    'croatie.jpg',
    'mer.jpg',
    'monaco.jpg',
    'ninho.jpg',
    'rando.jpg',
    'rando2.jpg',
    'sdm.jpg',
    'split.jpg',
    'venise.jpg',
];

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
            allowTouchMove={false}
        >
            {images.map((img, idx) => (
                <SwiperSlide className="relative" key={idx}>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-20 rounded-2xl" />
                    <img
                        className="h-100 w-full object-cover rounded-2xl relative z-10"
                        src={`/images-mood/${img}`}
                        alt={img}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}