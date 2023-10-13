import { useEffect } from 'react';

function Modal({ onCloseModal, showModal, setShowModal }) {
  useEffect(
    function escapePressed(e) {
      if (showModal && e?.code === 'Escape') {
        setShowModal(false);
      }

      document.addEventListener('keydown', escapePressed);

      return function () {
        document.removeEventListener('keydown', escapePressed);
      };
    },
    [showModal, setShowModal],
  );

  return (
    <div className="absolute inset-0 grid h-[100dvh] w-[100dvw]  grid-rows-[30%_40%_30%] items-center justify-center bg-white p-10 text-center">
      <h2 className="text-[2.5rem] tracking-wide text-dark-text">RULES</h2>
      <img
        className=" scale-125"
        src="../image-rules-bonus.svg"
        alt="Rules Diagram"
      />
      <div className="mb-12 self-end">
        <button onClick={onCloseModal}>
          <img className="h-10 w-10" src="../icon-close.svg" alt="X Mark" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
