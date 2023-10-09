import Footer from '../components/Footer';
import Game from '../components/Game';
import Header from '../components/Header';
import Rules from '../components/Rules';

function Start() {
  return (
    <div className="grid h-[100dvh] grid-rows-[30%_40%_30%] p-10">
      <Header />
      <Game />
      <Rules />
      <Footer />
    </div>
  );
}

export default Start;
