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
 
} from 'recharts';

function DailyActivity() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  const styleChart = { color: '#74798c', fontSize: '14px' };
  // afficher le contenu du lengend
  const styleLegend = (value) => {
    return <span style={styleChart}>{value}</span>;}

  return (
    
    <div className='chart-actibity'>
    <p className='title-chart'> Activité quotidienne </p>
      <BarChart
        style={styleChart}
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#DEDEDE"
          tick={{ fill: '#9B9EAC' }}
          tickLine={false}
          tickSize={15}
        />
        <YAxis orientation="right" />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          stroke="#9B9EAC"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#E60000',
          }}
          itemStyle={{
            color: 'white',
          }}
          labelStyle={{ display: 'none' }}
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
    </div>
  );
}

export default DailyActivity;
