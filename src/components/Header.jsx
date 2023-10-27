import { useGameState } from '../context/gameStateContext';
import ScoreBox from './ScoreBox';

function Header() {
  const { isLoading } = useGameState();

  const loading_finished_header = isLoading
    ? 'flex h-[12.5dvh] w-[84dvw] items-center justify-between rounded-[16px] border-[3px] border-header-outline p-2 md:ml-0 md:mt-7 md:h-[152px] md:w-[704px] md:p-6'
    : 'flex h-[12.5dvh] w-[84dvw] items-center justify-between rounded-[16px] border-[3px] border-header-outline ml-[-1.5px] p-2 md:ml-[11.2rem] md:mt-7 md:h-[152px] md:w-[704px] md:p-6';

  return (
    <div className={loading_finished_header}>
      <img
        className="h-[fit-content] w-[fit-content] scale-[.68] md:ml-[.9rem] md:mt-[.6rem] md:scale-[1]"
        src="../logo-bonus.svg"
        alt="Words aligned vertically: Rock, Paper, Scissors, Lizard, Spock"
      />
      <ScoreBox />
    </div>
  );
}

export default Header;
