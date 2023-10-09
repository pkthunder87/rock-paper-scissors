function HandGesture({
  gesture,
  gesture_color_from,
  gesture_color_to,
  set_player_gesture,
}) {
  return (
    <>
      <div
        className={`${gesture_color_from} ${gesture_color_to} flex h-[7.5rem] w-[7.5rem] items-center 
        justify-center overflow-visible rounded-full bg-gradient-to-b shadow-[inset_0_-6px_2px_hsla(0,50%,10%,.5)] `}
      >
        <img
          className="h-[5.8rem] w-[5.8rem] overflow-visible rounded-full bg-white p-6 shadow-[inset_0_5px_2px_hsla(0,50%,10%,.2)] "
          src={`icon-${gesture}.svg`}
          alt={`Hand Gesture: ${gesture.replace(
            gesture[0],
            gesture[0].toUpperCase(),
          )}`}
        />
      </div>
    </>
  );
}

export default HandGesture;
