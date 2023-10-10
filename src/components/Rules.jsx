function Rules({ onHandleToggleModal }) {
  return (
    <div className="mb-12 flex items-end justify-center">
      <button
        onClick={onHandleToggleModal}
        className="flex h-[56px] w-[150px] items-center justify-center rounded-lg border-4 border-header-outline p-2 text-2xl"
      >
        <h1 className="tracking-widest text-[#eee]">RULES</h1>
      </button>
    </div>
  );
}

export default Rules;
