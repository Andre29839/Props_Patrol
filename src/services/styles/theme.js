export const theme = {
  colors: {
    primaryFont: '#FBFBFB',
    secondaryFont: 'rgba(255, 255, 255, 0.60)',
    white: 'rgba(255, 255, 255, 0.40)',
    blue: '#4A56E2',
    yellow: '#FFC727',
    orange: '#FFB627',
    pink: '#FF868D',
    violet: '#734AEF',
    modalBackground: 'rgba(255, 255, 255, 0.10)',
    btnGradient:
      'linear-gradient(167deg, #FFC727 0%, #9E40BA 61.46%, #7000FF 90.54%)',
    btnWhiteBg: '#FCFCFC',
    btnVioletText: '#623F8B',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  spacing: value => `${4 * value}px`,

  fonts: {
    regular: 'PoppinsRegular, sans-serif',
    semiBold: 'PoppinsSemiBold, sans-serif',
    bold: 'PoppinsBold, sans-serif',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '30px',
  },

  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },

  lineHeights: {
    normal: 1.2,
    upperCase: 1.8,
  },

  borders: {
    none: 'none',
    normal: '1px solid',
    medium: '3px solid ',
  },

  radii: {
    none: '0',
    normal: '8px',
    button: '20px',
    round: '50%',
  },

  shadows: {
    primary: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
    secondary: '1px 9px 15px 0px rgba(0, 0, 0, 0.20)',
    header:
      '0px 4px 40px 0px rgba(0, 0, 0, 0.25), 0px -3px 2px 0px rgba(0, 0, 0, 0.10) inset',
  },

  transitions: {
    regular: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'transform ease-in-out 250ms',
  },
};
