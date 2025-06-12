export default function Certifications() {
return (
<>
    <section className="bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <h2 className="text-lg">LICENCES ET CERTIFICATIONS</h2>
        <div className="flex flex-col gap-4">
            <div className="flex gap-10 mt-4">
                <div>
                    <p className="text-lightgray text-sm">2025</p>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <img className="w-4" src="emojy-globe.png" alt="" />
                        <h3 className="text-sm">Opquast</h3>
                    </div>
                    <p className="text-lightgray text-sm">Maîtrise règles et langage qualité web.</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
                <div>
                    <p className="text-lightgray text-sm">2024</p>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <img className="w-4" src="emojy-lock.png" alt="" />
                        <h3 className="text-sm">SecNum</h3>
                    </div>
                    <p className="text-lightgray text-sm">Cybersécurité, authentification, Internet, poste.</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
                <div>
                    <p className="text-lightgray text-sm">2023</p>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <img className="w-4" src="emojy-car.png" alt="" />
                        <h3 className="text-sm">Permis de conduire</h3>
                    </div>
                    <p className="text-lightgray text-sm">Permis B</p>
                </div>
            </div>
        </div>
    </section>
</>
);
}