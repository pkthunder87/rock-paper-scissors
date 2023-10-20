import { Link } from 'react-router-dom';
import { useGameState } from '../context/gameStateContext';

function PlayerWinLose() {
  const { playerWon: playerWin } = useGameState();

  return (
    <div className=" -mt-4 flex flex-col items-center justify-center">
      <h2 className="text-[5rem] tracking-wide text-white">
        {playerWin === 'win'
          ? 'YOU WIN'
          : playerWin === 'tie'
          ? 'YOU TIE'
          : 'YOU LOSE'}
      </h2>
      <Link to="/start">
        <button className="mt-3 flex h-[70px] w-[316px] items-center justify-center rounded-lg bg-white  p-2 text-2xl  tracking-widest text-radial-to">
          PLAY AGAIN
        </button>
      </Link>
    </div>
  );
}

export default PlayerWinLose;
