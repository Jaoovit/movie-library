import { useState, useEffect } from "react"

const apiKey = import.meta.env.VITE_API_KEY;
const movie = import.meta.env.VITE_API_MOVIE

const Home = () => {

  const [bestMovies, setBestMovies] = useState([]);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setBestMovies(data.results)
  }
  
  useEffect(() => {
    const moviesUrl = `${movie}top_rated?${apiKey}`
    getMovies(moviesUrl)
  }, [])


  return (
    <div>
      <h1>Best Movies</h1>
      {bestMovies.length === 0 && <p>Loading...</p>}
      {bestMovies.length > 0 && bestMovies.map((movie) => <p key={movie.id}>{movie.title}</p>)}
    </div>
  )
}

export default Home
