import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { PublicPageBox, PublicPageContainer } from 'page/LogIn/LogIn.styled';

const RegisterPage = () => {
  return (
    <PublicPageContainer>
      <PublicPageBox>
        <RegisterForm />
      </PublicPageBox>
    </PublicPageContainer>
  );
};

export default RegisterPage;
