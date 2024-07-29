import React from 'react'
// Roboto Font Family
import './imports/fonts/roboto-font-family'
import Homepage from './routes/Homepage'
import { Route, Routes } from 'react-router-dom'
import Product from './routes/Product'
import NotFound from './routes/NotFound'
import { Helmet } from 'react-helmet'

const App = () => {
  return (
    <>
      <Helmet>
        <body className='bg-full-100'></body>
      </Helmet>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App