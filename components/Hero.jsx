import Image from "next/image";
import { Cinzel, Poppins } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative w-full h-[100vh] flex items-center justify-center mt-18 text-white overflow-hidden"
        >
            <Image
                src="/hero.jpg"
                alt="Hero Background"
                fill
                priority
                className="absolute w-full h-full object-cover object-center"
            />

            <div className="hero-overlay text-white text-center px-4 z-10">
                {/* Judul Animasi */}
                <h1
                    className={`${cinzel.className} text-7xl md:text-8xl font-extrabold mt-0 mb-2 leading-tight animate-title text-shadow`}
                >
                    <span className="inline-block mr-3 animate-slide-left">Cerita</span>
                    <span className="inline-block animate-slide-right">Films</span>
                </h1>

                {/* Deskripsi muncul setelah judul */}
                <p className={`${poppins.className} text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto animate-fade-in`}>
                    Watch <span className="font-semibold">SORE: Istri dari Masa Depan</span>, the film from Cerita Films. <br />
                    A story full of meaning, love, and the unexpected passage of time.
                </p>

                {/* Tombol lebih besar dan muncul terakhir */}
                <a
                    href="https://www.tix.id/movie/sore-istri-dari-masa-depan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${poppins.className} bg-[#3b1e47] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#5a2e68] transition-all duration-300 animate-fade-in-late`}
                >
                    Watch Now
                </a>
            </div>
        </section>
    );
};

export default Hero;
