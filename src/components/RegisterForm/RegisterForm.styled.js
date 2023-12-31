import { Link } from 'react-router-dom';
import { WrapperForm } from 'components/LoginForm/LoginForm.styled';

import { BiSolidUserRectangle } from 'react-icons/bi';
import styled from 'styled-components';
import mobile2x from 'images/register-bg/bg-register-mobile@2x.jpg';

export const WrapperFormReg = styled(WrapperForm)`
  padding: 40px 62px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767.9px) {
    height: 100%;
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.normal};
    box-shadow: ${({ theme }) => theme.shadows.primary};
    background-size: cover;
    background-image: url(${mobile2x});
  }
  @media (min-width: 768px) {
    padding: 40px 62px;
    width: 533px;
  }
  border-radius: ${({ theme }) => theme.radii.normal};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  background: radial-gradient(
    circle,
    rgb(64, 46, 155, 0.95) 5%,
    rgb(76, 50, 113, 0.95) 100%
  );
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme }) => theme.spacing(70)};
  min-height: ${({ theme }) => theme.spacing(12.5)};
  margin-top: 20px;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.btnVioletText};
  background: ${({ theme }) => theme.colors.btnWhiteBg};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.radii.button};
  box-shadow: ${({ theme }) => theme.shadows.secondary};
  cursor: pointer;
  transition: transform 250ms ease-in-out;

  &:focus,
  &:hover {
    border-radius: 18px;
    border: 2px solid yellow;
    transform: scale(1.01);
    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 768px) {
    min-width: ${({ theme }) => theme.spacing(75)};
  }
`;

export const NameRegisterIcon = styled(BiSolidUserRectangle)`
  height: 24px;
  width: 24px;
  color: rgba(255, 255, 255, 0.4);
  position: absolute;
  left: 8px;
  top: 74%;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 1;
`;
