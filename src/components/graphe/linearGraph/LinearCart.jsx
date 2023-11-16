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

function LinearCart() {
    const numberOfDay = ["L ", "M ", "M ", "J ", "V ", "S ", "D "];
    const [sessions, setSessions] = useState();
    const { userId } = useParams();
    
  
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
       
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchData();
    }, );
    

	
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
