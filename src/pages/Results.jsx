import { useGameState } from '../context/gameStateContext';

import ChosenGestures from '../components/ChosenGestures';
import PlayerWinLose from '../components/PlayerWinLose';

function Results() {
  const { isLoading } = useGameState();

  return (
    <div className="row-span-2 grid grid-rows-[54%_46%]">
      <ChosenGestures />
      {!isLoading && <PlayerWinLose />}
    </div>
  );
}

export default Results;
