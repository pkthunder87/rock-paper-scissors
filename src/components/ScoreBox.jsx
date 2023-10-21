import { useGameState } from '../context/gameStateContext';

function ScoreBox() {
  const { playerScore } = useGameState();

  return (
    <div className=" mr-2 flex h-[5.8rem] w-[5.8rem] flex-col items-center rounded-lg bg-white md:h-[9.5rem] md:w-[12.4rem]">
      <h2 className="-mb-3 pt-[.65rem] text-sm font-semibold tracking-[.2rem] text-score-text md:mt-3 md:text-[1.4rem]">
        SCORE
      </h2>
      <h2 className=" text-[3rem] font-bold text-dark-text md:-mt-[.2rem] md:text-[5.3rem]">
        {playerScore}
      </h2>
    </div>
  );
}

export default ScoreBox;
