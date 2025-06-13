export default function Formations() {
return (
<>
    <section className="xl:min-h-68 bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-border m-4 md:m-4 xl:m-3">
        <h2 className="text-lg">FORMATIONS</h2>
        <div className="flex flex-col gap-4">
            <div className="flex gap-10 mt-4">
                <div>
                    <p className="text-lightgray text-sm">À venir‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </p>
                </div>
                <div>
                    <h3 className="text-sm">Mastère en développement Full Stack</h3>
                    <p className="text-lightgray text-sm">Ynov Campus - Strasbourg</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
                <div>
                    <p className="text-lightgray text-sm">2022 - 2025</p>
                </div>
                <div>
                    <h3 className="text-sm">BUT MMI - Développement Web</h3>
                    <p className="text-lightgray text-sm">IUT Haguenau - Haguenau</p>
                </div>
            </div>
            <hr className="text-border"/>
            <div className="flex gap-10">
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
</>
);
}