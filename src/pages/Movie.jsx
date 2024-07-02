{/* React hooks */}
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

{/* React icons */}
import { FaWallet, FaPencilAlt } from "react-icons/fa";
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

  return <div className="movie-page">{movie && <>
    <MovieCard movie={movie} showLink={false} />
    <p className="tagline">{movie.tagline}</p>
    <div className="info">
      <h3>
        <FaWallet /> Budget:
      </h3>
      <p>{movie.budget}</p>
    </div>
    <div className="info">
      <h3>
        <BsGraphUpArrow /> Revenue:
      </h3>
      <p>{movie.revenue}</p>
    </div>
    <div className="info">
      <h3>
        <FaClock /> Runtime:
      </h3>
      <p>{movie.runtime} minutes</p>
    </div>
    <div className="info-description">
      <h3>
        <FaPencilAlt /> Description:
      </h3>
      <p>{movie.overview}</p>
    </div>
  </>}</div>
  
}

export default Movie
