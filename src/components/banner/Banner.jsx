import React from 'react';
import './banner.css';
import { useState, useEffect } from 'react';
import { getMainData } from '../../services/FetchData';
import { useParams } from 'react-router-dom';


function Banner() {
  const [users, setUsers] = useState();
  const { userId } = useParams();

 
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
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, );
 

  
  if (users !== undefined) {
    return (
      <div className="banner-deshbord">
        <h1 className="banner-goodMorning">
          Bonjour{' '}
          <span className="banner-firstname"> {users.main.firstName}</span>
        </h1>
        <p className="banner-subtitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    );
  }
}

export default Banner;
