import SwiperRecommandation from '../sliders/SwiperRecommandation';

export default function Recommandations() {
return (
<>
    <section className="md:min-h-111 xl:min-h-102 bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 pb-0 rounded-2xl border-1 border-border m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <h2 className="text-lg mb-3">RECOMMANDATIONS</h2>
            <SwiperRecommandation/>
    </section>
</>
);
}