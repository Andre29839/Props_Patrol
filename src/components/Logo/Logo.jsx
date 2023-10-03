import React from 'react';
import { LogoForm, TitleLogo, WrapperLogo } from './Logo.styled';
import moneyGuardLogo from '../../images/logo.svg';

export const Logo = () => {
  return (
    <WrapperLogo>
      <LogoForm src={moneyGuardLogo} alt="MoneyGuard Logo" />
      <TitleLogo>Money Guard</TitleLogo>
    </WrapperLogo>
  );
};
