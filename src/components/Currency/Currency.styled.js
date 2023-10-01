import styled from 'styled-components';

export const WrapperCurrency = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 320px;
  @media only screen and (min-width: 1280px) {
    width: 480px;
    margin-top: 32px;
  }
`;

export const StyledBox = styled.div`
  width: 100%;
  max-width: 480px;
  color: #fff;
`;

export const StyledTable = styled.div`
  max-height: 170px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 1280px) {
    align-items: stretch;
  }
`;

export const StyledThBox = styled.div`
  padding: 16px 30px;
  margin-bottom: 20px;
  background: rgba(82, 59, 126, 0.6);

  display: flex;
  flex-direction: row;
  gap: 37px;
  align-items: center;

  @media only screen and (min-width: 1280px) {
    justify-content: center;
    gap: 50px;
  }
`;

export const StyledTdBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: start;
  gap: 45px;

  @media only screen and (min-width: 1280px) {
    margin: 0 auto;
    gap: 50px;
  }
`;

export const StyledTBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 24px;
  margin-bottom: 6px;

  @media only screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const StyledTh = styled.span`
  color: var(--white);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(16 / 24);
  text-align: center;
`;

export const StyledTd = styled.span`
  display: inline-block;
  color: var(--white);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(24 / 16);
  text-align: center;
  width: 62px;
  &:last-child {
    width: 42px;
  }
  &:first-child {
    width: 65px;
  }
`;

export const StyledImg = styled.img`
  display: inline-block;
  width: 100%;
`;

export const Usd = styled.span`
  @media only screen and (min-width: 1280px) {
    color: #ff868d;
    position: absolute;
    top: 120px;
    left: 45px;
  }
`;
export const Eur = styled.span`
  @media only screen and (min-width: 1280px) {
    color: #ff868d;
    position: absolute;
    top: 86px;
    right: 92px;
  }
`;
