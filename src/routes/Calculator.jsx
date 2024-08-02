import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import NavbarTop from '../components/NavbarTop'
import Header from '../components/Header'
import SidebarSecond from '../components/SidebarSecond'

import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const Calculator = () => {
    const [totalVolume, setTotalVolume] = useState('');
    const [usedVolume, setUsedVolume] = useState('');
    const [totalWeight, setTotalWeight] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        if (totalVolume && usedVolume && totalWeight) {
            const requiredAmount = (usedVolume / totalVolume) * totalWeight;
            setResult(`Для переработки ${usedVolume} литров молока вам потребуется ${requiredAmount.toFixed(2)} грамм закваски.`);
        } else {
            setResult('Пожалуйста, заполните все поля.');
        }
    };
    return (
        <>
            <Helmet>
                <title>Калькулятор Сыродела | Cheese Making</title>
            </Helmet>


            <NavbarTop />
            <Header />

            <div className='container circle-rounded-bold'>
                {/* START breadcrumb  */}
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <Link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                Главная
                            </Link>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="ms-1 text-sm font-medium text-sariq md:ms-2">Калькулятор сыродела</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* END  breadcrumb  */}
                <div className='flex'>
                    <SidebarSecond />

                    {/* START CALCULATOR */}
                    <div className='text-2xl p-4 font-semibold text-blown'>
                        <h2>Калькулятор сыродела</h2>
                        <div className='flex items-center'>

                            <div>
                                <div className="flex flex-col md:flex-row gap-8 p-8 bg-orange-50">
                                    <div className="bg-white p-6 rounded-md shadow-md w-full md:w-1/2">
                                        <h2 className="text-lg font-semibold mb-4">Расчет количества закваски</h2>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2" htmlFor="totalVolume">На какой объем рассчитан весь пакет?</label>
                                            <input
                                                type="number"
                                                id="totalVolume"
                                                value={totalVolume}
                                                onChange={(e) => setTotalVolume(e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2" htmlFor="usedVolume">Какой объем молока вы используете?</label>
                                            <input
                                                type="number"
                                                id="usedVolume"
                                                value={usedVolume}
                                                onChange={(e) => setUsedVolume(e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium mb-2" htmlFor="totalWeight">Сколько весит вся закваска в пакете?</label>
                                            <input
                                                type="number"
                                                id="totalWeight"
                                                value={totalWeight}
                                                onChange={(e) => setTotalWeight(e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <button
                                            onClick={handleCalculate}
                                            className="w-full bg-sariq text-white py-2 rounded hover:bg-sariq-100 transition"
                                        >
                                            Рассчитать
                                        </button>
                                    </div>
                                    <div className="bg-white p-6 rounded-md shadow-md w-full md:w-1/2">
                                        <h2 className="text-lg font-semibold mb-4">Результат</h2>
                                        <p>{result}</p>
                                        <div className="mt-4">
                                            <h3 className="text-sm font-semibold">Нужна помощь с расчетами?</h3>
                                            <ul className="list-disc pl-5 text-sm mt-2">
                                                <li>Пакет любой закваски для сыра рассчитан на переработку конкретного объема молока.</li>
                                                <li>Укажите количество молока (в литрах), которое вы собираетесь использовать за одну варку.</li>
                                                <li>Для правильного расчета необходимо указать, сколько весит вся закваска в пакете (с точностью до 0,1 гр).</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END CALCULATOR */}
                </div>
            </div>

            <Footer />
        </>

    )
}

export default Calculator