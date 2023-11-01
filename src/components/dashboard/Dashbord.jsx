import React from 'react';
import Banner from '../banner/Banner';
import './dashboard.css';
import DailyActivity from '../graphe/dalyActivity/DailyActivity';
import NutritionList from '../nutrition/NutritionList';

function Dashbord() {
  return (
    <div className="dashbord-content">
      <div className="dashbord-acticity">
        <Banner />
        <DailyActivity />
      </div>
      <div className="dashboard-nutrition">
        <NutritionList/>
      </div>
    </div>
  );
}

export default Dashbord;
