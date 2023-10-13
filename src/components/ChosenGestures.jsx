import { useEffect, useRef, useState } from 'react';
import Circle from './Circle';
import HandGesture from './HandGesture';
import WinnerTag from './Winner';

const availableGestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function ChosenGestures() {
  const [winner, setWinner] = useState('');
  const [playerWon, setPlayerWon] = useState('TEST');
  const [showHousePick, setShowHousePick] = useState(false);

  const [playerGesture, setPlayerGesture] = useState('rock');

  const [houseGesture, setHouseGesture] = useState(
    () =>
      availableGestures[Math.floor(Math.random() * availableGestures.length)],
  );

  useEffect(function () {
    console.log(playerGesture === 'rock');
  }, []);

  useEffect(
    function () {
      setPlayerGesture;
      function gameLogic() {
        setShowHousePick(true);
        setWinner('player');
      }
      function timeout() {
        setTimeout(gameLogic, 1200);
      }
      timeout();

      return () => {
        clearTimeout(timeout);
      };
    },

    [setShowHousePick, setWinner, houseGesture, playerGesture],
  );

  return (
    <div className="grid grid-cols-2">
      <div className="-mt-4 ml-6">
        <div>
          <HandGesture
            winner={winner === 'player'}
            gesture={playerGesture}
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
              gesture={houseGesture}
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
