import styled from 'styled-components';
import mobile from 'images/register-bg/bg-register-mobile.jpg';
import mobile2x from 'images/register-bg/bg-register-mobile@2x.jpg';
import tablet from 'images/register-bg/bg-register-tablet.jpg';
import tablet2x from 'images/register-bg/bg-register-tablet@2x.jpg';
import desctop from 'images/register-bg/bg-register-desktop.jpg';
import desctop2x from 'images/register-bg/bg-register-desktop@2x.jpg';

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

  @media (min-width: 480px) {
    background-image: url(${tablet});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tablet2x});
    }
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

export const PublicPageBox = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
