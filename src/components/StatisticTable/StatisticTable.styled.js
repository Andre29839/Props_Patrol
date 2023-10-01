import styled from 'styled-components';

export const TransactionColor = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  background-color: ${props => props.color};
  margin-right: 16px;
`;

export const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 45px;
  padding-left: 10px;
  width: 300px;
  padding-right: 10px;

  @media screen and (max-width: 767px) {
    padding-left: 0px;
    margin-bottom: 45px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-left: 0px;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 0px;
    padding-bottom: 45px;
  }
`;

export const StyledTable = styled.table`
  margin: 0;
  border-radius: 8px;
  border-collapse: collapse;
  color: var(--total-white);

  th,
  td {
    height: 55.1px;
  }

  @media screen and (max-width: 767px) {
    max-width: 440px;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 311px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Thead = styled.thead`
  border-radius: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  tr th {
    background-color: rgba(82, 59, 126, 0.6);
    backdrop-filter: blur(50px);
  }
`;
export const Th = styled.th`
  padding: 16px;
`;

export const ThCategory = styled(Th)`
  border-radius: 8px 0 0 8px;
  text-align: left;
  position: reletive;
`;

export const ThSum = styled(Th)`
  border-radius: 0 8px 8px 0;
  text-align: right;
`;

export const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #644e89;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TdCategory = styled(Td)`
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  height: 35px;
`;

export const TdColor = styled(Td)`
  background-color: ${({ categoryColor }) => categoryColor};
  border-radius: 2px;

  margin-right: 16px;
`;

export const TdSum = styled(Td)`
  text-align: right;
`;

export const TotalExpense = styled.td`
  text-align: right;
  padding: 16px 16px 0 0;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128.56%;
  color: var(--dashboard-text);
`;

export const Total = styled.td`
  text-align: right;
  padding: 16px 16px 0 0;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128.56%;
  color: var(--yellow);
`;

export const Transaction = styled.td`
  text-align: left;
  padding: 16px 0 0 16px;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 128.56%;
`;
