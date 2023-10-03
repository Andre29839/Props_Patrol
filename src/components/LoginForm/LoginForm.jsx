import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginSchema } from 'services/validation/validationLoginSchema';
import { Logo } from 'components/Logo/Logo';
import { FormError } from 'components/FormError/FormError';
import { TogglePasswordIcon } from 'components/TogglePasswordVisibility/TogglePasswordVisibility';
import {
  EmailIcon,
  FieldStyled,
  FormStyled,
  PasswordlIcon,
  WrapperButton,
  WrapperField,
  WrapperForm,
  WrapperIcon,
  WrapperIcon2,
  WrapperIcon3,
} from './LoginForm.styled';
import { LinkStyled } from 'components/RegisterForm/RegisterForm.styled';
import { usePasswordToggle } from 'Hooks/usePasswordToggle';
import Button from 'components/Button/Button';
import { logInThunk } from 'redux/registerReducers/registerThunks';

export const LoginForm = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle([
    'password1',
    'password2',
  ]);
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    dispatch(logInThunk(value))
      .unwrap()
      .then(data => {
        resetForm();
        toast.success(
          `Well done, ${data.user.username}! You have signed in successfully.`
        );
      })
      .catch(error => {
        toast.error(`${error}! Check your password or email!`);
      });
  };

  return (
    <WrapperForm>
      <Logo />
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <FormStyled>
          <WrapperField>
            <WrapperIcon>
              <FieldStyled
                type="email"
                name="email"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="E-mail"
                autoComplete="off"
                required
              />
              <EmailIcon size={24} />
            </WrapperIcon>
            <FormError name="email" />
            <WrapperIcon3>
              <WrapperIcon2>
                <FieldStyled
                  type={showPasswords.password1 ? 'text' : 'password'}
                  name="password"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
                <PasswordlIcon />
              </WrapperIcon2>
              <TogglePasswordIcon
                showPassword={showPasswords.password1}
                onToggle={() => togglePasswordVisibility('password1')}
              />
            </WrapperIcon3>
            <FormError name="password" />
          </WrapperField>
          <WrapperButton>
            <Button variant="primary" type="submit" text="log in" />
          </WrapperButton>
        </FormStyled>
      </Formik>
      <LinkStyled to="/register">Register</LinkStyled>
    </WrapperForm>
  );
};
