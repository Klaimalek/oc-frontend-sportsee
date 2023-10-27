import React from 'react'
import './sideNav.css';
import yogaIcon from'../../assets/yogaIcon.svg';
import swimingIcon from'../../assets/swimingIcon.svg'
import veloIcon from'../../assets/veloIcon.svg'
import workoutIcon from'../../assets/workoutIcon.svg'
import Activity from './Activity';
function SideNav() {
  return (
    <div className='sideNav'>
      <Activity image ={yogaIcon}/>
      <Activity image ={swimingIcon}/>
      <Activity image ={veloIcon}/>
      <Activity image ={workoutIcon}/>
      <small className="copyright">Copyright, Sportsee 2020</small>
    </div>
  )
}

export default SideNav