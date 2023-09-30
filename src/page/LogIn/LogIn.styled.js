import styled from 'styled-components';
import mobile from 'images/login-bg/bg-login-mobile.jpg';
import mobile2x from 'images/login-bg/bg-login-mobile@2x.jpg';
import tablet from 'images/login-bg/bg-login-tablet.jpg';
import tablet2x from 'images/login-bg/bg-login-tablet@2x.jpg';
import desctop from 'images/login-bg/bg-login-web.jpg';
import desctop2x from 'images/login-bg/bg-login-web@2x.jpg';

export const PublicPageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background: #101010;

  background-size: cover;
  background-image: url(${mobile});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobile2x});
  }

  @media (min-width: 768px) {
    background-image: url(${tablet});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tablet2x});
    }
  }

  @media (min-width: 1280px) {
    background-image: url(${desctop});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desctop2x});
    }
  }
`;
