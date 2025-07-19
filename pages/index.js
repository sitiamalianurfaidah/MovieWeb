import MovieCard from "@/components/MovieCard";
import movies from "@/data/movies";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Cerita Films</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
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
