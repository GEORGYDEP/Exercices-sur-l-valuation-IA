
import React, { useState } from 'react';

interface DiscoveryLevelProps {
  onComplete: () => void;
}

const DiscoveryLevel: React.FC<DiscoveryLevelProps> = ({ onComplete }) => {
  const [isAActive, setIsAActive] = useState(false);
  const [isBActive, setIsBActive] = useState(false);

  const completed = isAActive && isBActive;

  return (
    <div className="w-full max-w-4xl space-y-8 animate-in zoom-in-95 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-indigo-400">Phase 1 : La Matrice des Aires</h2>
        <p className="text-slate-400">Active les condensateurs d'énergie pour visualiser la loi fondamentale.</p>
      </div>

      <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl flex flex-col items-center">
        <div className="relative w-80 h-80 mb-8">
          {/* The Triangle and Squares Visualization */}
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
            {/* The right triangle */}
            <path d="M 150 150 L 150 250 L 300 250 Z" fill="none" stroke="#6366f1" strokeWidth="3" />
            
            {/* Square A (side 100) */}
            <rect 
              x="50" y="150" width="100" height="100" 
              className={`transition-all duration-700 cursor-pointer ${isAActive ? 'fill-indigo-500/80' : 'fill-slate-800/30 stroke-slate-700'}`}
              onClick={() => setIsAActive(true)}
            />
            <text x="75" y="205" fill="white" className="text-xl font-bold select-none pointer-events-none">A²</text>

            {/* Square B (side 150) */}
            <rect 
              x="150" y="250" width="150" height="150" 
              className={`transition-all duration-700 cursor-pointer ${isBActive ? 'fill-cyan-500/80' : 'fill-slate-800/30 stroke-slate-700'}`}
              onClick={() => setIsBActive(true)}
            />
            <text x="210" y="335" fill="white" className="text-xl font-bold select-none pointer-events-none">B²</text>

            {/* Square C (Hypotenuse) */}
            <g transform="rotate(-33.7, 300, 250)">
               <rect 
                x="120" y="250" width="180" height="180" 
                className={`transition-all duration-1000 ${completed ? 'fill-purple-500/80' : 'fill-slate-800/10 stroke-slate-700 stroke-dasharray-4'}`}
              />
              <text x="180" y="350" fill="white" className="text-xl font-bold select-none pointer-events-none" transform="rotate(33.7, 210, 340)">C²</text>
            </g>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center">
          <div className={`p-4 rounded-xl border transition-all ${isAActive ? 'bg-indigo-900/20 border-indigo-500' : 'bg-slate-800/50 border-slate-700'}`}>
            <span className="block text-xs uppercase text-slate-500 mb-1">Côté A</span>
            <span className="text-2xl font-bold fira-code">3² = 9</span>
          </div>
          <div className={`p-4 rounded-xl border transition-all ${isBActive ? 'bg-cyan-900/20 border-cyan-500' : 'bg-slate-800/50 border-slate-700'}`}>
            <span className="block text-xs uppercase text-slate-500 mb-1">Côté B</span>
            <span className="text-2xl font-bold fira-code">4² = 16</span>
          </div>
          <div className={`p-4 rounded-xl border transition-all ${completed ? 'bg-purple-900/20 border-purple-500' : 'bg-slate-800/50 border-slate-700 opacity-50'}`}>
            <span className="block text-xs uppercase text-slate-500 mb-1">Hypoténuse C</span>
            <span className="text-2xl font-bold fira-code">{completed ? '9 + 16 = 25' : '?'}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {completed ? (
          <button 
            onClick={onComplete}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full font-bold transition-all transform hover:scale-105"
          >
            CONFIRMER LA LOI GÉOMÉTRIQUE
          </button>
        ) : (
          <p className="text-sm text-slate-500 italic">Clique sur les carrés gris pour activer les transferts d'énergie...</p>
        )}
      </div>
    </div>
  );
};

export default DiscoveryLevel;
