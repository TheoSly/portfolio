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
    'canne3.jpg',
    'croatie.jpg',
    'mer.jpg',
    'monaco.jpg',
    'ninho.jpg',
    'paris.jpg',
    'rando.jpg',
    'rando2.jpg',
    'sdm2.jpg',
    'split.jpg',
    'starsbourg.jpg',
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
            className="h-100 pointer-events-none"
        >
            {images.map((img, idx) => (
                <SwiperSlide className="pointer-events-none" key={idx}>
                    <img
                        className="h-100 w-fit object-cover rounded-2xl pointer-events-none"
                        src={`/images-mood/${img}`}
                        alt={img}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}