import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Font Awesome ikonlari
import { MdVisibility } from 'react-icons/md'; // Material UI ikonlari
import HeaderService from '../components/HeaderService';
import { FaBars } from 'react-icons/fa';
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import '../style/about.css'
import '../style/jamoat.css'
import '../style/korrupsiya.css'
import { URL } from '../url';


function Korrupsiya() {
    const [isVisible, setIsVisible] = useState(false);
    let barModal = useRef()
    function openModal() {
        barModal.current.classList.add("sidebar_open")
        document.body.classList.add('new-background');

    }
    function closeBar() {
        barModal.current.classList.remove("sidebar_open")
        document.body.classList.remove('new-background');
    }
    const sections2 = [
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
    const scrollHome=useRef()
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
     
    } else {
      scrollHome.current.classList.add('scroll-active'); // Asosiy holatga qaytarish
      setIsVisible(false); 
    }
  };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // backend
    const [jam, setJam] = useState([])
    useEffect(() => {
        jamData()
    }, [])
    async function jamData() {
        let fetchJam = await fetch(`${URL}/api/v1/categories/page/?sub_category_slug=korrupsiyaga-qarshi-amalga-oshirilayotgan-ishlar `);
        let json = await fetchJam.json()
        setJam(json)
    }
    const serJam = jam?.map(item => item.simple_documents).flat()
    const serJamTables = jam?.map(item => item.tables).flat()
    const serJamTables_1 = serJamTables?.map(item => item.customtablefield_set).flat()
      const objJam=jam[0]   


    return (
        <div className='korrupsiya'>

            <div className='about'>
                <div className="bar_section">
                    <div ref={barModal} className="sidebar">
                        <div className="container_bar">
                            <div className="close_div">
                                <button onClick={closeBar} className="close-button">
                                    <FaTimes size={24} color="#fff" />
                                </button>
                            </div>

                            <div className="container_modal">
                                {sections2.map((section, index) => (
                                    <div key={index} className="section">
                                        <h3>{section.title}</h3>
                                        <div className="links">
                                            {section.items.map((item, dnx) => (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    key={dnx}
                                                    href={item.link} // Har bir item uchun link
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
                <div className="container">
                <div ref={scrollHome} className={  `home_container ${isVisible ? "menu-visible" : ""}`}>
                <div className="side-menu">
                            <div className="news-list">
                                <LeftWindow icon={<FaBars className="bars_icon_modal" onClick={openModal} size={30} color="#0047ba" />} />
                            </div>
                        </div>
                        <div className="main-content">

                        </div>
                        <div style={{ lineHeight: '1.6' }}>
                            <HeaderService />

                            <h2 className='text_table_content' >Korrupsiyaga qarshi amalga oshirilayotgan ishlar</h2>
                            <div className="jamoat_container">
                                <table className="law-table">
                                    <thead>

                                        <tr>
                                            <th colSpan="4" className="main-header_table">Korrupsiyaviy holatlar haqida xabar berishga mo'ljallangan aloqa kanallari </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {serJamTables_1?.map((law) => (
                                            <tr key={law?.id}>

                                                <td>{law?.title}</td>
                                                <td><a href={law?.link} >{law?.text}</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    
                                </table>

                            </div>
                            <ol>
                                {serJam?.map((item) => {
                                    return (
                                        <li key={item?.id}>
                                            {item?.name} /{' '}
                                            <a href={item?.link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                                                {item?.file_type}
                                            </a>
                                        </li>
                                    )

                                })}


                            </ol>
                            <div className='web_icon' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <FaFacebookF style={{ marginRight: '10px', cursor: 'pointer' }} />
                                    <FaTelegramPlane style={{ cursor: 'pointer' }} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <MdVisibility style={{ marginRight: '5px' }} />
                                    <span>{objJam?.views}</span>
                                </div>
                                <span style={{ fontSize: '14px', color: '#999' }}>Oxirgi yangilanish: {objJam?.created?.slice(0,objJam?.created?.indexOf("T"))}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Korrupsiya
