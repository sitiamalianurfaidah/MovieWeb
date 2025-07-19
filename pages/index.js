import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import movies from "@/data/movies";
import Filter from "@/components/Filter";

export default function Home() {
const [selectedTag, setSelectedTag] = useState(null);

const allTags = [...new Set(movies.flatMap(movie => movie.tags))];

const filteredMovies = selectedTag
  ? movies.filter(movie => movie.tags.includes(selectedTag))
  : movies;

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Cerita Films</h1>
      <Filter
        allTags={allTags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.map((movie) => (
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
    </main>
  );
}
