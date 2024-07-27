import React from 'react'
import './imports/roboto-font-family'
import Homepage from './routes/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductCard from './routes/ProductCard'
import Header from './components/Header'
import Footer from './components/Footer'
import NavbarTop from './components/NavbarTop'

const App = () => {
  return (
    <>
      <NavbarTop />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:productId' element={<ProductCard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App