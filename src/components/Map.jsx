import React, { useEffect, useState } from 'react';

import '../style/map.css'
import { URL } from '../url';

function Map() {
    // backend
    const [jam1, setJam1] = useState([])
    useEffect(() => {
        jamData1()
    }, [])
    async function jamData1() {
        let fetchJam1 = await fetch(`${URL}/api/v1/categories/page/?sub_category_slug=%09home`);
        let json = await fetchJam1.json()
        setJam1(json)
    }
    const serJam = jam1?.map(item => item.staffs).flat()

    return (
        <div className='map_uzb'>

            <div className="app-container">
                <div className="map-container">
                    <img width={500} className='map_img' src="https://sirdaryagus.uz/wp-content/uploads/2024/02/Sirdaryo.png" alt="Hududiy bo’limlar" />

                </div>

                <div className="card-container">
                    <div className="header">
                        <p>HUDUDIY BOSHQARMALAR</p>
                        <p>SIRDARYO VILOYATI BOSHQARMASI</p>
                    </div>
               
                            <div key={serJam[0]?.id} className="person-info">
                                <h2>{serJam[0]?.full_name}</h2>
                                <p><strong>Lavozim:</strong> {serJam[0]?.role?.description}</p>
                                <p><strong>Manzil:</strong> {serJam[0]?.address}</p>
                                <p><strong>Telefon:</strong><a href="#!">    {serJam[0]?.phone_number}</a> </p>
                                <p><strong>Qabul kunlari:</strong>{serJam[0]?.reception_times}</p>
                                <p> <a href="#!">{serJam[0]?.email}</a></p>
                            </div>
                   

                </div>

            </div>
        </div>
    )
}

export default Map
