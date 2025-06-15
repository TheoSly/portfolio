import { FaLinkedinIn } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { SiMalt } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Intro() {
return (
<>
    <section className="md:min-h-70 xl:min-h-62 flex flex-col justify-between bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <p className="text-2xl">Je m&apos;appelle Théo, développeur web fullstack à Strasbourg, spécialisé depuis 5 ans dans la création sur mesure de sites et d&apos;applications.</p>
        <div className="flex justify-between items-center mt-4">
            <div className="flex justify-between items-center gap-2">
                <a href="mailto:contact@theo-saly.fr"
                    className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                    aria-label="Envoyer un email">
                    <FaEnvelope/>
                </a>
                <a href="tel:+33771874197"
                    className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                    aria-label="Envoyer un email">
                    <FaPhone/>
                </a>
                <a href="https://www.linkedin.com/in/theo-saly" target="_bank"
                    className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                    aria-label="Envoyer un email">
                    <FaLinkedinIn/>
                </a>
                <a href="https://www.malt.fr/profile/theosaly" target="_bank"
                    className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                    aria-label="Envoyer un email">
                    <SiMalt/>
                </a>
                <a href="https://github.com/TheoSly" target="_bank"
                    className="rounded-full border border-border p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                    aria-label="Envoyer un email">
                    <FaGithub/>
                </a>

            </div>
            <div className="flex justify-between items-center gap-2">
                <a href="download/cv-theo-saly.pdf"
                    className="rounded-full border border-border py-2 px-4 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto flex items-center justify-center gap-2"
                    aria-label="Envoyer un email">
                    <FaDownload/>
                    <p className="text-sm">CV</p>
                </a>
            </div>
        </div>
    </section>
</>
);
}