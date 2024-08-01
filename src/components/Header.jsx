import React from 'react'
import {
  logo, iconBox, iconCard, iconUserSecurity,
  telegram, whatsApp, messenger
} from '../imports/images'
import { LiaPhoneAltSolid, FiShoppingCart } from '../imports/react-icons'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

const Header = () => {
  const sellIconItems = [
    {
      icon: iconBox,
      text: 'Бесплатная доставка'
    },
    {
      icon: iconCard,
      text: 'Скидка при оплате на сайте'
    },
    {
      icon: iconUserSecurity,
      text: 'Защита покупателей'
    },
  ];


  return (
    <>
      {/* START HEADER */}
      <div className='container flex items-center justify-between gap-10 mx-auto py-2'>
        {/* START LOGO */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* END LOGO */}


        <div>
          <div className='flex gap-5 border-r-2'>
            {sellIconItems.map((item, index) => (
              <div key={index} className='flex gap-4'>
                <img src={item.icon} alt={item.text} />
                <p className='w-32 text-[#808080]'>{item.text}</p>
              </div>
            ))}
          </div>

        </div>

        <div className='flex gap-4'>
          <div className='flex gap-4'>
            <img className='w-[30px]' src={telegram} alt="Telegram logo" />
            <img className='w-[30px]' src={whatsApp} alt="WhatsApp logo" />
            <img className='w-[30px]' src={messenger} alt="Meesenger quick" />
          </div>
          <div>
            <p className='text-xl font-semibold ml-2 pb-2'>+8 916 460-19-60</p>

            <button className='flex items-center gap-2 text-sariq border-sariq p-2 border-2 rounded-md transition hover:bg-sariq hover:text-white'>
              <span className='text-xl'>
                <LiaPhoneAltSolid />
              </span>
              <span>Заказать звонок</span>
            </button>

          </div>
        </div>


        {/* START CART */}
        <div className='flex items-center gap-4'>
          <div className='text-xl'>Ваша корзина  <br /> <span className='text-sariq font-semibold text-xl'>1680 руб.</span></div>


          {/* START CART ADD */}
          <div className='text-[55px] flex relative'><FiShoppingCart />
            <div className='absolute right-0 bg-sariq rounded-full h-5 w-5'>
              <span className='text-white absolute left-[6px] text-center text-sm'>0</span>
            </div>
          </div>
          {/* END CART ADD */}

        </div>
        {/* END CART */}

      </div>

      <hr />

      <div className='container mx-auto py-3 flex justify-between'>
        {/* START MINI NAVIGATIONS */}
        <div>
          <ul className='flex items-center gap-10'>
            <li>
              <select className='border-none appearance-none bg-transparent w-full'>
                <option value="recipes">Рецепты</option>
                <option value="popular">Полутвердые сыры</option>
                <option value="">Паста Филата</option>
                <option value="">Сывороточные сыры</option>
                <option value="">Сыры с плесенью</option>
                <option value="">Твердые сыры</option>
                <option value="">Творожные сыры</option>
                <option value="">Кисломолочные продукты</option>
                <option value="">Все рецепты</option>
              </select>
            </li>

            <li>
              <Link to='/delivery'>Доставка и оплата</Link>
            </li>

            <li>
              <Link to=''>Калькулятор Сыродела</Link>
            </li>

            <li>
              <Link to=''>Отзывы</Link>
            </li>

            <li>
              <Link to="/faq">Вопросы и ответы</Link>
            </li>

            <li>
              <Link to='/contact'>Контакты</Link>
            </li>
          </ul>
        </div>
        {/* END MINI NAVIGATIONS */}


        {/* START SEARCH INPUT */}
        <div className='border-l-2'>
          <div className='flex items-center gap-2'>
            <div className='text-2xl text-gray-400 pl-5'><BiSearch /></div>
            <input className='border-none w-80' type="text" placeholder='Введите название товара или артикул' />
          </div>
        </div>
        {/* END SEARCH INPUT */}
      </div>
      {/* END HEADER */}
    </>
  )
}

export default Header