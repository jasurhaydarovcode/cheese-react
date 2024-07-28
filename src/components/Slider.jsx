import React from 'react';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { productOne, productTwo, productThree, productFour, productFive, productSix, productSeven, productEight } from '../imports/product-images'


const products = [
    {
        id: 1,
        name: 'Форма для твердого сыра 1 кг',
        price: '1300₽',
        oldPrice: '1800₽',
        img: productOne
    },
    {
        id: 2,
        name: 'Душистый перец горошком (100г)',
        price: '200₽',
        oldPrice: '320₽',
        img: productTwo
    },
    {
        id: 3,
        name: 'Красный перец молотый (100г)',
        price: '380₽',
        oldPrice: '400₽',
        img: productThree
    },
    {
        id: 4,
        name: 'Мускатный орех молотый (100г)',
        price: '420₽',
        oldPrice: '560₽',
        img: productFour
    },
    {
        id: 5,
        name: 'Душистый перец горошком (100г)',
        price: '200₽',
        oldPrice: '320₽',
        img: productFive
    },
    {
        id: 6,
        name: 'Форма для твердого сыра 1 кг',
        price: '1300₽',
        oldPrice: '1800₽',
        img: productSix
    },
    {
        id: 7,
        name: 'Душистый перец горошком (100г)',
        price: '200₽',
        oldPrice: '320₽',
        img: productSeven
    },
    {
        id: 8,
        name: 'Красный перец молотый (100г)',
        price: '380₽',
        oldPrice: '400₽',
        img: productEight
    }
];

const Slider = () => {
    return (
        <div className='container mx-auto'>
            <Splide
                aria-label="My Favorite Images"
                options={{
                    perPage: 4,
                    perMove: 1,
                    gap: '1rem',
                    pagination: false,
                    arrows: true,
                    breakpoints: {
                        1024: {
                            perPage: 3,
                        },
                        768: {
                            perPage: 2,
                        },
                        640: {
                            perPage: 1,
                        }
                    }
                }}
            >
                {products.map((product) => (
                    <SplideSlide key={product.id}>
                        <div className="border rounded-lg overflow-hidden text-center">
                            <div className='flex justify-center py-9'>
                                <img src={product.img} alt={product.name} className="w-[70%] h-auto" />
                            </div>
                            <div className="p-4">
                                <h5 className="text-lg w-44 mx-auto my-0 font-medium mb-2">{product.name}</h5>
                                <div className='flex items-center justify-center gap-5'>
                                    <p className="text-base mb-2">
                                        <span className="font-bold">{product.price}</span>
                                        <span className="text-red-500 font-semibold line-through ml-2">{product.oldPrice}</span>
                                    </p>
                                    <button className="bg-sariq text-white px-4 py-2 rounded-lg hover:bg-sariq-100">Добавить</button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default Slider;
