function WinnerTag() {
  // Adds translucent concentric circles to winner

  return (
    <div className="absolute left-[50%] top-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex h-[21.5rem] w-[21.5rem] items-center justify-center rounded-full bg-[rgba(221,221,221,0.11)] opacity-30">
        <div className="flex h-[16.5rem] w-[16.5rem]  items-center justify-center rounded-full bg-[#eeeeee0d] opacity-100">
          <div className="flex h-[11.5rem] w-[11.5rem]  items-center justify-center rounded-full bg-[#ffffff28] opacity-50">
            <div className="flex h-[8.5rem] w-[8.5rem]  items-center justify-center rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinnerTag;
