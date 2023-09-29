import styled from 'styled-components';

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.pink};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 280px;
    text-align: center;
  }
`;
