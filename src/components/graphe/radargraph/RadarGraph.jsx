import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  
} from 'recharts';
import './radargraph.css';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function RadarGraph() {
  return (
    <div className="radar-chart">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        width={300}
        height={300}
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tickSize={10}
          tick={{
            fill: 'white',
            fontSize: 13,
            fontWeight: 600,
            y: 200,
          }}
        />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}

export default RadarGraph;
