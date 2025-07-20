import Stars from "./Stars"; // Pastikan path-nya benar!
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const About = () => {
    return (
        <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-800"
        style={{ background: "linear-gradient(to bottom, #d19484, #e8ad9a, #a4929f)" }}
        >
        <Stars count={40} />
        <h2 className="text-6xl md:text-7xl font-extrabold mt-15 mb-4 text-white text-shadow" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Cerita Films
        </h2>
        <p className={`${poppins.className} text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto animate-fade-in`}>

            A film production company based in Jakarta.
            <br />
            Producer <strong>Suryana Paramita</strong> & Director Writer <strong>Yandy Laurens</strong>.
        </p>
        </section>
    );
};

export default About;
