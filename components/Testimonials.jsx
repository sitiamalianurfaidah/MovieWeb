import { FaStar } from "react-icons/fa";
import Stars from "./Stars";

const testimonials = [
    {
        name: "Shawn Mendes",
        rating: 5,
        comment: "This web is seriously calming! The visuals and vibes are next-level relaxing.",
        avatar: "https://tse3.mm.bing.net/th/id/OIP.ZVWHlCYF3HM4EkSXe56bAwHaJg?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "Charlie Puth",
        rating: 4,
        comment: "Simple but addictive. The design is clean, and the transitions are smooth!",
        avatar: "https://tse4.mm.bing.net/th/id/OIP.698fRH6W8f5Fh3dxLQ8AFgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "Zayn Malik",
        rating: 5,
        comment: "I love the colors and animations. Feels like a sunset concert in a game!",
        avatar: "https://people.com/thmb/qD9jZL7gFNA2EHdnGPrx6L_02pc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x429:721x431)/zayn-malik-2-b6de273b24f1446989c4c06ebc3ce78e.jpg"
    },
    {
        name: "Dion Wiyoko",
        rating: 5,
        comment: "Super nostalgic, but fresh and modern. A perfect little escape between shoots.",
        avatar: "https://cdn.antaranews.com/cache/1200x800/2021/08/22/AIRism-Dion-Wiyoko.jpg"
    },
    {
        name: "Ernest Prakasa",
        rating: 4,
        comment: "The theme is super charming! It's a chill way to unwind after writing.",
        avatar: "https://static.promediateknologi.id/crop/46x0:642x372/750x500/webp/photo/p1/664/2023/08/31/ernestprakasa-1509854552.jpg"
    },
    {
        name: "Rio Haryanto",
        rating: 5,
        comment: "Fast, smooth, and visually stunning. I could play this during pit stops!",
        avatar: "https://alchetron.com/cdn/rio-haryanto-a5706e72-fecc-4a80-9095-3f112bbad45-resize-750.jpeg"
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#a4929f] via-[#dbc7d6] to-[#dbc7d6] text-[#522b63]"
        >
            <Stars count={90} />
            <h2
                className="text-6xl md:text-7xl font-extrabold mt-10 mb-12 text-center text-shadow text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                What They Say
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-white/100 mt-5 backdrop-blur-lg border border-white/20 rounded-xl pt-16 px-6 pb-6 shadow-lg transition-transform hover:scale-[1.03]"
                    >
                        {/* Avatar */}
                        <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-20 h-20 rounded-full object-cover absolute left-1/2 -top-10 transform -translate-x-1/2 border-4 border-white shadow-md"
                        />

                        {/* Bintang */}
                        <div className="flex items-center justify-center gap-1 mb-3">
                            {[...Array(item.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400" />
                            ))}
                        </div>

                        {/* Komentar */}
                        <p className="italic text-sm leading-relaxed text-center">
                            "{item.comment}"
                        </p>
                        <p className="mt-4 text-sm font-semibold text-center text-[#522b63]">
                            — {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
