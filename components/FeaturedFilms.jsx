import movies from "@/data/movies";
import MovieCard from "./MovieCard";

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
                className="text-6xl font-bold text-center text-white mb-12 drop-shadow"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                Featured Films
            </h2>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
                {featuredFilms.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        year={movie.year}
                        poster={movie.poster}
                        description={movie.description}
                        tags={movie.tags}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedFilms;
