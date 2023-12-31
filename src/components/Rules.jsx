import { useGameState } from '../context/GameStateContext';

function Rules() {
  const { onToggleModal: onOpenModal } = useGameState();

  return (
    <div className="mb-10 flex items-end justify-center sm:absolute sm:-bottom-[.2rem] sm:right-[2.35rem]">
      <button
        onClick={onOpenModal}
        className="flex h-[56px] w-[150px] items-center justify-center rounded-lg border-4  border-header-outline p-2 text-2xl font-semibold tracking-widest text-[#eee] antialiased md:h-[42px] md:w-[130px] md:rounded-[10px] md:border-2 md:text-[1.35rem] md:tracking-[.15em]"
      >
        RULES
      </button>
    </div>
  );
}

export default Rules;
