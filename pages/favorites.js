import movies from "@/data/movies";
import MovieList from "@/components/MovieList";
import { useFavorites } from "@/contexts/FavoritesContext";
import Stars from "@/components/Stars";

export default function FavoritesPage() {
    const { favoriteIds } = useFavorites();

    const favoriteMovies = movies.filter((movie) => favoriteIds.includes(movie.id));

    return (
        <main className="relative mt-16 min-h-screen p-6" style={{background: "linear-gradient(to bottom, #dbc7d6, #a4929f)",}}>
        <Stars count={100} />
        <h1 className="text-6xl md:text-7xl font-extrabold mt-2 text-center text-shadow text-white"style={{ fontFamily: "'Playfair Display', serif" }}>
        My Favorite Films</h1>
        <MovieList movies={favoriteMovies} />
        </main>
    );
}
