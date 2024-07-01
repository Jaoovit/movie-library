import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({movie, showLink = true}) => {

  const apiImages = import.meta.env.VITE_API_IMAGES;

  const details = `/movie/${movie.id}`
  const image = `${apiImages}${movie.poster_path}`


  return (
    <div>
      <img src={image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p><FaStar /> {movie.vote_average}</p>
      {showLink && <Link to={details}>Details</Link>}
    </div>
  )
}

export default MovieCard
