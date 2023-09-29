import styled from 'styled-components';

export const CommonBtnStyles = styled.button`
  color: #ffffff;
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
  background: var(
    --button-gradient,
    linear-gradient(167deg, #ffc727 0%, #9e40ba 61.46%, #7000ff 90.54%)
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  svg {
    width: 28px;
    height: 28px;
  }
`;

export const BtnRightCorner = styled.div`
  position: fixed;

  z-index: 10;
  @media screen and (max-width: 767px) {
    right: 20px;
    bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    right: 40px;
    bottom: 40px;
  }
`;
