import React from 'react'
import {
    productOne, productTwo, productThree, productFour,
    productFive, productSix, productSeven, productEight
} from '../imports/product-images'

const Sidebar = () => {
    return (
        <div className="w-[26%] p-4 bg-gray-2001">
            <div className='border rounded-lg  leading-9'>
                <div className='bg-sidebar-100 pl-4 pt-2 pb-2'>
                    <h2 className="text-lg  font-bold">Ингредиенты</h2>
                </div>
                <div className='pl-4 pt-4'>
                    <ul>
                        <li className="mb-2">Закваски для сыра</li>
                        <li className="mb-2">Ферменты для сыра</li>
                        <li className="mb-2">Хлористый кальций</li>
                        <li className="mb-2">Плесень для сыра</li>
                        <li className="mb-2">Кисломолочные закваски</li>
                        <li className="mb-2">Красители для сыра</li>
                        <li className="mb-2">Специи для сыра</li>
                    </ul>
                </div>
            </div>

            <div className='border rounded-lg leading-9 mt-4'>
                <div className='bg-sidebar-100 pl-4 pt-2 pb-2'>
                    <h2 className="text-lg font-bold">Оборудование</h2>
                </div>
                <div className='pl-4 pt-4'>
                    <ul>
                        <li className="mb-2">Формы для сыра</li>
                        <li className="mb-2">Латексное покрытие</li>
                        <li className="mb-2">Воск для сыра</li>
                        <li className="mb-2">Термоусадочные пакеты</li>
                        <li className="mb-2">Дренажные коврики</li>
                        <li className="mb-2">Дренажные мешки и салфетки для прессования</li>
                        <li className="mb-2">Дренажные контейнеры</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Card = ({ title, price, oldPrice, image }) => {
    return (
        <div className="border p-4 m-2 rounded">
            <img src={image} alt={title} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{price}₽ / 1 шт.</p>
            <p className="text-red-600 line-through mb-2">{oldPrice}₽</p>
            <button className="bg-sariq text-white py-1 px-4 rounded">Добавить</button>
        </div>
    );
};

const ProductBar = () => {
    const cards = [
        {
            title: 'Мезофильная закваска Danisco CHOOZIT MM...',
            price: '1300',
            oldPrice: '1800',
            image: productOne
        },
        {
            title: 'Душистый перец горошком (100г)',
            price: '200',
            oldPrice: '320',
            image: productTwo
        },
        {
            title: 'Красный перец молотый (100г)',
            price: '380',
            oldPrice: '400',
            image: productThree
        },
        {
            title: 'Мускатный орех молотый (100г)',
            price: '420',
            oldPrice: '560',
            image: productFour
        },
        {
            title: 'Форма для твердого сыра 1 кг',
            price: '1330',
            oldPrice: '1800',
            image: productFive
        },
        {
            title: 'Форма для твердого сыра 1 кг',
            price: '200',
            oldPrice: '320',
            image: productSix
        },
        {
            title: 'Красный перец молотый (100г)',
            price: '380',
            oldPrice: '400',
            image: productSeven
        },
        {
            title: 'Мускатный орех молотый (100г)',
            price: '420',
            oldPrice: '560',
            image: productEight
        }
    ];

    return (
        <div className='container mx-auto flex'>
            <Sidebar />
            <div className="w-3/4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            price={card.price}
                            oldPrice={card.oldPrice}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductBar;
