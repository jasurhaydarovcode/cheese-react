import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import NavbarTop from '../components/NavbarTop';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { SBcheeseIcon, SBCrassIcon } from '../imports/images';
import { MdKeyboardArrowRight, VscSettings } from '../imports/react-icons';
import data from '../API/Categoriy.json';

const Category = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
    }, []);

    return (
        <>
            <Helmet>
                <title>Категории | Cheese Making</title>
            </Helmet>

            <NavbarTop />
            <Header />

            <div className='container mx-auto'>
                {/* START breadcrumb  */}
                <nav className="flex pt-1 pb-7" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                Главная
                            </Link>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-sariq md:ms-2 cursor-default">Категория</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* END breadcrumb  */}

                {/* START CATEGORY */}
                <div className='flex'>
                    <div className="w-[26%] p-4 bg-gray-2001">
                        <div className='border rounded-lg leading-9'>
                            <div className='flex items-center gap-3 bg-sidebar-100 pl-4 pt-2 pb-2'>
                                <img src={SBcheeseIcon} alt="Cheese Icon" />
                                <h2 className="text-lg font-bold">Ингредиенты</h2>
                            </div>
                            <div className='pt-4'>
                                <ul>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Закваски для сыра <span className='ml-[40%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Ферменты для сыра <span className='ml-[37.6%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Хлористый кальций</li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Плесень для сыра <span className='ml-[42.4%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Кисломолочные закваски <span className='ml-[25%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Красители для сыра</li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 flex items-center">Специи для сыра <span className='ml-[45%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className='border rounded-lg leading-9 mt-4'>
                            <div className='flex items-center gap-3 bg-sidebar-100 pl-4 pt-2 pb-2'>
                                <img src={SBCrassIcon} alt="Crass Icon" />
                                <h2 className="text-lg font-bold">Оборудование</h2>
                            </div>
                            <div className='pt-4'>
                                <ul>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Формы для сыра <span className='ml-[45.4%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Латексное покрытие</li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Воск для сыра</li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Термоусадочные пакеты <span className='ml-[28%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Дренажные коврики</li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Дренажные мешки и салфетки для прессования</li>
                                    <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4">Дренажные контейнеры</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-[74%] p-4 pb-20">
                        <div className='flex items-center justify-between pb-5'>
                            <h1 className='text-blown text-2xl font-semibold py-4'>Кисломолочные закваски</h1>
                            <button className='text-lg flex items-center gap-3 border rounded-lg p-2 w-32 border-[#292929]'>
                                <span className='text-xl'><VscSettings /></span>
                                <span className='text-[#292929]'>Фильтр</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {products.map(product => (
                                <div key={product.id} className='border p-4 rounded'>
                                    <div className='flex justify-center mb-2'>
                                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                                    </div>
                                    <p className='py-2'>
                                        {product.title}
                                    </p>
                                    <p className='py-2 text-gray-600 text-lg'>{product.price}₽ / {product.remaining} шт.</p>
                                    <del className='text-red-600'>{product.oldPrice}₽</del>
                                    <div className='my-2'>
                                        <button className='bg-sariq text-white py-1 px-4 rounded'>{product.addToCart}</button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* END CATEGORY */}
                <Footer />
            </div>
        </>
    );
}

export default Category;
