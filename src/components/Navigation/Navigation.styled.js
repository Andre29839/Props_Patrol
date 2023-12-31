import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdHome } from 'react-icons/io';
import { PiCurrencyDollarSimple } from 'react-icons/pi';
import { SlGraph } from 'react-icons/sl';

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '12px'};

  margin: 0;

  list-style: none;
  padding: 0;
  padding-left: 19px;
  padding-top: 52px;
  padding-bottom: 52px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  color: var(--white);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 27);

  svg {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.4);
    path {
      fill: #2e225f;
    }
  }

  &:active,
  &:hover {
    font-weight: 700;
    svg {
      background-color: rgba(74, 86, 226, 0.5);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      path {
        fill: #fff;
        fill-opacity: 1;
      }
    }
  }
`;

export const StyledIoMdHome = styled(IoMdHome)`
  /* width: 18px;
  height: 18px;
  border-radius: 5px;
  fill: none;
  path {
    fill: rgb(255, 255, 255);
    fill-opacity: 0.6;
  }
  &:active,
  &:hover {
    font-weight: 700;
    svg {
      background-color: rgba(255, 255, 255, 1);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      path {
        fill: #4a56e2;
        fill-opacity: 1;
      }
    }
  } */
`;

export const StyledSlGraph = styled(SlGraph)`
  /* width: 18px;
  height: 18px;
  border-radius: 5px;
  fill: none;
  path {
    fill: rgb(255, 255, 255);
    fill-opacity: 0.6;
  }
  &:active,
  &:hover {
    font-weight: 700;
    svg {
      background-color: rgba(255, 255, 255, 1);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      path {
        fill: #4a56e2;
        fill-opacity: 1;
      }
    }
  } */
`;

export const StyledPiCurrencyDollarSimple = styled(PiCurrencyDollarSimple)`
  /* width: 44px;
  height: 44px;
  border-radius: 5px;
  fill: none;
  path {
    fill: rgb(255, 255, 255);
    fill-opacity: 0.6;
  }
  &:active,
  &:hover {
    font-weight: 700;
    svg {
      background-color: rgba(255, 255, 255, 1);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      path {
        fill: #4a56e2;
        fill-opacity: 1;
      }
    }
  } */
`;

export const StyledNavListMob = styled.ul`
  gap: 32px;
  padding: 0;
  display: inline-block;
  max-width: max-content;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  list-style: none;
  @media (max-width: 767.9px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

export const StyledNavLinkMob = styled(NavLink)`
  width: 44px;
  height: 44px;
  svg {
    width: 44px;
    height: 44px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.4);
    path {
      fill: #2e225f;
    }
  }

  @media (max-width: 767.9px) {
    &:active,
    &:hover {
      font-weight: 700;
      svg {
        background-color: rgba(74, 86, 226, 0.5);
        filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
        path {
          fill: #fff;
          fill-opacity: 1;
        }
      }
    }
  }
`;

export const ActiveNavLink = styled(StyledNavLink)`
  &.active {
    svg {
      background-color: rgba(74, 86, 226, 0.5);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      path {
        fill: #fff;
        fill-opacity: 1;
      }
    }
  }
`;

export const ActiveNavLinkMob = styled(StyledNavLinkMob)`
  &.active {
    svg {
      background-color: rgba(74, 86, 226, 0.5);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      path {
        fill: #fff;
        fill-opacity: 1;
      }
    }
  }
`;
