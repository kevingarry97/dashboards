import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, mv: 5500, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, mv: 2000, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, mv: 4500, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, mv: 5000, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, mv: 7200, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, mv: 3400, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, mv: 4100, amt: 2100,
  },
];

const BarCharts = ({width, height}) => {
    return ( 
        <BarChart
            width={width}
            height={height}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
            <Bar dataKey="uv" fill="#82ca9d" />
            <Bar dataKey="mv" fill="#ca82a8" />
        </BarChart>
    );
}
 
export default BarCharts;