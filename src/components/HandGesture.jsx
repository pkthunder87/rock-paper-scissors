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
  // button_size_multiplier = ' lg:h-[12em] lg:w-[12em]',
  // image_size_multiplier = ' h-[9em]  w-[9em] ',
}) {
  return (
    <div className={` relative h-[9.5em] w-[9.5em] lg:h-[12em] lg:w-[12em]`}>
      <Link to={`/results/${gesture}`}>
        <button
          className={`${gesture_color_from} ${gesture_color_to} relative flex h-[9.5em] w-[9.5em] items-center 
        justify-center rounded-full bg-gradient-to-b shadow-[inset_0_-6px_2px_hsla(0,50%,10%,.5)] lg:h-[12em] lg:w-[12em]`}
          disabled={disable}
        >
          <div
            className={`shadow-[inset_0_5px_2px_hsla(0,50%,10%,.2)] ${bg_image} ${bg_scale} ${bg_pos} "> h-[7.3em]  w-[7.3em] rounded-full  bg-white bg-center bg-no-repeat p-6 lg:h-[9em] lg:w-[9em]`}
          ></div>
          <div>{winner && children}</div>
        </button>
      </Link>
    </div>
  );
}

export default HandGesture;
