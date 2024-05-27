import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'فروردین',
    فروش: 4000,
  },
  {
    name: 'اردیبهشت',
    فروش: 3000,
  },
  {
    name: 'خرداد',
    فروش: 6000,
  },
  {
    name: 'تیر',
    فروش: 5000,
  },
  {
    name: 'مرداد',
    فروش: 8000,
  },
  {
    name: 'شهریور',
    فروش: 7000,
  },
];

const ChartAdmin = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="فروش" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ChartAdmin;
