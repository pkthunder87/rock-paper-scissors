import HandGesture from './HandGesture';

function Game() {
  return (
    <div className="flex  bg-[url(bg-pentagon.svg)] bg-[length:90%] bg-center bg-no-repeat">
      <HandGesture
        gesture="scissors"
        gesture_color_from="from-scissors-from"
        gesture_color_to="to-scissors-to"
      />

      <HandGesture
        gesture="spock"
        gesture_color_from="from-spock-from"
        gesture_color_to="to-spock-to"
      />

      <HandGesture
        gesture="paper"
        gesture_color_from="from-paper-from"
        gesture_color_to="to-paper-to"
      />

      <HandGesture
        gesture="lizard"
        gesture_color_from="from-lizard-from"
        gesture_color_to="to-lizard-to"
      />

      <HandGesture
        gesture="rock"
        gesture_color_from="from-rock-from"
        gesture_color_to="to-rock-to"
      />
    </div>
  );
}

export default Game;
