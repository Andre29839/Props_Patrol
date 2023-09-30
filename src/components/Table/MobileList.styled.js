import styled from 'styled-components';

export const TableListContainer = styled.div`
  li:not(:last-child) {
    margin-bottom: 8px;
  }
  li:last-child {
    padding-bottom: 60px;
  }
`;

export const StyledTable = styled.table`
  margin: 0;
  width: 280px;
  border-radius: 8px;
  height: auto;
  color: #ffffff;
  th,
  td {
    white-space: pre-wrap;
  }

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
    width: 103px;
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
    width: 177px;
    max-width: 613.5px;
    height: 100%;
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
  line-height: normal;
  height: 100%;
`;

export const Tr = styled.tr`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Th = styled.th`
  text-align: left;
`;

export const Td = styled.td`
  &.income {
    color: #ffb627;
  }

  &.expense {
    color: #ff868d;
  }

  text-align: right;
  display: flex;
  justify-content: flex-end;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
`;

export const TdEdit = styled(Td)`
  height: 53px;
  text-align: center;
`;

export const EditWrapper = styled.div`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.32px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 8px;
  gap: 4px;
`;

export const CommonBtnStyles = styled.button`
  color: #ffffff;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  cursor: pointer;
`;

export const DeleteBtn = styled(CommonBtnStyles)`
  border-radius: 18px;
  padding: 4px 12px;
  width: 69px;
  height: 29px;
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

export const SectionHome = styled.section`
  position: relative;
`;
