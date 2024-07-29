import React from 'react'
import NavbarTop from '../components/NavbarTop'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Category = () => {
    return (
        <>
            <NavbarTop />
            <Header />

            <div className='container mx-auto'>
                {/* START breadcrumb  */}
                <nav class="flex pt-1 pb-7" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <Link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Ингредиенты</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="ms-1 text-sm font-medium text-sariq md:ms-2 hover:text-sariq-100">Кисломолочные закваски</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* END breadcrumb  */}

                {/* START CATEGORY */}
                
                {/* END CATEGORY */}


                <Footer />
            </div>
        </>
    )
}

export default Category