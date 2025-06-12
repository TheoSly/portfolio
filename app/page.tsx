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

// Components Projets
import Digitallia from "./projets/Digitallia";
import Meteor from "./projets/Meteor";
import Quantium from "./projets/Quantium";
import Salink from "./projets/Salink";
import Backrooms from "./projets/Backrooms";
import Aquabion from "./projets/Aquabion";
import Cuxdesign from "./projets/Cuxdesign";


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

   
   
   <div className="w-full p-[2vw] md:p-[1.5vw] xl:p-[1vw] overflow-x-auto whitespace-nowrap">
      <div className="flex flex-row w-max w-[100vw]">
            <Digitallia />
            <Meteor />
            <Quantium />
            <Salink />
            <Backrooms />
            <Aquabion />
            <Cuxdesign />

            
      </div>
   </div>

   
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