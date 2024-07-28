import React from 'react'
import { adventagesBG, bgTaom } from '../imports/images'
import { Link } from 'react-router-dom'

const Choose = () => {
    return (
        <>
            <div className='container mx-auto'>
                {/* START TWO CARD */}
                <div className='py-10'>
                    <h2 className='text-blown pl-24 text-2xl font-semibold'>Мы подобрали для вас</h2>
                    <div className="flex justify-around gap-6 py-10">
                        <div className="flex flex-col justify-between p-6 rounded shadow-lg max-w-xl bg-choose-bg-100 bg-cover pr-48">
                            <div>
                                <h3 className="text-3xl font-bold mb-2">Более 1000 <br /> лучших рецептов</h3>
                                <p>Мы собрали для Вас большую базу рецептов.</p>
                            </div>
                            <button className="bg-orange-500 w-24 text-white mt-9 py-2 px-4 my-7 rounded">Перейти</button>
                        </div>

                        <div className="flex flex-col justify-between p-6 bg-[#4B1D1D] rounded shadow-lg max-w-xl bg-choose-bg-200 bg-cover pr-48">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Крутые наборы для сыра</h3>
                                <p className="text-white">Готовые наборы <br /> сэкономят время, мы всё сделали за Вас.</p>
                            </div>
                            <button className="bg-orange-500 w-24 text-white mt-9 py-2 my-7 px-4 rounded">Перейти</button>
                        </div>
                    </div>
                </div>
                {/* END TWO CARD */}

                {/* START SPLIDE */}
                <h2 className='text-2xl font-semibold text-blown pl-24'>наше оборудование</h2>
                {/* END SPLIDE */}

                <div className='flex justify-center py-10'>
                    <img src={adventagesBG} alt="BG IMAGE" />
                </div>


                {/* START CARD */}
                <div className='flex justify-center pb-10'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-cardBg p-4">
                        <img className="w-full" src={bgTaom} alt="Placeholder" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">СЫРНАЯ ТАРЕЛКА</div>
                            <p className="text-gray-700 text-base">
                                Так называется блюдо, которое состоит из разных сортов сыра.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <Link to="" className="text-orange-500 hover:text-orange-700">
                                Читать далее &gt;
                            </Link>
                        </div>
                    </div>
                </div>
                {/* END CARD */}
            </div>
        </>
    )
}

export default Choose