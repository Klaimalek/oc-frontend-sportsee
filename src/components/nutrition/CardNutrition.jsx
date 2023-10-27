import React from 'react';
import iconCalory from '../../assets/iconCalory.svg';
import iconProtein from '../../assets/iconProtein.svg';
import iconCarbohydrate from '../../assets/iconCarbohydrate.svg';
import iconLiipids from '../../assets/iconLiipids.svg';
import './cardNutrition.css';
//* Création un objet qui contient les propriétés de chaque type de nutrition */
const TypeIcon = {
  CaloryIcon: {
    color: 'red',
    unit: 'kCal',
    typeName: 'Calories',
    icon: iconCalory,
    hoverColor: 'rgba(255, 0, 0, 0.4)',
  },
  ProteinIcon: {
    color: 'blue',
    unit: 'g',
    typeName: 'Proteines',
    icon: iconProtein,
    hoverColor: 'rgba(74, 184, 255, 0.4)',
  },
  GlucidIcon: {
    color: 'yellow',
    unit: 'g',
    typeName: 'Glucides',
    icon: iconCarbohydrate,
    hoverColor: 'rgba(249, 206, 35, 0.4)',
  },
  lipidIcon: {
    color: 'pink',
    unit: 'g',
    typeName: 'Lipides',
    icon: iconLiipids,
    hoverColor: 'rgba(253, 81, 129, 0.4)',
  },
};
 


function CardNutrition() {
    const nutritionType= TypeIcon;
   
  return (
    <article className="card-nutrition">
     icon

     <div className="nutrition-card-infos">
				<div className={`nutrition-card-infos__button ${nutritionType.color}`}>
					<img src={nutritionType.icon} alt={nutritionType} />
				</div>
				
			</div>
    </article>
  );
}

export default CardNutrition;
