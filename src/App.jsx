import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Rules from './components/Rules';
import Start from './pages/Start';

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal(e) {
    e.target.blur();
    setShowModal((currentShowModal) => !currentShowModal);
  }

  return (
    <>
      <div className="grid h-[100dvh] grid-rows-[30%_40%_30%] p-10">
        <Header />
        <Start />
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
