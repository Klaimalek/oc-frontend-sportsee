import React from 'react';
import './scoreChart.css';
import {
  RadialBar,
  PolarAngleAxis,
  RadialBarChart,
  ResponsiveContainer,
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
      <div className="schema">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="80%"
            outerRadius="80%"
           margin={{top: 40, bottom:40}}
            data={data}
            barSize={10}
            startAngle={90}
            
            fill="#E60000"
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar background  dataKey="uv" cornerRadius={10} />
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

export default ScoreChard;
