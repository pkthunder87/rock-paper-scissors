function Modal({ onHandleToggleModal }) {
  return (
    <div className="absolute inset-0 h-[100dvh] w-[100dvw] bg-white text-3xl text-blue-800">
      MODAL
      <button onClick={onHandleToggleModal}>CLOSE</button>
    </div>
  );
}

export default Modal;
