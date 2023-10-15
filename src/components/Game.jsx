import HandGesture from './HandGesture';

function Game() {
  return (
    <>
      <div
        className=" row-span-1 grid
    grid-cols-[minmax(150px,190px)_minmax(150px,190px)] grid-rows-[33%_33%_33%] items-center justify-center bg-[url(../bg-pentagon.svg)] bg-[length:249px] bg-center bg-no-repeat "
      >
        <div className="col-span-2 -mt-12 justify-self-center ">
          <HandGesture
            gesture="scissors"
            gesture_color_from="from-scissors-from"
            gesture_color_to="to-scissors-to"
          />
        </div>

        <div className="-mt-14 mr-24 justify-self-end">
          <HandGesture
            gesture="spock"
            gesture_color_from="from-spock-from"
            gesture_color_to="to-spock-to"
          />
        </div>

        <div className="-mt-14 ml-24 justify-self-start">
          <HandGesture
            gesture="paper"
            gesture_color_from="from-paper-from"
            gesture_color_to="to-paper-to"
          />
        </div>

        <div className=" mr-8 mt-8 justify-self-end">
          <HandGesture
            gesture="lizard"
            gesture_color_from="from-lizard-from"
            gesture_color_to="to-lizard-to"
          />
        </div>

        <div className="ml-8 mt-8 justify-self-start">
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
