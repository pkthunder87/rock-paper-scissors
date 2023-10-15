import { Link } from 'react-router-dom';

function HandGesture({
  gesture,
  gesture_color_from,
  gesture_color_to,
  children,
  winner = false,
  disable = false,
}) {
  return (
    <div className="relative h-[8.5rem] w-[8.5rem]">
      <Link to={`/results/${gesture}`}>
        <button
          className={`${gesture_color_from} ${gesture_color_to} relative flex h-[8.5rem] w-[8.5rem] items-center 
        justify-center overflow-visible rounded-full bg-gradient-to-b shadow-[inset_0_-6px_2px_hsla(0,50%,10%,.5)] `}
          disabled={disable}
        >
          <img
            className="h-[6.5rem] w-[6.5rem] overflow-visible rounded-full bg-white p-6 shadow-[inset_0_5px_2px_hsla(0,50%,10%,.2)] "
            src={`../icon-${gesture}.svg`}
            alt={`Hand Gesture: ${gesture.replace(
              gesture[0],
              gesture[0].toUpperCase(),
            )}`}
          />
          <div>{winner && children}</div>
        </button>
      </Link>
    </div>
  );
}

export default HandGesture;
