import React from 'react'
import Carousel from '../components/Carousel'
import ProductBar from '../components/ProductBar'
import Header from '../components/Header'
import NavbarTop from '../components/NavbarTop'

const Homepage = () => {
    return (
        <>
            <NavbarTop />
            <Header />
            <Carousel />
            <ProductBar />
        </>
    )
}

export default Homepage