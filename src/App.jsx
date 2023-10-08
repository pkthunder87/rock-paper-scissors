import Game from './components/Game';
import Header from './components/Header';
import Rules from './components/Rules';

function App() {
  return (
    <div className="grid h-[100dvh] grid-rows-[23%_49%_28%] p-10">
      <Header />
      <Game />
      <Rules />
    </div>
  );
}

export default App;
