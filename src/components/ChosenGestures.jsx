import { useEffect, useState } from 'react';
import Circle from './Circle';
import HandGesture from './HandGesture';
import WinnerTag from './Winner';
import { useParams } from 'react-router-dom';
import { useGameState } from '../context/gameStateContext';

const availableGestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function ChosenGestures() {
  const {
    isLoading,
    isDesktop,
    setIsDesktop,
    setIsLoading,
    playerWon,
    setPlayerWon,
    setPlayerScore,
    showHousePick,
    setShowHousePick,
    setPlayerWonDelay,
  } = useGameState();

  const { gesture } = useParams();
  const [playerGesture] = useState(gesture);

  const [houseGesture] = useState(
    () =>
      availableGestures[Math.floor(Math.random() * availableGestures.length)],
  );

  useEffect(function () {
    if (innerWidth >= 1200) setIsDesktop(true);
    console.log(isDesktop);
  });

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

  const bg_scale_player =
    playerGesture === 'spock'
      ? 'bg-[length:43%]'
      : playerGesture === 'lizard'
      ? 'bg-[length:55%]'
      : playerGesture === 'paper'
      ? 'bg-[length:47%]'
      : 'bg-[length:50%]';

  const bg_scale_house =
    houseGesture === 'spock'
      ? 'bg-[length:43%]'
      : houseGesture === 'lizard'
      ? 'bg-[length:55%]'
      : houseGesture === 'paper'
      ? 'bg-[length:47%]'
      : 'bg-[length:50%]';

  const bg_pos_player =
    playerGesture === 'spock' ? 'bg-[60%_50%]' : 'bg-center';

  const bg_pos_house = houseGesture === 'spock' ? 'bg-[60%_50%]' : 'bg-center';

  const the_house_picked_text = showHousePick
    ? 'mt-6 md:-mt-6 lg:mt-6 md:mb-[0rem] md:mt-[16px] lg:mb-[5rem] lg:mt-[16px]'
    : 'mt-12 md:-mt-6 lg:mt-12  md:mb-[0rem] md:mt-[1.35rem] md:mr-[3.3rem] lg:mb-[5rem] lg:mt-[1.35rem] lg:mr-[3.3rem]';

  const loading_finished_player = isLoading
    ? ' -mt-4 justify-self-start md:grid '
    : ' mt-8 lg:mr-72 md:mr-24 md:justify-self-end lg:justify-self-start md:grid ';

  const loading_finished_house = isLoading
    ? ' -mt-4 justify-self-end md:grid'
    : ' mt-8  lg:ml-48 justify-self-end md:grid md:ml-0';

  return (
    <div className=" grid grid-cols-2 self-center md:mt-0 md:grid-cols-[50%_50%] md:pl-0 md:pr-0 md:text-[1.9rem] lg:mt-10 lg:pl-6 lg:pr-6 lg:text-[2rem]">
      <div className={loading_finished_player}>
        <div>
          <HandGesture
            winner={playerWon === 'win'}
            gesture={playerGesture}
            gesture_color_from={`from-${playerGesture}-from`}
            gesture_color_to={`to-${playerGesture}-to`}
            disable={true}
            bg_image={`bg-[url('../icon-${playerGesture}.svg')]`}
            bg_scale={bg_scale_player}
            bg_pos={bg_pos_player}
            // button_size_multiplier=" xl:h-[18rem] xl:w-[18rem]"
            // image_size_multiplier=" xl:h-[12rem] xl:w-[12rem]"
            image_size_multiplier={null}
            button_size_multiplier={null}
          >
            {showHousePick ? (
              <WinnerTag tagTextSize="lg:text-5xl md:text-4xl" />
            ) : null}
          </HandGesture>
        </div>

        <p className=" mt-6  flex  justify-center text-[1.25em] tracking-widest text-white md:-order-1 md:mb-[5rem] md:mt-[16px] md:text-[.8em] lg:text-[1em]">
          YOU PICKED
        </p>
      </div>

      <div className={loading_finished_house}>
        {showHousePick ? (
          <div>
            <HandGesture
              winner={playerWon === 'lose'}
              gesture={houseGesture}
              gesture_color_from={`from-${houseGesture}-from`}
              gesture_color_to={`to-${houseGesture}-to`}
              disable={true}
              bg_image={`bg-[url('../icon-${houseGesture}.svg')]`}
              bg_scale={bg_scale_house}
              bg_pos={bg_pos_house}
              image_size_multiplier={null}
              button_size_multiplier={null}
            >
              <WinnerTag tagTextSize="lg:text-5xl md:text-4xl" />
            </HandGesture>
          </div>
        ) : (
          <Circle />
        )}
        <p
          className={` -ml-4 flex  text-[1.25em] tracking-widest text-white md:-order-1  md:justify-center md:text-[.8em] lg:text-[1em] ${the_house_picked_text}`}
        >
          THE HOUSE PICKED
        </p>
      </div>
    </div>
  );
}

export default ChosenGestures;
