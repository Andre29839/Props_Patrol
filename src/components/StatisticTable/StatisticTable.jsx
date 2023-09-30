import React from 'react';
import { useSelector } from 'react-redux';
import { StatisticTab, TransactionColor } from './StatisticTable.styled';
import { nanoid } from 'nanoid';

const StatisticTable = () => {
  const sumOfCategories = useSelector(
    state => state.transactions.summary.categoriesSummary
  );
  console.log(sumOfCategories);
  const incomeSum = useSelector(
    state => state.transactions.summary.incomeSummary
  );

  const expenseSum = useSelector(
    state => state.transactions.summary.expenseSummary
  );

  console.log(sumOfCategories);
  const colorStatistics = {
    'Main expenses': '#FED057',
    Products: '#FFD8D0',
    Car: '#FD9498',
    'Self care': '#C5BAFF',
    'Child care': '#6E78E8',
    'Household products': '#4A56E2',
    Education: '#81E1FF',
    Leisure: '#24CCA7',
    'Other expenses': '#00AD84',
    Entertainment: '#FF69B4',
    Income: '#FFB627',
  };

  return (
    sumOfCategories && (
      <section>
        <StatisticTab>
          <thead>
            <tr>
              <th>Category</th>
              <th>Sum</th>
            </tr>
          </thead>
          <tbody>
            {sumOfCategories.map(category => {
              return (
                <tr key={nanoid()}>
                  <td>
                    <TransactionColor
                      color={colorStatistics[category.name]}
                    ></TransactionColor>
                  </td>
                  <td>{category.name}</td>
                  <td>{category.total}</td>
                </tr>
              );
            })}

            <tr>
              <td>Expense:</td>
              <td>{incomeSum}</td>
            </tr>
            <tr>
              <td>Income:</td>
              <td>{expenseSum}</td>
            </tr>
          </tbody>
        </StatisticTab>
      </section>
    )
  );
};

export default StatisticTable;
