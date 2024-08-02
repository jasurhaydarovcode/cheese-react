import React from 'react';
import NavbarTop from '../components/NavbarTop';
import Header from '../components/Header';
import SidebarSecond from '../components/SidebarSecond';
import { cakeImg, phoneCallIconPremium, sheildIconPremium, percentIconPremium, delIconPremium, } from '../imports/images';
import masters from '../API/masters.json';
import Footer from '../components/Footer';

const Card = ({ name, title, description, image }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center m-4 w-1/4">
    <img src={image} alt={name} className="w-32 h-32 mb-4" />
    <h2 className="text-xl font-bold mb-2">{name}</h2>
    <h3 className="text-gray-700 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const PremiumCard = ({ icon, title, description }) => (
  <div className="bg-white p-4 my-10 shadow rounded m-4 flex flex-col items-center w-full md:w-1/3">
    <img src={icon} alt={title} />
    <h3 className="text-xl text-gray-600 font-semibold mb-2">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const advantages = [
    {
      icon: phoneCallIconPremium,
      title: 'Профессиональная информационная поддержка',
      description: 'Профессиональная информационная поддержка, вы можете в любой момент связаться с нами'
    },
    {
      icon: sheildIconPremium,
      title: 'Гарантия качества',
      description: 'Гарантия качества всей продукции, при заказе товара вы можете увидеть сертификат'
    },
    {
      icon: percentIconPremium,
      title: 'Программа лояльности',
      description: 'Программа лояльности, бонусы, акции, лучшие предложения только у нас'
    },
    {
      icon: delIconPremium,
      title: 'Всё в одном месте',
      description: 'Вы покупаете всё в одном месте или оставить запрос и мы привезем под заказ'
    }
  ];

  return (
    <>
      <NavbarTop />
      <Header />

      <div className='container'>
        <div className='flex'>
          <SidebarSecond />
          <div className='p-4 w-full'>
            <div className="flex items-center p-8">
              <div className="w-1/2">
                <h1 className="text-2xl font-bold text-[#492816]">О нашей компании</h1>
                <p className="mt-4 text-lg text-[#492816]">Сыроделие</p>
              </div>
              <div className="w-1/2">
                <img
                  src={cakeImg}
                  alt="Cheese making"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* START CARD MAP */}
            <div>
              <div className="flex flex-wrap justify-around">
                {masters.map((master, index) => (
                  <Card
                    key={index}
                    name={master.name}
                    title={master.title}
                    description={master.description}
                    image={master.image}
                  />
                ))}
              </div>
            </div>
            {/* END CARD MAP */}

            <hr />

            {/* START MAP PREMIUM */}
            <div className="flex flex-wrap justify-around">
              {advantages.map((advantage, index) => (
                <PremiumCard
                  key={index}
                  icon={advantage.icon}
                  title={advantage.title}
                  description={advantage.description}
                />
              ))}
            </div>
            {/* END MAP PREMIUM */}

          </div>
          <hr />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
