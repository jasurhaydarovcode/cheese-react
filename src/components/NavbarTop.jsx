import React from 'react'
import { useState } from 'react'
import { CiLocationOn, GoClock, FaRegUserCircle } from '../imports/react-icons'
import { Link } from 'react-router-dom'
import Login from './Login'

const NavbarTop = () => {
    const [openLogin, setOpenLogin] = useState(false)
    return (
        <>
            {openLogin && <Login closeLoginModal={setOpenLogin} />}
            <div className='border p-2'>
                <div className='container mx-auto'>
                    <div className='flex justify-between'>
                        {/* START NavBarTop LEFT */}
                        <div className='flex gap-8'>
                            <div className='flex items-center gap-2'>
                                <span className='text-xl'><CiLocationOn /></span>
                                <span className='flex items-center gap-2'>
                                    <span>Ваш город:
                                        <select className='ml-2'>
                                            <option value="ru">Москва</option>
                                            <option value="uzb">Uzbekcha</option>
                                        </select>
                                    </span>
                                </span>
                            </div>

                            <div className='flex items-center gap-3'>
                                <span>
                                    <GoClock />
                                </span>
                                <span>Пн-Пт 9:00 - 19:00</span>
                            </div>
                        </div>
                        {/* END NavBarTop LEFT */}

                        {/* START NavBarTop RIGHT */}
                        <div>
                            <ul className='flex gap-7'>
                                <li>
                                    <Link to="">О компании</Link>
                                </li>
                                <li>
                                    <Link to="">Преимущества</Link>
                                </li>
                                <li>
                                    <Link to="">
                                        Акционные товары
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className='flex items-center gap-2'>
                                        <span><FaRegUserCircle /></span>
                                        <button onClick={() => { setOpenLogin(true) }}>Войти в аккаунт</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* END NavBarTop RIGHT */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarTop