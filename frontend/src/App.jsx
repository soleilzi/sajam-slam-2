import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Teams from './pages/Teams'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App