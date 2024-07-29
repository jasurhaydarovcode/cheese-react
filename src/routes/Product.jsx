import React from 'react'

// Ubuntu Font Family
import '../imports/fonts/Ubuntu.js'

import NavbarTop from '../components/NavbarTop'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'
import {
  SBcheeseIcon, SBCrassIcon, productBigWalpaper,
  firstBproduct, secondBproduct, threeBproduct,
  bottomIconCart1, bottomIconCart2, bottomIconCart3,
  product70ThreeV

} from '../imports/images'
import { MdKeyboardArrowRight, FaRegStar, FaStar, TbView360Number, FaHeart } from '../imports/react-icons'
import { Link } from 'react-router-dom'
import { IoChatboxOutline } from 'react-icons/io5'


const Product = () => {
  const features = [
    {
      icon: bottomIconCart1,
      text: 'Возвращаем 10% бонусами',
    },
    {
      icon: bottomIconCart2,
      text: 'Удобные способы оплаты',
    },
    {
      icon: bottomIconCart3,
      text: 'Гарантия качества',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Мезофильная закваска Biochem Lactoferm MSO (20U)',
      location: 'Сток, Россия',
      price: '1,250₽',
      rating: 5,
      imgUrl: 'https://placeimg.com/140/200/tech',
    },
    {
      id: 2,
      name: 'Мезофильная закваска БК-Углич-5А (1ЕА)',
      location: 'Углич, Россия',
      price: '650₽',
      rating: 4,
      imgUrl: 'https://placeimg.com/140/200/tech',
    },
    {
      id: 3,
      name: 'Мезофильная закваска Hansen Flora Danica (50U)',
      location: 'Chr. Hansen, Дания',
      price: '850₽',
      rating: 4.5,
      imgUrl: 'https://placeimg.com/140/200/tech',
    },
  ];

  return (
    <>
      <NavbarTop />
      <Header />
      <div style={{ fontFamily: 'Ubuntu' }} className='container mx-auto'>
        <nav class="flex" aria-label="Breadcrumb">
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
                <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Кисломолочные закваски</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Мезофильная закваска Hansen Flora Danica (50U)</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div style={{ fontFamily: 'Ubuntu' }} className='container flex mx-auto'>
        <div className="w-[26%] py-4 bg-gray-2001">
          <div className='border rounded-lg  leading-9'>
            <div className='flex items-center gap-3 bg-sidebar-100 pl-4 pt-2 pb-2'>
              <img src={SBcheeseIcon} alt="Cheese Icon" />
              <h2 className="text-lg  font-bold">Ингредиенты</h2>
            </div>
            <div className='pt-4'>
              <ul>
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Закваски для сыра <span className='ml-[40%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Ферменты для сыра <span className='ml-[37.6%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Хлористый кальций</li>
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Плесень для сыра <span className='ml-[42.4%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Кисломолочные закваски <span className='ml-[27%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
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
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px] flex items-center">Термоусадочные пакеты <span className='ml-[31%] text-2xl text-arrow-100'><MdKeyboardArrowRight /></span></li>
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Дренажные коврики</li>
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4 border-b-[1px]">Дренажные мешки и салфетки для прессования</li>
                <li className="cursor-pointer hover:bg-sariq-200 mb-2 pl-4">Дренажные контейнеры</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <h2 className='text-3xl'>Мезофильная закваска Hansen Flora Danica (50U)</h2>
          <div className='flex gap-5 items-center'>
            <span className='flex text-sariq py-2 gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></span>
            <span className='flex items-center gap-2'><IoChatboxOutline />
              <span className='border-b-[1px] border-gray-500 hover:border-none transition'>2 Отзыва</span>
            </span>
          </div>
          <div className='flex p-4 gap-16'>
            {/* START INFO LEFT */}
            <div className='p-3'>
              <div>
                <img src={productBigWalpaper} alt="product img" />
              </div>
              <div className='flex mx-auto my-0 ml-[15%] gap-2'>
                <img src={firstBproduct} alt="product logo" />
                <img src={secondBproduct} alt="product logo" />
                <img src={threeBproduct} alt="product logo" />
              </div>
              <p className='ml-[16%] pt-2 text-gray-400 flex items-center gap-2'>
                <span className='text-xl'>
                  <TbView360Number />
                </span>
                <span>
                  Посмотреть товар в 3D
                </span>
              </p>
            </div>
            {/* END INFO LEFT */}


            {/* START INFO RIGHT */}
            <div>
              <p className='text-[#34B15F] text-[19px]'>• В наличии</p>
              <div className='flex gap-14'>
                <div className='text-3xl font-semibold text-sariq'>
                  950 руб. <sup> <del className='text-gray-400 text-lg'>1200 руб.</del> </sup>
                  <p className='text-[20px] font-normal'><span>+95</span> <span className='text-gray-400'>бонусных рублей</span></p>
                </div>
                <div className='flex -mt-7 items-center gap-2 text-sariq text-xl'> <FaHeart /> В избранное</div>
              </div>

              <div className='pt-3 pb-5'>
                <p className='text-lg'>Производитель:  <span className='text-gray-400'>Lactofarm ECO, Италия</span></p>
                <p className='text-lg'>Артикул:  <span className='text-gray-400'>23006</span></p>
              </div>

              <div className='flex pb-2 gap-4'>
                <input type="number" className='w-32 border-[1px] border-gray-400' />
                <button className='w-full h-[44px] rounded-lg bg-sariq text-white'>В корзину</button>
              </div>

              <div className='p-4 rounded-lg mt-3 bg-[#F2EFE2]'>
                <p className='pb-4'>Выберите регион для рассчета стоимости доставки:</p>
                <select className='rounded-lg border-[1px] p-2 border-gray-400 w-full h-[44px]'>
                  <option value="default">Выберите регион</option>
                  <option value="uzb">Uzbekistan</option>
                </select>
              </div>



              {/*  */}
              <div className="flex space-x-8 bg-yellow-50 p-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img src={feature.icon} alt="icon" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              {/*  */}


            </div>
            {/* END INFO RIGHT */}
          </div>
          {/* next generation */}
          <section className='pl-5 p-4'>
            <h2 className="text-2xl font-semibold text-blown mb-4">Аналогичные товары</h2>
            <div className="grid grid-cols-3 gap-4">
              {products.map(product => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                  <p className="text-sm text-gray-600 mb-2">{product.location}</p>
                  <div className='flex'>
                    <img src={product70ThreeV} alt={product.name} className="w-[80%] h-32 object-cover rounded-lg mb-4" />
                    <h3 className="text-sm font-semibold mb-2">{product.name} <br /> <span className='text-xl font-bold text-sariq mb-2'>{product.price}</span></h3>
                    {/* <p className="text-xl font-bold text-sariq mb-2">{product.price}</p> */}
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        i < product.rating ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>


            {/* START OPISANIA */}
            <div>
              <div>
                <ul className='flex gap-8'>
                  <li className='text-sariq border-b-[1px] p-4 border-sariq'>
                    <span className='p-4 font-semibold'>Описание</span>
                  </li>
                  <li className='p-4 font-semibold'>Доставка и оплата</li>
                  <li className='p-4 font-semibold'>Отзывы (3)</li>
                </ul>
              </div>

              <div className='bg-white'>
                <div className='p-5'>
                  <p>P00802 Эта форма небольших размеров предназначена для получения маленьких головок сыра Рикотта и других мягких   <br /> сыров в условиях домашнего или фермерского производства. Наличие хорошего дренажа обеспечивает ее <br /> использование для прессования сыров с плесенью, в том числе сорта Французский нешатель. Размер сырной головки, <br /> которую удается получить при использовании этой формы – до 80 г. Это аккуратный, готовый к подаче кусочек сыра, который <br /> не придется нарезать. Изготовлена форма из специального высококачественного пищевого пластика, который хорошо адаптирован к агрессивной молочнокислой среде.</p>
                </div>

                <div className='flex gap-10 p-5'>
                  <div>
                    <ul className='leading-10'>
                      <li>Выход сыра</li>
                      <li>Материал</li>
                      <li>Наличие дна</li>
                      <li>Наличие ножек</li>
                      <li>Размеры</li>
                    </ul>
                  </div>



                  <div>
                    <ul className='leading-10'>
                      <li>до 5-6 кг</li>
                      <li>высококачественный пищевой пластик</li>
                      <li>есть</li>
                      <li>нет</li>
                      <li>высота - 22 см, диаметр верха - 27 см</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* END OPISANIA */}
          </section>
        </div>
      </div>
      <div className='container mx-auto'>
        <h2 className='text-3xl text-blown font-semibold'>Похожие товары</h2>
      </div>
      <Slider />
      <Footer />
    </>
  )
}

export default Product