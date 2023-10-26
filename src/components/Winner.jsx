function WinnerTag({ tagTextSize = 'text-base' }) {
  // Adds translucent concentric circles to winner

  return (
    <div
      className={`absolute left-[50%] top-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%] ${tagTextSize}`}
    >
      <div className="flex h-[21.5em] w-[21.5em] items-center justify-center rounded-full bg-[rgba(221,221,221,0.11)] opacity-30 lg:h-[18.5em] lg:w-[18.5em]">
        <div className="flex h-[16.5em] w-[16.5em] items-center justify-center  rounded-full bg-[#eeeeee0d] opacity-100 lg:h-[15em] lg:w-[15em]">
          <div className="flex h-[11.5em] w-[11.5em] items-center justify-center   rounded-full bg-[#ffffff28] opacity-50 lg:h-[11.5em] lg:w-[11.5em]">
            <div className="flex h-[8.5em] w-[8.5em]  items-center justify-center rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinnerTag;
