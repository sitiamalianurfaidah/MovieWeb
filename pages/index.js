import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedFilms from "@/components/FeaturedFilms";
import FilteredMovieList from "@/components/FilteredMovieList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <About />
      <FeaturedFilms />
      <FilteredMovieList />
    </main>
  );
}
