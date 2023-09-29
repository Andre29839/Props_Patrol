import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';

export const BackdropLogOut = styled.div`
  background: rgba(34, 13, 91, 0.23);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overscroll-behavior: contain;
  z-index: 5;

  @media only screen and (min-width: 768px) {
    backdrop-filter: blur(3.5px);
  }
`;

export const ModalLogOut = styled.div`
  width: 300px;
  height: 100%;
  top: 50%;
  left: 50%;
  position: absolute;
  padding: 40px 72px;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgb(64, 46, 155) 5%,
    rgb(76, 50, 113) 100%
  );

  button {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    padding: 2px;
  }

  @media only screen and (min-width: 768px) {
    width: 533px;
    max-height: 448px;
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
`;
