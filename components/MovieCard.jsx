import Link from "next/link";
import Tag from "./Tag"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorites } from "@/contexts/FavoritesContext";

const MovieCard = ({ id, title, year, poster, description, tags }) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    return (
        <div className="relative bg-white shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
        <button
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                toggleFavorite(id);
            }}
            className="absolute bottom-2 right-2 text-2xl text-red-500 z-10"
            >
            {isFavorite(id) ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>

        <Link href={`/movies/${id}`} className="block">
            <img src={poster} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4">
            <h2 className="text-xl font-semibold">
                {title} ({year})
            </h2>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
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