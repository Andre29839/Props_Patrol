import { BiPencil } from 'react-icons/bi';
import useToggleModal from 'Hooks/useToggleModal';
import ModalForm from 'components/ModalForm/ModalForm';
import ModalEdit from './ModalEdit';
import { EditBtn } from 'components/ModalAddTransaction/ModalAddTransactionButton/ModalAddTransactionButton.styled';
import { EditWrapper } from 'components/Table/MobileList.styled';
import MediaQuery, { useMediaQuery } from 'react-responsive';

const EditTransactionModal = ({ item }) => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  const isMobile = useMediaQuery({ maxWidth: 767.9 });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <EditBtn
        onClick={() => {
          openModal();
        }}
      >
        <EditWrapper>
          <BiPencil />
          {isMobile && 'Edit'}
        </EditWrapper>
      </EditBtn>

      {isOpen && (
        <ModalForm
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalEdit closeModal={closeModal} item={item} />
        </ModalForm>
      )}
    </div>
  );
};

export default EditTransactionModal;
