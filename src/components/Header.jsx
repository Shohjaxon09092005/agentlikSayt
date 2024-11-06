import React, { useEffect, useRef, useState } from 'react';
import '../style/header.css'
import { FaTimes } from 'react-icons/fa';

// import { FaArrowRight } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import gerb from '../image/Gerb.webp'
import flagLine from '../image/FlagLine.webp'
import Building from '../image/building.webp'
import { NavLink } from 'react-router-dom';

const sections = [
  {
    title: 'DAVLAT XIZMATLARI',
    items: [
      { title: 'Adliya', link: 'https://my.gov.uz/oz/all-services?id=16' },
      { title: 'Oila va bolalar', link: 'https://my.gov.uz/oz/all-services?id=4' },
      { title: 'Ijtimoiy ta\'minot', link: 'https://my.gov.uz/oz/all-services?id=5' },
      { title: 'Soliqlar', link: 'https://my.gov.uz/oz/all-services?id=6' },
      { title: 'UJKX', link: 'https://my.gov.uz/oz/all-services?id=1' },
      { title: 'Sog\'liqni saqlash va ijtimoiy himoya', link: 'https://my.gov.uz/oz/all-services?id=5' },
      { title: 'Axborot va aloqa', link: 'https://my.gov.uz/oz/all-services?id=9' },
      { title: 'Ta\'lim va yoshlar', link: 'https://my.gov.uz/oz/all-services?id=8' },
      { title: 'Ko\'chmas mulk', link: 'https://my.gov.uz/oz/all-services?id=2' },
      { title: 'Ma\'lumotlar', link: 'https://my.gov.uz/oz/all-services?id=18' },
      { title: 'Madaniyat va sport', link: 'https://my.gov.uz/oz/all-services?id=10' },
      { title: 'Litsenziyalash', link: 'https://my.gov.uz/oz/all-services?id=11' },
      { title: 'Transport', link: 'https://my.gov.uz/oz/all-services?id=3' },
      { title: 'Iqtisodiyot va biznes', link: 'https://my.gov.uz/oz/all-services?id=12' },
      { title: 'Bojxona', link: 'https://my.gov.uz/oz/all-services?id=15' },
      { title: 'Fuqarolik', link: 'https://my.gov.uz/oz/all-services?id=22' }
    ],
  },
  {
    title: 'Foydali havolalar',
    items: [
      { title: 'Ochiq budjet', link: 'https://openbudget.uz/home' },
      { title: 'Ochiq maʼlumotlar', link: 'https://data.egov.uz/' },
      { title: 'Xususiylashtirish', link: 'https://davaktiv.uz/oz/' },
      { title: 'Gender statistika', link: 'https://www.stat.uz/uz/' },
      { title: 'Korrupsiyaga qarshi kurash', link: 'https://anticorruption.uz/uz' },
      { title: 'Huquqiy axborot portali', link: 'https://advice.uz/oz' },
      { title: 'Tadbirkor virtual ofisi', link: 'https://business.gov.uz/' }
    ]
  }
];
function Header() {
  const barModal = useRef();
  const [dateTime, setDateTime] = useState({ date: '', time: '' });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString('ru-RU'); // Sana
      const time = now.toLocaleTimeString('ru-RU'); // Vaqt
      setDateTime({ date, time });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000); // Har soniyada yangilash

    return () => clearInterval(intervalId); // Toza qilish
  }, []);

  const openModal = () => {
    barModal.current.classList.add("sidebar_open");
    document.body.classList.add('new-background');
  };

  const closeBar = () => {
    barModal.current.classList.remove("sidebar_open");
    document.body.classList.remove('new-background');
  };


  return (

    <header className='header_section'>
      <div className="bar_section">
        <div ref={barModal} className="sidebar">
          <div className="container_bar">
            <div className="close_div">
              <button onClick={closeBar} className="close-button">
                <FaTimes size={24} color="#fff" />
              </button>
            </div>

            <div className="container_modal">
              {sections.map((section, index) => (
                <div key={index} className="section">
                  <h3>{section.title}</h3>
                  <div className="links">
                    {section.items.map((item, dnx) => (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        key={dnx}
                        href={item.link}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="header__wrapper">
        <div className="header_home">
          <NavLink to="https://gov.uz/oz">
            <img width={100} className='gerbImg' src={gerb} alt="Gerb" />
          </NavLink>
          <img width={3.5} src={flagLine} alt="Flag line" />
          <NavLink to="https://gov.uz/oz">
            <h3>O'zbekiston Respublikasi Hukumat portali</h3>
          </NavLink>
          <img className='building' src={Building} alt="Building" />
        </div>
        <div className="header_right">
          <h5>{dateTime.time}</h5>
          <p>{dateTime.date}</p>
        </div>
        <FaBars onClick={openModal} className='bars' size={40} color="blue" />
      </div>
    </header>
  )
}

export default Header
