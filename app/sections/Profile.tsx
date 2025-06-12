export default function Profile() {
return (
<>
    <section className="bg-mediumgray rounded-2xl border border-border m-4 backdrop-blur-md relative">
        <img
            className="h-80 md:h-auto object-cover rounded-2xl w-full z-10"
            src="/profile-transparent.png"
            alt=""
        />
        <img
            className="h-80 md:h-auto object-cover rounded-2xl w-full absolute top-0 left-0 opacity-70 z-0"
            src="/profile.png"
            alt=""
        />
    </section>
</>
);
}