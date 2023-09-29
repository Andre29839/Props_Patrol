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

  letter-spacing: 1.8px;

  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 27px;
  }
`;
