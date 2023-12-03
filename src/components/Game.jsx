import HandGesture from './HandGesture';

function Game() {
  return (
    <>
      <div
        className=" row-span-1 mt-12 grid
    grid-cols-[minmax(150px,190px)_minmax(150px,190px)] grid-rows-[33%_33%_33%] items-center justify-center bg-[url(../bg-pentagon.svg)] bg-[length:249px] bg-center  bg-no-repeat xl:mt-20 xl:grid-rows-[20%_50%_33%] xl:bg-[length:380px_340px]"
      >
        <div className="col-span-2 mt-14 justify-self-center xl:mt-52 ">
          <HandGesture
            gesture="scissors"
            bg_image="bg-[url('../icon-scissors.svg')]"
            gesture_color_from="from-scissors-from"
            gesture_color_to="to-scissors-to"
          />
        </div>

        <div className="-mt-7 mr-24 justify-self-end xl:-mt-8 xl:mr-[7.5rem]">
          <HandGesture
            gesture="spock"
            bg_image="bg-[url('../icon-spock.svg')]"
            bg_scale="bg-[length:43%]"
            bg_pos="bg-[60%_50%]"
            gesture_color_from="from-spock-from"
            gesture_color_to="to-spock-to"
          />
        </div>

        <div className="-mt-7 ml-24 justify-self-start xl:-mt-8 xl:ml-[7.5rem]">
          <HandGesture
            gesture="paper"
            bg_image="bg-[url('../icon-paper.svg')]"
            bg_scale="bg-[length:47%]"
            gesture_color_from="from-paper-from"
            gesture_color_to="to-paper-to"
          />
        </div>

        <div className=" mr-8 mt-3 justify-self-end xl:-mt-56">
          <HandGesture
            gesture="lizard"
            bg_image="bg-[url('../icon-lizard.svg')]"
            bg_scale="bg-[length:55%]"
            gesture_color_from="from-lizard-from"
            gesture_color_to="to-lizard-to"
          />
        </div>

        <div className="ml-8 mt-3 justify-self-start  xl:-mt-56">
          <HandGesture
            gesture="rock"
            bg_image="bg-[url('../icon-rock.svg')]"
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
