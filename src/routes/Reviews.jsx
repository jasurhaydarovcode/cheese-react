import React from 'react'
import { Helmet } from 'react-helmet'
import NavbarTop from '../components/NavbarTop'
import Header from '../components/Header'
import SidebarSecond from '../components/SidebarSecond'
import Footer from '../components/Footer'
import { FaRegUser } from '../imports/react-icons'
import ReviewCard from '../components/ReviewCard';
import reviews from '../API/reviews.json';

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
                <div>

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

                    <div>
                        <div className="container mx-auto p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {reviews.map((review, index) => (
                                    <ReviewCard key={index} review={review} />
                                ))}
                            </div>
                        </div>
                        <div className="container mx-auto p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {reviews.map((review, index) => (
                                    <ReviewCard key={index} review={review} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END REVIEWS */}
            <Footer />
        </>
    )
}

export default Reviews