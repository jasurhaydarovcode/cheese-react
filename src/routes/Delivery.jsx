import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import NavbarTop from '../components/NavbarTop'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import SidebarSecond from '../components/SidebarSecond'
import { cardDelivery, cdexLogo } from '../imports/images'

const cards = [
    {
        title: 'Предоплата по счету',
        description: 'При оформлении заказа выберите в поле оплаты "счёт для юридических лиц" и введите реквизиты. Счет на оплату будет выслан на электронную почту.',
        icon: '📝', // You can replace this with an appropriate icon
    },
    {
        title: 'Он-лайн оплата',
        description: 'Вы можете оплатить товар в интернет магазине банковской картой или с использованием платежных систем Яндекс-деньги и Web-money.',
        icon: '💳', // You can replace this with an appropriate icon
    },
    {
        title: 'Наличными при получении',
        description: 'Вы всегда можете оплатить заказ наличными — курьеру, на почте или при получении в транспортной компании.',
        icon: '💵', // You can replace this with an appropriate icon
    },
];

const Card = ({ title, description, icon }) => (
    <div className="w-[300px] rounded overflow-hidden shadow p-4 m-2">
        <div className="text-6xl pl-2 pb-5 flex bg-sariq w-20 rounded-full justify-center"><div className='text-6xl relative top-2 right-1'>{icon}</div></div>
        <div className="font-bold text-blown text-xl mb-2">{title}</div>
        <p className="text-gray-500 leading-8 text-base">{description}</p>
    </div>
);

const Delivery = () => {
    const position = [56.245605, 38.780010];
    return (
        <>
            <Helmet>
                <title>Доставка и оплата | Cheese Making</title>
            </Helmet>

            <NavbarTop />

            <Header />

            <div className='container'>

                <div className='flex'>

                    <SidebarSecond />

                    {/* START DELIVETY */}
                    <div className='pl-10'>
                        <h2 className='text-3xl font-semibold'>Доставка и оплата</h2>
                        <hr />
                        {/* START MAP CARDS */}
                        <div className="flex flex-wrap">
                            {cards.map((card, index) => (
                                <Card key={index} title={card.title} description={card.description} icon={card.icon} />
                            ))}
                        </div>
                        {/* END MAP CARDS */}
                        <div className='py-6'>
                            <hr />
                        </div>

                        {/* START DELIVERY BOTTOM */}
                        <div className='flex items-center justify-between'>
                            {/* START DELIVERY BOTTOM LEFT */}
                            <div>
                                <h2 className='text-blown font-semibold text-3xl pt-8 pb-10'>Способы Доставки:</h2>
                                <h3 className='text-2xl tex-blown font-semibold pt-5 pb-5'>Доставка по Новосибирску</h3>
                                <p className='text-gray-500 font-semibold'>Вы можете забрать товар из нашего <br /> магазина самостоятельно, приехав по <br /> адресу: <br />
                                    <span>г. Новосибирск, ул. Котовского, д. 12/1, офис 1</span>
                                </p>
                                <div className="flex justify-between py-6 items-center">
                                    <img src={cardDelivery} alt="truck" />
                                    <p className='font-semibold text-blown'>Или заказать курьерскую доставку. <br /> Стоимость доставки – <span className='text-sariq'>150 рублей.</span></p>
                                </div>
                            </div>
                            {/* END DELIVERY BOTTOM LEFT */}


                            {/* START DELIVERY BOTTOM RIGHT */}
                            {/* LeafletJS */}
                            <div style={{ height: '300px', width: '500px' }}>
                                <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={position}>
                                        <Popup>
                                            A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                            {/* END DELIVERY BOTTOM RIGHT */}
                        </div>

                        {/* START CDEX*/}
                        <div className='flex py-10 justify-between items-center'>
                            <div>
                                <img src={cdexLogo} alt="cdex logo" />
                            </div>
                            <div>
                                <h2>Доставка по Российской федерации </h2>
                                <p>
                                    Доставка по РФ осуществляется логистическими <br /> службами СДЭК и Почта России. <br />
                                    В любой момент Вы можете отследить путь <br /> своего заказа по трек-номеру.
                                    Приблизительные <br /> сроки и стоимость доставки указаны в таблице <br /> ниже. Окончательная сумма зависит от веса и <br /> способа оплаты заказа (при наложенном <br /> платеже – стоимость доставки выше) и <br /> рассчитывается автоматически в момент <br /> оформления.
                                </p>
                            </div>
                        </div>
                        {/* END CDEX */}

                        {/* END DELIVERY BOTTOM */}
                    </div>
                </div>

                <div className='container justify-center py-10 flex'>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-card border border-border">
                            <thead>
                                <tr className="bg-blown text-white">
                                    <th className="py-2 px-4 text-left"></th>
                                    <th className="py-2 px-4 text-left">Почта России</th>
                                    <th className="py-2 px-4 text-left">Транспортная компания СДЭК</th>
                                    <th className="py-2 px-4 text-left">Пункт выдачи Boxberry</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-sariq-200">
                                    <td className="py-2 px-4">Сроки доставки</td>
                                    <td className="py-2 px-4">Сроки доставки</td>
                                    <td className="py-2 px-4">От 7 дней</td>
                                    <td className="py-2 px-4">2-4 дня</td>
                                </tr>
                                <tr className="bg-muted">
                                    <td className="py-2 px-4">Стоимость доставки</td>
                                    <td className="py-2 px-4">Стоимость доставки</td>
                                    <td className="py-2 px-4">От 200 руб.</td>
                                    <td className="py-2 px-4">От 350 руб. Итоговая сумма будет рассчитана после указания точного адреса</td>
                                </tr>
                                <tr className="bg-sariq-200">
                                    <td className="py-2 px-4">Бесплатная доставка</td>
                                    <td className="py-2 px-4">Бесплатная доставка</td>
                                    <td className="py-2 px-4">При заказе от 2000 руб.</td>
                                    <td className="py-2 px-4">При заказе от 2000 руб.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* END DELIVETY */}
            </div>

            <Footer />
        </>
    )
}

export default Delivery
