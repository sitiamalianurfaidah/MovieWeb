import { FaStar } from "react-icons/fa";
import Stars from "./Stars";

const testimonials = [
    {
        name: "Alya",
        rating: 5,
        comment: "Game-nya seru banget! Visualnya cantik banget, tema senjanya calming.",
    },
    {
        name: "Raka",
        rating: 4,
        comment: "Sederhana tapi bikin ketagihan! UI/UX-nya rapi banget.",
    },
    {
        name: "Nadya",
        rating: 5,
        comment: "Suka banget animasi dan warnanya. Bikin betah main lama-lama!",
    },
    {
        name: "Farhan",
        rating: 5,
        comment: "Gameplay simple tapi satisfying! Smooth banget respons tombolnya.",
    },
    {
        name: "Intan",
        rating: 4,
        comment: "Temanya gemes banget! Cocok buat healing sejenak 🧡",
    },
    {
        name: "Dimas",
        rating: 5,
        comment: "Bikin nostalgia, tapi tampilannya modern. Keren banget idenya!",
    },
    {
        name: "Citra",
        rating: 4,
        comment: "Animasi & efeknya lembut banget, sesuai mood senja 🌆",
    },
    {
        name: "Yoga",
        rating: 5,
        comment: "Gue sampe main berulang-ulang, nggak bosen. Nice job!",
    },
    {
        name: "Amel",
        rating: 5,
        comment: "Warnanya cantik banget! Aesthetic dan unik 💜",
    },
];

const Testimonials = () => {
    return (
        <section
        id="testimonials"
        className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#a4929f] via-[#e8ad9a] to-[#d19484] text-white"
        >
        <Stars count={50} />  
        <h2
            className="text-4xl md:text-5xl font-extrabold mb-12 text-center drop-shadow"
            style={{ fontFamily: "'Playfair Display', serif" }}
        >
            What They Say
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((item, index) => (
            <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg transition-transform hover:scale-[1.03]"
            >
                <div className="flex items-center gap-1 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                ))}
                </div>
                <p className="italic text-sm leading-relaxed">"{item.comment}"</p>
                <p className="mt-4 text-sm font-semibold text-purple-100">— {item.name}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Testimonials;
