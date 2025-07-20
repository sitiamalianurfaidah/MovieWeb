import Link from "next/link";
import Tag from "./Tag";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorites } from "@/contexts/FavoritesContext";

const MovieCard = ({ id, title, year, poster, description, tags }) => {
    const { isFavorite, toggleFavorite } = useFavorites();

    return (
        <div className="relative group bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <button
            onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            toggleFavorite(id);
            }}
            className="absolute bottom-3 right-3 text-2xl z-10 text-pink-500 hover:scale-110 transition"
        >
            {isFavorite(id) ? (
            <AiFillHeart className="drop-shadow-glow" />
            ) : (
            <AiOutlineHeart />
            )}
        </button>

        <Link href={`/movies/${id}`} className="block">
            <img src={poster} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4">
            <h2 className="text-lg font-semibold">{title} ({year})</h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {tags?.map((tag) => (
                <Tag key={tag} label={tag} />
                ))}
            </div>
            </div>
        </Link>
        </div>
    );
};

export default MovieCard;
