import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { ErrorText } from 'components/FormError/FormError.styled';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

FormError.propTypes = {
  name: PropTypes.string.isRequired,
};
