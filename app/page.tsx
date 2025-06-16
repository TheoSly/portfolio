"use client";

import { ShaderFx } from "./background/ShaderFx";
import { Playground } from "./background/Playground";
import { useDeviceType } from "./hooks/useDeviceType"
import { motion } from "framer-motion";
import React from "react";

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
import Contact from "./sections/Contact";

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

const [hovered, setHovered] = React.useState(false);
const [visible, setVisible] = React.useState(true);

React.useEffect(() => {
  if (hovered) {
    const timeout = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timeout);
  }
}, [hovered]);

return (
<>
   {device === "desktop" && (
   <>
      <div className="pointer-events-none z-0" style={{
         position: "fixed",
         width: "100vw",
         height: "100svh",
      }}>
         <ShaderFx>
            <Playground />
         </ShaderFx>
      </div>
      <div
         className="flex flex-row justify-between items-start w-full h-full text-white pointer-events-none overflow-y-auto overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pt-[2vw] md:pt-[1.5vw] xl:pt-[1vw]">
         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }}>
               <Intro />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.45 }}>
               <Propos />
            </motion.div>
         </div>

         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.15 }}>
               <Profile />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}>
               <Recommandations />
            </motion.div>
         </div>

         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}>
               <Experience />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.75 }}>
               <Logos />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.9 }}>
               <Formations />
            </motion.div>
         </div>
      </div>

      <div className="relative w-full px-[2vw] md:px-[1.5vw] xl:px-[1vw] overflow-x-auto whitespace-nowrap">
         {visible && (
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 1.5 }}
             viewport={{ once: true, amount: 0.1 }}
             style={{ position: "absolute", zIndex: 50, width: "100%", height: "100%" }}
           >
             <div
               className="bg-gradient-to-t from-black/10 via-black/60 to-black/10 w-full h-full flex items-center justify-center transition-opacity duration-1000 cursor-pointer"
               onMouseEnter={() => setHovered(true)}
             >
               <div className="px-3 py-1 rounded text-center flex items-center gap-4">
                 <div className="chevrons">
                   <span>&gt;</span>
                   <span>&gt;</span>
                   <span>&gt;</span>
                 </div>
                 <span className="text-xl text-white brightness">Faites défiler pour découvrir mes projets</span>
                 <div className="chevrons">
                   <span>&gt;</span>
                   <span>&gt;</span>
                   <span>&gt;</span>
                 </div>
               </div>
             </div>
           </motion.div>
         )}
         <div className="flex flex-row w-max w-[100vw]  z-10">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true, amount: 0.1 }}>
               <Digitallia />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 , delay: 0.15 }} viewport={{ once: true, amount: 0.1 }}>
               <Meteor />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true, amount: 0.1 }}>
               <Quantium />
            </motion.div>

            <Salink />
            <Backrooms />
            <Aquabion />
            <Cuxdesign />
            <Nathanmaurer />
            <Theosaly />
         </div>
      </div>

      <div
         className="flex flex-row justify-between items-start w-full h-full text-white pointer-events-none overflow-y-auto overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pb-[2vw] md:pb-[1.5vw] xl:pb-[1vw]">
         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Technologies />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Photos />
            </motion.div>
         </div>

         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Certifications />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Musique />
            </motion.div>
         </div>

         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Contact />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Map />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Git />
            </motion.div>
         </div>
      </div>
   </>
   )}

   {device === "tablet" && (
   <>
      <div className="gradient-bg z-0">
         <div className="gradients-container z-0">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
         </div>
      </div>

      <div
         className="flex flex-row justify-center items-start w-full h-full text-white pointer-events-auto overflow-y-auto overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pt-[2vw] md:pt-[1.5vw] xl:pt-[1vw]">
         <div className="flex flex-col w-1/2">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }}>
               <Profile />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}>
               <Intro />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}>
               <Propos />
            </motion.div>
         </div>

         <div className="flex flex-col w-1/2">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.15 }}>
               <Experience />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.45 }}>
               <Logos />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.75 }}>
               <Formations />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.9 }}>
               <Recommandations />
            </motion.div>
         </div>
      </div>

      <div className="w-full px-[2vw] md:px-[1.5vw] xl:px-[1vw] overflow-x-auto whitespace-nowrap">
         <div className="flex flex-row w-max w-[100vw]">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true, amount: 0.1 }}>
               <Digitallia />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 , delay: 0.15 }} viewport={{ once: true, amount: 0.1 }}>
               <Meteor />
            </motion.div>

            <Quantium />
            <Salink />
            <Backrooms />
            <Aquabion />
            <Cuxdesign />
            <Nathanmaurer />
            <Theosaly />
         </div>
      </div>

      <div
         className="flex flex-row justify-center items-start w-full h-full text-white pointer-events-auto overflow-y-auto overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pb-[2vw] md:pb-[1.5vw] xl:pb-[1vw]">
         <div className="flex flex-col w-1/2">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Technologies />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Certifications />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Git />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Photos />
            </motion.div>
         </div>

         <div className="flex flex-col w-1/2">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Contact />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Map />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Musique />
            </motion.div>

         </div>
      </div>
   </>
   )}

   {device === "mobile" && (
   <>
      
      <div className="gradient-bg z-0">
         <div className="gradients-container z-0">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
         </div>
      </div>
      <div
         className="flex flex-col w-full text-white pointer-events-auto overflow-y-hidden overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pt-[2vw] md:pt-[1.5vw] xl:pt-[1vw]">
         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true, amount: 0 }}>
            <Intro />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true, amount: 0 }}>
            <Profile />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true, amount: 0 }}>
            <Propos />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Experience />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Logos />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Formations />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Recommandations />
         </motion.div>
      </div>

      <div className="relative w-full px-[2vw] md:px-[1.5vw] xl:px-[1vw] overflow-x-auto whitespace-nowrap">
         {visible && (
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 1.5 }}
               viewport={{ once: true, amount: 0.1 }}
               style={{ position: "absolute", inset: 0, zIndex: 50, width: "100vw", height: "100%" }}
               onAnimationComplete={() => {
                  if (hovered) setVisible(false);
               }}
            >
               <div
                  className="bg-gradient-to-t from-black/10 via-black/60 to-black/10 w-full h-full flex items-center justify-center transition-opacity duration-1000 cursor-pointer"
                  onMouseEnter={() => setHovered(true)}
               >
                  <div className="px-3 py-1 rounded text-center flex items-center gap-4">
                     <span className="text-sm text-white brightness">Faites défiler pour découvrir mes projets</span>
                     <div className="chevrons">
                        <span>&gt;</span>
                        <span>&gt;</span>
                        <span>&gt;</span>
                     </div>
                  </div>
               </div>
            </motion.div>
         )}
         
         <div className="flex flex-row w-max w-[100vw]">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Digitallia />
            </motion.div>

            <Meteor />
            <Quantium />
            <Salink />
            <Backrooms />
            <Aquabion />
            <Cuxdesign />
            <Nathanmaurer />
            <Theosaly />
         </div>
      </div>

      <div
         className="flex flex-col w-full text-white pointer-events-auto overflow-y-hidden overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pb-[2vw] md:pb-[1.5vw] xl:pb-[1vw]">
         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Technologies />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Contact />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Map />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Certifications />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Git />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Musique />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Photos />
         </motion.div>
      </div>
   </>
   )}
</>
);
}