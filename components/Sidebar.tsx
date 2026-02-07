
import React from 'react';
import { GameState } from '../types';

interface SidebarProps {
  progress: number;
  energyLevel: number;
  currentLevel: GameState;
}

const Sidebar: React.FC<SidebarProps> = ({ progress, energyLevel, currentLevel }) => {
  const steps = [
    { label: 'Découverte', id: GameState.DISCOVERY },
    { label: 'Hypoténuse', id: GameState.CALC_HYPOTENUSE },
    { label: 'Côté', id: GameState.CALC_LEG },
    { label: 'Réciproque', id: GameState.CONVERSE },
  ];

  return (
    <aside className="w-full md:w-72 bg-slate-900/80 backdrop-blur-md border-b md:border-b-0 md:border-r border-slate-800 p-6 flex flex-col justify-between z-20">
      <div className="space-y-8">
        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Statut Mission</h3>
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                  currentLevel === step.id 
                    ? 'bg-indigo-600 border-indigo-400 text-white' 
                    : idx < steps.findIndex(s => s.id === currentLevel)
                    ? 'bg-green-500/20 border-green-500 text-green-400'
                    : 'bg-slate-800 border-slate-700 text-slate-500'
                }`}>
                  {idx + 1}
                </div>
                <span className={`text-sm ${currentLevel === step.id ? 'text-white font-bold' : 'text-slate-500'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Énergie du Réacteur</h3>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000"
              style={{ width: `${energyLevel}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-right mt-1 text-slate-400 fira-code">{energyLevel}%</p>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-900/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-100">Explorateur</p>
            <p className="text-[10px] text-slate-500 uppercase">Grade: Apprenti Architecte</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
