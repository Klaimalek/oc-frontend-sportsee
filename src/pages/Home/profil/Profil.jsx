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
      <nav className="user-selection">
        <ul className="user-selection-list">
          <li className="item-list" onClick={() => navigate('/user/12')}>
            <p className="user-name"> Karl</p>
          </li>
          <li className="item-list" onClick={() => navigate('/user/12')}>
            <p className="user-name"> Cécile</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Profil;
