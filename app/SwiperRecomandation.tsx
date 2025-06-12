'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import { IoPerson } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";


export default function SwiperRecomandation() {
    return (
            <Swiper
                effect={'fade'}
                autoplay={{
                    delay: 12500,
                }}
                pagination={{
                clickable: true,
                }}
                speed={500}
                modules={[Pagination, Autoplay]}
                className="h-100%"
            >
                <SwiperSlide>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-4">
                                <div className="rounded-full border p-2 border-border bg-mediumgray" aria-label="Envoyer un email">
                                    <IoPerson/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Margaux B</h3>
                                    <p className="text-sm text-lightgray">Directrice artistique - Marketify</p>
                                </div>
                            </div>
                            <a href="https://www.linkedin.com/in/theo-saly" className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto" aria-label="Envoyer un email">
                                <FaLink />
                            </a>
                        </div>
                        
                        <p className="text-center text-sm relative mb-10">
                            <span className="absolute left-0 top-0 text-5xl font-bold text-white leading-none">“</span>
                            <span className="text-lightgray block mx-6 py-6">
                                J’ai eu la chance de travailler avec Théo pendant son stage en tant que développeur au sein de l'agence Marketify.
                                Il a rapidement pris en main nos outils et a contribué de manière significative aux projets. Théo a une capacité à
                                apprendre vite, à être sérieux, combinée à une attitude proactive, ce qui le rend vraiment prometteur dans le domaine
                                du développement. Il a démontré des compétences techniques solides et une grande force d’adaptation. Je vous le recommande
                                chaleureusement.
                            </span>
                            <span className="absolute right-0 -bottom-6 text-5xl font-bold text-white leading-none">”</span>
                        </p>
                </SwiperSlide>

                <SwiperSlide>
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-4">
                                <div className="rounded-full border p-2 border-border bg-mediumgray" aria-label="Envoyer un email">
                                    <IoPerson/>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Margaux B</h3>
                                    <p className="text-sm text-lightgray">Directrice artistique - Marketify</p>
                                </div>
                            </div>
                            <a href="https://www.linkedin.com/in/theo-saly" className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto" aria-label="Envoyer un email">
                                <FaLink />
                            </a>
                        </div>
                        
                        <p className="text-center text-sm relative">
                            <span className="absolute left-0 top-0 text-5xl font-bold text-white leading-none">“</span>
                            <span className="text-lightgray block mx-6 py-6">
                                J’ai eu la chance de travailler avec Théo pendant son stage en tant que développeur au sein de l'agence Marketify.
                                Il a rapidement pris en main nos outils et a contribué de manière significative aux projets. Théo a une capacité à
                                apprendre vite, à être sérieux, combinée à une attitude proactive, ce qui le rend vraiment prometteur dans le domaine
                                du développement. Il a démontré des compétences techniques solides et une grande force d’adaptation. Je vous le recommande
                                chaleureusement.
                            </span>
                            <span className="absolute right-0 -bottom-6 text-5xl font-bold text-white leading-none">”</span>
                        </p>
                </SwiperSlide>
                    
                

        </Swiper>
    );
}