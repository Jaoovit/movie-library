import { Link, useNavigate } from "react-router-dom"
import { MdMovieFilter } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("")
  }

  return (
    <div>
      <Link to="/"><MdMovieFilter />Movie Library</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search a movie" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        <button type="submit"><FaSearch /></button>
      </form>
    </div>
  )
}

export default Navbar
