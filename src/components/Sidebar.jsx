import React from 'react'
import { SBCrassIcon, SBcheeseIcon } from '../imports/images.js'
import { MdKeyboardArrowRight } from '../imports/react-icons.js'

const Sidebar = () => {
    return (
        <>
            <div className="w-[800px] p-4 bg-gray-2001">
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
        </>
    )
}

export default Sidebar