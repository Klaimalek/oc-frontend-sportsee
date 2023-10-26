import React from 'react'
import Header from '../../components/header/Header'
import SideNav from '../../components/sideNav/SideNav';
import Dashbord from '../../components/dashboard/Dashbord';
import './home.css';
function Home() {
  return (
    <div className='home'>
    <Header/>
   <div className='home-dashboard'>
       <div className='dashboard-sidenave'><SideNav/></div>
       <div className='dashboard-content'><Dashbord/></div>


   </div>
    </div>
  )
}

export default Home