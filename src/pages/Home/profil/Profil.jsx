import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/header/Header';
import SideNav from '../../../components/sideNav/SideNav';
import'./profil.css'
function Profil() {
  const navigate = useNavigate();
  return (
    <div className="user-selection-container">
      <Header />
      <SideNav />
      <h1 className='title'> Se connecter en tant que : </h1>
      <nav className="user-selection">
        <ul className="user-selection-list">
          <li className="item-list" onClick={() => navigate('/user/12')}>
            <p className="user-name"> Karl Dovineau</p>
          </li>
          <li className="item-list" onClick={() => navigate('/user/18')}>
            <p className="user-name"> Cecilia Ratorez</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Profil;
