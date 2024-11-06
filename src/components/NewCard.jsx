import React from 'react'
import '../style/newCard.css'
import { NavLink } from 'react-router-dom'
function NewCard({image,title,date,number ,views,NavIdNews,newsNavTitle}) {
  return (
    <div className='newCard'>
          <div className="biznes-marafon-container">
      <div className="image-container">
        {/* Tasvir */}
       <NavLink to={NavIdNews}><img 
          src={image} 
          alt="Biznes Marafon" 
          className="biznes-image"
        /></NavLink> 
        {/* Yozuvlar tasvir ustida chiqadi */}
        <div className="overlay">
         <NavLink to={newsNavTitle}><h2 className="title">{title}</h2></NavLink> 
          <div className="date-views">
            <span className="date">{date}</span>
            <span className="views">{views}
              <i className="eye-icon">👁</i> {number}
            </span>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default NewCard
