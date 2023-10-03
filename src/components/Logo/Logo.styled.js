import styled from 'styled-components';

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const TitleLogo = styled.h2`
  color: ${({ theme }) => theme.colors.primaryFont};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
  height: 40px;

  letter-spacing: 1.8px;

  @media (min-width: 768px) {
    font-size: 27px;
  }
`;

export const LogoForm = styled.img`
  width: 25px;
  height: 25px;
  margin-bottom: 3px;
  transition: transform ${({ theme }) => theme.transitions.regular};
  outline: none;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    margin-bottom: 5px;
  }
`;
