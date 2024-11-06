import React, { useEffect, useState } from 'react';
import '../style/accardionData.css'
import { URL } from '../url';
function AccardionData() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

   
    // backend
  const [jam, setJam] = useState([])
  useEffect(() => {
    jamData()
  }, [])
  async function jamData() {
    let fetchJam = await fetch(`${URL}/api/v1/categories/page/?sub_category_slug=savollar-va-javoblar`);
    let json = await fetchJam.json()
    setJam(json)
  }
  const serJamTables = jam?.map(item => item.common_questions
  ).flat()
  
  return (
    <div className='accardionData'>
  <div className="accordion-container">
            {serJamTables?.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <div className={`accordion-title ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                        <h3>{item?.title}</h3>
                        <span>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
                        <p>{item?.text}</p>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default AccardionData
