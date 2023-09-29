import styled from 'styled-components';

export const IndicatorWrapper = styled.div`
  height: 3px;
  background-color: ${props => (props.passwordsMatch ? 'green' : 'red')};
  transition: all 0.4s ease-out;
`;
