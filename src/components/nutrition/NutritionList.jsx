import React from 'react';
import CardNutrition from './CardNutrition';
import iconCalory from '../../assets/iconCalory.svg';
import iconProtein from '../../assets/iconProtein.svg';
import iconCarbohydrate from '../../assets/iconCarbohydrate.svg';
import iconLiipids from '../../assets/iconLiipids.svg';

import Data from '../data/Data.json';

function NutritionList() {
  const designs = [
    { name: iconCalory, color: 'rgba(255, 0, 0, 0.1)' },
    { name: iconProtein, color: 'rgba(74, 184, 255, 0.1)' },
    { name: iconCarbohydrate, color: 'rgba(249, 206, 35, 0.1)' },
    { name: iconLiipids, color: 'rgba(253, 81, 129, 0.1)' },
  ];
  return (
    <div className="nutrition-content">
      <CardNutrition image={iconCalory}  />
      <CardNutrition image={iconProtein} />
      <CardNutrition image={iconCarbohydrate}  />
      <CardNutrition image={iconLiipids}  />
    </div>
  );
}

export default NutritionList;
<CardNutrition />;

/*
{Data.map((data) => (
  <CardNutrition
    key={data.id}
    name={data.name}
    quantity={data.quantity}
    unit={data.unit}
    color={data.color}
    image={designs.map((icon)=>(icon.name))}
  />
))}*/
