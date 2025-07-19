import { useRouter } from "next/router";
import movies from "@/data/movies";
import Tag from "@/components/Tag";
import Link from "next/link";

export default function MovieDetail() {
    const router = useRouter();
    const { id } = router.query;

    // Cari data film berdasarkan id dari URL
    const movie = movies.find((m) => m.id === parseInt(id));

    // Kalau data belum ketemu (router masih loading), atau film gak ada
    if (!movie) {
        return <p className="p-6">Movie not found or loading...</p>;
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
        <Link href="/" className="text-blue-600 underline mb-4 inline-block">
            ← Back to Home
        </Link>

        <img src={movie.poster} alt={movie.title} className="w-full rounded-lg shadow-md mb-4" />

        <h1 className="text-2xl font-bold">{movie.title} ({movie.year})</h1>
        <p className="mt-2 text-gray-700">{movie.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
            {movie.tags.map((tag) => (
            <Tag key={tag} label={tag} />
            ))}
        </div>
        </div>
    );
}
