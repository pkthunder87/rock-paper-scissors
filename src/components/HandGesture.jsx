import { Link } from 'react-router-dom';

function HandGesture({
  gesture,
  gesture_color_from,
  gesture_color_to,
  children,
  winner = false,
  disable = false,
  bg_image,
  bg_scale = 'bg-[length:50%]',
}) {
  return (
    <div className="relative h-[8.5rem] w-[8.5rem]">
      <Link to={`/results/${gesture}`}>
        <button
          className={`${gesture_color_from} ${gesture_color_to} relative flex h-[8.5rem] w-[8.5rem] items-center 
        justify-center rounded-full bg-gradient-to-b shadow-[inset_0_-6px_2px_hsla(0,50%,10%,.5)] `}
          disabled={disable}
        >
          <div
            className={`shadow-[inset_0_5px_2px_hsla(0,50%,10%,.2)] ${bg_image} ${bg_scale} h-[6.5rem] w-[6.5rem]  rounded-full bg-white  bg-center bg-no-repeat p-6 `}
          ></div>
          <div>{winner && children}</div>
        </button>
      </Link>
    </div>
  );
}

export default HandGesture;
