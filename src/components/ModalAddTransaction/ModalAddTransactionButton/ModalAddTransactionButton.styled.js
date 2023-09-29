import styled from 'styled-components';

export const CommonBtnStyles = styled.button`
  color: var(--total-white);
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  cursor: pointer;
`;

export const AddBtn = styled(CommonBtnStyles)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--button-gradient);
  box-shadow: 1px 9px 15px 0px var(--transparency-20);
  svg {
    width: 28px;
    height: 28px;
  }
`;

export const BtnRightCorner = styled.div`
  position: fixed;

  @media screen and (max-width: 767.9px) {
    right: 20px;
    bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    right: 40px;
    bottom: 40px;
  }
`;

export const EditBtn = styled(CommonBtnStyles)`
  color: var(--grey);
  background: none;
  padding: 0;
`;
