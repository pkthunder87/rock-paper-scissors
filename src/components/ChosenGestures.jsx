import Circle from './Circle';
import HandGesture from './HandGesture';

function ChosenGestures() {
  return (
    <div className="grid grid-cols-2">
      <div className="-mt-4 ml-6">
        <div>
          <HandGesture
            gesture="lizard"
            gesture_color_from="from-lizard-from"
            gesture_color_to="to-lizard-to"
          />
        </div>
        <p className="ml-[1.35rem] mt-6 text-xl tracking-wide text-white">
          You Picked
        </p>
      </div>

      <div className=" -mt-4 mr-4 justify-self-end">
        {/* <Circle /> */}
        <div>
          <HandGesture
            gesture="spock"
            gesture_color_from="from-spock-from"
            gesture_color_to="to-spock-to"
          />
        </div>
        <p className=" mt-6  text-xl tracking-wide text-white">
          The House Picked
        </p>
      </div>
    </div>
  );
}

export default ChosenGestures;
