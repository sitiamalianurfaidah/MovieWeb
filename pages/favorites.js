import movies from "@/data/movies";
import MovieList from "@/components/MovieList";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function FavoritesPage() {
    const { favoriteIds } = useFavorites();

    const favoriteMovies = movies.filter((movie) => favoriteIds.includes(movie.id));

    return (
        <main className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">My Favorite Films</h1>
        <MovieList movies={favoriteMovies} />
        </main>
    );
}
