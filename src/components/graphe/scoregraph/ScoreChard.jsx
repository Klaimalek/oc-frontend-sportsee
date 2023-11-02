import React from 'react';
import './scoreChart.css';
import {
  Legend,
  RadialBar,
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  PolarAngleAxis,
  RadialBarChart,
} from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 31.47,
  },
];

function ScoreChard() {
  const score = 0.5 * 100;
  return (
    <div className="score-chart">
      <h3 className="score-title">Score</h3>
    
      <RadialBarChart
        width={300}
        height={300}
        data={data}
        innerRadius={80}
        barSize={10}
        startAngle={90}
        endAngle={450}
        fill="#E60000"
        
      >
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

        <RadialBar background clockWise dataKey="uv" />
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
  
    </div>
  );
}

export default ScoreChard;
