{/*JSX documents*/}
import NavBar from './components/Navbar'
import Footer from './components/Footer'

{/*Hook to navigate in the pages*/}
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
