import Chart from 'components/Chart/Chart';
import DatePicker from 'components/DataForm/DataForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactionsSummary } from 'redux/transactionsRedusers/transactionsSelectors';

const Statistics = () => {
  const result = useSelector(selectTransactionsSummary);

  return (
    <div>
      <Chart data={result} />
      <DatePicker />
    </div>
  );
};

export default Statistics;
