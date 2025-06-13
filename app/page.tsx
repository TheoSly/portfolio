"use client";

import { ShaderFx } from "./Background/ShaderFx";
import { Playground } from "./Background/Playground";
import { useDeviceType } from "./hooks/useDeviceType"
import { motion } from "framer-motion";

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

// Components Projets
import Digitallia from "./projets/Digitallia";
import Meteor from "./projets/Meteor";
import Quantium from "./projets/Quantium";
import Salink from "./projets/Salink";
import Backrooms from "./projets/Backrooms";
import Aquabion from "./projets/Aquabion";
import Cuxdesign from "./projets/Cuxdesign";
import Nathanmaurer from "./projets/Nathanmaurer";
import Theosaly from "./projets/Theosaly";


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
    <Playground/>
  </ShaderFx>
</div>

   
   
   

   
   {device === "desktop" && (
      <>
         <div className="flex flex-row justify-between items-start w-full h-full text-white pointer-events-none overflow-y-auto overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pt-[2vw] md:pt-[1.5vw] xl:pt-[1vw]">
            <div className="flex w-1/3 flex-col">
                  <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }}>
                     <Intro />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}>
                     <Propos />
                  </motion.div>
            </div>

            <div className="flex w-1/3 flex-col">
               <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                     <Profile />
               </motion.div>
               <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                     <Recommandations />
               </motion.div>
            </div>

            <div className="flex w-1/3 flex-col">
               <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                     <Experience />
               </motion.div>
               <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.75 }}>
                     <Logos />
               </motion.div>
               <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }}>
                     <Formations />
               </motion.div>
            </div>
         </div>

         <div className="w-full px-[2vw] md:px-[1.5vw] xl:px-[1vw] overflow-x-auto whitespace-nowrap">
            <div className="flex flex-row w-max w-[100vw]">
                  <Digitallia/>
                  <Meteor/>
                  <Quantium/>
                  <Salink/>
                  <Backrooms/>
                  <Aquabion/>
                  <Cuxdesign/>
                  <Nathanmaurer/>
                  <Theosaly/>
            </div>
         </div>

         <div className="flex flex-row justify-between items-start w-full h-full text-white pointer-events-none overflow-y-auto overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pb-[2vw] md:pb-[1.5vw] xl:pb-[1vw]">
            <div className="flex w-1/3 flex-col">
               <Technologies/>
               <Photos/>
            </div>

            <div className="flex w-1/3 flex-col">
               <Certifications/>
               <Musique/>
            </div>

            <div className="flex w-1/3 flex-col">
               <Map/>
               <Git/>
            </div>
         </div>
      </>
   )}

   {device === "tablet" && (
      <main
         className="flex flex-row justify-center items-start w-full h-full text-white pointer-events-none overflow-y-auto overflow-x-hidden p-[2vw] md:p-[1.5vw] xl:p-[1vw]">
         <div className="flex flex-col w-1/2">
            <Intro/>
            <Propos/>
            <Technologies/>
            <Git/>
            <Profile/>
            <Certifications/>
         </div>

         <div className="flex flex-col w-1/2">
            <Recommandations/>
            <Musique/>
            <Experience/>
            <Logos/>
            <Formations/>
            <Photos/>
            <Map/>
         </div>
      </main>
   )}

   {device === "mobile" && (
      <main className="flex flex-col w-full text-white pointer-events-none overflow-y-auto overflow-x-hidden p-[2vw] md:p-[1.5vw] xl:p-[1vw]">
         <Intro/>
         <Propos/>
         <Technologies/>
         <Git/>
         <Profile/>
         <Certifications/>
         <Recommandations/>
         <Musique/>
         <Experience/>
         <Logos/>
         <Formations/>
         <Photos/>
         <Map/>

         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }}>
               <Intro/>
         </motion.div>
      </main>
   )}
</>
);
}