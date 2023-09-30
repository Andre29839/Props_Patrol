import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  StyledNavList,
  StyledNavListMob,
  ActiveNavLink,
  ActiveNavLinkMob,
  StyledIoMdHome,
  StyledSlGraph,
  StyledPiCurrencyDollarSimple,
} from './Navigation.styled';

const Navigation = () => {
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767.9 });
  const isTabletAndDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <nav>
      <div>
        {isTabletAndDesktop && (
          <StyledNavList>
            <li>
              <ActiveNavLink to="/home">
                <StyledIoMdHome /> Home
              </ActiveNavLink>
            </li>
            <li>
              <ActiveNavLink to="/statistic">
                <StyledSlGraph /> Statistic
              </ActiveNavLink>
            </li>
          </StyledNavList>
        )}
        {isMobile && (
          <StyledNavListMob>
            <li>
              <ActiveNavLinkMob to="/home">
                <StyledIoMdHome />
              </ActiveNavLinkMob>
            </li>
            <li>
              <ActiveNavLinkMob to="/statistic">
                <StyledSlGraph />
              </ActiveNavLinkMob>
            </li>
            <li>
              <ActiveNavLinkMob to="/currency">
                <StyledPiCurrencyDollarSimple />
              </ActiveNavLinkMob>
            </li>
          </StyledNavListMob>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
