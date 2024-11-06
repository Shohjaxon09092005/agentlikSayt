import React, { useEffect, useState } from 'react'
import { URL } from '../url';
import '../style/documentSimple.css'
function DocumentCard() {
   // backend
   const [jam, setJam] = useState([])
   useEffect(() => {
       jamData()
   }, [])
   async function jamData() {
       let fetchJam = await fetch(`${URL}/api/v1/categories/page/?sub_category_slug=atamalar`);
       let json = await fetchJam.json()
       setJam(json)
   }
   const serJam=jam?.map(item=>item.simple_documents).flat()
   
  return (
    <div className='documentCard'>
      {serJam?.map((item, index) => {
    const [boldText, remainingText] = item?.name.split("-");
    return (
      <p key={index}>
        <strong>{boldText?.trim()}</strong> - {remainingText?.trim()}
      </p>
    );
  })}
        
       
      
    </div>
  )
}

export default DocumentCard
