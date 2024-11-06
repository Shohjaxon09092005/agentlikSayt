import React from 'react'
import '../style/linkCard.css'
import { FaChevronRight } from "react-icons/fa";
function LinkCard({ icon, title, link }) {
    return (

        <div className="link_container">
            <div className="container">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className="link-card">
                        <div className="icon-container1">
                            <img src={icon} alt={title} className="icon" />
                        </div>
                        <div className="content">
                            <p>{title}</p>
                        </div>
                        <div className="arrow-container">
                            <span className="arrow"><FaChevronRight /></span>
                        </div>
                    </div>
                </a>
            </div>


        </div>

    )
}

export default LinkCard
