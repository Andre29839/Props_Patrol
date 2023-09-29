import { LoginForm } from 'components/LoginForm/LoginForm';
import { PublicPageBox, PublicPageContainer } from './LogIn.styled';

const LogIn = () => {
  return (
    <PublicPageContainer>
      <PublicPageBox>
        <LoginForm />
      </PublicPageBox>
    </PublicPageContainer>
  );
};

export default LogIn;
