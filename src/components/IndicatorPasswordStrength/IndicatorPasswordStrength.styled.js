import styled, { css, keyframes } from 'styled-components';

const passwordStrengthAnimation = keyframes`
  from {
    width: 0%;
    background-color: transparent;
  }
  to {
    width:100%;
    background-color: ${props => props.color};
  }
`;

export const PasswordStrengthIndicator = styled.div`
  width: 100%;
  height: 3px;
  background-color: transparent;
  border-radius: 5px;
  animation: ${passwordStrengthAnimation} 0.5s ease;
  width: ${props => props.width};
  background-color: ${props => props.color};
  transition: all 0.4s ease-out;
  ${props => css`
    background-color: ${props.color};
  `};
`;

export const PasswordStrengthText = styled.p`
  margin-top: 5px;
  color: ${props => props.color};
  font-size: 14px;
  font-weight: bold;
`;
