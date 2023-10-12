import { useEffect, useRef, useState } from 'react';
import Circle from './Circle';
import HandGesture from './HandGesture';
import WinnerTag from './Winner';

function ChosenGestures() {
  const [winner, setWinner] = useState('');
  const [showHousePick, setShowHousePick] = useState(false);
  const houseGesture = useRef('');
  const availableGestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  useEffect(
    function () {
      function gameLogic() {
        setShowHousePick(true);
        setWinner('house');
      }
      function timeout() {
        setTimeout(gameLogic, 1200);
      }
      timeout();

      return clearTimeout(timeout);
    },

    [setShowHousePick],
  );

  return (
    <div className="grid grid-cols-2">
      <div className="-mt-4 ml-6">
        <div>
          <HandGesture
            winner={winner === 'player'}
            gesture="lizard"
            gesture_color_from="from-lizard-from"
            gesture_color_to="to-lizard-to"
          >
            <WinnerTag />
          </HandGesture>
        </div>
        <p className="ml-[1.35rem] mt-6 text-xl tracking-wide text-white">
          You Picked
        </p>
      </div>

      <div className=" -mt-4 mr-4 justify-self-end">
        {showHousePick ? (
          <div>
            <HandGesture
              winner={winner === 'house'}
              gesture="spock"
              gesture_color_from="from-spock-from"
              gesture_color_to="to-spock-to"
            >
              <WinnerTag />
            </HandGesture>
          </div>
        ) : (
          <Circle />
        )}
        <p className=" mt-6  text-xl tracking-wide text-white">
          The House Picked
        </p>
      </div>
    </div>
  );
}

export default ChosenGestures;
