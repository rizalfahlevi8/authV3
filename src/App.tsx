// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NavigationButton } from './component/navigationButton'

function App() {

  return (
    <>
      <div className='transition-all duration-500 ease-in-out'>
        <NavigationButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
