import Chart from 'components/Chart/Chart';
import DatePicker from 'components/DataForm/DataForm';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactionsSummary } from 'redux/transactionsRedusers/transactionsSelectors';
import {
  StatisticsWrapper,
  TitleChart,
  TitleStatistics,
  WrapTable,
} from './Statistics.styled';
import StatisticTable from 'components/StatisticTable/StatisticTable';

const Statistics = () => {
  const result = useSelector(
    state => state.transactions.summary.categoriesSummary
  );
  console.log(result);

  const filterres = result
    ? result.filter(item => item.type === 'EXPENSE')
    : [];
  console.log({ filterres });

  return (
    <>
      <StatisticsWrapper>
        <TitleChart>
          <TitleStatistics>Statistics</TitleStatistics>
          <Chart data={filterres} />
        </TitleChart>
        <WrapTable>
          <DatePicker />
          <StatisticTable />
        </WrapTable>
      </StatisticsWrapper>
    </>
  );
};

export default Statistics;
