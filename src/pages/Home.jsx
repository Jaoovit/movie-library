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
    <div>
      <h2>Best Movies</h2>
      <div>
        {bestMovies.length === 0 && <p>Loading...</p>}
        {bestMovies.length > 0 && bestMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home
