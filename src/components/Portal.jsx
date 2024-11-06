import React from 'react'
import '../style/portal.css'
import rasm1 from '../image/portal1.webp'
import rasm2 from '../image/portal2.webp'
import rasm3 from '../image/portal3.webp'
import rasm4 from '../image/portal4.webp'
import rasm5 from '../image/portal5.webp'
const links = [
    {
      name: "O'ZBEKISTON RESPUBLIKASI PREZIDENTI MATBUOT XIZMATI",
      imageSrc: rasm1,
      link:"https://www.president.uz/uz"
    },
    {
      name: "O'ZBEKISTON RESPUBLIKASI OLIY MAJLISI QONUNCHILIK PALATASI",
      imageSrc: rasm2,
      link:"https://parliament.gov.uz/"
    },
    {
      name: "O'ZBEKISTON RESPUBLIKASI OLIY MAJLISINING SENATI",
      imageSrc: rasm3,
      link:"http://senat.gov.uz/"
    },
    {
      name: "O'ZBEKISTON RESPUBLIKASI HUKUMATI PORTALI",
      imageSrc: rasm4,
      link:"https://gov.uz/oz"
    },
    {
      name: "MILLIY HUQUQIY INTERNET PORTALI",
      imageSrc: rasm5,
      link:"https://huquqiyportal.uz/"
    },
  ];
function Portal() {
  return (
    <div className='portal_section'>
       <div className="portal_container">
      {links.map((link, index) => (
        <div key={index} className="link-item">
          <img  src={link.imageSrc} alt={link.name} className="icon" />
          <a href={link.link}  target="_blank" rel="noopener noreferrer">{link.name}</a>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Portal
