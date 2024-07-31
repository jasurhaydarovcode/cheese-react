import React, { useState } from 'react';
import {
  productOne, productTwo, productThree, productFour,
  productFive, productSix, productSeven, productEight,
} from '../imports/product-images';
import { SBcheeseIcon, SBCrassIcon } from '../imports/images';
import { MdKeyboardArrowRight } from '../imports/react-icons';

const Sidebar = () => {
  return (
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
  const [activeTab, setActiveTab] = useState('popular');

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
    },
  ];

  return (
    <div className='container mx-auto flex'>
      <Sidebar />
      <div className="w-3/4 p-4">
        <div className='flex gap-4 pl-3 pb-4'>
          <button
            className={`${
              activeTab === 'popular' ? 'text-sariq border-b-2 border-sariq' : 'text-arrow-100'
            } font-semibold hover:border-white transition focus:outline-none`}
            onClick={() => setActiveTab('popular')}
          >
            Популярные товары
          </button>
          <button
            className={`${
              activeTab === 'sales' ? 'text-sariq border-b-2 border-sariq' : 'text-arrow-100'
            } font-semibold hover:border-white transition focus:outline-none`}
            onClick={() => setActiveTab('sales')}
          >
            Акции
          </button>
        </div>
        <div className='pl-3 py-6'>
          {activeTab === 'popular' ? (
            <>
              <h2 className='text-2xl text-[#4E2D2D] font-semibold mb-6'>Ингредиенты</h2>
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
              <h2 className='text-2xl pt-10 text-[#4E2D2D] font-semibold mb-6'>Оборудование</h2>
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
            </>
          ) : (
            <h1 className="text-2xl font-bold">Empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBar;
