import React from 'react';
import { Helmet } from 'react-helmet';
import { SBcheeseIcon, SBCrassIcon } from '../imports/images';

const SidebarSecond = () => {
    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Helmet>

            <div className="p-2">
                <div className='border p-2 border-gray-200'>
                    <div className="rounded-lg mb-4">
                        <div className="flex items-center mb-2 bg-yellow-100 rounded-lg p-4">
                            <span className="material-icons"><img src={SBcheeseIcon} alt="Sidebar icon" /></span>
                            <h2 className="text-lg font-semibold ml-2">Ингредиенты</h2>
                        </div>
                        <ul>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Закваски для сыра
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Ферменты для сыра
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Хлористый кальций
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Плесень для сыра
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Кисломолочные закваски
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Красители для сыра
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="py-2 hover:bg-yellow-100 rounded-lg">
                                Специи для сыра
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg">
                        <div className="flex items-center mb-2 bg-yellow-100 rounded-lg p-4">
                            <span className="material-icons"><img src={SBCrassIcon} alt="Sidebar icon" /></span>
                            <h2 className="text-lg font-semibold ml-2">Оборудование</h2>
                        </div>
                        <ul>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Формы для сыра
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Латексное покрытие
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Воск для сыра
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Термоусадочные пакеты
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Дренажные коврики
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="border-b border-gray-200 py-2 hover:bg-yellow-100 rounded-lg">
                                Дренажные мешки и салфетки для прессования
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                            <li className="py-2 hover:bg-yellow-100 rounded-lg">
                                Дренажные контейнеры
                                <span className="material-icons float-right">chevron_right</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarSecond;
