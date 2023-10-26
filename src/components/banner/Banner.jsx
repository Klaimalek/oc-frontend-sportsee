import React from 'react';
import './banner.css';
function Banner() {
  return (
    <div className="banner-deshbord">
      <h1 className="banner-goodMorning">
        Bonjour <span className="banner-firstname"> Malek</span>
      </h1>
      <p className="banner-subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Banner;
