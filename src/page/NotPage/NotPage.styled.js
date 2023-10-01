import styled from 'styled-components';
import backImg from '../../images/Gradient.png';
export const NotPageSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(16, 16, 16, 1);
  display: block;
  align-items: center;
  justify-content: center;
  background-position: center;
  display: flex;
  flex-direction: column-reverse;
`;
export const NotPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  p {
    text-align: center;
    width: 290px;
    font-size: 30px;
    margin: 10px;
    text-shadow: #fc0 1px 0 10px;
    @media screen and (min-width: 768px) {
      width: 500px;
      margin: 20px;
    }
    @media screen and (min-width: 1280px) {
      margin: 40px;
      font-size: 55px;
      width: 800px;
    }
  }
  .link404 {
    text-decoration: none;
    font-size: 25px;
    color: var(--white);
    outline: 1px solid rgb(255 255 255 / 0.6);
    padding: 10px;
    width: 350px;
    height: 50px;
    border-radius: 20px;
    background: var(--button-gradient);
    box-shadow: #fc0 1px 0 10px;
    text-align: center;
  }
`;
export const ImgPig = styled.img`
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 800px;
  }
`;
