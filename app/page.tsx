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

export default function Page() {
   const device = useDeviceType();

   return (
      <>
         <div
            style={{
               position: "fixed",
               width: "100%",
               height: "100svh",
               zIndex: -1,
            }}>
            <ShaderFx>
               <Playground />
            </ShaderFx>
         </div>

         <div className="absolute pointer-events-none">
            {device === "desktop" && (
               <main className="flex flex-row justify-between items-start w-full h-full p-4 text-white pointer-events-none overflow-y-auto">
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
               <main className="flex flex-row justify-center items-start w-full h-full p-4 text-white pointer-events-none overflow-y-auto">
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
               <main className="flex flex-col w-full p-4 text-white pointer-events-none overflow-y-auto">
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
         </div>
      </>
   );
}