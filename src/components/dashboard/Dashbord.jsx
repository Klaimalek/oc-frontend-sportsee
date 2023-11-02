import React from 'react';

import './dashboard.css';
import DailyActivity from '../graphe/dalyActivity/DailyActivity';
import NutritionList from '../nutrition/NutritionList';
import LinearCart from '../graphe/linearGraph/LinearCart';
import ScoreChard from '../graphe/scoregraph/ScoreChard';
import RadarGraph from '../graphe/radargraph/RadarGraph';

function Dashbord() {
  return (
    <div className="dashbord-content">
      <div className="dashbord-graphs">
        <DailyActivity />
        <div className='three-graphs'>
        <LinearCart/>
        <RadarGraph/>
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
