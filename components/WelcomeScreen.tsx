
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          PROJET SAMOS
        </h1>
        <p className="text-xl text-slate-400 font-light">
          La Singularité Géométrique : Répare le réacteur du vaisseau en décodant les fréquences de Pythagore.
        </p>
      </div>

      <div className="relative group cursor-pointer inline-block" onClick={onStart}>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <button className="relative px-12 py-4 bg-slate-900 rounded-lg leading-none flex items-center divide-x divide-slate-700">
          <span className="flex items-center space-x-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="pr-6 text-slate-100 font-semibold tracking-wide">INITIALISER LA MISSION</span>
          </span>
          <span className="pl-6 text-indigo-400 group-hover:text-slate-100 transition duration-200">START &rarr;</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 text-xs text-slate-500 uppercase tracking-widest mt-12 opacity-50">
        <div className="p-4 border border-slate-800 rounded-xl">Calcul Géométrique</div>
        <div className="p-4 border border-slate-800 rounded-xl">Analyse d'Aire</div>
        <div className="p-4 border border-slate-800 rounded-xl">Logique Converse</div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
