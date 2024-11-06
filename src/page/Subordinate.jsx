import React, { useEffect, useRef, useState } from 'react'
import '../style/departaments.css'
import '../style/subordinate.css'
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Font Awesome ikonlari
import { MdVisibility } from 'react-icons/md'; // Material UI ikonlari
import { FaBars } from 'react-icons/fa';
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import HeaderService from '../components/HeaderService';
import ProfileCard from '../components/ProfileCard';
import { URL } from '../url';
function Subordinate() {
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
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [isOpen, setIsOpen] = useState(null);

    const toggleAccordion = (index) => {
        if (isOpen === index) {
            setIsOpen(null); // Yopish
        } else {
            setIsOpen(index); // O'chish yoki ochish
        }
    };

   
        // backend
        const [sub,setSub]=useState([])
        useEffect(()=>{
            subData()
        },[])
        async function subData(){
            let fetchSub=await fetch(`${URL}/api/v1/categories/page/?sub_category_slug=tizimdagi-tashkilotlar`);
            let json= await fetchSub.json()
            setSub(json)
        }
        const staffsSub=sub?.map(item=>item.staffs).flat()
        const objSub=sub[0]
        
        
    return (
        <div className='subor'>
            <div className='departaments'>

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
                    <div className={`home_container ${isVisible ? "menu-visible" : ""}`}>
                        <div className="side-menu">
                            <div className="news-list">
                                <LeftWindow icon={<FaBars className="bars_icon_modal" onClick={openModal} size={30} color="#0047ba" />} />
                            </div>
                        </div>
                        <div className="main-content">

                        </div>
                        <div style={{ lineHeight: '1.6' }}>
                    <HeaderService />

                            <h3 className='accardion_text'>Tizimdagi tashkilotlar</h3>
                            <div className="accordion-section">
                                { staffsSub.map((item, index) => (
                                    <div key={item?.id} className="accordion-item">
                                        <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                            <h2 className='dep_text'>{item?.role?.description} <span>{isOpen === index ? '▲' : '▼'}</span></h2>

                                        </div>
                                        {isOpen === index && (
                                            <ProfileCard proName={item?.full_name} proImg={item?.avatar} tel={item?.phone_number} mansab={item?.role?.description} webTitle={item?.email} location={item?.address} day={item?.reception_times} />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className='web_icon' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px' }}>
                                <div>
                                    <FaFacebookF style={{ marginRight: '10px', cursor: 'pointer' }} />
                                    <FaTelegramPlane style={{ cursor: 'pointer' }} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <MdVisibility style={{ marginRight: '5px' }} />
                                    <span>{objSub?.views}</span>
                                </div>
                                <span style={{ fontSize: '14px', color: '#999' }}>Oxirgi yangilanish: {objSub?.created?.slice(0,10)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subordinate
