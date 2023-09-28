import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--backdrop);
  backdrop-filter: blur(3.5px);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;
  padding: 15px;

  .categore {
    top: 44px;
  }

  @media (max-width: 767.9px) {
    padding: 0px;
  }
`;

export const ModalContent = styled.div`
  height: 511px;
  width: 540px;
  padding: 41px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--modal-gradient);
  border-radius: 8px;
  position: relative;
  box-shadow: var(--black25);

  @media (max-width: 767.9px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: calc(20 * (100vw / 480));
    min-width: 300px;
  }
`;

export const ButtonIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  & svg {
    color: var(--white);
    width: 20px;
    height: 20px;
    position: relative;
  }

  :hover,
  :focus {
    outline: none;
    border: none;
  }
  @media (max-width: 767.9px) {
    & svg {
      display: none;
    }
  }
`;
