import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './header.css';
function Header() {
  return (
    <div className="header">
      <div className='logo'>
          <NavLink to="/">
            <img src={logo} alt="Logo" className="header__logo" />
          </NavLink>
      </div>
      <nav className="navbar-header">
        <div className="navbar-nav">
          <NavLink className="nav-link-header " to="/" aria-current="page">
            {' '}
            Acceuil
          </NavLink>
          <NavLink className="nav-link-header " to="/" aria-current="page">
            {' '}
            Profil
          </NavLink>
          <NavLink className="nav-link-header " to="/" aria-current="page">
            {' '}
            Réglage
          </NavLink>
          <NavLink className="nav-link-header " to="/" aria-current="page">
            {' '}
            Communité
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
