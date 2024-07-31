import React from 'react';
import { Helmet } from 'react-helmet';
import NavbarTop from '../components/NavbarTop';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { FaAngleRight } from 'react-icons/fa';
import {
    receipesFirst, receipesSecons, receipesThree
} from '../imports/images';

import '../imports/fonts/museomoderno'

import cardsData from '../API/cheese-recipes.json';
import data from '../API/dobavlenie-cheese.json'

const Cards = ({ item }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={item.image} alt={item.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">
                    {item.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a href={item.link_url} className="text-sariq hover:text-orange-700">
                    {item.link_text}
                </a>
            </div>
        </div>
    );
};


const Card = ({ title, img }) => (
    <div className="bg-cover bg-center h-48 w-[340px] rounded-lg overflow-hidden m-4" style={{ backgroundImage: `url(${img})` }}>
        <div className="bg-gradient-to-t relative from-black via-transparent to-transparent h-full flex1 flex-col justify-end p-4">
            <div className='absolute top-28'>
                <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
                <button className="text-sariq flex gap-2 items-center">Смотреть<span> <FaAngleRight /></span></button>
            </div>
        </div>
    </div>
);

const Receipes = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Recipes | Cheese Making</title>
            </Helmet>

            <NavbarTop />
            <Header />

            <div className='container'>
                {/* START breadcrumb */}
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
                                <span className="ms-1 text-sm font-medium text-sariq md:ms-2 cursor-default">Рецепты</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* END breadcrumb */}

                {/* START  SIDEBAR */}
                <div className='flex'>
                    <Sidebar />
                    {/* END SIDEBAR */}
                    <div className='flex flex-col'>
                        <h2 className='text-blown text-3xl pl-3 pt-4 font-bold'>рецепты сыров</h2>
                        <div className='flex flex-wrap justify-between'>
                            {/* START CHEESE JSON */}
                            {cardsData.map((card, index) => (
                                <Card key={index} title={card.title} img={card.img} />
                            ))}
                            {/* END CHEESE JSON */}
                        </div>
                        <div className='my-10 bg-gray-200 w-full h-[1px]'></div>
                        <div>
                            {/* START Dobavlenie */}
                            <div>
                                {data.map((item, index) => (
                                    <Cards key={index} item={item} />
                                ))}
                            </div>
                            {/* END Dobavlenie */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Receipes;
