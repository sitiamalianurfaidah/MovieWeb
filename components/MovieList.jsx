import MovieCard from "./MovieCard";
import { useFavorites } from "@/contexts/FavoritesContext";

const MovieList = ({ movies }) => {
    const { isFavorite, toggleFavorite } = useFavorites();

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative">
        {movies.map((movie) => (
            <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
            description={movie.description}
            tags={movie.tags}
            isFavorite={isFavorite(movie.id)}
            onToggleFavorite={toggleFavorite}
            />
        ))}
        </div>
    );
};

export default MovieList;
