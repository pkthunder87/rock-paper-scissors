import ChosenGestures from '../components/ChosenGestures';
import PlayerWinLose from '../components/PlayerWinLose';

function Results() {
  return (
    <div className="row-span-2 grid grid-rows-[60%_40%]">
      <ChosenGestures />
      <PlayerWinLose />
    </div>
  );
}

export default Results;
