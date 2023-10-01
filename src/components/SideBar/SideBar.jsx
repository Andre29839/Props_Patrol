import { useMediaQuery } from 'react-responsive';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import { StyledNavAndBalanceBox, StyledSideBox } from './SideBar.styled';
import { useLocation } from 'react-router-dom';

const SideBar = () => {
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.7 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const location = useLocation();
  const homeBalance = location.pathname;

  return (
    <div>
      {isDesktop && (
        <StyledSideBox>
          <StyledNavAndBalanceBox>
            <Navigation />
            <Balance />
          </StyledNavAndBalanceBox>
          <Currency />
        </StyledSideBox>
      )}

      {isTablet && (
        <StyledSideBox>
          <StyledNavAndBalanceBox>
            <Navigation />
            <Balance />
          </StyledNavAndBalanceBox>
          <Currency />
        </StyledSideBox>
      )}
      {isMobile && (
        <StyledSideBox>
          <Navigation />
          {homeBalance === '/home' && <Balance />}
        </StyledSideBox>
      )}
    </div>
  );
};

export default SideBar;
