export default function Certifications() {
return (
<>
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
</>
);
}