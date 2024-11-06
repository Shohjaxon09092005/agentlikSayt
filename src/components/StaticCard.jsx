import React, { useEffect, useState } from 'react'
import '../style/statistic.css'
import { URL } from '../url';

function StaticCard() {
     // backend 
     const [statis,setStatis]=useState([])
     useEffect(()=>{
       statData()
     },[])
     async function statData(){
       let fetchStat=await fetch(`${URL}/api/v1/appeals/statistcs/`)
       let json= await fetchStat.json()
       setStatis(json)
     }
     
  return (
    <div className="table-container_static">
    <h2>2024-yil davomida kelib tushgan murojaatlar statistikasi</h2>
    <table className="statistics-table">
        <thead>
            <tr>
                <th>Kelib tushgan murojaatlar</th>
                <th>Jarayonda</th>
                <th colSpan="5">Ijro holati</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Ijobiy hal qilingan</th>
                <th>Huquqiy ma'lumot berilgan</th>
                <th>Tushuntirish berilgan</th>
                <th>Rad etilgan</th>
                <th>Boshqa holatlar bo'yicha</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{statis?.["Kelib tushgan murojaatlar"]}</td>
                <td>{statis?.Jarayonda}</td>
                <td>{statis?.["Ijro holati"]?.["Ijobiy hal qilinga"]}</td>
                <td>{statis?.["Ijro holati"]?.["Huquqiy ma'lumot berilgan"]}</td>
                <td>{statis?.["Ijro holati"]?.["Tushuntirish berilgan"]}</td>
                <td>{statis?.["Ijro holati"]?.["Rad etilgan"]}</td>
                <td>{statis?.["Ijro holati"]?.["Boshqa holatlar bo'yicha"]}</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default StaticCard
