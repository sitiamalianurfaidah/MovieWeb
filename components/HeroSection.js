import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: "700" });

const HeroSection = () => {
    return (
        <section
        id="hero"
        className="relative w-full h-[100vh] flex items-center justify-center text-white overflow-hidden"
        >
        <Image
            src="/hero.jpg" 
            alt="Hero Background"
            fill
            priority
            className="absolute w-full h-full object-cover object-center"
        />

        {/* Overlay konten */}
        <div className="hero-overlay text-white text-center px-4">
            <h1 className={`${cinzel.className} text-7xl md:text-8xl font-extrabold mb-3 leading-tight animate-title`}>
            <span className="inline-block mr-2 text-white-300 animate-word">Cerita</span>
            <span className="inline-block mr-2 text-white-300 animate-word">       </span>
            <span className="inline-block text-white-300 animate-word delay-200">Films</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-100 max-w-2xl mx-auto">
            Saksikan <span className="font-bold">SORE: Istri dari Masa Depan</span>, film terbaru dari Cerita Films. 
            Penuh makna, cinta, dan waktu yang tak terduga.
            </p>
            <a
                href="https://www.tix.id/movie/sore-istri-dari-masa-depan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-300 hover:bg-orange-500 text-white px-6 py-3 rounded-md transition"
                >
                Tonton Sekarang
            </a>

        </div>
        </section>
    );
};

export default HeroSection;
