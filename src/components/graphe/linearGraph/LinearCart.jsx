import React, { useEffect, useState } from 'react';
import './linearChart.css';
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
 
  Tooltip,
 
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useParams } from 'react-router-dom';
import { getDataSession } from '../../../services/FetchData';
import { formatedWeekDays } from '../../../services/models/ModelSession';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
]


function LinearCart() {
    const numberOfDay = ["L ", "M ", "M ", "J ", "V ", "S ", "D "];
    const [sessions, setSessions] = useState();
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
        const usersResponse = await getDataSession(userId);
        if (usersResponse.errorCode === 'ERR_NETWORK') {
          console.log('error');
        }
        setSessions((prevState) => ({
          ...prevState,
          main: usersResponse,
        }));
        verificationUserId(userId);
        verificationData(sessions);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchData();
    }, []);
    

	
  if (sessions !== undefined){
  return (
    <div className="linear-chart">
    
      <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        width={263}
        height={263}
        data={sessions.main.sessions}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
      <text
      x="50%"
      y="95%"
      textAnchor="middle"
      textLength="90%"
      fontSize="12"
      fontWeight="500"
      fill="#ffffff7a"
    >
      {numberOfDay}
    </text>
        <XAxis dataKey="day" hide={true} />
        <YAxis
          hide={true}
          domain={['dataMin-20', 'dataMax+40']}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          itemStyle={{
            color: 'black',
          }}
          formatter={(value, name, unit) => [value, unit]}
          labelStyle={{ display: 'none' }}
          cursor={{
            stroke: 'black',
            strokeOpacity: 0.1,
            strokeWidth: 70,
            height: 100,
          }}
        />
        <Legend />
        <Line
          stroke="white"
          strokeWidth={2}
          unit="min"
          dot={false}
          activeDot={{
            fill: 'white',
            stroke: 'white',
            strokeOpacity: 0.2,
            strokeWidth: 15,
            r: 5,
          }}
          legendType="none"
          type="natural"
          dataKey="sessionLength"
        />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
        }
}

export default LinearCart;
