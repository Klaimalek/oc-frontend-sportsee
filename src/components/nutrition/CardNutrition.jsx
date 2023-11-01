import React from 'react';
import iconCalory from '../../assets/iconCalory.svg';
import iconProtein from '../../assets/iconProtein.svg';
import iconCarbohydrate from '../../assets/iconCarbohydrate.svg';
import iconLiipids from '../../assets/iconLiipids.svg';

import Activity from '../sideNav/Activity';
import './cardNutrition.css';

//* Création un objet qui contient les propriétés de chaque type de nutrition */
export const dataNutrient = {
  Calory: {
    color: '#FF0000',
  },
  Protein: {
    color: '#4AB8FF',
  },
  Carbohydrate: {
    color: '#FDCC0C',
  },
  lipid: {
    color: '#FD5181',
  },
};

function CardNutrition(props) {
  const icons = [iconCalory, iconProtein, iconCarbohydrate, iconLiipids];
  return (
    <article className="card-nutrition" key={props.id}>
      <div className="card-body">
        <div className="nutrition-quantity">
          <p className="quantity"> {props.quantity}</p>{' '}
          <p className="unit">{props.unit}</p>
        </div>
        <p className="card-name">{props.name}</p>
      </div>
    </article>
  );
}

export default CardNutrition;
