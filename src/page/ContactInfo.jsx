import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Font Awesome ikonlari
import { MdVisibility } from 'react-icons/md'; // Material UI ikonlari
import HeaderService from '../components/HeaderService';
import { FaBars } from 'react-icons/fa';
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import '../style/about.css'
import '../style/jamoat.css'
import '../style/contactInfo.css'
import { URL } from '../url';
function ContactInfo() {
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
    let fetchJam = await fetch(`${URL}/api/v1/categories/page/?sub_category_slug=kontakt-malumotlar`);
    let json = await fetchJam.json()
    setJam(json)
  }
  const serJamTables = jam?.map(item => item.tables).flat()
  const serJamTables_1 = serJamTables?.map(item => item.customtablefield_set).flat()
  const objJam = jam[0]
  console.log(serJamTables_1);
    return (
        <div className='contact'>

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

                            <h2 className='text_table_content' >Kontakt ma'lumotlar</h2>
                            <div className="jamoat_container">
                                <div className="contact-info">
                                    <ul>
                                        {serJamTables_1?.map((item)=>{
                                            return(
                                                <li key={item?.id}><strong>{item?.head?.title}</strong>{item?.text}</li>
                                        
                                            )
                                        })}
                                        
                                        <li><strong>Ijtimoiy tarmoqlar:</strong>
                                            <a href="https://www.instagram.com/yoshlaragentligi/">Instagram,</a>
                                            <a href="https://www.facebook.com/yoshlaragentligirasmiy/">Facebook,</a>
                                            <a href="https://t.me/yoshlaragentligi?start=hvzk7m1">Telegram,</a>
                                            <a href="https://www.youtube.com/channel/UCxE5i6ogttXt5-AKUpJn_jA/featuredz">You Tube</a>
                                        </li>
                                        
                                    </ul>


                                    <h3>Yo'l xaritasi</h3>
                                    <iframe
                                        title="location-map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.7028370217383!2d69.27127571523885!3d41.3094796792727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4c1d6e05cb7%3A0xb32ba36f55b2e0e1!2zMTAwMTEsIFRhc2hrZW50LCBOb3ZvaXkgQXZlbnVlLCDQm9C-0YHRgtC40Y8!5e0!3m2!1sen!2s!4v1696153872342!5m2!1sen!2s"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>

                            </div>
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

export default ContactInfo
