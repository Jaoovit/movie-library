import { Link, useNavigate } from "react-router-dom"
import { MdMovieFilter } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import '../index.css'

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
    <div className="flex justify-between p-9">
      <Link to="/" className="transition flex items-center gap-3 text-3xl hover:text-blue-950 duration-200"><MdMovieFilter />Movie Library</Link>
      <form className="flex gap-9" onSubmit={handleSubmit}>
        <input className="rounded-md p-2 border shadow-sm border-slate-300 focus:outline-none focus:border-blue-950" type="text" placeholder="Search a movie" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        <button className="transition border-2 rounded-md p-2 hover:text-slate-100 hover:border-slate-100 hover:bg-blue-950 duration-200" type="submit"><FaSearch /></button>
      </form>
    </div>
  )
}

export default Navbar
