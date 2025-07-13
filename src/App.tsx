// import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Config } from './pages/Config'
// import { NavigationButton } from './component/navigationButton'
import { Guide } from './pages/Guide'

function App() {

  return (
    <>
      <div className='transition-all duration-500 ease-in-out'>
        {/* <NavigationButton /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/config" element={<Config />} />
          <Route path="/guide" element={<Guide />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
