import styled from 'styled-components';

export const TableListSection = styled.div`
  height: 344px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
    display: none;
  }
`;
export const TableListContainer = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    max-width: 290px;
  }

  li:not(:last-child) {
    margin-bottom: 8px;
  }
  li:last-child {
    padding-bottom: 60px;
  }
`;

export const MobileTable = styled.table`
  margin: 0;
  max-width: 290px;
  border-radius: 8px;
  border-collapse: collapse;
  color: #ffffff;
  th,
  td {
    color: #fbfbfb;
  }

  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
    height: 43px;
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
`;

export const Thead = styled.thead`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;
`;

export const Th = styled.th`
  text-align: left;
  padding-right: 32px;
  width: 140px;
`;

export const ThDate = styled(Th)`
  border-radius: 8px 0 0 8px;
  padding: 16px 32px 16px 20px;
`;

export const Td = styled.td`
  text-align: left;
  min-width: 140px;
  max-width: 140px;

  &.income {
    color: #ffb627;
  }

  &.expense {
    color: #ff868d;
  }

  text-align: right;
  display: flex;
  justify-content: flex-end;

  height: 18.4px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.32px;
  &:last-child {
    height: 24.7px;
  }

  border-bottom: 1px solid #4e4677;
`;

export const CommonBtnStyles = styled.button`
  color: #ffffff;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  border: none;
  cursor: pointer;
`;

export const DeleteBtn = styled(CommonBtnStyles)`
  border-radius: 18px;
  padding: 4px 12px;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  background: var(
    --button-gradient,
    linear-gradient(167deg, #ffc727 0%, #9e40ba 61.46%, #7000ff 90.54%)
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;
