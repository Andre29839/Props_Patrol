import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'redux/registerReducers/registerSelector';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ expenseCategories }) => {
  const totalBalance = useSelector(selectAuthData);
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1,
        data:
          !!expenseCategories && !expenseCategories.length
            ? [1]
            : expenseCategories.map(item => item.total),
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <span>₴ {Number(totalBalance).toFixed(2)}</span>
      <Doughnut data={data}></Doughnut>
    </div>
  );
};

export default Chart;
