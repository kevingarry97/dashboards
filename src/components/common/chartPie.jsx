import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell, Tooltip,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ChartPie = () => {
    return ( 
        <PieChart width={300} height={200}>
            <Pie
                data={data}
                cx={130}
                cy={110}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
            <Tooltip />
            </Pie>
      </PieChart>
    );
}
 
export default ChartPie;
