import { FaGithub } from "react-icons/fa";

import '../index.css'

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-center p-9 text-2xl">Copyright &copy;
            <a className="flex items-center gap-3" href="https://github.com/Jaoovit">João Vitor de Oliveira
            <FaGithub className="transition text-4xl hover:-translate-y-2 duration-300" /></a>
      </footer>
    </div>
  )
}

export default Footer
