import React from 'react';
import { Formik } from 'formik';
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
import { Button } from 'shared/Button/Button';
import { LinkStyled } from 'components/RegisterForm/RegisterForm.styled';

const LoginForm = () => {
  return (
    <WrapperForm>
      <Formik>
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
              <EmailIcon />
            </WrapperIcon>

            <WrapperIcon3>
              <WrapperIcon2>
                <FieldStyled />
                <PasswordlIcon />
              </WrapperIcon2>
            </WrapperIcon3>
          </WrapperField>
          <WrapperButton>
            <Button type="submit" text="log in" />
          </WrapperButton>
        </FormStyled>
      </Formik>
      <LinkStyled to="/register">Register</LinkStyled>
    </WrapperForm>
  );
};

export default LoginForm;
