import React, { useState } from 'react';
import logo from '../../assets/images/logos/cheeese.png';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import Register from './Register';

const Login = ({ closeLoginModal }) => {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const handleCloseRegisterModal = () => {
        setIsRegisterOpen(false);
        closeLoginModal(false);
    };

    return (
        <>
            {isRegisterOpen && <Register closeRegisterModal={handleCloseRegisterModal} />}
            {!isRegisterOpen && (
                <div className='fixed -top-10 w-full z-30'>
                    <section className="bg-black h-[120vh] bg-opacity-50 dark:bg-gray-900">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className='flex relative items-center justify-between'>
                                    <Link to="/" className="m-6 flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                                        <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
                                        Cheese Making
                                    </Link>
                                    <button onClick={() => closeLoginModal(false)} className='absolute text-2xl right-10'><IoMdClose /></button>
                                </div>
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Вход в аккаунт
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email адрес:</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yourname@mail.com" required />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Запомнить меня</label>
                                                </div>
                                            </div>
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Забыли пароль?</a>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-sariq hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Войти</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            У вас нет профиля? <button type="button" onClick={() => setIsRegisterOpen(true)} className="font-medium text-sariq underline dark:text-sariq-100">Создайте аккаунт</button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}

export default Login;
