import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import Course from './Pages/Course'

import { Routes, Route } from "react-router-dom"
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>


      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Course />} />         */}
      </Routes>

    </>
  )
}

export default App
