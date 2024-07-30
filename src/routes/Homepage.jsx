import React from 'react'
import Carousel from '../components/Carousel'
import ProductBar from '../components/ProductBar'
import Header from '../components/Header'
import NavbarTop from '../components/NavbarTop'
import Advantages from '../components/Advantages'
import Choose from '../components/Choose'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const Homepage = () => {
    return (
        <>
            <Helmet>
                <title>Cheese Making | Homepage</title>
            </Helmet>

            <NavbarTop />
            <Header />
            <Carousel />
            <ProductBar />
            <Advantages />
            <Choose />
            <Slider />
            <Footer />
        </>
    )
}

export default Homepage