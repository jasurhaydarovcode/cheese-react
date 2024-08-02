import React from 'react'
import { Helmet } from 'react-helmet'
import NavbarTop from '../components/NavbarTop'
import Header from '../components/Header'
import SidebarSecond from '../components/SidebarSecond'
import Footer from '../components/Footer'
import { FaRegUser } from '../imports/react-icons'

const Reviews = () => {
    return (
        <>
            <Helmet>
                <title>Отзывы | Cheese Making</title>
            </Helmet>


            <NavbarTop />
            <Header />
            {/* START REVIEWS */}
            <div className="container flex">
                <SidebarSecond />
                <div className='flex p-4 justify-between w-[900px]'>

                    <h2 className='text-3xl font-bold'>отзывы покупателей</h2>

                    <div>
                        <h2 className='text-blown'>
                            Что бы оставить отзыв необходимо
                            <span className='flex items-center gap-2'>
                                <span className='text-sariq'><FaRegUser /></span>
                                <span className='underline text-sariq'>Авторизоваться</span>
                            </span>
                        </h2>
                    </div>

                </div>
            </div>
            {/* END REVIEWS */}
            <Footer />
        </>
    )
}

export default Reviews