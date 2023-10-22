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
  bg_pos = 'bg-center',
}) {
  return (
    <div className="relative h-[9.5rem] w-[9.5rem] xl:h-[12rem] xl:w-[12rem]">
      <Link to={`/results/${gesture}`}>
        <button
          className={`${gesture_color_from} ${gesture_color_to} relative flex h-[9.5rem] w-[9.5rem] items-center 
        justify-center rounded-full bg-gradient-to-b shadow-[inset_0_-6px_2px_hsla(0,50%,10%,.5)] xl:h-[12rem] xl:w-[12rem]`}
          disabled={disable}
        >
          <div
            className={`shadow-[inset_0_5px_2px_hsla(0,50%,10%,.2)] ${bg_image} ${bg_scale} ${bg_pos} h-[7.3rem] w-[7.3rem]  rounded-full bg-white  bg-center bg-no-repeat p-6 xl:h-[9rem] xl:w-[9rem]`}
          ></div>
          <div>{winner && children}</div>
        </button>
      </Link>
    </div>
  );
}

export default HandGesture;
