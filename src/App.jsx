import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navitem from './compones/Navitem'
import Footer from './home/Footer'
import GoTop from './GoTop'
import State from './State'
import LayOUT from './LayOUT'
function App() {
  const [count, setCount] = useState(0)

  return (
    <State>
      <div className='min-vh-100'>
      <Outlet />
      </div>
      <GoTop />
    </State>
  )
}

export default App
