import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const customStyles = {
  container: provided => ({
    ...provided,
    width: 'auto',
    border: 'none',
    fontSize: '18px',
  }),
  control: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    minHeight: '20px',
    border: 'none',
    borderBottom: '1px solid var(--transparency-60)',
    borderRadius: '0',
    boxShadow: 'none',

    alignItems: 'flex-end',
    cursor: 'pointer',
    '&:hover': { borderBottom: '1px solid var(--transparency-60)' },

    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '20px',
    },
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
    color: isFocused ? 'var(--dashboard-text)' : 'var(--white)',
    '&:hover': {
      backgroundColor: isFocused ? 'var(--transparency-10)' : 'transparent',
      color: isFocused ? 'var(--dashboard-text)' : 'var(--white)',
    },
    padding: '10px 20px',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '8px',
    background: 'var(--violet)',
    boxShadow: 'var(--header-shadow)',
    overflow: 'hidden',
    marginTop: '1px',
  }),
  menuList: provided => ({
    ...provided,

    '&::-webkit-scrollbar': {
      width: '2px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      background: 'var(--menu-list)',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: 'var(--menu-list)',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  indicatorContainer: provided => ({
    ...provided,
    padding: '0px',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0px 5px 0px 0px',
  }),
  valueContainer: provided => ({
    ...provided,
    alignItems: 'flex-end',
    padding: '1px 1px',
  }),
  input: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '0px',

    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '0px',
    },
  }),
  singleValue: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    color: 'var(--white)',
    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '0px',
      margin: '0px',
    },
  }),
  placeholder: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    color: 'var(--white-60)',
    '@media only screen and (max-width: 767.9px)': {
      paddingLeft: '0px',
    },
  }),
};
