
import React, { useState, useEffect } from 'react';
import { getHoloGuideHint } from '../services/geminiService';

interface CalculationLevelProps {
  type: 'hypotenuse' | 'leg';
  onComplete: () => void;
}

const CalculationLevel: React.FC<CalculationLevelProps> = ({ type, onComplete }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [loadingHint, setLoadingHint] = useState(false);
  
  // Static challenges for demo
  const challenge = type === 'hypotenuse' 
    ? { a: 6, b: 8, expected: 10, text: "Calcule la longueur du câble d'alimentation principal (l'hypoténuse)." }
    : { a: 12, c: 13, expected: 5, text: "Trouve la longueur manquante du support de stabilisation (un côté de l'angle droit)." };

  const checkAnswer = () => {
    const val = parseFloat(answer);
    if (val === challenge.expected) {
      setFeedback("CORRECT ! Système synchronisé.");
      setTimeout(onComplete, 1500);
    } else {
      setFeedback("ERREUR : Fréquence incompatible. Réessaie.");
    }
  };

  const fetchHint = async () => {
    setLoadingHint(true);
    const h = await getHoloGuideHint(
      type === 'hypotenuse' ? "Trouver l'hypoténuse quand on connaît les deux côtés" : "Trouver un côté quand on connaît l'hypoténuse",
      `Niveau ${type}`
    );
    setHint(h || "Réfléchis à l'égalité d'aire.");
    setLoadingHint(false);
  };

  return (
    <div className="w-full max-w-2xl space-y-8 animate-in slide-in-from-right-8 duration-500">
      <div className="bg-slate-900/60 backdrop-blur-2xl border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
        <h2 className="text-2xl font-bold text-indigo-400 capitalize">
          {type === 'hypotenuse' ? 'Calcul de l\'Hypoténuse' : 'Calcul du Côté'}
        </h2>
        
        <p className="text-slate-300 text-lg leading-relaxed">{challenge.text}</p>
        
        <div className="flex justify-center py-6">
          <svg viewBox="0 0 200 150" className="w-64 h-auto drop-shadow-xl">
            <path d="M 40 110 L 40 30 L 160 110 Z" fill="none" stroke="#6366f1" strokeWidth="4" />
            <rect x="40" y="100" width="10" height="10" fill="none" stroke="#6366f1" strokeWidth="2" />
            
            <text x="20" y="70" fill="white" className="fira-code font-bold">{type === 'hypotenuse' ? challenge.a : '?'}</text>
            <text x="90" y="130" fill="white" className="fira-code font-bold">{type === 'hypotenuse' ? challenge.b : challenge.a}</text>
            <text x="110" y="60" fill="white" className="fira-code font-bold">{type === 'hypotenuse' ? 'X' : challenge.c}</text>
          </svg>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <input 
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Valeur de X..."
              className="flex-1 bg-slate-800 border-2 border-slate-700 rounded-xl px-4 py-3 text-2xl font-bold fira-code focus:border-indigo-500 outline-none transition-all"
            />
            <button 
              onClick={checkAnswer}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all"
            >
              VALIDER
            </button>
          </div>
          
          {feedback && (
            <div className={`p-4 rounded-xl text-center font-bold ${feedback.includes('CORRECT') ? 'bg-green-500/20 text-green-400 border border-green-500' : 'bg-red-500/20 text-red-400 border border-red-500'}`}>
              {feedback}
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-800">
          <button 
            onClick={fetchHint}
            disabled={loadingHint}
            className="text-indigo-400 text-sm hover:underline flex items-center gap-2"
          >
            {loadingHint ? 'Le Holo-Guide réfléchit...' : 'Besoin d\'un indice ? Demander à l\'Holo-Guide'}
          </button>
          {hint && (
            <p className="mt-3 p-4 bg-indigo-900/10 border border-indigo-500/30 rounded-lg text-sm text-indigo-300 italic animate-in fade-in slide-in-from-top-2">
              🤖 "{hint}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculationLevel;
