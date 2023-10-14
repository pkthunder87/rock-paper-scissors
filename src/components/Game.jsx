import HandGesture from './HandGesture';

function Game() {
  return (
    <>
      <div
        className=" row-span-1 grid
    grid-cols-[50%_50%]  grid-rows-[33%_33%_33%] bg-[url(../bg-pentagon.svg)] bg-[length:70%] bg-center bg-no-repeat"
      >
        <div className="col-span-2 -mt-4 justify-self-center">
          <HandGesture
            gesture="scissors"
            gesture_color_from="from-scissors-from"
            gesture_color_to="to-scissors-to"
          />
        </div>

        <div className="-mt-8 ml-2">
          <HandGesture
            gesture="spock"
            gesture_color_from="from-spock-from"
            gesture_color_to="to-spock-to"
          />
        </div>

        <div className="-mt-8 ml-[4.9rem]">
          <HandGesture
            gesture="paper"
            gesture_color_from="from-paper-from"
            gesture_color_to="to-paper-to"
          />
        </div>

        <div className="ml-12 mt-2">
          <HandGesture
            gesture="lizard"
            gesture_color_from="from-lizard-from"
            gesture_color_to="to-lizard-to"
          />
        </div>

        <div className="ml-8 mt-2">
          <HandGesture
            gesture="rock"
            gesture_color_from="from-rock-from"
            gesture_color_to="to-rock-to"
          />
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Game;
