import React from 'react';
import { TitleLogo, WrapperLogo } from './Logo.styled';
import moneyGuardLogo from '../../images/logo.svg';

export const Logo = () => {
  return (
    <WrapperLogo>
      <img
        src={moneyGuardLogo}
        alt="MoneyGuard Logo"
        width={'30px'}
        height={'30px'}
      />
      <TitleLogo>Money Guard</TitleLogo>
    </WrapperLogo>
  );
};
