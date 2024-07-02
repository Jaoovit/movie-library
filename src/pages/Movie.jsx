{/* React hooks */}
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

{/* React icons */}
import { FaWallet } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";


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

  return (
    <div>
      {movie === null && <p>Loading...</p>}
      {movie && <div><MovieCard movie={movie} showLink={false}/></div>}
      <div>
        <h3><FaWallet /> Budget:</h3>
        <p>${movie.budget}</p>
      </div>
      <div>
        <h3><BsGraphUpArrow /> Revenue:</h3>
        <p>${movie.revenue}</p>
      </div>
      <div>
        <h3><FaClock /> Runtime:</h3>
        <p>{movie.runtime} minutes</p>
      </div>
      <div>
        <h3><FaPencilAlt /> Description:</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Movie
