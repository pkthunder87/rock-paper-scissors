function ScoreBox() {
  return (
    <div className=" mr-2 flex h-[5.8rem] w-[5.8rem] flex-col items-center rounded-lg border-[3px] bg-white">
      <h2 className="-mb-3 pt-[.65rem] text-sm font-semibold tracking-widest text-score-text">
        SCORE
      </h2>
      <h2 className=" text-[3rem] font-bold text-dark-text">12</h2>
    </div>
  );
}

export default ScoreBox;
