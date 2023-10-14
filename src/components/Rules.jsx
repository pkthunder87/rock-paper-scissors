import { useGameState } from '../context/gameStateContext';

function Rules() {
  const { onToggleModal: onOpenModal } = useGameState();

  return (
    <div className="mb-10 flex items-end justify-center">
      <button
        onClick={onOpenModal}
        className="flex h-[56px] w-[150px] items-center justify-center rounded-lg border-4 border-header-outline p-2 text-2xl tracking-widest text-[#eee]"
      >
        RULES
      </button>
    </div>
  );
}

export default Rules;
