import React from 'react'
// Roboto Font Family
import './imports/fonts/roboto-font-family'

import Homepage from './routes/Homepage'
import { Route, Routes } from 'react-router-dom'
import Product from './routes/Product'
import { Helmet } from 'react-helmet'
import Category from './routes/Category'
import Receipes from './routes/Receipes'
import Faq from './routes/Faq'
import Delivery from './routes/Delivery'
import Contact from './routes/Contact'
import Reviews from './routes/Reviews'
import Calculator from './routes/Calculator'
import About from './routes/About'
import NotFound from './routes/NotFound'

const App = () => {
  return (
    <>
      <Helmet>
        <body className='bg-full-100'></body>
      </Helmet>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/category' element={<Category />} />
        <Route path="/receipes" element={<Receipes />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App