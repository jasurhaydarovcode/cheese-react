import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div>
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Похоже, ты нашел дверь в великое ничто.
                </h1>
                <p className="my-2 text-gray-800">Извини за это! Пожалуйста, посетите нашу домашнюю страницу, чтобы добраться туда, куда вам нужно.</p>
                <Link to="/">
                  <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-sariq text-white hover:bg-sariq-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Отведи меня домой!</button>
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img width="520px" src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png" />
        </div>
      </div>
    </>
  )
}

export default NotFound