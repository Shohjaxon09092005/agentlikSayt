import React, { useState } from 'react';

import gerb from '../image/Gerb.webp'
import '../style/leftWindow.css'
function LeftWindow({ icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("O'z");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  return (
    <div className='leftWindow'>
      <div className="language-selector">
        <div className="logo_left">
          {/* Davlat gerbi o'rniga FaGlobe ikonasidan foydalaniladi */}

          <img src={gerb} alt="" height={60} color="#0047ba" />
        </div>

        <div className="language-btn" onClick={toggleDropdown}>
          {selectedLanguage}
        </div>
        <div className="menu-icon_left">
          {/* FaBars – menyu uchun ko'p chiziqli ikon */}
          {icon}
          {/* <FaBars size={30} color="#0047ba" /> */}
        </div>
        {isOpen && (
          <div className="dropdown_left">
            <div onClick={() => selectLanguage("O'z")}>O'zbekcha</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LeftWindow
