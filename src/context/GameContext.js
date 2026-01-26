import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameState = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    showEnvelopeOne: false,
    noteTwoAndJar: false,
    showEnvelopeThree: false,
    noteFourAndMirror: false,
    showEnvelopeFive: false,
    noteSix: false,
    showCurtains: false,
    showNoteSevenAndFootprint: false,
    showChalkOutline: false,
    showSuspects: false,
    showDinoSuspect: false,
    showDoor: false,
    showKey: false,
  });

  const updateGameState = (key, value) => {
    setGameState(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetGame = () => {
    setGameState({
      showEnvelopeOne: false,
      noteTwoAndJar: false,
      showEnvelopeThree: false,
      noteFourAndMirror: false,
      showEnvelopeFive: false,
      noteSix: false,
      showCurtains: false,
      showNoteSevenAndFootprint: false,
      showChalkOutline: false,
      showSuspects: false,
      showDinoSuspect: false,
      showDoor: false,
      showKey: false,
    });
  };

  const value = {
    gameState,
    updateGameState,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
