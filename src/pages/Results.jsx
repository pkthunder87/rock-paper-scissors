import { useState } from 'react';
import ChosenGestures from '../components/ChosenGestures';
import PlayerWinLose from '../components/PlayerWinLose';

function Results({ setPlayerScore, playerScore }) {
  const [isLoading, setIsLoading] = useState(true);
  const [playerWon, setPlayerWon] = useState('');

  return (
    <div className="row-span-2 grid grid-rows-[54%_46%]">
      <ChosenGestures
        setIsLoading={setIsLoading}
        playerWon={playerWon}
        setPlayerWon={setPlayerWon}
        playerScore={playerScore}
        setPlayerScore={setPlayerScore}
      />
      {!isLoading && <PlayerWinLose playerWin={playerWon} />}
    </div>
  );
}

export default Results;
