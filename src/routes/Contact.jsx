import React from 'react'
import { Helmet } from 'react-helmet'
import NavbarTop from '../components/NavbarTop'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import SidebarSecond from '../components/SidebarSecond'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const position = [56.245605, 38.780010];

  return (
    <>
      <Helmet>
        <title>Контакты | Cheese Making</title>
      </Helmet>


      <NavbarTop />



      <Header />


      <div className="container">
        {/* START breadcrumb  */}
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-sariq dark:text-gray-400 dark:hover:text-white">
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="ms-1 text-sm font-medium text-sariq md:ms-2 dark:text-gray-400">Контакты</span>
              </div>
            </li>
          </ol>
        </nav>
        {/* END breadcrumb  */}


        <div className='flex'>
          <SidebarSecond />
          <div className='pt-2 pl-10'>

            <h2 className='text-3xl pb-10 font-semibold text-blown'>Контакты</h2>
            <div>
              <hr />
            </div>

            <div className='flex justify-between gap-10 p-10'>
              <div>
                <ul>
                  <li className='text-2xl text-blown text-bold pb-3'>Телефон:</li>
                  <li className='text-bold text-2xl text-blown'>+7 9851425151</li>
                  <li className='text-bold text-2xl text-blown'>+7 9851425151</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className='text-2xl text-blown text-bold pb-3'>Мы работаем:</li>
                  <li className='text-gray-500'>
                    Понедельник-пятница — <br />
                    с <span className='text-blown'>10:00 до 18:00</span> <br />
                    суббота — выходной <br />
                    воскресенье — выходной <br />
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className='text-2xl text-blown text-bold pb-3'>Электронная почта:</li>
                  <li className='text-gray-600'>По вопросам связанным с заказами: <br /> <span className='text-blown cursor-pointer underline'>zakaz@lacheese.ru</span> <br />
                    По вопросам сотрудничества <br /> <span className='text-blown cursor-pointer underline'>opt@lacheese.ru</span> <br />
                  </li>
                </ul>
              </div>

            </div>


            <hr />


            <div className='flex justify-between gap-10 p-10'>
              <div>
                <ul>
                  <li className='text-2xl text-blown text-bold pb-3'>
                    Фактический адрес <br /> офиса:
                  </li>
                  <li className='text-gray-500'>г. Москва,  улица <br /> Свободы 1/7</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className='text-2xl text-blown text-bold pb-3'>Юр.лицо:</li>
                  <li className='text-gray-500'>
                    ИП Андреева Виктория Алексеевна, <br />
                    ИНН 701913850104, <br />
                    ОГРНИП 315501955500072 <br />
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className='text-2xl text-blown text-bold pb-3'>Юр. адрес:</li>
                  <li className='text-gray-600'>
                    119048, Россия, Московская область,
                    г. Лужники, Центральная ул., 17-15
                  </li>
                </ul>
              </div>

            </div>



            {/* START CONTACT INFO */}
            <div className='flex justify-between items-center pb-20'>
              {/* START FORM */}
              <div>
                <div className="p-6 rounded-lg w-[450px] mt-10">
                  <h2 className="text-2xl font-bold mb-4">Остались вопросы?</h2>
                  <p className="mb-4">Заполните форму и мы вам ответим</p>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700">Ваше Имя</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-2 p-2 border border-gray-300 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-2 p-2 border border-gray-300 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-700">Сообщение или вопрос</label>
                      <textarea
                        id="message"
                        name="message"
                        className="mt-2 p-2 border border-gray-300 rounded w-full"
                        rows="4"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                    >
                      Отправить
                    </button>
                  </form>
                </div>
              </div>
              {/* END FORM */}

              {/* START LEAFLET MAP */}
              <div>
                <div style={{ height: '400px', width: '500px' }}>
                  <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                      <Popup>
                        Street XP
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
              {/* END LEAFLET MAP */}
            </div>
            {/* END CONTACT INFO */}



          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact