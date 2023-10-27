import React from 'react';
import Banner from '../banner/Banner';
import './dashboard.css';
import DailyActivity from '../graphe/dalyActivity/DailyActivity';
import CardNutrition from '../nutrition/CardNutrition';

function Dashbord() {
  return (
    <div className="dashbord-content">
      <div className="dashbord-acticity">
        <Banner />
        <DailyActivity />
      </div>
      <div className="dashboard-nutrition">
        <CardNutrition/>
      </div>
    </div>
  );
}

export default Dashbord;
