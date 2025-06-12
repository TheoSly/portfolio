"use client";

import { ShaderFx } from "./ShaderFx";
import { Playground } from "./Playground";
import { useDeviceType } from "./hooks/useDeviceType"

// Components Section
import Intro from "./sections/Intro";
import Propos from "./sections/Propos";
import Technologies from "./sections/Technologies";
import Git from "./sections/Git";
import Profile from "./sections/Profile";
import Certifications from "./sections/Certifications";
import Recommandations from "./sections/Recommandations";
import Musique from "./sections/Musique";
import Experience from "./sections/Experience";
import Logos from "./sections/Logos";
import Formations from "./sections/Formations";
import Photos from "./sections/Photos";
import Map from "./sections/Map";


import { FaLink } from "react-icons/fa6";


export default function Page() {
const device = useDeviceType();

return (
<>
   <div
  className="pointer-events-none z-0"
  style={{
    position: "fixed",
    width: "100vw",
    height: "100svh",
  }}
>
  <ShaderFx>
    <Playground />
  </ShaderFx>
</div>

   <div className="absolute pointer-events-none z-0"></div>
   {/* Horizontal scrollable section */}
   <div className="w-full m-[2vw] md:m-[1.5vw] xl:m-[1vw] overflow-x-auto whitespace-nowrap">
      <div className="flex flex-row w-max w-[100vw]">
            <section
               className="pointer-events-none group min-w-[98vw] md:min-w-[48vw] xl:min-w-[31.4vw] h-80 rounded-2xl border border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw] backdrop-blur-md relative overflow-hidden">
               <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/70 group-hover:from-black/70 group-hover:to-black/100 rounded-2xl z-5 transition-colors duration-700" />

               <div
                  className="absolute top-4 left-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white text-sm">
                  <p className="text-base">Site vitrine développé et intégré pour l’agence Digitallia, spécialisée dans le
                     développement d’IA. Réalisé sous WordPress avec Elementor Pro, et enrichi de nombreuses animations
                     interactives via GSAP, pour une expérience utilisateur fluide et moderne.</p>
                  <hr className="text-white opacity-20 my-2" />
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                     <a href="https://fr.wordpress.org" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Wordpress
                     </a>
                     <a href="https://elementor.com/fr/pro/" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Elementor Pro
                     </a>
                     <a href="https://gsap.com" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        GSAP
                     </a>
                  </div>
               </div>

               <div className="absolute bottom-6 left-6 z-10">
                  <h2 className="text-white text-2xl">Digitallia<span className="text-lightgray">.fr</span></h2>
               </div>
               <div className="absolute bottom-6 right-6 z-10">
                  <a href="https://digitallia.fr" target="_blank"
                     className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                     aria-label="Visiter Digitallia.fr">
                     <FaLink />
                  </a>
               </div>

               <img className="h-full object-cover object-top rounded-2xl w-full absolute top-0 left-0 opacity-80 z-0"
                  src="/website-digitallia.png" alt="" />
            </section>

            <section
               className="pointer-events-auto group min-w-[100vw] md:min-w-[50vw] xl:min-w-[33.3333vw] h-80 rounded-2xl border border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw] backdrop-blur-md relative overflow-hidden">
               <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/70 group-hover:from-black/70 group-hover:to-black/100 rounded-2xl z-5 transition-colors duration-700" />

               <div
                  className="absolute top-4 left-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white text-sm">
                  <p className="text-base">Site vitrine développé et intégré pour l’agence Digitallia, spécialisée dans le
                     développement d’IA. Réalisé sous WordPress avec Elementor Pro, et enrichi de nombreuses animations
                     interactives via GSAP, pour une expérience utilisateur fluide et moderne.</p>
                  <hr className="text-white opacity-20 my-2" />
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                     <a href="https://fr.wordpress.org" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Wordpress
                     </a>
                     <a href="https://elementor.com/fr/pro/" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Elementor Pro
                     </a>
                     <a href="https://gsap.com" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        GSAP
                     </a>
                  </div>
               </div>

               <div className="absolute bottom-6 left-6 z-10">
                  <h2 className="text-white text-2xl">Digitallia<span className="text-lightgray">.fr</span></h2>
               </div>
               <div className="absolute bottom-6 right-6 z-10">
                  <a href="https://digitallia.fr" target="_blank"
                     className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                     aria-label="Visiter Digitallia.fr">
                     <FaLink />
                  </a>
               </div>

               <img className="h-full object-cover object-top rounded-2xl w-full absolute top-0 left-0 opacity-80 z-0"
                  src="/website-digitallia.png" alt="" />
            </section>

            <section
               className="pointer-events-auto group min-w-[100vw] md:min-w-[50vw] xl:min-w-[33.3333vw] h-80 rounded-2xl border border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw] backdrop-blur-md relative overflow-hidden">
               <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/70 group-hover:from-black/70 group-hover:to-black/100 rounded-2xl z-5 transition-colors duration-700" />

               <div
                  className="absolute top-4 left-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white text-sm">
                  <p className="text-base">Site vitrine développé et intégré pour l’agence Digitallia, spécialisée dans le
                     développement d’IA. Réalisé sous WordPress avec Elementor Pro, et enrichi de nombreuses animations
                     interactives via GSAP, pour une expérience utilisateur fluide et moderne.</p>
                  <hr className="text-white opacity-20 my-2" />
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                     <a href="https://fr.wordpress.org" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Wordpress
                     </a>
                     <a href="https://elementor.com/fr/pro/" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Elementor Pro
                     </a>
                     <a href="https://gsap.com" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        GSAP
                     </a>
                  </div>
               </div>

               <div className="absolute bottom-6 left-6 z-10">
                  <h2 className="text-white text-2xl">Digitallia<span className="text-lightgray">.fr</span></h2>
               </div>
               <div className="absolute bottom-6 right-6 z-10">
                  <a href="https://digitallia.fr" target="_blank"
                     className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                     aria-label="Visiter Digitallia.fr">
                     <FaLink />
                  </a>
               </div>

               <img className="h-full object-cover object-top rounded-2xl w-full absolute top-0 left-0 opacity-80 z-0"
                  src="/website-digitallia.png" alt="" />
            </section>

            <section
               className="pointer-events-auto group min-w-[33.3333vw] h-80 rounded-2xl border border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw] backdrop-blur-md relative overflow-hidden">
               <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/70 group-hover:from-black/70 group-hover:to-black/100 rounded-2xl z-5 transition-colors duration-700" />

               <div
                  className="absolute top-4 left-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white text-sm">
                  <p className="text-base">Site vitrine développé et intégré pour l’agence Digitallia, spécialisée dans le
                     développement d’IA. Réalisé sous WordPress avec Elementor Pro, et enrichi de nombreuses animations
                     interactives via GSAP, pour une expérience utilisateur fluide et moderne.</p>
                  <hr className="text-white opacity-20 my-2" />
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                     <a href="https://fr.wordpress.org" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Wordpress
                     </a>
                     <a href="https://elementor.com/fr/pro/" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Elementor Pro
                     </a>
                     <a href="https://gsap.com" target="_blank"
                        className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        GSAP
                     </a>
                  </div>
               </div>

               <div className="absolute bottom-6 left-6 z-10">
                  <h2 className="text-white text-2xl">Digitallia<span className="text-lightgray">.fr</span></h2>
               </div>
               <div className="absolute bottom-6 right-6 z-10">
                  <a href="https://digitallia.fr" target="_blank"
                     className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                     aria-label="Visiter Digitallia.fr">
                     <FaLink />
                  </a>
               </div>

               <img className="h-full object-cover object-top rounded-2xl w-full absolute top-0 left-0 opacity-80 z-0"
                  src="/website-digitallia.png" alt="" />
            </section>
      </div>
   </div>

   {/* Main content blocks */}
   {device === "desktop" && (
      <main
         className="flex flex-row justify-between items-start w-full h-full text-white pointer-events-none overflow-y-auto overflow-x-hidden p-[2vw] md:p-[1.5vw] xl:p-[1vw]">
         <div className="flex w-1/3 flex-col">
            <Intro />
            <Propos />
            <Technologies />
            <Git />
         </div>

         <div className="flex w-1/3 flex-col">
            <Profile />
            <Certifications />
            <Recommandations />
            <Musique />
         </div>

         <div className="flex w-1/3 flex-col">
            <Experience />
            <Logos />
            <Formations />
            <Photos />
            <Map />
         </div>
      </main>
   )}

   {device === "tablet" && (
      <main
         className="flex flex-row justify-center items-start w-full h-full text-white pointer-events-none overflow-y-auto overflow-x-hidden p-[2vw] md:p-[1.5vw] xl:p-[1vw]">
         <div className="flex flex-col w-1/2">
            <Intro />
            <Propos />
            <Technologies />
            <Git />
            <Profile />
            <Certifications />
         </div>

         <div className="flex flex-col w-1/2">
            <Recommandations />
            <Musique />
            <Experience />
            <Logos />
            <Formations />
            <Photos />
            <Map />
         </div>
      </main>
   )}

   {device === "mobile" && (
      <main className="flex flex-col w-full text-white pointer-events-none overflow-y-auto overflow-x-hidden p-[2vw] md:p-[1.5vw] xl:p-[1vw]">
         <Intro />
         <Propos />
         <Technologies />
         <Git />
         <Profile />
         <Certifications />
         <Recommandations />
         <Musique />
         <Experience />
         <Logos />
         <Formations />
         <Photos />
         <Map />
      </main>
   )}
</>
);
}