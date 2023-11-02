import React from 'react';
import Banner from '../banner/Banner';
import './dashboard.css';
import DailyActivity from '../graphe/dalyActivity/DailyActivity';
import NutritionList from '../nutrition/NutritionList';
import LinearCart from '../graphe/linearGraph/LinearCart';
import ScoreChard from '../graphe/scoregraph/ScoreChard';

function Dashbord() {
  return (
    <div className="dashbord-content">
      <div className="dashbord-graphs">
        <DailyActivity />
        <div className='three-graphs'>
        <LinearCart/>
        <ScoreChard/>
        </div>
      </div>
      <div className="dashboard-nutrition">
        <NutritionList />
      </div>
    </div>
  );
}

export default Dashbord;
