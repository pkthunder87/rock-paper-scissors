import { createContext, useContext, useState } from 'react';

const GameStateContext = createContext();

function GameStateProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);

  function handleToggleModal(e) {
    e.target.blur();
    setShowModal((currentShowModal) => !currentShowModal);
  }

  return (
    <GameStateContext.Provider
      value={{
        showModal,
        setShowModal,
        playerScore,
        setPlayerScore,
        onToggleModal: handleToggleModal,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}

function useGameState() {
  const context = useContext(GameStateContext);
  if (context === undefined)
    throw new Error(
      'GameStateContext was used outside of the GameStateProvider',
    );
  return context;
}

export { GameStateProvider, useGameState };
