import React, { useEffect, useState } from 'react'
import '../style/footer.css'
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from
  "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { URL } from '../url';
function Footer() {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    navigate(link);
    window.scrollTo(0, 0); // Sahifani tepa qismiga o'tkazish
  };
  const [footer,setFooter]=useState([])
  useEffect(()=>{
    footerData()
  },[])
  async function footerData() {
    let fetchFooter=await fetch(`${URL}/api/v1/categories/page/?sub_category_slug=%09footer`)
    let json= await fetchFooter.json()
    setFooter(json)
    
  }
  const tebleFooter=footer?.map(item=>item.tables).flat()
  const tebleFooterWeb=tebleFooter?.map(item=>item.customtablefield_set).flat()
  const tebleFooter1=tebleFooterWeb[0]
  const tebleFooter2=tebleFooterWeb[1]
  const tebleFooter3=tebleFooterWeb[2]
  const tebleFooter4=tebleFooterWeb[3]
  const tebleFooter5=tebleFooterWeb[4]
  const fullFooter=footer[0]

  
  return (
    <footer className='footer'>
      <footer style={styles.footer}>
        <div className='menu_list' style={styles.menu}>
          <div onClick={() => handleNavigation("/about")} className='menu_tag' >AGENTLIK HAQIDA</div>
          <div onClick={() => handleNavigation("/xalqaro")} className='menu_tag' >FAOLIYAT</div>
          <div onClick={() => handleNavigation("/service")} className='menu_tag' >DAVLAT XIZMATLARI</div>
            <div onClick={() => handleNavigation("/lawTable")} className='menu_tag' >HUJJATLAR</div>
            <div onClick={() => handleNavigation("/document")} className='menu_tag' >OCHIQ MA'LUMOTLAR</div>
            <div onClick={() => handleNavigation("/news")} className='menu_tag' >AXBOROT XIZMATI</div>
            <div onClick={() => handleNavigation("/contactInfo")} className='menu_tag' >BOG'LANISH</div>
          </div>
          <div className="all_icon">
            <div style={styles.mainText}>
              <h3 onClick={() => handleNavigation("/")} style={{cursor:"pointer"}}>{tebleFooter1?.title}</h3>
              <p>{tebleFooter1?.text}</p>

            </div>
            <div style={styles.socialIcons}>
              <a href={tebleFooter2?.link}><i className="fa fa-instagram"> <FaInstagram size={30} style={{ marginRight: "20px", color: "#fff" }} /></i></a>
              <a href={tebleFooter3?.link}><i className="fa fa-facebook"><FaFacebook size={30} style={{ marginRight: "20px", color: "#fff" }} /></i></a>
              <a href={tebleFooter4?.link}><i className="fa fa-telegram"><FaTelegram size={30} style={{ marginRight: "20px", color: "#fff" }} /></i></a>
              <a href={tebleFooter5?.link}><i className="fa fa-youtube"><FaYoutube size={30} style={{ marginRight: "20px", color: "#fff" }} /></i></a>
            </div>
          </div>

          <div style={styles.bottomText}>
            <p className='text_p'>&copy; 2001-{fullFooter?.created.slice(0,4)} Barcha huquqlar himoyalangan</p>
            <p>Oxirgi yangilanish: {fullFooter?.created.slice(0,10)} {fullFooter?.created.slice(11,19)}</p>
          </div>

      </footer>


    </footer>
  )
}
const styles = {
  footer: {
    backgroundColor: '#003c96',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
  },


  mainText: {
    marginBottom: '20px',
  },
  bottomText: {
    marginBottom: '20px',
    fontSize: '12px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
};

export default Footer
