{/* React hooks */}
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

{/* React icons */}
import { FaWallet } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";


const apiKey = import.meta.env.VITE_API_KEY;
const movies = import.meta.env.VITE_API_MOVIE;

const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data)
  }

  useEffect(() => {
    const moiveUrl = `${movies}${id}?${apiKey}`
    getMovie(moiveUrl)
  }, [])

  return <div className="flex flex-col gap-9 px-12">
    {movie && <><MovieCard movie={movie} showLink={false} />
    <p>{movie.tagline}</p>
    <div>
      <p className="flex items-center gap-3"> <FaWallet /> Budget:{movie.budget}</p>
    </div>
    <div>
      <p className="flex items-center gap-3"><BsGraphUpArrow /> Revenue: {movie.revenue}</p>
    </div>
    <div>
      <p className="flex items-center gap-3"><FaClock /> Runtime: {movie.runtime} minutes</p>
    </div>
    <div>
      <p className="flex items-center gap-3"> Description: {movie.overview}</p>
    </div>
  </>}</div>
  
}

export default Movie
