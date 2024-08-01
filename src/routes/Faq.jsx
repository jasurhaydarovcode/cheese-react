import React from 'react'
import NavbarTop from '../components/NavbarTop'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Faq = () => {
    return (
        <>
            <Helmet>
                <title>
                    Вопросы и ответы | Cheese Making
                </title>
            </Helmet>


            <NavbarTop />
            <Header />

            <div className='container'>
                {/* START breadcrumb */}
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-sariq-100 dark:text-gray-400 dark:hover:text-white">
                                Главная
                            </Link>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-sariq md:ms-2 dark:text-gray-400">Вопросы и ответы</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* END breadcrumb */}

                <div className='flex'>
                    <Sidebar />

                    {/* START FAQ */}
                    <div className='p-10'>
                        <h2 className='pb-4 text-3xl font-semibold'>Вопросы и ответы</h2>
                        <div>
                            <div className="bg-[#FAE9B3] p-6 rounded shadow-lg">
                                <h2 className="text-xl font-bold text-primary mb-4">Часто задаваемые вопросы</h2>
                                <ol className="list-decimal leading-10 list-inside">
                                    <li className="text-muted-foreground mb-2 text-sariq">Как, и как долго можно хранить моцареллу?</li>
                                    <li className="text-muted-foreground mb-2">Почему на сыре появляется черная плесень?</li>
                                    <li className="text-muted-foreground mb-2">От чего у камамбера появляется горький вкус?</li>
                                    <li className="text-muted-foreground mb-2">Зная, что сычный белок бывает одного вида, тогда каким образом изготавливаются разные виды сыра?</li>
                                    <li className="text-muted-foreground mb-2">Можно приготовить сыр, используя молоко не первой свежести, предварительно прокипятив его?</li>
                                    <li className="text-muted-foreground mb-2">Для чего используется хлорид кальция?</li>
                                    <li className="text-muted-foreground mb-2">Можно приготовить сыр, используя молоко не первой свежести, предварительно прокипятив его?</li>
                                    <li className="text-muted-foreground mb-2">Для чего используется хлорид кальция?</li>
                                </ol>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-4xl mx-auto p-6 bg-white">
                                <h1 className="text-2xl font-bold mb-4 text-blown">01. Как, и как долго можно хранить моцареллу?</h1>
                                <p className="mb-6">
                                    Для хранения моцареллы нужно приготовить рассол 2%: для этого понадобится 20 грамм соли на 1 литр чистой воды, и 10 мл 10% раствора хлористого кальция, и 0,6 мл 9% уксуса. Когда рассол готов, добавьте сыр, закройте крышкой и положите в холодильник. Соленую моцареллу можно хранить одну неделю, а несоленую два, три дня.
                                </p>

                                <h1 className="text-2xl font-bold mb-4 text-blown">02. Почему на сыре появляется черная плесень?</h1>
                                <p className="mb-6">
                                    Сыр покрывается черной плесенью, когда он находится внутри холодильника и рядом с сыром стоят фрукты или овощи. Необходимо класть отдельно данные продукты, но перед этим нужно почистить холодильник, чтобы внутри не осталась плесень.
                                </p>

                                <h1 className="text-2xl font-bold mb-4 text-blown">03. От чего у камамбера появляется горький вкус?</h1>
                                <p className="mb-6">
                                    Причин много, выделяем самые популярные:
                                    <br />1. Плохое качество молока.
                                    <br />2. Возможно корове давали силос, и это изменило вкус молока.
                                    <br />3. Большое количество хлористого кальция добавлено.
                                    <br />4. Есть вероятность, что каким-то образом плесень стала влажной.
                                </p>

                                <h1 className="text-2xl font-bold mb-4 text-blown">04. Знаю, что сычужный белок бывает одного вида, тогда каким образом изготавливаются разные виды сыра?</h1>
                                <p className="mb-6">
                                    Сычужный белок является коагулянтом, он стимулирует свертывание молока и создает сырный комок. Различаются четыре вида коагулянтов.
                                    <br />1. Естественный сычужный белок
                                    <br />2. Вегетарианский ренин
                                    <br />3. Микробиальный фермент
                                    <br />4. Пепсин
                                    <br />Для изготовления сыра с долгой выдержкой, необходимо употребить естественный сычужный белок и вегетарианский ренин. Сычужный белок имеет два вида: жидкий и сухой. Можно использовать и тот и другой, важно правильно использовать – следуйте инструкции, которая указана на упаковке.
                                </p>

                                <h1 className="text-2xl font-bold mb-4 text-blown">05. Можно приготовить сыр, используя молоко не первой свежести, предварительно прокипятив его?</h1>
                                <p>
                                    Для хранения моцареллы нужно приготовить рассол 2%: для этого понадобится 20 грамм соли на 1 литр чистой воды, и 10 мл 10% раствора хлористого кальция, и 0,6 мл 9% уксуса. Когда рассол готов, добавьте сыр, закройте крышкой и положите в холодильник. Соленую моцареллу можно хранить одну неделю, а несоленую два, три дня.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END FAQ */}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Faq