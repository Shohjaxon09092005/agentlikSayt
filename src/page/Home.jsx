import React, { useState, useEffect, useRef } from "react";
import '../style/home.css'
import HeaderService from "../components/HeaderService";
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from
  "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import ibrat from '../image/ibrat_img.webp'
import ibrat_logo from '../image/ibrat_logo.webp'
import Map from "../components/Map";
import Weather from "../components/Weather";
import Portal from "../components/Portal";
import LeftWindow from "../components/LeftWindow";
import { FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";
import { URL } from "../url";
import axios from 'axios';

// Faoliyatlar yo‘nalishi start
const sections = [
  { id: 1, navLink: "/hukumat", name: "ELEKTRON HUKUMAT" },
  { id: 2, navLink: "/xalqaro", name: "XALQARO HAMKORLIK" },
  { id: 3, navLink: "/korrupsiyaNews", name: "KORRUPSIYAGA QARSHI KURASH" },
  { id: 4, navLink: "/yoshlar", name: "YOSHLAR SIYOSATI" },
  { id: 5, navLink: "/gender", name: "GENDER TENGLIK" },
];

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
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
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

  //Work section

  
  let barModal = useRef()
  function openModal() {
    barModal.current.classList.add("sidebar_open")
    document.body.classList.add('new-background');

  }
  function closeBar() {
    barModal.current.classList.remove("sidebar_open")
    document.body.classList.remove('new-background');
  }
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
    window.scrollTo(0, 0); // Sahifani tepa qismiga o'tkazish
  };

  // backend
  const [jam, setJam] = useState([])
  useEffect(() => {
    jamData()
  }, [])
  async function jamData() {
    let fetchJam = await fetch(`${URL}/api/v1/categories/page/?sub_category_slug=%09home`);
    let json = await fetchJam.json()
    setJam(json)
  }
  const serJam = jam?.map(item => item.news).flat()

  const [pollData, setPollData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [voted, setVoted] = useState(false);
  const [voteMessage, setVoteMessage] = useState('');

  useEffect(() => {
    // API ga GET so'rov yuborish
    axios.get('https://agentlik-backend.onrender.com/api/v1/polls/')
      .then(response => {
        setPollData(response.data[0]); // Faqat birinchi so'rovnoma olinyapti
      })
      .catch(error => {
        console.error("Xatolik yuz berdi:", error);
      });
  }, []);
  console.log(pollData);

  const handleVote1 = () => {
    if (selectedOption) {
      // PUT so'rov orqali ovozlar sonini yangilash
      axios.put(`https://agentlik-backend.onrender.com/api/v1/polls/${pollData.id}`, null, {
        params: {
          choice_id: selectedOption
        }
      })
        .then(() => {
          const updatedPollData = { ...pollData };
          const selectedChoice = updatedPollData.choices.find(choice => choice.id === parseInt(selectedOption));
          selectedChoice.clicks += 1;
          setPollData(updatedPollData);
          setVoted(true);
          setVoteMessage("Ovoz berganingiz uchun rahmat!");
        })
        .catch(error => {
          console.error("Ovoz berishda xatolik yuz berdi:", error);
          setVoteMessage("Ovoz berishda xatolik yuz berdi. Qayta urinib ko'ring.");
        });
    }
  };

  const calculatePercentage = (clicks) => {
    const totalClicks = pollData.choices.reduce((sum, choice) => sum + choice.clicks, 0);
    return totalClicks ? ((clicks / totalClicks) * 100).toFixed(2) : 0;
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  if (!pollData) return <p>Yuklanmoqda...</p>;

  return (

    <div className="home_page">
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

          <div className="all_home">
            <HeaderService />

            <div className="home_news">
              <h4>Yangiliklar</h4>

              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} style={{ marginRight: "20px", color: "#4267B2" }} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} style={{ marginRight: "20px", color: "#E4405F" }} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={30} style={{ marginRight: "20px", color: "#FF0000" }} />
                </a>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                  <FaTelegram size={30} style={{ marginRight: "20px", color: "#0088cc" }} />
                </a>
              </div>


            </div>

            <div className="App_home">
              <div className="main-section">
                {serJam?.slice(0, 2)?.map((item, index) => {
                  const createdDate = new Date(item.created);
                  const dateNumber = createdDate.getDate();
                  const monthNumber = createdDate.getMonth(); // Oyni raqam sifatida olish (0 = Yanvar)
                  const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
                  return (
                    <div className="news-item" key={index}>
                      <NavLink to={`/news/${item?.id}`}><img src={item?.images?.file} alt={item?.title} className="news-image" /></NavLink>
                      <div className="news-content">
                        <div className="news-date">
                          <span>{dateNumber}</span> {/* Oy raqamini chiqaramiz */}
                          <small>{monthNames[monthNumber]}</small>
                        </div>
                        <div className="news-info">
                          <a href={`/news/${item?.id}`} className="news-title">{item?.title}</a>
                          <p className="news-description">{item?.text?.substring(0, 100) + "..."}</p>
                          <span className="news-time">{item?.created?.slice(0, item?.created?.indexOf("T"))}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="side-section">
                {serJam?.slice(2, 7).map((event, index) => {
                  const eventDate = new Date(event.created)
                  const dateNumberEvent = eventDate.getDate()
                  const monthNumber = eventDate.getMonth(); // Oyni raqam sifatida olish (0 = Yanvar)
                  const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
                  return (
                    <div className="event-item" key={index}>
                      <NavLink to={`/news/${event?.id}`} ><span className="event-date">{dateNumberEvent} <span className="event-date">{(monthNames[monthNumber]).slice(0, 3)}</span> </span></NavLink>
                      <p className="event-text">{event?.title}</p>
                    </div>
                  )
                })}


              </div>


            </div>
            <div onClick={() => handleNavigation("/news")} className="hover-link">
              <p style={{ cursor: "pointer" }} className="hover_text">Barcha yangiliklar</p> <FaArrowRight />
            </div>
            <div className="ibrat_all_img">
              <a href="https://ibratfarzandlari.uz/" target="_blank" rel="noopener noreferrer"> <img className="ibrat_img" src={ibrat} alt="IbratAcademy" /></a>
            </div>
            <div className="activity">
              <div style={styles.container}>
                <h2 style={styles.heading}>FAOLIYATLAR YO‘NALISHI</h2>
                <div className="grid_container" style={styles.gridContainer}>
                  {sections.map((section) => (


                    <div onClick={() => handleNavigation(section.navLink)} className="activity_card" key={section.id} style={styles.card}>
                      <span className="span__activity">{section.name}</span>
                      <span style={styles.arrow}><FaArrowRight /></span>
                    </div>


                  ))}
                </div>
              </div>
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => handleNavigation("/news")} className="hover-link">
              <p className="hover_text">Batafsil</p> <FaArrowRight />
            </div>
            <div className="interactive_services">
              <div className="section interactive-services">
                <div className="text_service">
                  <h3>INTERAKTIV XIZMATLAR</h3>
                  <NavLink onClick={() => handleNavigation("/service")} className="hover-link">
                    <p className="hover_text">Barcha xizmatlar</p> <FaArrowRight />
                  </NavLink>
                </div>
                <NavLink onClick={() => handleNavigation("/service")}>
                  <div className="box">
                    <span>DAVLAT XIZMATLARI REESTRI</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div></NavLink>
              </div>
              <div className="section events-calendar">
                <div className="text_service">
                  <h3>VOQEALAR TAQVIMI</h3>
                  <NavLink onClick={() => handleNavigation("/voqea")} className="hover-link">
                    <p className="hover_text">Barcha voqealar</p> <FaArrowRight />
                  </NavLink>
                </div>
                <div className="empty-box">
                  <p>Ma'lumot yo'q</p>
                </div>
              </div>
              <div className="section useful-links">
                <div className="text_service">
                  <h3>FOYDALI HAVOLALAR</h3>
                  <div style={{ cursor: "pointer" }} onClick={() => handleNavigation("/linkApp")} className="hover-link">
                    <p className="hover_text">Barcha havolalar</p> <FaArrowRight />
                  </div>
                </div>
                <a href="https://my.gov.uz/oz" target="_blank" rel="noopener noreferrer">
                  <div className="box">
                    <span>YAGONA INTERAKTIV DAVLAT XIZMATLARI PORTALI</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div>
                </a>
                <a href="https://data.egov.uz/" target="_blank" rel="noopener noreferrer">
                  <div className="box">
                    <span>OCHIQ MA'LUMOTLAR</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div>
                </a>
                <a href="https://lex.uz/uz/" target="_blank" rel="noopener noreferrer">
                  <div className="box">
                    <span>LEX.UZ</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div>
                </a>
                <a href="https://gov.uz/oz/fvv" target="_blank" rel="noopener noreferrer">
                  <div className="box">
                    <span>AHOLINI FAVQULODDA VAZIYATLARDA TO'G'RI HARAKAT QILISHGA O'RGATUVCHI</span>
                    <span className="arrow"><FaArrowRight /></span>
                  </div>
                </a>

              </div>


            </div>
            <div className="container_work">
              <div className="section2">
                <h2>BO'SH ISH O'RINLARI</h2>
                <div className="no-info">
                  <p>Ma'lumot yo'q</p>
                </div>
                <a href="https://ish.mehnat.uz/company/company/207323290" target="_blank" rel="noopener noreferrer" className="link">
                  Bo'sh ish o'rinlari
                  <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </a>
              </div>

              <div className="section2 documents">
                <h2>HUJJATLAR</h2>
                <ul>
                  <a style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }} href="https://lex.uz/uz/docs/-7121954" target="_blank" rel="noopener noreferrer" >
                    <li>

                      O'zbekiston Respublikasining Prezidenti qarori NPQ-330. Qabul
                      qilingan sana: 23.09.2024

                    </li>
                  </a>
                  <a style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }} href="https://lex.uz/uz/docs/-7120577" target="_blank" rel="noopener noreferrer" >
                    <li>

                      O'zbekiston Respublikasi kambag'allikni qisqartirish va bandlik
                      haqidagi farmon. Sana: 20.09.2024

                    </li>
                  </a>
                  <a style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }} href="https://lex.uz/uz/docs/-7120575" target="_blank" rel="noopener noreferrer" >
                    <li>

                      Prezident farmoni: soliq va bojxona imtiyozlari haqida. Sana:
                      18.09.2024

                    </li>
                  </a>
                </ul>
                <a href="https://lex.uz/uz/search/nat?body_id=819" target="_blank" rel="noopener noreferrer" className="link">
                  Barcha hujjatlar
                  <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </a>
              </div>

              <div className="section2 survey">
                <h2>SO'ROVNOMALAR</h2>

                {!voted ? (
                  <div className="poll">
                    <h3>{pollData.question}</h3>
                    <form>
                      {pollData.choices.map(choice => (
                        <div style={{display:"flex", alignItems:"center", gap:"6px",marginTop:"10px"}} key={choice.id}>
                          <label style={{marginTop:"7px"}} htmlFor={`choice-${choice.id}`}>{choice.answer}</label>
                          <input
                            type="radio"
                            id={`choice-${choice.id}`}
                            name="poll"
                            value={choice.id}
                            onChange={handleOptionChange}
                          />
                          
                        </div>
                      ))}
                      <button style={{marginTop:"30px"}} type="button" onClick={handleVote1} disabled={!selectedOption}>Ovoz berish</button>
                    </form>
                  </div>
                ) : (
                  <div  className="results">
                    <h3>{pollData.question}</h3>
                    {pollData.choices.map(choice => (
                      <div style={{display:"flex",gap:"10px"}} key={choice.id}>
                        <p>{choice.answer}</p>
                        <div className="progress-bar" style={{ height:"20px", borderRadius:"10px",paddingLeft:"5px", width:"100%", backgroundColor: 'orange' }}>
                          {calculatePercentage(choice.clicks)}%
                        </div>
                      </div>
                    ))}
                    <p>Barcha ovozlar: {pollData.choices.reduce((sum, choice) => sum + choice.clicks, 0)}</p>
                    <p>{voteMessage}</p>
                  </div>
                )}
                 <a href="http://localhost:3000/poll" target="_blank" rel="noopener noreferrer" className="link">
                  Barcha so'rovnomalar
                  <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </a>
              </div>
            </div>
            <div className="projects">
              <h2>AMALGA OSHIRILAYOTGAN LOYIHALAR</h2>
              <div className="project-item">
                <div className="line"></div>
                <div className="project">
                  <img src={ibrat_logo} alt="IBRAT Logo" className="project-logo" />
                  <a href="https://ibratfarzandlari.uz/" target="_blank" rel="noopener noreferrer"> <p>"IBRAT" Farzandlari</p></a>
                </div>
                <div className="line"></div>
              </div>
            </div>
            <Map />
            <Weather />
          </div>



        </div>


      </div>
      <Portal />




    </div>
  )
}
const styles = {
  container: {
    // textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#004094",

  },




  arrow: {
    marginLeft: "10px",
  },
};


export default Home
