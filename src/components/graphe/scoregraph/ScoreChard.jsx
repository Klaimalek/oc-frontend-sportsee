import React, { useEffect, useState } from 'react';
import './scoreChart.css';
import {
  RadialBar,
  PolarAngleAxis,
  RadialBarChart,
  ResponsiveContainer,
} from 'recharts';
import { getMainData } from '../../../services/FetchData';

import { useParams } from 'react-router-dom';

const data = [
  {
    name: '18-24',
    uv: 31.47,
  },
];

function ScoreChard(todayScore) {
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
    const score =  users.main?.getTodayScore() *100 ;
    return (
      <div className="score-chart">
        <div className="schema">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="80%"
              outerRadius="80%"
              margin={{ top: 40, bottom: 40 }}
              data={data}
              barSize={10}
              startAngle={90}
              endAngle={450}
              fill="#E60000"
            >
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar background dataKey="uv" cornerRadius={10} />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fontSize="26"
                fontWeight="700"
                fill="black"
              >
                {score}%
              </text>
              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                fontSize="16"
                fill="gray"
                fontWeight="500"
              >
                de votre
              </text>
              <text
                x="50%"
                y="66%"
                textAnchor="middle"
                fontSize="16"
                fill="#74798C"
                fontWeight="500"
              >
                objectif
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default ScoreChard;
