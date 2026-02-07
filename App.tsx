
import React, { useState, useEffect } from 'react';
import { GameState } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import DiscoveryLevel from './components/DiscoveryLevel';
import CalculationLevel from './components/CalculationLevel';
import ConverseLevel from './components/ConverseLevel';
import VictoryScreen from './components/VictoryScreen';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.WELCOME);
  const [progress, setProgress] = useState<number>(0);
  const [energyLevel, setEnergyLevel] = useState<number>(20);

  const nextState = () => {
    const states = Object.values(GameState);
    const currentIndex = states.indexOf(gameState);
    if (currentIndex < states.length - 1) {
      setGameState(states[currentIndex + 1]);
      setProgress((prev) => prev + 20);
      setEnergyLevel((prev) => Math.min(prev + 20, 100));
    }
  };

  const resetGame = () => {
    setGameState(GameState.WELCOME);
    setProgress(0);
    setEnergyLevel(20);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {gameState !== GameState.WELCOME && gameState !== GameState.VICTORY && (
        <Sidebar 
          progress={progress} 
          energyLevel={energyLevel} 
          currentLevel={gameState}
        />
      )}

      <main className="flex-1 relative overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
        
        <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8">
          {gameState === GameState.WELCOME && <WelcomeScreen onStart={nextState} />}
          {gameState === GameState.DISCOVERY && <DiscoveryLevel onComplete={nextState} />}
          {gameState === GameState.CALC_HYPOTENUSE && <CalculationLevel type="hypotenuse" onComplete={nextState} />}
          {gameState === GameState.CALC_LEG && <CalculationLevel type="leg" onComplete={nextState} />}
          {gameState === GameState.CONVERSE && <ConverseLevel onComplete={nextState} />}
          {gameState === GameState.VICTORY && <VictoryScreen onReset={resetGame} />}
        </div>
      </main>
    </div>
  );
};

export default App;
