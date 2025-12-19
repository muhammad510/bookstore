import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Pages/Home'
import Course from './Pages/Course'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Add from './Pages/Add'
import Booklist from './Pages/Book_list'

import { Routes, Route } from "react-router-dom"
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />        
        <Route path="/book_list" element={<Booklist />} />        
        <Route path="/add" element={<Add />} />        
        <Route path="/login" element={<Login />} />        
        <Route path="/signup" element={<Signup />} />        
      </Routes>

    </>
  )
}

export default App
