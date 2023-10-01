import styled from 'styled-components';

export const StyledBalanceBox = styled.div`
  display: flex;
  flex-direction: column;

  max-width: ${props => props.maxW || '424px'};

  padding-top: 8px;
  padding-bottom: 11px;
  padding-left: ${props => props.padL || '56px'};

  border-radius: ${props => props.borR || 'none'};

  background: rgba(82, 59, 126, 0.6);

  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    max-width: 480px;
    padding-left: 40px;
    border-radius: 8px;
  }

  @media screen and (min-width: 320px) and (max-width: 767.9px) {
    width: 296px;
    padding-left: 40px;
    border-radius: 8px;
  }

  @media screen and (max-width: 767.9px) {
    margin: auto;
    margin-top: 12px;
    margin-bottom: 32px;
  }
`;

export const StyledBalanceLabel = styled.span`
  color: var(--white-40, rgba(255, 255, 255, 0.4));
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(18 / 12);
  text-transform: uppercase;
`;

export const StyledBalance = styled.span`
  color: var(--white, #fbfbfb);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(45 / 30);
  span {
    font-weight: 400;
    margin-right: 4px;
  }
`;
