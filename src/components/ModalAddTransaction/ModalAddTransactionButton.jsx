import { AiOutlinePlus } from 'react-icons/ai';
import ModalAddTransaction from './ModalAddTransaction';
import useToggleModal from 'Hooks/useToggleModal';
import ModalForm from 'components/ModalForm/ModalForm';
import { AddBtn, BtnRightCorner } from 'components/Table/Table.styled';

const ModalAddTransactionButton = () => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  return (
    <div>
      <BtnRightCorner>
        <AddBtn onClick={() => openModal()}>
          <AiOutlinePlus />
        </AddBtn>
      </BtnRightCorner>

      {isOpen && (
        <ModalForm
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalAddTransaction closeModal={closeModal} />
        </ModalForm>
      )}
    </div>
  );
};

export default ModalAddTransactionButton;
