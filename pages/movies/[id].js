import { useRouter } from "next/router";
import movies from "@/data/movies";
import Tag from "@/components/Tag";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Stars from "@/components/Stars";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

// Fungsi helper untuk mengubah URL trailer jadi versi embed
function convertToEmbed(url) {
    if (!url) return "";
    const videoId =
        url.includes("youtu.be/")
        ? url.split("youtu.be/")[1].split("?")[0]
        : url.includes("watch?v=")
        ? url.split("v=")[1].split("&")[0]
        : null;

    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    export default function MovieDetail() {
    const router = useRouter();
    const { id } = router.query;

    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <p className="p-6 text-white">Movie not found or loading...</p>;
    }

    const embedUrl = convertToEmbed(movie.trailer);

    return (
        <div
        className="min-h-screen relative text-white mt-16 px-6 md:px-40 py-12"
        style={{
            background: "linear-gradient(to bottom, #d19484, #e8ad9a, #a4929f)",
        }}
        >
        <Stars count={100} />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col mt-5 md:flex-row gap-10 items-start">
            {/* Poster */}
            <div className="md:w-1/3 w-full">
            <img
                src={movie.poster}
                alt={movie.title}
                className="rounded-lg shadow-lg w-full max-w-xs mx-auto md:mx-0"
            />
            </div>

            {/* Detail */}
            <div className="md:w-2/3 w-full space-y-4">
            <h1
                className="text-5xl md:text-6xl font-extrabold mt-0 mb-2 leading-tight animate-title"
                style={{ fontFamily: "'Playfair Display', serif" }}
            >
                {movie.title} ({movie.year})
            </h1>
            <p
                className={`${poppins.className} text-sm md:text-lg mb-8 text-gray-100 max-w-2xl mx-auto animate-fade-in`}
            >
                {movie.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {movie.tags.map((tag) => (
                <Tag key={tag} label={tag} />
                ))}
            </div>
            </div>
        </div>

        {/* Trailer Embed */}
        {embedUrl && (
            <div className="relative z-10 mt-12 max-w-5xl mx-auto w-full aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
                src={embedUrl}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            />
            </div>
        )}
        </div>
    );
}
