import { useState } from 'react';
import ChosenGestures from '../components/ChosenGestures';
import PlayerWinLose from '../components/PlayerWinLose';

function Results() {
  const [isLoading, setIsLoading] = useState(true);
  const [playerWon, setPlayerWon] = useState('TEST');

  return (
    <div className="row-span-2 grid grid-rows-[54%_46%]">
      <ChosenGestures
        setIsLoading={setIsLoading}
        playerWon={playerWon}
        setPlayerWon={setPlayerWon}
      />
      {!isLoading && <PlayerWinLose playerWin={playerWon} />}
    </div>
  );
}

export default Results;
