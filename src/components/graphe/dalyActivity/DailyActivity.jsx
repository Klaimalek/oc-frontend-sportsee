import React from 'react';
import { useEffect,useState } from 'react';
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
const [data,setData] = useState();
useEffect(()=>{
  const fetchData = async ()=>{
    const response = await fetch ('https://api.coincap.io/v2/assets/?limit=20');
    const data = await response.json();
    console.log(data);
    setData(data.data)
  }
  fetchData();
},[]);



  return (
    <div className="daily-activity">
    <h1> fech data using rechart</h1>
      <ResponsiveContainer width="70%" height={400}>
        <BarChart
        data ={data}>
        <CartesianGrid strokeDasharray='3 3'>
        </CartesianGrid>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey='Name' fill='malek'></Bar>
        <Bar dataKey='Price' fill='taha'></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivity;
