import { FaLink } from "react-icons/fa6";

export default function Quantium() {
return (
<>
    <section
        className="pointer-events-auto group min-w-[92.5vw] md:min-w-[45.6vw] xl:min-w-[30.7vw] h-90 rounded-2xl border border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw] backdrop-blur-md relative overflow-hidden">
        <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/100 group-hover:from-black/70 rounded-2xl z-5 transition-colors duration-700" />

        <div
            className="absolute top-4 left-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white text-sm">
            <p className="text-base whitespace-normal break-words">
                Jeu RPG développé en freelance en JavaScript avec p5.js, inspiré des jeux Pokémon Game Boy/DS. Exploration 2D avec multi-cartes, combats au tour par tour, et gestion des collisions. Le choix de p5.js permet une liberté totale sur le gameplay et la programmation. Graphismes pixel art minimalistes, cartes créées avec Tiled et exportées en JSON.
            </p>
            <hr className="text-white opacity-20 my-2" />
            <div className="flex flex-wrap items-center gap-2 mt-2">
                <a href="https://p5js.org" target="_blank"
                    className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    p5.js
                </a>
                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                    className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    JS
                </a>
                <a href="https://www.mapeditor.org" target="_blank"
                    className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    Tiled
                </a>
                <a href="https://json.org/json-fr" target="_blank"
                    className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    Json
                </a>
                <div
                    className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    Design
                </div>
            </div>
        </div>

        <div className="absolute bottom-6 left-6 z-10">
            <h2 className="text-white text-2xl">Quantium<span className="text-lightgray">.app</span></h2>
        </div>
        <div className="absolute bottom-6 right-6 z-10">
            <a href="#" target="_blank"
                className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                aria-label="Visiter Digitallia.fr">
                <FaLink />
            </a>
        </div>

        <img className="h-full object-cover object-top rounded-2xl w-full absolute top-0 left-0 opacity-80 z-0"
            src="/website-quantium.png" alt="" />
    </section>
</>
);
}