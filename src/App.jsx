import React from 'react'
import './imports/roboto-font-family'
import Homepage from './routes/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductCard from './routes/ProductCard'
import Header from './components/Header'
import Footer from './components/Footer'
import NavbarTop from './components/NavbarTop'
import NotFound from './routes/NotFound'

const App = () => {
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/productInfo' element={<ProductCard />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App