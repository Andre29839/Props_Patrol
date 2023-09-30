import Chart from 'components/Chart/Chart';
import DatePicker from 'components/DataForm/DataForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactionsSummary } from 'redux/transactionsRedusers/transactionsSelectors';
import { StatisticsWrapper, TitleStatistics } from './Statistics.styled';

const Statistics = () => {
  const result = useSelector(selectTransactionsSummary);

  return (
    <>
      <StatisticsWrapper>
        <TitleStatistics>Statistics</TitleStatistics>
        <Chart data={result} />
        <DatePicker />
      </StatisticsWrapper>
    </>
  );
};

export default Statistics;
