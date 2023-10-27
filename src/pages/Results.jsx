import { useGameState } from '../context/gameStateContext';

import ChosenGestures from '../components/ChosenGestures';
import PlayerWinLose from '../components/PlayerWinLose';

function Results() {
  const { isLoading } = useGameState();

  return (
    <div className="row-span-2 grid grid-rows-[58%_42%] lg:grid-rows-1 ">
      <ChosenGestures />
      {!isLoading && <PlayerWinLose />}
    </div>
  );
}

export default Results;
