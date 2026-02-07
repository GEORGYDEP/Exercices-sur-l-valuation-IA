
import React, { useState } from 'react';

interface ConverseLevelProps {
  onComplete: () => void;
}

const ConverseLevel: React.FC<ConverseLevelProps> = ({ onComplete }) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const modules = [
    { id: 1, sides: [3, 4, 5], isRight: true },
    { id: 2, sides: [5, 12, 13], isRight: true },
    { id: 3, sides: [7, 8, 10], isRight: false },
    { id: 4, sides: [8, 15, 17], isRight: true },
    { id: 5, sides: [6, 9, 12], isRight: false },
  ];

  const toggleModule = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const validateModules = () => {
    const correctIds = modules.filter(m => m.isRight).map(m => m.id);
    const isSuccess = 
      selectedIds.length === correctIds.length && 
      selectedIds.every(id => correctIds.includes(id));

    if (isSuccess) {
      setFeedback("SYSTÈMES STABLES. Accès total au réacteur accordé.");
      setTimeout(onComplete, 2000);
    } else {
      setFeedback("ERREUR : Certains systèmes sont instables ou manquants.");
    }
  };

  return (
    <div className="w-full max-w-4xl space-y-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-cyan-400">Phase Finale : La Réciproque</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Identifie tous les modules "stables" (ceux dont les côtés forment un triangle rectangle) pour stabiliser le cœur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((m) => (
          <div 
            key={m.id}
            onClick={() => toggleModule(m.id)}
            className={`cursor-pointer p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
              selectedIds.includes(m.id) 
                ? 'bg-cyan-900/20 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.2)]' 
                : 'bg-slate-900/50 border-slate-800'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase">Module #{m.id}</span>
              <div className={`w-3 h-3 rounded-full ${selectedIds.includes(m.id) ? 'bg-cyan-400 animate-pulse' : 'bg-slate-700'}`}></div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-400">Dimensions :</p>
              <div className="flex gap-3 text-xl font-bold fira-code">
                <span>{m.sides[0]}</span>
                <span className="text-slate-700">|</span>
                <span>{m.sides[1]}</span>
                <span className="text-slate-700">|</span>
                <span>{m.sides[2]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6">
        {feedback && (
          <p className={`text-lg font-bold ${feedback.includes('STABLES') ? 'text-green-400' : 'text-red-400'}`}>
            {feedback}
          </p>
        )}
        <button 
          onClick={validateModules}
          className="px-12 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-full font-extrabold text-lg transition-all shadow-lg hover:shadow-cyan-500/20"
        >
          STABILISER LE CŒUR
        </button>
      </div>
    </div>
  );
};

export default ConverseLevel;
