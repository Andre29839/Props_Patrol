import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { selectAuthData } from 'redux/registerReducers/registerSelector';
import { useSelector } from 'react-redux';
import { ChartWrapper, ImgMoney } from './Chart.styled';
import money from '../../images/money.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
  '#8D6E63',
  '#546E7A',
];

const Chart = ({ data }) => {
  const totalBalance = useSelector(selectAuthData);

  if (!data || data.length === 0) {
    console.log(data);
    return <ImgMoney alt="money" src={money} />;
  }

  const categories = data;

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
      <ChartWrapper>
        <Doughnut data={chartData} options={options} />
        {data ? <span> ₴ {totalBalance.balance}</span> : ''}
      </ChartWrapper>
    </div>
  );
};

export default Chart;
