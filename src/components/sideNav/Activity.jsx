import React from 'react';
import './sideNav.css';
/** le composant qui permet d'afficher les différentes icons dans sidenavbar */

function Activity(props) {
  return (
    <div className="picture-icon">
      <img
        src={props.image}
        alt="activity"
        className="icon"
        style={{ background: props.color  }}
      />
    </div>
  );
}

export default Activity;
