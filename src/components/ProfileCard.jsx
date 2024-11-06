import React from 'react'
import '../style/profile.css'
import '../style/openPopup.css'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTelegram, FaGlobe, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
function ProfileCard({ proImg, proName, mansab, tel, webTitle, location, day,  onOpen, onClose, name, position}) {
  // Divdan tashqariga bosilganda modalni yopish
  const handleOverlayClick = (e) => {
    // Agar bosilgan element modal ma'lumotlarini o'z ichiga olgan div bo'lmasa, onClose() ni chaqiramiz
    if (e.target.classList.contains('custom-popup-overlay') && !e.target.closest('.custom-popup')) {
      onClose();
    }}
    return (

      <div className='profile'>
        {/* modal oyna */}
        <div>

      {onClose && (
        <div className="custom-popup-overlay" onClick={handleOverlayClick}>
          <div className="custom-popup">
            <div className="custom-popup-header">
              <h2>Vazifalari</h2>
              <button onClick={onClose} className="close-button">X</button>
            </div>
            <div className="custom-popup-body">
              <p><b>{name}</b></p>
              <p>{position}</p>
            </div>
          </div>
        </div>
      )}
    </div>
        {/* modal end */}
        <div className="profile-card">
          <div className="profile-image">
            <img
              src={proImg}
              alt="Alisher Sa’dullayev"
              className="profile-photo"
            />
          </div>
          <div className="profile-info">
            <h2>{proName}</h2>
            <p>{mansab}</p>
            {/* <div className="buttons">
              <button onClick={onOpen} className="btn">bio</button>
            </div> */}
          </div>
          <div className="profile-contact">
            <ul>
              <li><FaPhone /> {tel} (102)</li>
              <li><FaEnvelope /> {webTitle}</li>
              <li className="social-icons">
                <FaInstagram size={25} />
                <FaFacebook size={25} />
                <FaTelegram size={25} />
              </li>
              <li><FaGlobe /> <a href="http://gov.uz/yoshlar">http://gov.uz/yoshlar</a></li>
              <li><FaMapMarkerAlt /> {location}</li>
              <li><FaClock /> {day}</li>
            </ul>
          </div>
        </div>

      </div>
    )
  }

  export default ProfileCard
