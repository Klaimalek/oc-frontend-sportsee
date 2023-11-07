import React from 'react';

import './dailyActivity.css';
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
      uv: 3000,
      pv: 1398,
      amt: 2210,
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
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="custom-tooltip" style={{backgroundColor:'#E60000'}}>
          <p className="label" style={{color:'#ffffff'}}>{`${payload[0].value}kg`}</p>
          <p className="desc" style={{color:'#ffffff'}}>{`${payload[1].value}Kcal`}</p>
        </div>
      )
    }
  
    return null
  }
  const styleChart = { color: '#74798c', fontSize: '14px' };
  // afficher le contenu du lengend
  const styleLegend = (value) => {
    return <span style={styleChart}>{value}</span>;
  };

  return (
    <div className="chart-activity">
      <p className="title-chart"> Activité quotidienne </p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          style={styleChart}
          data={data}
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
            dataKey="name"
            stroke="#DEDEDE"
            tick={{ fill: '#9B9EAC' }}
            tickLine={false}
            tickSize={10}
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
            allowEscapeViewBox={{ x: true, y: true }} content={<CustomTooltip />}
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
            dataKey="pv"
            name="Poids (kg)"
            fill="#282D30"
            unit="kg"
            barSize={12}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="uv"
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

export default DailyActivity;
