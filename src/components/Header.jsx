import ScoreBox from './ScoreBox';

function Header() {
  return (
    <div className="flex h-[12.5dvh] w-[84dvw] items-center justify-between rounded-[16px] border-[3px] border-header-outline p-2 md:mt-10 md:h-[152px] md:w-[704px] md:p-6">
      <img
        className="h-[fit-content] w-[fit-content] scale-[.68] md:ml-[.9rem] md:mt-[.6rem] md:scale-[1]"
        src="../logo-bonus.svg"
        alt="Words aligned vertically: Rock, Paper, Scissors, Lizard, Spock"
      />
      <ScoreBox />
    </div>
  );
}

export default Header;
