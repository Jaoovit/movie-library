{/*JSX documents*/}
import NavBar from './components/Navbar'

{/*Hook to navigate in the pages*/}
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
