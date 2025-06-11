import { ShaderFx } from "./ShaderFx";
import { Playground } from "./Playground";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';

import { FaLinkedinIn } from "react-icons/fa";

// Swiper core
import SwiperPhotos from './SwiperPhotos';
import SwiperLogos from './SwiperLogos';
import SwiperRecomandation from './SwiperRecomandation';


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
                     <p className="text-2xl">Développeur web fullstack basé à Strasbourg, avec 4 ans d’expérience, spécialisé dans la conception de sites web sur mesure, alliant performance, esthétique et technologies modernes.</p>
                     <div className="flex justify-between items-center mt-4">
                        <div className="flex justify-between items-center gap-2">
                           <a href="mailto:theo.saly@example.com" className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors pointer-events-auto" aria-label="Envoyer un email">
                              <FontAwesomeIcon icon={faEnvelope} className="w-3" />
                           </a>
                           <a href="mailto:theo.saly@example.com" className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors pointer-events-auto" aria-label="Envoyer un email">
                              <FontAwesomeIcon icon={faPhone} className="w-3" />
                           </a>
                           <a href="mailto:theo.saly@example.com" className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors pointer-events-auto" aria-label="Envoyer un email">
                              <FontAwesomeIcon icon={faLinkedin} className="w-3" />
                           </a>
                           <a href="mailto:theo.saly@example.com" className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors pointer-events-auto" aria-label="Envoyer un email">
                              <FontAwesomeIcon icon={faM} className="w-3" />
                           </a>
                        
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
                     <p className="text-base text-lightgray">
                     Je m’appelle 
                     <span className="text-white"> Théo</span>, âgé de 
                     <span className="text-white"> 20 ans</span> basé à 
                     <span className="text-white"> Strasbourg</span>. Passionné par le 
                     <span className="text-white"> web</span> et les 
                     <span className="text-white"> nouvelles technologies</span>, j’ai eu l’opportunité de travailler sur de nombreux 
                     <span className="text-white"> projets variés</span> dans des 
                     <span className="text-white"> secteurs divers</span>. Mon expérience m’a permis de collaborer avec des 
                     <span className="text-white"> entreprises</span> de tailles différentes, allant des 
                     <span className="text-white"> startups</span> aux 
                     <span className="text-white"> grandes structures</span>, pour proposer des 
                     <span className="text-white"> solutions sur mesure</span> et 
                     <span className="text-white"> efficaces</span>.
                     </p>
                     <br />
                     <p className="text-base text-lightgray">
                     Toujours 
                     <span className="text-white"> souriant</span>, 
                     <span className="text-white"> motivé</span> et 
                     <span className="text-white"> curieux</span>, je combine 
                     <span className="text-white"> créativité</span> et 
                     <span className="text-white"> rigueur</span> pour relever chaque défi. Mon 
                     <span className="text-white"> organisation</span> et mon 
                     <span className="text-white"> dynamisme</span> me permettent de m’adapter rapidement aux besoins des projets. Mon objectif est de continuer à évoluer dans le domaine du 
                     <span className="text-white"> développement web</span>, en mettant mes compétences au service d’initiatives 
                     <span className="text-white"> innovantes</span> et 
                     <span className="text-white"> inspirantes</span>.
                     </p>
                     <br />
                     <p className="text-base text-lightgray">
                     Je suis toujours ouvert à de nouvelles 
                     <span className="text-white"> opportunités</span> et 
                     <span className="text-white"> collaborations</span>. N'hésitez pas à me 
                     <span className="text-white"> contacter</span> !
                     </p>
                     <br />
                     <img className="w-40 mt-2" src="/signature.png" alt="" />
                  </section>

                  <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4">  
                     <h2 className="text-lg mb-2">TECHNOLOGIES UTILISÉS</h2>
                     <h3 className="text-xs text-lightgray">FRONTEND</h3>
                     <div className="flex flex-wrap gap-1">
                        <img className="w-12" src="html-icon.png" alt="" />
                        <img className="w-12" src="css-icon.png" alt="" />
                        <img className="w-12" src="tailwind-icon.png" alt="" />
                        <img className="w-12" src="bootstrap-icon.png" alt="" />
                        <img className="w-12" src="react-icon.png" alt="" />
                        <img className="w-12" src="nextjs-icon.png" alt="" />
                        <img className="w-12" src="vuejs-icon.png" alt="" />
                        <img className="w-12" src="sass-icon.png" alt="" />

                     </div>
                     <hr className="text-border my-2" />
                     <h3 className="text-xs text-lightgray">BACKEND</h3>
                     <div className="flex flex-wrap gap-1">
                        <img className="w-12" src="php-icon.png" alt="" />
                        <img className="w-12" src="symfony-icon.png" alt="" />
                        <img className="w-12" src="mysql-icon.png" alt="" />
                        <img className="w-12" src="sqlite-icon.png" alt="" />

                     </div>
                     <hr className="text-border my-2" />
                     <h3 className="text-xs text-lightgray">OUTILS DE DÉVELOPPEMENT</h3>
                     <div className="flex flex-wrap gap-1">
                        <img className="w-12" src="vscode-icon.png" alt="" />
                        <img className="w-12" src="wordpress-icon.png" alt="" />
                        <img className="w-12" src="elementor-icon.png" alt="" />
                        <img className="w-12" src="phpbyadmin-icon.png" alt="" />
                        <img className="w-12" src="git-icon.png" alt="" />
                        <img className="w-12" src="github-icon.png" alt="" />
                        <img className="w-12" src="gitlab-icon.png" alt="" />
                        <img className="w-12" src="apache-icon.png" alt="" />
                        <img className="w-12" src="trello-icon.png" alt="" />
                        <img className="w-12" src="miro-icon.png" alt="" />

                     </div>
                     <hr className="text-border my-2" />
                     <h3 className="text-xs text-lightgray">DESIGN</h3>
                     <div className="flex flex-wrap gap-1">
                        <img className="w-12" src="figma-icon.png" alt="" />
                        <img className="w-12" src="photoshop-icon.png" alt="" />
                        <img className="w-12" src="illustrator-icon.png" alt="" />
                        <img className="w-12" src="aftereffect-icon.png" alt="" />
                        <img className="w-12" src="davinci-icon.png" alt="" />
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
                              <h3 className="text-sm">SecNum</h3>
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
                     <SwiperRecomandation />
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
                     <h2 className="text-lg">EXPÉRIENCES</h2>
                     <div className="flex flex-col gap-4">
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2024 - Now</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Développeur Back - SEW Usocome</h3>
                              <p className="text-lightgray text-sm">Contact en alternance - Haguenau</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2024 - Now</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Développeur Web Indépendant - Salink</h3>
                              <p className="text-lightgray text-sm">Freelance - Strasbourg</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2023 - Now</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Conseiller De Vente Prêt-à-Porter - Levi's</h3>
                              <p className="text-lightgray text-sm">CDI - Vendenheim</p>
                           </div>
                        </div>
                        <div className="flex gap-10 mt-4">
                           <div>
                              <p className="text-lightgray text-sm">2024 - 2024</p>
                           </div>
                           <div>
                              <h3 className="text-sm">Développeur Front - Marketify</h3>
                              <p className="text-lightgray text-sm">Stage - Gries</p>
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
