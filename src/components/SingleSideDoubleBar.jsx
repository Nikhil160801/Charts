import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const salesData = [
  {
    month: 'January',
    sales: 12000,
    target: 10000,
  },
  {
    month: 'February',
    sales: 15000,
    target: 12000,
  },
  {
    month: 'March',
    sales: 18000,
    target: 14000,
  },
  {
    month: 'April',
    sales: 20000,
    target: 17000,
  },
  {
    month: 'May',
    sales: 23000,
    target: 20000,
  },
  {
    month: 'June',
    sales: 25000,
    target: 22000,
  },
];

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <Rectangle fill={fill} x={x} y={y} width={width} height={height} stroke="black" />;
};

const SalesBarChart = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Sales Bar Chart</h1>
      <div className="w-full md:w-1/2 mx-auto">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={salesData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="pink" shape={<CustomBar fill="pink" />} width={100} height={100}/>
            <Bar dataKey="target" fill="lightblue" shape={<CustomBar fill="lightblue" />} width={100} height={100}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesBarChart;
