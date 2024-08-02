import React from 'react'
import { Helmet } from 'react-helmet'
import NavbarTop from '../components/NavbarTop'
import Header from '../components/Header'
import SidebarSecond from '../components/SidebarSecond'
import Footer from '../components/Footer'
import { FaRegUser } from '../imports/react-icons'
import ReviewCard from '../components/ReviewCard';
import reviews from '../API/reviews.json';
import { Link } from 'react-router-dom'

const Reviews = () => {
    return (
        <>
            <Helmet>
                <title>Отзывы | Cheese Making</title>
            </Helmet>


            <NavbarTop />
            <Header />
            {/* START REVIEWS */}
            <div className="container">
                {/* START breadcrumb  */}
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <Link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                Главная
                            </Link>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="ms-1 text-sm font-medium text-sariq md:ms-2">Отзывы наших покупателей</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* END  breadcrumb  */}
            </div>

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