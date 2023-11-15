import React from 'react';
import { tickFormatterDate } from '../../../services/models/ModelActivity';

import './dailyActivity.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataActivity } from '../../../services/FetchData';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function DailyActivity() {
  const [activity, setAtivity] = useState();
  const { userId } = useParams();

  /** afficher les message d'erreur */
 /* const redirectToErrorPage = (condition, errorMessage) => {
    if (condition) {
      console.log('user not find');
    }
  };
  /** vérification de l'id des utilisateurs */
 /* const verificationUserId = (userId) => {
    redirectToErrorPage(userId !== '12' && userId !== '18', 'Invalid user ID');
  };
  const verificationData = (users) => {
    redirectToErrorPage(!users, "Can't get data");
  };
  /** fonction pour récupérer les données et mofifier les states */
  const fetchData = async () => {
    try {
      const sessionsResponse = await getDataActivity(userId);
      if (sessionsResponse.errorCode === 'ERR_NETWORK') {
        console.log('error');
      }
      setAtivity((prevState) => ({
        ...prevState,
        main: sessionsResponse,
      }));

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);




  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#E60000' }}>
          <p
            className="label"
            style={{ color: '#ffffff' }}
          >{`${payload[0].value}kg`}</p>
          <p
            className="desc"
            style={{ color: '#ffffff' }}
          >{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };
  const styleChart = { color: '#74798c', fontSize: '14px' };
  // afficher le contenu du lengend
  const styleLegend = (value) => {
    return <span style={styleChart}>{value}</span>;
  };
  if (activity !== undefined) {
  return (
    <div className="chart-activity">
      <p className="title-chart"> Activité quotidienne </p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          style={styleChart}
          data={activity.main.sessions}
          margin={{
            top: 20,
            right: 0,
            left: 10,
            bottom: 20,
          }}
        >
          {/* CartesianGrid permet d'afficher une grille sur le graphique. */}
          <CartesianGrid strokeDasharray="3 3" />
          {/*  XAxis représente l'axe X du graphique. */}
          <XAxis
            dataKey="day"
            stroke="#DEDEDE"
            tick={{ fill: '#9B9EAC' }}
            tickLine={false}
            tickSize={10}
            tickFormatter={tickFormatterDate}
          />
          {/** YAxis l'axe y du graphique*/}
          <YAxis
            orientation="right"
            stroke="#DEDEDE"
            tick={{ fill: '#9B9EAC' }}
            tickSize={10}
            tickLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            stroke="#9B9EAC"
          />
          {/* Tooltipajoute une info-bulle au graphique, permettant aux utilisateurs de voir plus d'informations
 lorsqu'ils survolent des points de données. */}
          <Tooltip
            contentStyle={{
              backgroundColor: '#E60000',
            }}
            itemStyle={{
              color: 'white',
            }}
            labelStyle={{ display: 'none' }}
            cursor={false}
            allowEscapeViewBox={{ x: true, y: true }}
            content={<CustomTooltip />}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={20}
            height={40}
            formatter={styleLegend}
          />
          <Bar
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            unit="kg"
            barSize={12}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            name="Calories brûlées (kcal)"
            fill="#E60000"
            unit="kcal"
            barSize={12}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
          }
}

export default DailyActivity;
