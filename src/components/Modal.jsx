import { useEffect } from 'react';
import { useGameState } from '../context/GameStateContext';

function Modal() {
  const {
    showModal,
    setShowModal,
    onToggleModal: onCloseModal,
  } = useGameState();

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
    <div className="absolute inset-0 left-[50%] top-[50%] z-10 grid h-[100dvh]  w-[100dvw] translate-x-[-50%] translate-y-[-50%] grid-rows-[30%_40%_30%] items-center justify-center rounded-xl bg-white p-10 text-center md:h-[460px] md:w-[402px] md:grid-cols-2 md:grid-rows-[10%_90%]">
      <h2 className=" text-[2.5rem] tracking-wide text-dark-text md:-order-1 md:justify-self-start">
        RULES
      </h2>
      <img
        className=" mt-11 scale-[1.1] md:order-last md:col-span-2 md:mb-8 md:scale-[1.0]"
        src="../image-rules-bonus.svg"
        alt="Rules Diagram"
      />
      <div className="mb-12 self-end md:order-2  md:mb-1 md:scale-[.65] md:justify-self-end">
        <button onClick={onCloseModal}>
          <img className="h-10" src="../icon-close.svg" alt="X Mark" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
