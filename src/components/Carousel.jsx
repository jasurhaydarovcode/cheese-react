import React from 'react'
import sliderFirst from '../assets/images/Carusel/Rectangle 6.png'
import sliderSecond from '../assets/images/Carusel/Rectangle 226.png'
import sliderThrity from '../assets/images/Carusel/Rectangle 227.png'

const Carousel = () => {
  return (
    <div className='container mx-auto pb-6'>
      <div className="py-2 flex space-x-4">
        {/* First block */}
        <div className="relative bg-cover bg-center w-1/2 h-72 bg-slider-first" style={{ backgroundImage: `url(${sliderFirst})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-10">
            <div>
              <h2 className="text-white text-3xl font-bold">Наборы для сыроделия</h2>
              <p className="text-white mt-2">Все что вам нужно для приготовления сыра в домашних условиях</p>
            </div>
            <button className="w-44 bg-sariq hover:bg-sariq-100 transition text-white py-2 px-4 rounded-lg mt-8">Смотреть наборы</button>
          </div>
        </div>

        {/* Second block */}
        <div className="relative bg-cover bg-center w-1/4 h-72" style={{ backgroundImage: `url(${sliderSecond})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 pb-7">
            <h3 className="text-white text-xl font-bold">Рецепты Сыры с плесенью</h3>
          </div>
        </div>

        {/* Third block */}
        <div className="relative bg-cover bg-center w-1/4 h-72" style={{ backgroundImage: `url(${sliderThrity})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center p-4 pb-7">
            <h3 className="text-white text-xl font-bold">Акции Закваски для сыра</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel