import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Rules from './components/Rules';
import Start from './pages/Start';
import Results from './pages/Results';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);

  function handleToggleModal(e) {
    e.target.blur();
    setShowModal((currentShowModal) => !currentShowModal);
  }

  return (
    <>
      <div className="grid h-[100dvh] grid-rows-[30%_40%_15%_15%] p-10">
        <Header playerScore={playerScore} />
        <BrowserRouter>
          <Routes>
            <Route index element={<Start />} />
            <Route path="start" element={<Start />} />
            <Route
              path="results/:gesture"
              element={
                <Results
                  playerScore={playerScore}
                  setPlayerScore={setPlayerScore}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Rules onOpenModal={handleToggleModal} />

        <Footer />
      </div>
      {showModal && (
        <Modal
          onCloseModal={handleToggleModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default App;
