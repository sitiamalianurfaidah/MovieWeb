import Link from "next/link";
import movies from "@/data/movies";

const FeaturedFilms = () => {
    const featuredTitles = [
        "Sore: Istri dari Masa Depan",
        "1 Kakak 7 Ponakan",
        "Jatuh Cinta Seperti di Film-Film",
        "Keluarga Cemara",
    ];

    const featuredFilms = movies.filter((movie) =>
        featuredTitles.includes(movie.title)
    );

    return (
        <section
            id="featured"
            className="min-h-screen px-6 py-16"
            style={{
                background: "linear-gradient(to bottom, #a4929f, #e8ad9a)",
            }}
        >
            <h2
                className="text-5xl font-bold text-center text-white mb-12 drop-shadow"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Featured Films
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {featuredFilms.map((film) => (
                    <Link key={film.id} href={`/movies/${film.id}`} className="group">
                        <div
                            className="relative overflow-hidden rounded-xl border-[6px] border-white shadow-inner ring-1 ring-white/20 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
                            style={{
                                aspectRatio: "2/3",
                                backgroundColor: "#ffffff20",
                                backdropFilter: "blur(12px)",
                            }}
                        >
                            <img
                                src={film.poster}
                                alt={film.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FeaturedFilms;
