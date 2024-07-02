import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY;
  const search = import.meta.env.VITE_API_SEARCH;

const Search = () => {

  const [searchParams] = useSearchParams()

  const [searchMovies, setSearchMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setSearchMovies(data.results)
  }

  useEffect(() => {
    const searchMoviesUrl = `${search}?${apiKey}&query=${query}`
    getSearchMovie(searchMoviesUrl)
  }, [query])

  return (
    <div>
      <div className="flex flex-col gap-12 items-center">
        <h2 className="text-4xl">Results for: <span className="text-amber-400">{query}</span></h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {searchMovies.length > 0 && searchMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  )
}

export default Search
