import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { PublicPageContainer } from 'page/LogIn/LogIn.styled';
import { PublicPageContainer } from './Register.styled';

const RegisterPage = () => {
  return (
    <PublicPageContainer>
      <RegisterForm />
    </PublicPageContainer>
  );
};

export default RegisterPage;
