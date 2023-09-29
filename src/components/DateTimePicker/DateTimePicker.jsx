import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { useField } from 'formik';
import { StyledDateTime } from './DateTimePicker.styled';

const DateTimePicker = ({ ...props }) => {
  const [field, _, helpers] = useField(props);

  return (
    <StyledDateTime
      {...field}
      {...props}
      inputProps={{ readOnly: true }}
      selected={field.value}
      closeOnSelect={true}
      onChange={value => {
        helpers.setValue(moment(value));
      }}
    />
  );
};

export default DateTimePicker;
