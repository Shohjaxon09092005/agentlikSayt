import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import Home from './page/Home';
import AboutHome from './page/AboutHome';
import Agency from './page/Agency';
import Guidance from './page/Guidance';
import Departaments from './page/Departaments';
import Subordinate from './page/Subordinate';
import Regional from './page/Regional';
import JamoatKengash from './page/JamoatKengash';
import XalqaroNew from './page/XalqaroNew';
import Yoshlar from './page/Yoshlar';
import Gender from './page/Gender';
import Service from './page/Service';
import LawTable from './page/LawTable';
import Document from './page/Document';
import Reystr from './page/Reystr';
import Budjet from './page/Budjet';
import Audit from './page/Audit';
import Korrupsiya from './page/Korrupsiya';
import Vakancy from './page/Vakancy';
import AppNews from './page/AppNews';
import Matbuot from './page/Matbuot';
import RahbariyatNews from './components/RahbariyatNews';
import PressNews from './page/PressNews';
import MajlisNews from './page/MajlisNews';
import VoqealarNews from './page/VoqealarNews';
import Atamal from './page/Atamal';
import ContactInfo from './page/ContactInfo';
import AppPoll from './page/AppPoll';
import AppForm from './page/AppForm';
import AppStatistic from './page/AppStatistic';
import AppAccardionData from './page/AppAccardionData';
import TableCustom from './page/TableCustom';
import Reglament from './page/Reglament';
import Elektron from './page/Elektron';
import KorrupsiyaNews from './page/KorrupsiyaNews';
import LinkApp from './page/LinkApp';
import NewsAboutText from './page/NewsAboutText';


const appRouter = createBrowserRouter([{
  element: <App />,
  path: '/',
  errorElement: <ErrorPage />,
  children: [{
    path: '/',
    element: <Home />
  },
  {
    path: "/about",
    element: <AboutHome />
  },
  {
    path: "/agency",
    element: <Agency />
  },
  {
    path: "/guidence",
    element: <Guidance/>
  },
  {
    path: "/departaments",
    element: <Departaments/>
  },
  {
    path: "/subordinate",
    element: <Subordinate/>
  },
  {
    path: "/regional",
    element: <Regional/>
  },
  {
    path: "/jamoat",
    element:<JamoatKengash/> 
  },
  {
    path: "/xalqaro",
    element:<XalqaroNew/> 
  },
  {
    path: "/yoshlar",
    element:<Yoshlar/> 
  },
  {
    path: "/gender",
    element:<Gender/> 
  },
  {
    path: "/hukumat",
    element:<Elektron/> 
  },
  {
    path: "/korrupsiyaNews",
    element:<KorrupsiyaNews/> 
  },
  {
    path: "/service",
    element:<Service/> 
  },
  {
    path: "/lawTable",
    element:<LawTable/> 
  },
  {
    path: "/document",
    element:<Document/> 
  },
  {
    path: "/reystr",
    element:<Reystr/> 
  },
  {
    path: "/budjet",
    element:<Budjet/> 
  },
  {
    path: "/audit",
    element:<Audit/> 
  },
  {
    path: "/korrupsiya",
    element:<Korrupsiya/> 
  },
  {
    path: "/vakancy",
    element:<Vakancy/> 
  },
  {
    path: "/news",
    element:<AppNews/>
  },
  {
    path:"/news/:ID",
    element:<NewsAboutText/>
  },
  {
    path: "/matbuot",
    element:<Matbuot/>
  },
  {
    path: "/rahbariyat",
    element:<RahbariyatNews/>
  },
  {
    path: "/press",
    element:<PressNews/>
  },
  {
    path: "/majlis",
    element:<MajlisNews/>
  },
  {
    path: "/voqea",
    element:<VoqealarNews/>
  },
  {
    path: "/atamalar",
    element:<Atamal/>
  },
  {
    path: "/contactInfo",
    element:<ContactInfo/>
  },
  {
    path: "/poll",
    element:<AppPoll/>
  },
  {
    path: "/formData",
    element:<AppForm/>
  },
  {
    path: "/statistic",
    element:<AppStatistic/>
  },
  {
    path: "/accardionData",
    element:<AppAccardionData/>
  },
  {
    path: "/custom",
    element:<TableCustom/>
  },
  {
    path: "/reglament",
    element:<Reglament/>
  },
  {
    path: "/linkApp",
    element:<LinkApp/>
  },
  
 

  ]
},

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

