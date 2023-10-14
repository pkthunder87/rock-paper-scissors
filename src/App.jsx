import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Rules from './components/Rules';
import Start from './pages/Start';
import Results from './pages/Results';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import { useGameState } from './context/gameStateContext';

function App() {
  const { playerScore, setPlayerScore, showModal } = useGameState();

  return (
    <>
      <div className="grid h-[100dvh] grid-rows-[30%_40%_15%_15%] p-10">
        <Header playerScore={playerScore} />
        <BrowserRouter>
          <Routes>
            <Route index element={<Start />} />
            <Route path="start" element={<Start />} />
            <Route path="results/:gesture" element={<Results />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Rules />

        <Footer />
      </div>
      {showModal && <Modal />}
    </>
  );
}

export default App;
