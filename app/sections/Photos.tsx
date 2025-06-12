import SwiperPhotos from '../SwiperPhotos';

export default function Photos() {
return (
<>
    <section className="bg-mediumgray rounded-2xl border-1 border-border pointer-events-none m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <SwiperPhotos />
    </section>
</>
);
}