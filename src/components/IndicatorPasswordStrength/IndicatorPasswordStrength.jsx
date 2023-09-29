import PropTypes from 'prop-types';
import { usePasswordStrength } from 'Hooks/usePasswordStrength';
import {
  PasswordStrengthIndicator,
  PasswordStrengthText,
} from './IndicatorPasswordStrength.styled';

export const IndicatorPasswordStrength = ({ values }) => {
  const {
    getPasswordStrengthWidth,
    getPasswordStrengthColor,
    getPasswordStrengthText,
  } = usePasswordStrength();

  return (
    <>
      <PasswordStrengthIndicator
        width={getPasswordStrengthWidth(values.password)}
        color={getPasswordStrengthColor(values.password)}
      />
      <PasswordStrengthText color={getPasswordStrengthColor(values.password)}>
        {getPasswordStrengthText(values.password)}
      </PasswordStrengthText>
    </>
  );
};

IndicatorPasswordStrength.propTypes = {
  values: PropTypes.shape({
    password: PropTypes.string,
  }).isRequired,
};
