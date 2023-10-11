import ChosenGestures from '../components/ChosenGestures';
import Winner from '../components/Winner';

function Results() {
  return (
    <div className="row-span-2 grid grid-rows-[60%_40%]">
      <ChosenGestures />
      <Winner />
    </div>
  );
}

export default Results;
