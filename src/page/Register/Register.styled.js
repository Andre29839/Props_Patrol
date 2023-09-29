import styled from 'styled-components';
import mobile from '../../image/register-bg/bg-register-mobile.ipg';
import mobile2x from '../../image/register-bg/bg-register-mobile@2x.ipg';
import tablet from '../../image/register-bg/bg-register-tablet.ipg';
import tablet2x from '../../image/register-bg/bg-register-tablet@2x.ipg';
import desctop from '../../image/register-bg/bg-register-desktop.ipg';
import desctop2x from '../../image/register-bg/bg-register-desktop@2x.ipg';

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

  @media (min-width: 321px) {
    background-image: url(${tablet});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tablet2x});
    }
  }
  @media (min-width: 769px) {
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
