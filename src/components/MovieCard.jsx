import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({movie, showLink = true}) => {

  const apiImages = import.meta.env.VITE_API_IMAGES;

  const details = `/movie/${movie.id}`
  const image = `${apiImages}${movie.poster_path}`


  return (
    <div className="grid justify-items-stretch flex flex-col max-w-96 rounded-md p-8 bg-slate-100 text-slate-800 border-2 border-slate-200 gap-3 shadow-md">
      <img className="rounded-md border-2 border-slate-200 shadow-md" src={image} alt={movie.title} />
      <h3 className="text-2xl">{movie.title}</h3>
      <p className="flex items-center gap-3"><FaStar className="text-amber-400"/> {movie.vote_average}</p>
      {showLink && <Link className="transition justify-self-center flex max-w-24 justify-center text-l border-2 border-slate-800 rounded-md p-2 px-6 hover:text-slate-100 hover:border-slate-100 hover:bg-blue-950 duration-200" to={details}>Details</Link>}
    </div>
  )
}

export default MovieCard
