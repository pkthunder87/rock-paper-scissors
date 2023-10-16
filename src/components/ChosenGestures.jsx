import { useEffect, useState } from 'react';
import Circle from './Circle';
import HandGesture from './HandGesture';
import WinnerTag from './Winner';
import { useParams } from 'react-router-dom';
import { useGameState } from '../context/gameStateContext';

const availableGestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function ChosenGestures() {
  const {
    setIsLoading,
    playerWon,
    setPlayerWon,
    setPlayerScore,
    showHousePick,
    setShowHousePick,
    playerWonDelay,
    setPlayerWonDelay,
  } = useGameState();

  const { gesture } = useParams();
  const [playerGesture] = useState(gesture);

  const [houseGesture] = useState(
    () =>
      availableGestures[Math.floor(Math.random() * availableGestures.length)],
  );

  useEffect(
    function gameLogic() {
      if (playerGesture === 'rock') {
        if (houseGesture === 'rock') setPlayerWon('tie');
        if (houseGesture === 'scissors') {
          setPlayerWon('win');
        }
        if (houseGesture === 'lizard') {
          setPlayerWon('win');
        }
        if (houseGesture === 'paper') setPlayerWon('lose');
        if (houseGesture === 'spock') setPlayerWon('lose');
      }

      if (playerGesture === 'paper') {
        if (houseGesture === 'paper') setPlayerWon('tie');
        if (houseGesture === 'scissors') setPlayerWon('lose');
        if (houseGesture === 'lizard') setPlayerWon('lose');
        if (houseGesture === 'rock') {
          setPlayerWon('win');
        }
        if (houseGesture === 'spock') {
          setPlayerWon('win');
        }
      }

      if (playerGesture === 'scissors') {
        if (houseGesture === 'scissors') setPlayerWon('tie');
        if (houseGesture === 'paper') {
          setPlayerWon('win');
        }
        if (houseGesture === 'lizard') {
          setPlayerWon('win');
        }
        if (houseGesture === 'rock') setPlayerWon('lose');
        if (houseGesture === 'spock') setPlayerWon('lose');
      }

      if (playerGesture === 'lizard') {
        if (houseGesture === 'lizard') setPlayerWon('tie');
        if (houseGesture === 'scissors') setPlayerWon('lose');
        if (houseGesture === 'rock') setPlayerWon('lose');
        if (houseGesture === 'paper') {
          setPlayerWon('win');
        }
        if (houseGesture === 'spock') {
          setPlayerWon('win');
        }
      }

      if (playerGesture === 'spock') {
        if (houseGesture === 'spock') setPlayerWon('tie');
        if (houseGesture === 'paper') setPlayerWon('lose');
        if (houseGesture === 'lizard') setPlayerWon('lose');
        if (houseGesture === 'rock') {
          setPlayerWon('win');
        }
        if (houseGesture === 'scissors') {
          setPlayerWon('win');
        }
      }
    },
    [playerWon, houseGesture, playerGesture, setPlayerWon],
  );

  useEffect(
    function () {
      function housePick() {
        setShowHousePick(true);

        setIsLoading(false);
        if (playerWon === 'win') {
          setPlayerScore((score) => score + 1);
          setPlayerWonDelay(true);
        }
      }
      function timeout() {
        setTimeout(housePick, 1200);
      }
      timeout();

      return () => {
        clearTimeout(timeout);
        setIsLoading(true);
        setPlayerWon('lose');
        setShowHousePick(false);
        setPlayerWonDelay(false);
      };
    },

    [
      setShowHousePick,
      houseGesture,
      playerGesture,
      setIsLoading,
      playerWon,
      setPlayerScore,
      setPlayerWon,
      setPlayerWonDelay,
    ],
  );

  return (
    <div className="grid grid-cols-2">
      <div className="-mt-4 ml-6">
        <div>
          <HandGesture
            winner={playerWonDelay}
            gesture={playerGesture}
            gesture_color_from={`from-${playerGesture}-from`}
            gesture_color_to={`to-${playerGesture}-to`}
            disable={true}
            bg_image={`bg-[url('../icon-${playerGesture}.svg')]`}
            bg_scale={`${
              playerGesture === 'spock'
                ? 'bg-[length:48%] bg-[60%_50%]'
                : 'bg-[length:55%] bg-center'
            }`}
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
              winner={playerWon === 'lose'}
              gesture={houseGesture}
              gesture_color_from={`from-${houseGesture}-from`}
              gesture_color_to={`to-${houseGesture}-to`}
              disable={true}
              bg_image={`bg-[url('../icon-${houseGesture}.svg')]`}
              bg_scale={`${
                houseGesture === 'spock'
                  ? 'bg-[length:48%] bg-[60%_50%]'
                  : 'bg-[length:55%] bg-center'
              }`}
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
