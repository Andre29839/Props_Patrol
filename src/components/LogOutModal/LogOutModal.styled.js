import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';

export const BackdropLogOut = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overscroll-behavior: contain;
  background: rgba(34, 13, 91, 0.23);
  z-index: 5;

  @media only screen and (min-width: 768px) {
    backdrop-filter: blur(3.5px);
  }
`;

export const ModalLogOut = styled.div`
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  position: absolute;
  padding: 40px 72px;
  overscroll-behavior: contain;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgb(64, 46, 155) 5%,
    rgb(76, 50, 113) 100%
  );

  p {
    width: 214px;
    font-family: 'Poppins', sans-serif;
    color: var(--total-white);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 200px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 768px) {
    width: 533px;
    max-height: 448px;

    p {
      width: 299px;
      margin-top: 0;
    }
  }
`;

export const CancelSvg = styled(ImCancelCircle)`
  width: 24px;
  height: 24px;
  fill: var(--total-white);

  &:hover,
  &:focus {
    fill: var(--yellow);
  }
`;

export const WrapLogo = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 52px;
  }

  img {
    width: 23px;
    height: 23px;
    margin-bottom: 4px;
  }

  h3 {
    color: var(--total-white);
    font-size: 27px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media only screen and (min-width: 1280px) {
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
