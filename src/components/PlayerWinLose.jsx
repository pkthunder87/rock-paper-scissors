import { Link } from 'react-router-dom';
import { useGameState } from '../context/GameStateContext';

function PlayerWinLose() {
  const { playerWon: playerWin } = useGameState();

  return (
    <div className=" -mt-4 flex flex-col items-center justify-center md:static md:left-[40.5%] md:top-[60%] lg:absolute lg:left-[40.5%] lg:top-[60%]">
      <h2 className="text-[5rem] tracking-wide text-white md:text-[4.5rem] lg:text-[5rem]">
        {playerWin === 'win'
          ? 'YOU WIN'
          : playerWin === 'tie'
          ? 'YOU TIE'
          : 'YOU LOSE'}
      </h2>
      <Link to="/start">
        <button className="mt-3 flex h-[70px] w-[316px] items-center justify-center rounded-lg bg-white p-2 text-2xl  tracking-widest text-radial-to  md:h-[50px] md:w-[250px] lg:h-[50px] lg:w-[250px]">
          PLAY AGAIN
        </button>
      </Link>
    </div>
  );
}

export default PlayerWinLose;
