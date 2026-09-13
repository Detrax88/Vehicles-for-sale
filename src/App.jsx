import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import About from './components/About';


function App() {
 

  return (
    <>    
    <div className="NavBarDiv">
      <NavBar />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
       </>
  )
}

export default App 