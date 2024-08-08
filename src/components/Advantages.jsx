import React from 'react';
import { chatsOne, chatsSecond, chatsThree, chatsFour } from '../imports/images'
import advantages from '../assets/images/avzalliklar/Mask Group.png'

const Advantages = () => {
    return (
        <div className="relative container-100 bg-yellow-200 p-10 flex items-center">
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${advantages})` }}></div>

            <div className='container mx-auto'>
                {/* Overlay for background image */}
                <div className="absolute bg-yellow-200 opacity-75"></div>

                {/* Content */}
                <div className="relative p-16 z-10">
                    <h2 className="text-[60px] text-blown font-bold mb-4">Наши <br /> преимущества</h2>
                    <p className="text-xl text-blown-900 mb-8">Мы лично отвечаем за качество товара и всегда <br /> с радостью поможем Вам с выбором</p>

                    <div className="grid grid-cols-2 gap-4 p-20">
                        <div>
                            <img src={chatsOne} alt="Chat One Logo" />
                        </div>

                        <div>
                            <img src={chatsSecond} alt="Chat Second Logo" />
                        </div>

                        <div>
                            <img src={chatsThree} alt="Chat Second Logo" />
                        </div>

                        <div>
                            <img src={chatsFour} alt="Chat Second Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
