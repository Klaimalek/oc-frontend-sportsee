import React from 'react';

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
