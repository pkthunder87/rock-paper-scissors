import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useGameState } from './context/gameStateContext';

import Header from './components/Header';
import Start from './pages/Start';
import Results from './pages/Results';
import Rules from './components/Rules';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const { showModal } = useGameState();

  return (
    <>
      <div className="grid h-[100dvh] grid-rows-[30%_40%_15%_15%] justify-center p-10">
        <Header />
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
