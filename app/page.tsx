import { ShaderFx } from "./ShaderFx";
import { Playground } from "./Playground";

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
            <main className="flex flex-col md:flex-row justify-between items-start w-full h-full p-4 md:p-10 text-white pointer-events-none overflow-y-auto">
               <div className="flex w-1/3 max-w-1/3 flex-col w-full md:w-1/3">
                  <Intro />

                  <Propos />

                  <Technologies />

                  <Git />
               </div>

               <div className="flex w-1/3 flex-col w-full md:w-1/3">
                  <Profile />

                  <Certifications />

                  <Recommandations />

                  <Musique />
               </div>

               <div className="flex w-1/3 flex-col w-full md:w-1/3">
                  <Experience />

                  <Logos />

                  <Formations />
               
                  <Photos />

                  <Map />
               </div>
            </main>
         </div>
      </>
   );
}
