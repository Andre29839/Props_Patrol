import { useState } from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import { CiCalendarDate } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { object, string, date, bool, mixed, number } from 'yup';
import {
  BaseInput,
  CalendarWrapper,
  ErrorText,
  FormikForm,
  Heading,
  InputWrapper,
  TwoColumnRow,
} from './ModalAddTransaction.styled';
import DateTimePicker from 'components/DateTimePicker/DateTimePicker';
import TextArea from 'components/TextArea/TextArea';
import { selectTransactionsCategories } from 'redux/transactionsRedusers/transactionsSelectors';
import { addTransactionsThunk } from 'redux/transactionsRedusers/transactionsThunks';
import Switch from './Switch/Switch';
import CategorySelect from 'components/CategorySelect/CategorySelect';
import Button from 'components/Button/Button';

const ModalAddTransaction = ({ closeModal }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector(selectTransactionsCategories);

  const incomeId = categories
    .filter(category => (category.type === 'INCOME' ? category.id : null))
    .reduce(function (target, key, idx) {
      target[idx] = key;
      return target;
    });

  const dateTransformer = (_, originalValue) => {
    const parsedDate = moment(originalValue, 'DD.MM.YYYY');
    return parsedDate.isValid() ? parsedDate.toDate() : new Date('');
  };

  const handleCheckboxChange = () => {
    setIsChecked(isChecked => !isChecked);
  };

  const handleSubmit = values => {
    const data = {
      transactionDate: new Date(values.date),
      type: isChecked ? 'INCOME' : 'EXPENSE',
      categoryId: isChecked ? incomeId.id : values.category.id,
      comment: values.comment,
      amount: isChecked ? Number(values.value) : Number(-values.value),
    };

    dispatch(addTransactionsThunk(data));
  };

  return (
    <Formik
      initialValues={{
        date: new Date(),
        type: isChecked,
        comment: '',
        value: '',
        category: null,
      }}
      validationSchema={object({
        type: bool(),
        category: mixed().when('type', {
          is: type => !type,
          then: () => mixed().required('Please choose transaction category.'),
          otherwise: () => mixed().notRequired(),
        }),
        value: number()
          .typeError('Transaction value must be a number')
          .test(
            'len',
            'Transaction value can be a maximum of 16 characters',
            val => val.toString().length <= 16
          )
          .required('Please provide transaction value.'),
        date: date()
          .transform(dateTransformer)
          .typeError('Please enter a valid date')
          .required('Please provide transaction date.'),
        comment: string().notRequired(),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        resetForm();
        setSubmitting(false);
        closeModal();
      }}
      enableReinitialize
    >
      {({ values, setFieldValue, handleBlur }) => (
        <FormikForm>
          <Heading>Add transaction</Heading>
          <Switch
            name="type"
            checked={isChecked}
            onClick={handleCheckboxChange}
            type="radio"
          />
          {!isChecked && (
            <InputWrapper>
              <CategorySelect
                name="category"
                placeholder="Select a category"
                value={values.category}
                onChange={option => setFieldValue('category', option)}
                options={categories?.map(option => ({
                  value: option.type,
                  label: option.name,
                  id: option.id,
                }))}
              />
              <ErrorText name="category" component="div" />
            </InputWrapper>
          )}
          <TwoColumnRow>
            <InputWrapper>
              <BaseInput
                placeholder="0.00"
                title="Please put the transaction value"
                name="value"
                type="number"
                autoComplete="off"
                value={values.value}
                onChange={value => setFieldValue('value', value.target.value)}
                onBlur={handleBlur}
                onKeyUp={handleBlur}
              />
              <ErrorText name="value" component="div" />
            </InputWrapper>
            <CalendarWrapper>
              <DateTimePicker
                dateFormat="DD.MM.YYYY"
                name="date"
                type="date"
                timeFormat={false}
              />
              <CiCalendarDate />
            </CalendarWrapper>
          </TwoColumnRow>
          <InputWrapper>
            <TextArea
              placeholder="Comment"
              title="Please describe your transaction."
              name="comment"
              type="text"
              autoComplete="off"
            />
            <ErrorText name="comment" component="div" />
          </InputWrapper>
          <Button type="submit" variant="primary" text="Add" />
          <Button
            type="button"
            variant="secondary"
            text={'Cancel'}
            onClick={() => closeModal()}
          />
        </FormikForm>
      )}
    </Formik>
  );
};

export default ModalAddTransaction;
