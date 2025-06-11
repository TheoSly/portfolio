import { ShaderFx } from "./ShaderFx";
import { Playground } from "./Playground";

// Swiper core
import SwiperPhotos from './SwiperPhotos';
import SwiperLogos from './SwiperLogos';


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
               
               <div className="flex w-1/3 flex-col w-full md:w-1/3">
                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">
                     <p className="text-2xl">Product Designer with 13 years of experience, focused on creating functional and user-centered digital products with visually stunning designs.</p>
                     <div className="flex justify-between items-center mt-4">
                        <div className="flex justify-between items-center gap-2">
                           <button className="pointer-events-auto">M</button>
                           <button className="pointer-events-auto">L</button>
                           <button className="pointer-events-auto">M</button>
                        </div>
                        <div>
                           <button className="pointer-events-auto">CV</button>
                        </div>
                     </div>
                  </section>

                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">  
                     <h2 className="text-lg mb-3">À PROPOS DE MOI</h2>
                     <p className="text-base text-lightgray"><span className="text-white">Product</span> Designer with 13 years of experience, focused on creating functional and user-centered digital products with visually stunning designs.</p>
                     <br />
                     <p className="text-base text-lightgray">Product Designer with 13 years of experience, focused on creating functional and user-centered digital products with visually stunning designs.</p>
                     <br />
                     <p className="text-base text-lightgray">Product Designer with 13 years of experience, focused on creating functional and user-centered digital products with visually stunning designs.</p>
                     <br />
                     <img className="w-40 mt-2" src="/signature.png" alt="" />
                  </section>

                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">  
                     <h2 className="text-lg mb-2">TECHNOLOGIES UTILISÉS</h2>
                     <h3 className="text-xs text-lightgray">FRONTEND</h3>
                     <div className="flex flex-wrap gap-1">
                        <img className="w-12" src="html-icon.png" alt="" />
                        <img className="w-12" src="css-icon.png" alt="" />
                        <img className="w-12" src="react-icon.png" alt="" />

                     </div>
                     <hr className="text-border my-2" />
                     <h3 className="text-xs text-lightgray">FRONTEND</h3>
                     <div className="flex flex-wrap gap-1">
                        <img className="w-12" src="html-icon.png" alt="" />
                        <img className="w-12" src="css-icon.png" alt="" />
                        <img className="w-12" src="react-icon.png" alt="" />

                     </div>
                     <hr className="text-border my-2" />
                     <h3 className="text-xs text-lightgray">FRONTEND</h3>
                     <div className="flex flex-wrap gap-1">
                        <img className="w-12" src="html-icon.png" alt="" />
                        <img className="w-12" src="css-icon.png" alt="" />
                        <img className="w-12" src="react-icon.png" alt="" />

                     </div>
                  </section>
               </div>

               <div className="flex w-1/3 flex-col w-full md:w-1/3">
                  <section className="bg-mediumgray rounded-2xl border-1 border-border m-4">
                     <img className="rounded-2xl" src="/profile.png" alt="" />
                  </section>

                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">
                     <h2 className="text-lg">LICENCES ET CERTIFICATIONS</h2>
                     <div className="flex flex-col gap-4">
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2025</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Opquast</h3>
                              <p className="text-lightgray text-sm">Maîtrise règles et langage qualité web.</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2024</p>
                           </div>
                           <div>
                              <h3 className="text-sm">FANSSI - SecNum</h3>
                              <p className="text-lightgray text-sm">Cybersécurité, authentification, Internet, poste.</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2023</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Permis de conduire</h3>
                              <p className="text-lightgray text-sm">Permis B</p>
                           </div>
                        </div>
                     </div>
                  </section>

                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">
                     <h2 className="text-lg mb-3">MUSIQUE FAVORITE</h2>
                     <div className="flex flex-col">
                        <iframe className="pointer-events-auto" src="https://open.spotify.com/embed/track/5ZUIPLoTLJZrPQh2kFZEUM?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="pointer-events-auto" src="https://open.spotify.com/embed/track/5ZUIPLoTLJZrPQh2kFZEUM?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="pointer-events-auto" src="https://open.spotify.com/embed/track/5ZUIPLoTLJZrPQh2kFZEUM?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                     </div>
                  </section>
               </div>

               <div className="flex w-1/3 flex-col w-full md:w-1/3">
                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">
                     <h2 className="text-lg">EXPÉRIENCE</h2>
                     <div className="flex flex-col gap-4">
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2021 - Now</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Founding Product Designer</h3>
                              <p className="text-lightgray text-sm">Basis Theory</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2021 - Now</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Founding Product Designer</h3>
                              <p className="text-lightgray text-sm">Basis Theory</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2021 - Now</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Founding Product Designer</h3>
                              <p className="text-lightgray text-sm">Basis Theory</p>
                           </div>
                        </div>
                     </div>
                  </section>
                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">
                     <h2 className="text-lg">ILS ME FONT CONFIANCE</h2>
                     <SwiperLogos />
                  </section>

                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">
                     <h2 className="text-lg">FORMATIONS</h2>
                     <div className="flex flex-col gap-4">
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">À venir‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </p>
                           </div>
                           <div>
                              <h3 className="text-sm">Expert en développement Full Stack</h3>
                              <p className="text-lightgray text-sm">Ynov Campus - Strasbourg</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2022 - 2025</p>
                           </div>
                           <div>
                              <h3 className="text-sm">BUT MMI - Développement Web</h3>
                              <p className="text-lightgray text-sm">IUT Haguenau - Haguenau</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2019 - 2022</p>
                           </div>
                           <div>
                              <h3 className="text-sm">BAC STI2D - SIN</h3>
                              <p className="text-lightgray text-sm">Lycée Marc Bloch - Bischheim</p>
                           </div>
                        </div>
                     </div>
                  </section>

                  <section className="bg-mediumgray rounded-2xl border-1 border-border m-4">
                     <SwiperPhotos />
                  </section>
                  
               </div>

            </main>
         </div>
      </>
   );
}
