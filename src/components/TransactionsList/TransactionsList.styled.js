import styled from 'styled-components';

export const TableContainer = styled.div`
  height: 344px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;

export const Table = styled.thead`
  margin: 0;
  width: 100%;
  border-radius: 8px;
  border-collapse: collapse;
  color: #ffffff;
  th,
  td {
    color: #fbfbfb;
  }

  @media screen and (max-width: 767.5px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 1px;
      height: 100%;
      width: 7px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      background-color: ${props => (props.type ? '#FFB627' : '#FF868D')};
    }
    th {
      padding: 12px 0 12px 20px;
    }

    td {
      padding: 12px 20px 12px 0;
    }

    th:not(:last-child),
    td:not(:last-child) {
      border-bottom: 1px solid #6e60af;
    }
    tbody {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 613.5px;
    }
    th {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const Thead = styled.thead`
  @media screen and (max-width: 767.5px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  @media screen and (min-width: 768px) {
    border-radius: 8px;
    tr th {
      background-color: #4c3579;
      backdrop-filter: blur(50px);
      position: sticky;
      top: 0;
    }
  }
`;

export const Th = styled.th`
  text-align: left;
  @media screen and (min-width: 768px) {
    padding-right: 32px;
    width: ${props => props.columnWidth}px;
  }
`;

export const ThEdit = styled(Th)`
  padding-right: 0;
  text-align: right;
`;

export const ThLast = styled.th`
  width: 77px;
  border-radius: 0 8px 8px 0;
`;

export const ThSum = styled(Th)`
  text-align: right;
`;

export const ThDate = styled(Th)`
  @media screen and (min-width: 768px) {
    border-radius: 8px 0 0 8px;
    padding: 16px 32px 16px 20px;
  }
`;

export const NoTransactionsText = styled.td`
  color: #fff;
  font-family: Poppins;
  font-size: 22px;
  line-height: 1.5;
  text-align: center;
  padding: 60px 20px;
`;

export const TransactionsListWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const MobileTransactionListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (min-width: 768px) {
    display: none;
  }
`;
