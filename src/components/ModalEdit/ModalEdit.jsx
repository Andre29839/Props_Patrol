import { parse } from 'date-fns';
import { Formik } from 'formik';
import { RxSlash } from 'react-icons/rx';
import { CiCalendarDate } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { object, string, date, number } from 'yup';
import {
  BaseInput,
  CalendarWrapper,
  ErrorText,
  ExpenseSpan,
  FormikForm,
  Heading,
  IncomeSpan,
  InputWrapper,
  TransactionTypeDiv,
  TwoColumnRow,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import DateTimePicker from 'components/DateTimePicker/DateTimePicker';
import TextArea from 'components/TextArea/TextArea';
import { patchTransactionsThunk } from 'redux/transactionsRedusers/transactionsThunks';
import Button from 'components/Button/Button';
import { refreshBalanceThunk } from 'redux/registerReducers/registerThunks';

const ModalEdit = ({ closeModal, item }) => {
  const categoryNames = {
    'c9d9e447-1b83-4238-8712-edc77b18b739': 'Main expenses',
    '27eb4b75-9a42-4991-a802-4aefe21ac3ce': 'Products',
    '3caa7ba0-79c0-40b9-ae1f-de1af1f6e386': 'Car',
    'bbdd58b8-e804-4ab9-bf4f-695da5ef64f4': 'Self care',
    '76cc875a-3b43-4eae-8fdb-f76633821a34': 'Child care',
    '128673b5-2f9a-46ae-a428-ec48cf1effa1': 'Household products',
    '1272fcc4-d59f-462d-ad33-a85a075e5581': 'Education',
    'c143130f-7d1e-4011-90a4-54766d4e308e': 'Leisure',
    '719626f1-9d23-4e99-84f5-289024e437a8': 'Other expenses',
    '3acd0ecd-5295-4d54-8e7c-d3908f4d0402': 'Entertainment',
    '063f1132-ba5d-42b4-951d-44011ca46262': 'Income',
  };

  const dispatch = useDispatch();
  const isExpense = item.type === 'EXPENSE';

  const dateTransformer = (_, originalValue) => {
    const parsedDate = parse(originalValue, 'dd-MM-yyyy', new Date());
    return Number(parsedDate) ? new Date('') : new Date();
  };

  const handleSubmit = values => {
    const data = {
      id: item.id,
      updatedData: {
        transactionDate: new Date(values.date),
        type: item.type,
        categoryId: values.category.categoryId,
        comment: values.comment,
        amount: !isExpense ? Number(values.value) : Number(-values.value),
      },
    };

    dispatch(patchTransactionsThunk(data))
      .unwrap()
      .then(() => dispatch(refreshBalanceThunk()));
  };

  return (
    <Formik
      initialValues={{
        date: new Date(item.transactionDate),
        type: item.type,
        category: item.categoryId,
        comment: item.comment,
        value: Math.abs(item.amount),
      }}
      validationSchema={object({
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
        comment: string()
          .notRequired()
          .max(25, 'Maximum must be 25 characters')
          .min(5, 'Minimum must be 5 characters'),
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
          <Heading>Edit transaction</Heading>
          <TransactionTypeDiv>
            <IncomeSpan $active={item.type === 'INCOME'}>Income</IncomeSpan>
            <RxSlash />
            {/* <TransactionTypeSpan> &frasl; </TransactionTypeSpan> */}
            <ExpenseSpan $active={item.type === 'EXPENSE'}>Expense</ExpenseSpan>
          </TransactionTypeDiv>
          {isExpense && (
            <InputWrapper>
              <TextArea
                name="category"
                autoComplete="off"
                value={categoryNames[item.categoryId]}
                readonly
              />
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
            </InputWrapper>
            <CalendarWrapper>
              <DateTimePicker
                dateFormat="DD.MM.YYYY"
                name="date"
                type="date"
                timeFormat={false}
              />
              <ErrorText name="date" component="div" />
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
          <Button type="submit" variant="registration">
            Save
          </Button>
          <Button
            type="button"
            variant="cancel"
            style={{ marginBotoom: 0, marginTop: '-40px' }}
            onClick={() => closeModal()}
          >
            Cancel
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default ModalEdit;
