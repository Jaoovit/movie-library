import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY;
const movies = import.meta.env.VITE_API_MOVIE

const Home = () => {

  const [bestMovies, setBestMovies] = useState([]);

  const getBestMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setBestMovies(data.results)
  }
  
  useEffect(() => {
    const bestMoviesUrl = `${movies}top_rated?${apiKey}`
    getBestMovies(bestMoviesUrl)
  }, [])


  return (
    <div className="flex flex-col gap-12 items-center">
      <h2 className="text-4xl">Best Movies</h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {bestMovies.length === 0 && <p>Loading...</p>}
        {bestMovies.length > 0 && bestMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home
