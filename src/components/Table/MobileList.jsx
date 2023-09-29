import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NoTransactionsText } from 'components/TransactionsList/TransactionsList.styled';
import { selectAllTransactions } from 'redux/transactionsRedusers/transactionsSelectors';
import { refreshBalanceThunk } from 'redux/registerReducers/registerThunks';
import {
  deleteTransactionsThunk,
  getTransactionsThunk,
} from 'redux/transactionsRedusers/transactionsThunks';
import EditTransactionModal from 'components/ModalEdit/EditTransactionModal';
import {
  DeleteBtn,
  MobileTable,
  TableListContainer,
  Td,
  Th,
  ThDate,
} from './MobileList.styled';
import { IoMdCreate } from 'react-icons/io';

const MobileTransactionList = () => {
  const transactions = useSelector(selectAllTransactions);
  const dispatch = useDispatch();

  const handleDelete = transactionId => {
    dispatch(deleteTransactionsThunk(transactionId))
      .unwrap()
      .then(() => dispatch(getTransactionsThunk()))
      .then(() => dispatch(refreshBalanceThunk()));
  };

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

  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
  };

  const transactionSymbol = type =>
    type === 'INCOME' ? '+' : type === 'EXPENSE' ? '-' : '';

  return transactions.length === 0 ? (
    <NoTransactionsText colSpan="7">
      Your transactions will be here
    </NoTransactionsText>
  ) : (
    <TableListContainer>
      <ul>
        {transactions.map(item => (
          <li key={item.id}>
            <MobileTable type={item.type === 'INCOME' ? 1 : 0}>
              <thead>
                <tr>
                  <ThDate>Date</ThDate>
                  <Th>Type</Th>
                  <Th>Category</Th>
                  <Th>Comment</Th>
                  <Th>Sum</Th>
                  <Th>
                    <DeleteBtn onClick={() => handleDelete(item.id)}>
                      Delete
                    </DeleteBtn>
                  </Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>{formatDate(item.transactionDate)}</Td>
                  <Td>{transactionSymbol(item.type)}</Td>
                  <Td>{categoryNames[item.categoryId]}</Td>
                  <Td>{item.comment}</Td>
                  <Td className={item.type === 'INCOME' ? 'income' : 'expense'}>
                    {Math.abs(item.amount).toFixed(2)}
                  </Td>
                  <Td>
                    <EditTransactionModal />
                    <button>edit</button>
                  </Td>
                </tr>
              </tbody>
            </MobileTable>
          </li>
        ))}
      </ul>
    </TableListContainer>
  );
};

export default MobileTransactionList;
