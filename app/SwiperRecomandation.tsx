'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


export default function SwiperRecomandation() {
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
                className="h-92"
            >
                <SwiperSlide>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src="/images/people/1.jpg" alt="Théo" className='rounded-full w-16 h-16 object-cover' />
                            <div>
                                <h3 className='text-lg font-semibold'>Margaux B</h3>
                                <p className='text-sm text-lightgray'>Directrice artistique - Marketify</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    
                    <p className='text-sm'>J’ai eu la chance de travailler avec Théo pendant son stage en tant que développeur au sein de l'agence Marketify. Il a rapidement pris en main nos outils et a contribué de manière significative aux projets. Théo à une capacité à apprendre vite, à être sérieux, combinée à une attitude proactive, le rend vraiment prometteur dans le domaine du développement. Il a démontré des compétences techniques solides et une grande force d’adaptation. Je vous le recommande chaleureusement.</p>
                    
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src="/images/people/1.jpg" alt="Théo" className='rounded-full w-16 h-16 object-cover' />
                            <div>
                                <h3 className='text-lg font-semibold'>Margaux B</h3>
                                <p className='text-sm text-lightgray'>Directrice artistique - Marketify</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    
                    <p className='text-sm'>J’ai eu la chance de travailler avec Théo pendant son stage en tant que développeur au sein de l'agence Marketify. Il a rapidement pris en main nos outils et a contribué de manière significative aux projets. Théo à une capacité à apprendre vite, à être sérieux, combinée à une attitude proactive, le rend vraiment prometteur dans le domaine du développement. Il a démontré des compétences techniques solides et une grande force d’adaptation. Je vous le recommande chaleureusement.</p>
                    
                    </SwiperSlide>
                

        </Swiper>
    );
}