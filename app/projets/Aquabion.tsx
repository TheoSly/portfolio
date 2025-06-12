import { FaLink } from "react-icons/fa6";

export default function Aquabion() {
return (
<>
    <section
        className="pointer-events-auto group min-w-[92.5vw] md:min-w-[45.6vw] xl:min-w-[30.7vw] h-90 rounded-2xl border border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw] backdrop-blur-md relative overflow-hidden">
        <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/100 group-hover:from-black/70 rounded-2xl z-5 transition-colors duration-700" />

        <div
            className="absolute top-4 left-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white text-sm">
            <p className="text-base whitespace-normal break-words">
                Site vitrine développé et intégré pour l'entreprise Aquabion, marque spécialisée dans les solutions anticalcaires écologiques. Le site propose deux parcours distincts : une version B2B pour les professionnels et une version B2C pour les particuliers. Réalisé avec Bootstrap, en assurant une navigation claire et une présentation adaptée aux deux types de publics.
            </p>
            <hr className="text-white opacity-20 my-2" />
            <div className="flex flex-wrap items-center gap-2 mt-2">
                <a href="https://fr.wordpress.org" target="_blank"
                    className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    PHP
                </a>
                <a href="https://getbootstrap.com" target="_blank"
                    className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    Bootstrap
                </a>
                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank"
                    className="text-sm font-thin rounded-full border border-border py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    JS
                </a>
            </div>
        </div>

        <div className="absolute bottom-6 left-6 z-10">
            <h2 className="text-white text-2xl">Aquabion<span className="text-lightgray">.com</span></h2>
        </div>
        <div className="absolute bottom-6 right-6 z-10">
            <a href="https://aquabion-distribution.com" target="_blank"
                className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                aria-label="Visiter Digitallia.fr">
                <FaLink />
            </a>
        </div>

        <img className="h-full object-cover object-top rounded-2xl w-full absolute top-0 left-0 opacity-80 z-0"
            src="/website-aquabion.png" alt="" />
    </section>
</>
);
}