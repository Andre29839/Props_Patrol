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
} from 'components/LoginForm/LoginForm.styled';
import { Formik } from 'formik';
import React from 'react';
import { LinkStyled, NameRegisterIcon } from './RegisterForm.styled';
import { Button } from 'shared/Button/Button';

const RegisterForm = () => {
  return (
    <WrapperForm>
      <Formik>
        <FormStyled autoComplete="off">
          <WrapperField>
            <WrapperIcon>
              <FieldStyled
                type="text"
                name="username"
                placeholder="First name"
                autoComplete="off"
                required
              />
              <NameRegisterIcon />
            </WrapperIcon>

            <WrapperIcon>
              <FieldStyled
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <EmailIcon />
            </WrapperIcon>

            <WrapperIcon3>
              <WrapperIcon2>
                <FieldStyled
                  type=""
                  name="password"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Password"
                  required
                  autoComplete="off"
                />
                <PasswordlIcon />
              </WrapperIcon2>
            </WrapperIcon3>

            <WrapperIcon3>
              <WrapperIcon2>
                <FieldStyled
                  type=""
                  name="confirmPassword"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Confirm Password"
                  autoComplete="off"
                  required
                />
                <PasswordlIcon />
              </WrapperIcon2>
            </WrapperIcon3>
          </WrapperField>
          <WrapperButton>
            <Button type="submit" text="register" />
          </WrapperButton>
        </FormStyled>
      </Formik>
      <LinkStyled to="/login">Log in</LinkStyled>
    </WrapperForm>
  );
};

export default RegisterForm;
