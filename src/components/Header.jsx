import ScoreBox from './ScoreBox';

function Header() {
  return (
    <div className="flex h-[12.5dvh] w-[84dvw] items-center justify-between rounded-lg border-4 border-header-outline p-2">
      <img
        className="h-[fit-content] w-[fit-content] scale-[.68]"
        src="../logo-bonus.svg"
        alt="Words aligned vertically: Rock, Paper, Scissors, Lizard, Spock"
      />
      <ScoreBox />
    </div>
  );
}

export default Header;
