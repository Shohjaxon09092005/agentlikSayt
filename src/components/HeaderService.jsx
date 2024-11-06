import React, { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import '../style/headerService.css'
import logo from '../image/yoshlar.jpg'
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
const sections = [
  {
    title:"Agentlik haqida",
    items: [
     <NavLink to="/about">Agentlik haqida</NavLink>, <NavLink to="/agency">Agentlik tuzilmasi</NavLink>, <NavLink to="/guidence">Rahbariyat</NavLink>,<NavLink to="/departaments">Markaziy apparat</NavLink>, 
     <NavLink to="/subordinate">Tizimdagi tashkilotlar</NavLink>,<NavLink to="/regional">Hududiy boshqarmalar</NavLink>, <NavLink to="/jamoat">Jamoatchilik kengashi</NavLink>  , ]
  },
  {
    title: '- Faoliyat',
    items: [
      <NavLink to='/xalqaro'>Xalqaro hamkorlik</NavLink>, <NavLink to="/yoshlar">Yoshlar siyosati</NavLink>, <NavLink to="/gender">Gender tenglik</NavLink>
    ]
  },
  {
    title: '- Davlat xizmatlari',
    items: [
      <NavLink to="/service">Davlat xizmatlari reestri</NavLink>
    ]
  },
  {
    title: '- Hujjatlar',
    items: [
      <NavLink to="/lawTable">Yoshlarga oid qonun hujjatlari</NavLink>
    ]
  },
  {
    title: "- Ochiq ma'lumotlar",
    items: [
      <NavLink to="/document">Ijtimoiy ahamiyatga oid ma'lumotlar</NavLink>,<NavLink to="/reystr">Ochiq ma'lumotlar reyestri</NavLink>, <NavLink to="/rahbariyat">Rahbariyatning bayonotlari va nutqlari</NavLink>,
      <NavLink to="/budjet">Agentlikning moliyaviy byudjeti to'g'risdagi ochiq ma'lumotlar</NavLink>, <NavLink to="/audit">Ichki audit</NavLink>,
      <NavLink to="/korrupsiya">Korrupsiyaga qarshi amalga oshirilayotgan ishlar</NavLink>,<NavLink to="/vakancy">Mavjud bo'sh ish o'rinlari</NavLink>
    ]
  },
  {
    title: '- Axborot xizmati',
    items: [
      <NavLink to="/news">Yangiliklar</NavLink>, <NavLink to="/matbuot">Matbuot anjumanlari</NavLink>, <NavLink to="/rahbariyat">Rahbariyatning bayonotlari va nutqlari</NavLink>, <NavLink to="/press">Press-relizlar</NavLink>, <NavLink to="/majlis">Majlislar</NavLink>, <NavLink to="/voqea">Voqealar taqvimi</NavLink>,<NavLink to="/atamalar">Blog va atamalar</NavLink>
    ]
  },
  
  {
    title: '- Bog‘lanish',
    items: [
      <NavLink to="/contactInfo">Kontaktlar</NavLink>, <NavLink to="/poll">So'rovnomalar</NavLink>, <NavLink to="/formData">Murojaat qoldirish</NavLink>, <NavLink to="/statistic">Murojaatlar statistikasi</NavLink>,
      <NavLink to="/accardionData">Savollar va javoblar</NavLink>, <NavLink to="/custom">Ma'sul hodim</NavLink>, <NavLink to="/reglament">Ishonch telefoni reglamenti</NavLink>
    ]
  },
 
];
function HeaderService() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setDropdownOpen7] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    setDropdownOpen2(false);
    setDropdownOpen3(false)
    setDropdownOpen4(false)
    setDropdownOpen5(false)
    setDropdownOpen6(false)
    setDropdownOpen7(false)
  };
  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
    setDropdownOpen(false);
    setDropdownOpen3(false)
    setDropdownOpen4(false)
    setDropdownOpen5(false)
    setDropdownOpen6(false)
    setDropdownOpen7(false)
  };
  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
    setDropdownOpen(false);
    setDropdownOpen2(false)
    setDropdownOpen4(false)
    setDropdownOpen5(false)
    setDropdownOpen6(false)
    setDropdownOpen7(false)
  };
  const toggleDropdown4 = () => {
    setDropdownOpen4(!isDropdownOpen4);
    setDropdownOpen(false);
    setDropdownOpen2(false)
    setDropdownOpen3(false)
    setDropdownOpen5(false)
    setDropdownOpen6(false)
    setDropdownOpen7(false)
  };
  const toggleDropdown5 = () => {
    setDropdownOpen5(!isDropdownOpen5);
    setDropdownOpen(false);
    setDropdownOpen2(false)
    setDropdownOpen3(false)
    setDropdownOpen4(false)
    setDropdownOpen6(false)
    setDropdownOpen7(false)
  };
  const toggleDropdown6 = () => {
    setDropdownOpen6(!isDropdownOpen6);
    setDropdownOpen(false);
    setDropdownOpen2(false)
    setDropdownOpen3(false)
    setDropdownOpen5(false)
    setDropdownOpen4(false)
    setDropdownOpen7(false)
  };
  const toggleDropdown7 = () => {
    setDropdownOpen7(!isDropdownOpen7);
    setDropdownOpen(false);
    setDropdownOpen2(false)
    setDropdownOpen3(false)
    setDropdownOpen5(false)
    setDropdownOpen6(false)
    setDropdownOpen4(false)
  };
  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setDropdownOpen(false);
  //     setDropdownOpen2(false);
  //     setDropdownOpen3(false)
  //     setDropdownOpen4(false)
  //     setDropdownOpen5(false)
  //     setDropdownOpen6(false)
  //     setDropdownOpen7(false)
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const options = [ 
    'Elektron hukumat',
    'Xalqaro hamkorlik',
    'Korrupsiyaga qarshi kurash',
    'Yoshlar siyosati',
    'Gender tenglik',
  ];

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSearchTerm(''); // Modal yopilganda qidiruvni tozalaymiz
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  let barModal = useRef()
  function openModal() {
    barModal.current.classList.toggle("sidebar_open")
    barModal.current.classList.add("sidebar2_open")
  }
  function closeBar() {
    barModal.current.classList.remove("sidebar_open")
    barModal.current.classList.remove("sidebar2_open")
  }
  return (
    <div className='header_service'>
     
      <div className="App">
        {isModalOpen && (
          <div onClick={handleCloseModal} className="modal">
            <div className="modal-content">
              <input
                type="text"
                placeholder="Qidiruv..."
                value={searchTerm}
                onChange={handleSearch}
                autoFocus
              />
              <ul>
                {filteredOptions.map((option, index) => (
                  <NavLink><li key={index}>{option}</li></NavLink>
                ))}
              </ul>



              {/* <button >Yopish</button> */}
            </div>
          </div>
        )}
      </div>
      <div className="header_bottom_content">
        <div className="header_left">
        <NavLink to="/" ><img className='logo_yoshlar' src={logo} alt="" /></NavLink> 
        <NavLink to="/" ><h3>O'zbekiston Respublikasi Sirdaryo viloyati Yoshlar Ishlar Agentligi </h3></NavLink>  
        <FaBars onClick={openModal} className='service_burger service_burger_media' size={30} />
        </div>
        <div className="header_right_content">

          <FiSearch onClick={handleOpenModal} className='searchHeader' style={styles.icon} size={40} />
          <div style={styles.container}>
            <div style={styles.iconWrapper}>
              <FiPhone className='phoneHeader' size={40} style={styles.icon} />
              <div style={styles.verticalLine}></div>
            </div>
            <div style={styles.textWrapper}>
              <p className='titleHeader' style={styles.title}>ISHONCH TELEFONI</p>
              <p className='titleHeader1' style={styles.phoneNumber}>1093</p>
              <p className='titleHeader' style={styles.link}><NavLink style={{ color: 'rgb(0, 0, 0)'}} to="/contactInfo">BARCHA RAQAMLAR</NavLink></p>
            </div>
          </div>
        </div>
      </div>
      <div className="serveses">
      <div className="bar_section">
        <div ref={barModal} className="sidebar sidebar2 ">
          <div className="container_bar">
             <button className="close-button">
            <FaTimes onClick={closeBar} size={24} color="#fff" />
          </button>
          <div className="container_modal">
            {sections.map((section, index) => (
              <div key={index} className="section">
                <h3>{section.title}</h3>
                <div className="links">
                  {section.items.map((item, idx) => (
                    <a key={idx} href="#!">{item}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </div>
         
        </div>
      </div>
        <nav className="navbar">

          <ul className="navbar-list">
            <li className="navbar-item" ref={dropdownRef} onClick={toggleDropdown}>
              AGENTLIK HAQIDA <span className="arrow">▼</span>
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li className="dropdown-item"><NavLink to="/about">Agentlik haqida</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/agency">Agentlik tuzilmasi</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/guidence">Rahbariyat</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/departaments">Markaziy apparat</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/subordinate">Tizimdagi tashkilotlar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/regional">Hududiy boshqarmalar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/jamoat">Jamoatchilik kengashi</NavLink></li>
                </ul>
              )}
            </li>
            <li className="navbar-item" ref={dropdownRef} onClick={toggleDropdown2}>FAOLIYAT <span className="arrow">▼</span>
              {isDropdownOpen2 && (
                <ul className="dropdown">
                  <li className="dropdown-item"><NavLink to='/xalqaro'>Xalqaro hamkorlik</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/yoshlar">Yoshlar siyosati</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/gender">Gender tenglik</NavLink></li>

                </ul>
              )}
            </li>
            <li className="navbar-item" ref={dropdownRef} onClick={toggleDropdown3} >DAVLAT XIZMATLARI <span className="arrow">▼</span>
              {isDropdownOpen3 && (
                <ul className="dropdown">
                  <li className="dropdown-item"><NavLink to="/service">Davlat xizmatlari reestri</NavLink></li>


                </ul>
              )}
            </li>
            <li className="navbar-item" ref={dropdownRef} onClick={toggleDropdown4}>HUJJATLAR <span className="arrow">▼</span>
              {isDropdownOpen4 && (
                <ul className="dropdown">
                  <li className="dropdown-item"><NavLink to="/lawTable">Yoshlarga oid qonun hujjatlari</NavLink></li>


                </ul>
              )}
            </li>
            <li className="navbar-item" ref={dropdownRef} onClick={toggleDropdown5}>OCHIQ MA'LUMOTLAR <span className="arrow">▼</span>
              {isDropdownOpen5 && (
                <ul className="dropdown">
                  <li className="dropdown-item"><NavLink to="/document">Ijtimoiy ahamiyatga oid ma'lumotlar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/reystr">Ochiq ma'lumotlar reyestri</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/budjet">Agentlikning moliyaviy byudjeti to'g'risdagi ochiq ma'lumotlar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/audit">Ichki audit</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/korrupsiya">Korrupsiyaga qarshi amalga oshirilayotgan ishlar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/vakancy">Mavjud bo'sh ish o'rinlari</NavLink></li>


                </ul>
              )}
            </li>
            <li className="navbar-item" ref={dropdownRef} onClick={toggleDropdown6}>AXBOROT XIZMATI <span className="arrow">▼</span>
              {isDropdownOpen6 && (
                <ul className="dropdown">
                  <li className="dropdown-item"><NavLink to="/news">Yangiliklar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/matbuot">Matbuot anjumanlari</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/rahbariyat">Rahbariyatning bayonotlari va nutqlari</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/press">Press-relizlar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/majlis">Majlislar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/voqea">Voqealar taqvimi</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/atamalar">Blog va atamalar</NavLink></li>


                </ul>
              )}
            </li>
            <li className="navbar-item" ref={dropdownRef} onClick={toggleDropdown7}>BOG‘LANISH <span className="arrow">▼</span>
              {isDropdownOpen7 && (
                <ul className="dropdown">
                  <li className="dropdown-item"><NavLink to="/contactInfo">Kontaktlar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/poll">So'rovnomalar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/formData">Murojaat qoldirish</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/statistic">Murojaatlar statistikasi</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/accardionData">Savollar va javoblar</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/custom">Ma'sul hodim</NavLink></li>
                  <li className="dropdown-item"><NavLink to="/reglament">Ishonch telefoni reglamenti</NavLink></li>


                </ul>
              )}
            </li>

          </ul>
          <FaBars onClick={openModal} className='service_burger' size={30} />
        </nav>

      </div>


    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '24px', // Icon kattaligi
    color: '#003366', // Icon rangi (ko'k)
    cursor: "pointer"
  },
  verticalLine: {
    height: '50px',
    width: '2px',
    backgroundColor: '#E0E0E0',
    marginLeft: '10px',
  },
  textWrapper: {
    marginLeft: '15px',
  },
 
 
 
};

export default HeaderService
