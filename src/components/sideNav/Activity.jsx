import React from 'react';
import './sideNav.css';
/** le composant qui permet d'afficher les différentes icons dans sidenavbar */

function Activity(props) {
  return (
    <div className="picture-icon" style={{ background:  '#FFFFFF' }}>
      <img
        src={props.image}
        alt="activity"
        className="icon"
      />
    </div>
  );
}

export default Activity;
