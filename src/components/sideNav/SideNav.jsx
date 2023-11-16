import React from 'react'
import './sideNav.css';
import yogaIcon from'../../assets/yogaIcon.svg';
import swimingIcon from'../../assets/swimingIcon.svg'
import veloIcon from'../../assets/veloIcon.svg'
import workoutIcon from'../../assets/workoutIcon.svg'
import Activity from './Activity';
import { Link } from 'react-router-dom';

const icons = [yogaIcon,swimingIcon, veloIcon, workoutIcon,]

function SideNav() {
  return (
    <div className='sideNav'>
    {icons.map((data,i)=> (
      <Link key={i} to="/404">
   <Activity key= {i} image = {data}/>
   </Link>
    ))}
      <small className="copyright">Copyright, Sportsee 2020</small>
    </div>
  )
}
export default SideNav