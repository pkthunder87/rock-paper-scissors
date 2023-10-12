function PlayerWinLose({ playerWin = true }) {
  return (
    <div className="-mt-3 flex flex-col items-center justify-start">
      <h2 className="text-[5rem] tracking-wide text-white">
        {playerWin ? 'YOU WIN' : 'YOU LOSE'}
      </h2>
      <button className="mt-3 flex h-[70px] w-[316px] items-center justify-center rounded-lg bg-white  p-2 text-2xl  tracking-widest text-radial-to">
        PLAY AGAIN
      </button>
    </div>
  );
}

export default PlayerWinLose;
