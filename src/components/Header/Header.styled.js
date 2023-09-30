import { IoExitOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: var(--header-color);
  box-shadow: var(--header-shadow);

  @media only screen and (min-width: 767.9px) {
    padding: 16px 32px;
  }
`;

export const WrapHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 17px;
    height: 17px;
    margin-bottom: 4px;
  }

  p {
    font-size: 13px;
    color: var(--white);
    font-weight: 400;
  }

  @media only screen and (min-width: 767.9px) {
    width: 115px;
    height: 48px;
    text-align: center;

    p {
      font-size: 17px;
    }

    @media only screen and (min-width: 1280px) {
      img {
        width: 23px;
        height: 22px;
      }
    }
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  span {
    color: var(--white-60);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 8px;
  }

  button {
    display: flex;
    font-size: 100%;
    background-color: transparent;
    color: var(--white-60);
    align-items: center;
    vertical-align: sub;
    padding: 4px;
    border: none;
  }

  div {
    height: 30px;
    width: 1px;
    background-color: var(--white-60);
    margin-right: 6px;
  }

  @media only screen and (min-width: 767.9px) {
    span {
      margin-right: 12px;
    }

    button {
      width: 66px;
      height: 32px;
      color: var(--white-60);
    }
  }
`;

export const LogoExit = styled(IoExitOutline)`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: currentColor;
  transform: scaleY(1.4);
  vertical-align: sub;
  margin-right: 4px;

  @media only screen and (min-width: 1280px) {
    transform: scaleY(1.5);
    margin-right: 6px;
  }
`;
