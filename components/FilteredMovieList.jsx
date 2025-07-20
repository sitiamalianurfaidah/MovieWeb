import { useState } from "react";
import movies from "@/data/movies";
import MovieList from "./MovieList";
import Filter from "./Filter";
import Stars from "./Stars";

const FilteredMovieList = () => {
    const [selectedTag, setSelectedTag] = useState(null);

    const allTags = [...new Set(movies.flatMap((movie) => movie.tags))];

    const filteredMovies = selectedTag
        ? movies.filter((movie) => movie.tags.includes(selectedTag))
        : movies;

    return (
        <section
        id="movielist"
        className="relative p-6 bg-gradient-to-b from-[#e8ad9a] via-[#d19484] to-[#a4929f] text-white"
        >
        <Stars count={150} />  
        <h2 className="text-6xl md:text-7xl font-extrabold mt-20 mb-4 text-white text-shadow text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
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
