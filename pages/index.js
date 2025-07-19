import { useState } from "react";
import movies from "@/data/movies";
import Filter from "@/components/Filter";
import MovieList from "@/components/MovieList";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = [...new Set(movies.flatMap((movie) => movie.tags))];

  const filteredMovies = selectedTag
    ? movies.filter((movie) => movie.tags.includes(selectedTag))
    : movies;

  return (
    <main className="min-h-screen bg-gray-100">
      <HeroSection />      
      <section id="movielist" className="p-6">
        <h2 className="text-3xl font-bold mb-6">Cerita Films</h2>
        <Filter
          allTags={allTags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  );
}
