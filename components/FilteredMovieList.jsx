import { useState } from "react";
import movies from "@/data/movies";
import MovieList from "./MovieList";
import Filter from "./Filter";

const FilteredMovieList = () => {
    const [selectedTag, setSelectedTag] = useState(null);

    const allTags = [...new Set(movies.flatMap((movie) => movie.tags))];

    const filteredMovies = selectedTag
        ? movies.filter((movie) => movie.tags.includes(selectedTag))
        : movies;

    return (
        <section
        id="movielist"
        className="p-6 bg-gradient-to-b from-[#e8ad9a] via-[#a4929f] to-[#a4929f] text-white"
        >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Movie List
        </h2>
        <Filter
            allTags={allTags}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
        />
        <MovieList movies={filteredMovies} />
        </section>
    );
};

export default FilteredMovieList;
