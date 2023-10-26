import { createContext, useContext, useState } from 'react';

const GameStateContext = createContext();

function GameStateProvider({ children }) {
  const [isDesktop, setIsDesktop] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [playerWon, setPlayerWon] = useState('');

  const [showHousePick, setShowHousePick] = useState(false);
  const [playerWonDelay, setPlayerWonDelay] = useState(false);

  function handleToggleModal(e) {
    e.target.blur();
    setShowModal((currentShowModal) => !currentShowModal);
  }

  return (
    <GameStateContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
        showModal,
        setShowModal,
        playerScore,
        setPlayerScore,
        isLoading,
        setIsLoading,
        playerWon,
        setPlayerWon,
        showHousePick,
        setShowHousePick,
        playerWonDelay,
        setPlayerWonDelay,
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
