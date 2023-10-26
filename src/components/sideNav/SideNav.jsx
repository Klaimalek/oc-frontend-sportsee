import React from 'react'
import './sideNav.css';
import yogaIcon from'../../assets/yogaIcon.svg';
import swimingIcon from'../../assets/swimingIcon.svg'
import veloIcon from'../../assets/veloIcon.svg'
import workoutIcon from'../../assets/workoutIcon.svg'
function SideNav() {
  return (
    <div className='sideNav'>
    <div className="sidenav-icons">
        <div className="icon">
          <img src={yogaIcon} alt="yoga" />
        </div>
        <div className="icon">
          <img src={swimingIcon} alt="swimming" />
        </div>
        <div className="icon">
          <img src={veloIcon} alt="cycling" />
        </div>
        <div className="icon">
          <img src={workoutIcon} alt="workout" />
        </div>
      </div>
      <small className="copyright">Copyright, Sportsee 2020</small>
    </div>
  )
}

export default SideNav