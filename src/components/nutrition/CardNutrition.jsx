import React from 'react';

import './cardNutrition.css';
import iconCalory from '../../assets/iconCalory.svg';
import iconProtein from '../../assets/iconProtein.svg';
import iconCarbohydrate from '../../assets/iconCarbohydrate.svg';
import iconLiipids from '../../assets/iconLiipids.svg';


/** création d'objet pour gérer les couleurs des icons */
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

/** gérer les couleurs de background des icons */
const designs = [
  { name: iconCalory, color: 'rgba(255, 0, 0, 0.1)' },
  { name: iconProtein, color: 'rgba(74, 184, 255, 0.1)' },
  { name: iconCarbohydrate, color: 'rgba(249, 206, 35, 0.1)' },
  { name: iconLiipids, color: 'rgba(253, 81, 129, 0.1)' },
];
function CardNutrition(props) {
  return (
    <article className="card-nutrition" key={props.id}>
      <div className="card-image">
        <img
          className="info-case__logo"
          src={props.image}
          alt={'logo de' + props.image}
          style={{ background: props.color }}
        ></img>
      </div>
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
