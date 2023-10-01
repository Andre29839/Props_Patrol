import styled from 'styled-components';

export const StyledSideBox = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => props.display || 'inline-block'};
  flex-direction: ${props => props.flexDirection || 'column'};
  gap: ${props => props.gap || 'none'};
  padding-left: ${props => props.padL || '0'};
  padding-right: ${props => props.padR || '0'};
  justify-content: ${props => props.jc || 'normal'};
  max-width: ${props => props.w || '768px'};

  @media (min-width: 768px) and (max-width: 1279.9px) {
    max-width: ${props => props.w || '768px'};
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-bottom: ${props => props.marB || '20px'};
  }
`;

export const StyledNavAndBalanceBox = styled.div`
  width: 100%;
  max-width: ${props => props.maxW || '480px'};
`;
