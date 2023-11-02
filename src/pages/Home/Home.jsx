import React from 'react'
import Header from '../../components/header/Header'
import SideNav from '../../components/sideNav/SideNav';
import Dashbord from '../../components/dashboard/Dashbord';
import './home.css';
import Banner from './../../components/banner/Banner';
function Home() {
  return (
    <div className='home'>
    <Header/>
   <div className='home-dashboard'>
       <div className='dashboard-sidenave'><SideNav/></div>
       <div className='dashboard-content'>
       <Banner />
       <Dashbord/>
       </div>


   </div>
    </div>
  )
}

export default Home