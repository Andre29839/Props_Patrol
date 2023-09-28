export default function AddBtn({ toggleModal, text, type }) {
  return (
    <button type={type} onClick={toggleModal} aria-label="open modal">
      {text}
    </button>
  );
}
