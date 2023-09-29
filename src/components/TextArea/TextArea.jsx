import { useField } from 'formik';
import { StyledTextArea } from './TextArea.styled';

const TextArea = ({ ...props }) => {
  const [field] = useField(props);

  return <StyledTextArea {...field} {...props} />;
};

export default TextArea;
