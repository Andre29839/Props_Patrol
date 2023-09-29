import PropTypes from 'prop-types';
import { PasswordlIconLook } from 'components/LoginForm/LoginForm.styled';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const TogglePasswordIcon = ({ showPassword, onToggle }) => {
  return (
    <PasswordlIconLook>
      {showPassword ? (
        <FaEye onClick={onToggle} />
      ) : (
        <FaEyeSlash onClick={onToggle} />
      )}
    </PasswordlIconLook>
  );
};

TogglePasswordIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
};
