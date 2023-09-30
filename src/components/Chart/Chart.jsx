import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { selectAuthData } from 'redux/registerReducers/registerSelector';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  '#9575CD',
  '#64B5F6',
  '#E57373',
  '#00897B',
  '#4CAF50',
  '#DCE775',
  '#1A237E',
  '#FFE082',
  '#FF8A65',
  '#8D6E63',
  '#546E7A',
];
const Chart = ({ data }) => {
  const totalBalance = useSelector(selectAuthData);
  if (!data || !data.categoriesSummary || data.categoriesSummary.length === 0) {
    return;
  }

  const categories = data.categoriesSummary;

  const chartData = {
    labels: '',
    datasets: [
      {
        data: categories.map(item => item.total),
        backgroundColor: colors,
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',

    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div>
      <Doughnut data={chartData} options={options} />
      {data ? <span>{totalBalance.balance}</span> : ''}
    </div>
  );
};

export default Chart;
