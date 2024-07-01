import { Link } from "react-router-dom"
import { MdMovieFilter } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <Link to="/"><MdMovieFilter />Movie Library</Link>
      <form>
        <input type="text" placeholder="Search a movie"/>
        <button type="submit"><FaSearch /></button>
      </form>
    </div>
  )
}

export default Navbar
