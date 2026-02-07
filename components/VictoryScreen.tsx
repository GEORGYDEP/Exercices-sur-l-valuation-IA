
import React from 'react';

interface VictoryScreenProps {
  onReset: () => void;
}

const VictoryScreen: React.FC<VictoryScreenProps> = ({ onReset }) => {
  return (
    <div className="text-center space-y-12 animate-in zoom-in-50 duration-700">
      <div className="relative">
        <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <h1 className="text-7xl md:text-9xl font-black italic text-yellow-500 drop-shadow-2xl">VICTOIRE</h1>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-100">Cœur de Samos Stabilisé !</h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Félicitations, architecte géométrique. Tu as maîtrisé le théorème de Pythagore et sauvé l'expédition.
        </p>
      </div>

      <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 grid grid-cols-3 gap-8">
        <div>
          <span className="block text-3xl font-bold text-indigo-400">100%</span>
          <span className="text-xs uppercase text-slate-500">Précision</span>
        </div>
        <div>
          <span className="block text-3xl font-bold text-cyan-400">A²+B²</span>
          <span className="text-xs uppercase text-slate-500">Maîtrisé</span>
        </div>
        <div>
          <span className="block text-3xl font-bold text-purple-400">Alpha</span>
          <span className="text-xs uppercase text-slate-500">Rang</span>
        </div>
      </div>

      <button 
        onClick={onReset}
        className="px-10 py-4 bg-slate-100 text-slate-950 font-black rounded-full hover:bg-yellow-500 transition-all transform hover:-translate-y-1"
      >
        RETOUR AU CENTRE DE COMMANDEMENT
      </button>
    </div>
  );
};

export default VictoryScreen;
