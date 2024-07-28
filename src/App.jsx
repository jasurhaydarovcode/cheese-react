import React from 'react'
import './imports/roboto-font-family'
import Homepage from './routes/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductCard from './routes/ProductCard'
import NavbarTop from './components/NavbarTop'
import NotFound from './routes/NotFound'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <NavbarTop />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/productInfo' element={<ProductCard />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App