import { useEffect, useState } from 'react';
import Circle from './Circle';
import HandGesture from './HandGesture';
import WinnerTag from './Winner';

const availableGestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function ChosenGestures({ setIsLoading, playerWon, setPlayerWon }) {
  const [winner, setWinner] = useState('');

  const [showHousePick, setShowHousePick] = useState(false);

  const [playerGesture] = useState('spock');

  const [houseGesture] = useState(
    () =>
      availableGestures[Math.floor(Math.random() * availableGestures.length)],
  );

  useEffect(
    function gameLogic() {
      if (playerGesture === 'rock') {
        if (houseGesture === 'rock') setPlayerWon('tie');
        if (houseGesture === 'scissors') setPlayerWon('win');
        if (houseGesture === 'lizard') setPlayerWon('win');
        if (houseGesture === 'paper') setPlayerWon('lose');
        if (houseGesture === 'spock') setPlayerWon('lose');
      }

      if (playerGesture === 'paper') {
        if (houseGesture === 'paper') setPlayerWon('tie');
        if (houseGesture === 'scissors') setPlayerWon('lose');
        if (houseGesture === 'lizard') setPlayerWon('lose');
        if (houseGesture === 'rock') setPlayerWon('win');
        if (houseGesture === 'spock') setPlayerWon('win');
      }

      if (playerGesture === 'scissors') {
        if (houseGesture === 'scissors') setPlayerWon('tie');
        if (houseGesture === 'paper') setPlayerWon('win');
        if (houseGesture === 'lizard') setPlayerWon('win');
        if (houseGesture === 'rock') setPlayerWon('lose');
        if (houseGesture === 'spock') setPlayerWon('lose');
      }

      if (playerGesture === 'lizard') {
        if (houseGesture === 'lizard') setPlayerWon('tie');
        if (houseGesture === 'scissors') setPlayerWon('lose');
        if (houseGesture === 'rock') setPlayerWon('lose');
        if (houseGesture === 'paper') setPlayerWon('win');
        if (houseGesture === 'spock') setPlayerWon('win');
      }

      if (playerGesture === 'spock') {
        if (houseGesture === 'spock') setPlayerWon('tie');
        if (houseGesture === 'paper') setPlayerWon('lose');
        if (houseGesture === 'lizard') setPlayerWon('lose');
        if (houseGesture === 'rock') setPlayerWon('win');
        if (houseGesture === 'scissors') setPlayerWon('win');
      }

      console.log(playerGesture, houseGesture);
      console.log(playerWon);
    },
    [playerWon, houseGesture, playerGesture],
  );

  useEffect(
    function () {
      function housePick() {
        setShowHousePick(true);
        setWinner('player');
        setIsLoading(false);
      }
      function timeout() {
        setTimeout(housePick, 1200);
      }
      timeout();

      return () => {
        clearTimeout(timeout);
        setIsLoading(true);
      };
    },

    [setShowHousePick, setWinner, houseGesture, playerGesture, setIsLoading],
  );

  return (
    <div className="grid grid-cols-2">
      <div className="-mt-4 ml-6">
        <div>
          <HandGesture
            winner={winner === 'player'}
            gesture={playerGesture}
            gesture_color_from={`from-${playerGesture}-from`}
            gesture_color_to={`to-${playerGesture}-to`}
            disable={true}
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
              gesture_color_from={`from-${houseGesture}-from`}
              gesture_color_to={`to-${houseGesture}-to`}
              disable={true}
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