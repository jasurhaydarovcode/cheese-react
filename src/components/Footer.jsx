import React from 'react'
import { logo } from '../imports/images'
import { Link } from 'react-router-dom'
import {
  RubleIcon, VectorIcon, SberbankIcon, YandexIcon,
  MasterCardIcon, VisaCardIcon

} from '../imports/images.js'

import {
  FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube,
  SlSocialVkontakte
} from '../imports/react-icons.js'

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Компания</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">О компании</Link>
                  </li>
                  <li className='mb-4'>
                    <Link to="/" className="hover:underline mb-4">Акции и скидки</Link>
                  </li>
                  <li className='mb-4'>
                    <Link to="/" className="hover:underline">Доставка и оплата</Link>
                  </li>
                  <li className="hover:underline mb-4">
                    <Link to="/" className="hover:underline mb-4">Отзывы</Link>
                  </li>
                  <li className="hover:underline">
                    <Link to="/" className="hover:underline mb-4">Гарантия и возврат</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Поддержка</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">Вопрос-ответ</Link>
                  </li>
                  <li className='mb-4'>
                    <Link to="/" className="hover:underline mb-4">Бонусная программа</Link>
                  </li>
                  <li className='mb-4'>
                    <Link to="/" className="hover:underline">Политика конфиденциальности</Link>
                  </li>
                  <li className="hover:underline mb-4">
                    <Link to="/" className="hover:underline mb-4">Персональные данных</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Способы оплаты</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 flex items-center gap-2">
                    <img src={RubleIcon} alt="RubleIcon" />
                    <img src={VectorIcon} alt="VectorIcon" />
                    <img src={SberbankIcon} alt="SberbankIcon" />
                    <img src={YandexIcon} alt="YandexIcon" />
                  </li>
                  <li className='flex items-center gap-2'>
                    <img className='w-9' src={MasterCardIcon} alt="MasterCardIcon" />
                    <img className='w-9' src={VisaCardIcon} alt="VisaCardIcon" />
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">+7 495 120-00-00</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Пн-пт 9:00 - 19:00</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">г. Москва,  улица Свободы 1/7</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/jasurhaydarovcode" target='_blank' className="hover:underline">jasurhaydarovcode™</a>. All Rights Reserved.
            </span>

            {/* START SOCIAL ICONS */}
            <div>
              <ul className='flex gap-3 text-2xl text-blown'>
                <li className='cursor-pointer'>
                  <FaInstagram />
                </li>
                <li className='cursor-pointer'>
                  <SlSocialVkontakte />
                </li>
                <li className='cursor-pointer'>
                  <FaTwitter />
                </li>
                <li className='cursor-pointer'>
                  <FaFacebookSquare />
                </li>
                <li className='cursor-pointer'>
                  <FaYoutube />
                </li>
              </ul>
            </div>
            {/* END SOCIAL ICONS */}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer