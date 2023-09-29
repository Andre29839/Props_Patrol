import { ButtonStyled } from './Button.styled';

export const Button = ({
  onClick = null,
  text,
  type = 'button',
  variant = 'primary',
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} variant={variant}>
      {text}
    </ButtonStyled>
  );
};
