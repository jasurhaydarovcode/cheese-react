import React from 'react'
import Carousel from '../components/Carousel'
import ProductBar from '../components/ProductBar'
import Header from '../components/Header'
import NavbarTop from '../components/NavbarTop'
import Advantages from '../components/Advantages'
import Choose from '../components/Choose'
import Slider from '../components/Slider'

const Homepage = () => {
    return (
        <>
            <NavbarTop />
            <Header />
            <Carousel />
            <ProductBar />
            <Advantages />
            <Choose />
            <Slider />
        </>
    )
}

export default Homepage