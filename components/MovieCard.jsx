import Link from "next/link";
import Tag from "./Tag"

const MovieCard = ({ id, title, year, poster, description, tags }) => {
    return (
        <Link href={`/movies/${id}`}>
        <div className="bg-white shadow-md rounded-md overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
            <img src={poster} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4">
            <h2 className="text-xl font-semibold">
                {title} ({year})
            </h2>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {description}
            </p>

            {/* Tags */}
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                {tags?.map((tag) => (
                <Tag key={tag} label={tag} />
                ))}
            </div>
            </div>
        </div>
        </Link>
    );
};

export default MovieCard;
