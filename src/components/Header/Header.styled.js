import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: var(--header-color);
  box-shadow: var(--header-shadow);
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
`;
