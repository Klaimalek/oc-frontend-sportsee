import React from 'react';
import CardNutrition from './CardNutrition';
import iconCalory from '../../assets/iconCalory.svg';
import iconProtein from '../../assets/iconProtein.svg';
import iconCarbohydrate from '../../assets/iconCarbohydrate.svg';
import iconLiipids from '../../assets/iconLiipids.svg';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data/Data.json';
import { getMainData } from '../../services/FetchData';

function NutritionList() {
  const designs = [
    { name: iconCalory, color: 'rgba(255, 0, 0, 0.1)',units:'kCal' },
    { name: iconProtein, color: 'rgba(74, 184, 255, 0.1)',units:'g' },
    { name: iconCarbohydrate, color: 'rgba(249, 206, 35, 0.1)',units:'g' },
    { name: iconLiipids, color: 'rgba(253, 81, 129, 0.1)',units:'g' },
  ];

  const [users, setUsers] = useState();
  const { userId } = useParams();

  /** afficher les message d'erreur */
  const redirectToErrorPage = (condition, errorMessage) => {
    if (condition) {
      console.log('user not find');
    }
  };
  /** vérification de l'id des utilisateurs */
  const verificationUserId = (userId) => {
    redirectToErrorPage(userId !== '12' && userId !== '18', 'Invalid user ID');
  };
  const verificationData = (users) => {
    redirectToErrorPage(!users, "Can't get data");
  };
  /** fonction pour récupérer les données et mofifier les states */
  const fetchData = async () => {
    try {
      const usersResponse = await getMainData(userId);
      if (usersResponse.errorCode === 'ERR_NETWORK') {
        console.log('error');
      }
      setUsers((prevState) => ({
        ...prevState,
        main: usersResponse.data,
      }));
      verificationUserId(userId);
      verificationData(users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (users !== undefined) {
    return (
      <div className="nutrition-content">
        <CardNutrition
          image={iconCalory}
          quantity={users.main.keyData.calorieCount}
          unit='kCal'
          name='Calories'
          color='rgba(255, 0, 0, 0.1)'
        />
        <CardNutrition image={iconProtein}
        quantity={users.main.keyData.proteinCount}
        unit="g"
        name='Proteines'
        color='rgba(74, 184, 255, 0.1)' />
        <CardNutrition image={iconCarbohydrate} 
        quantity={users.main.keyData.carbohydrateCount
          
        }
        unit="g"
        name='Glucides'
        color='rgba(249, 206, 35, 0.1)'/>
       
        <CardNutrition image={iconLiipids}
        quantity={users.main.keyData.lipidCount
        }
        unit="g" 
        name='Lipides'
        color='rgba(253, 81, 129, 0.1)'/>
      </div>
    );
  }
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
