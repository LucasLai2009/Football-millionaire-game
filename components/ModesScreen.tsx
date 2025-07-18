import React from 'react';
import { BackIcon, ModesIcon } from './icons';

interface ModesScreenProps {
    onBack: () => void;
    onStartDraft: () => void;
}

const ModesScreen: React.FC<ModesScreenProps> = ({ onBack, onStartDraft }) => {
    return (
        <div className="w-full relative p-4 animate-fade-in">
             <button onClick={onBack} className="absolute top-4 left-4 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-10">
                <BackIcon className="w-6 h-6" />
                <span>Back to Menu</span>
            </button>
            <div className="mt-16 flex flex-col items-center w-full">
                <ModesIcon className="w-24 h-24 mb-4 text-amber-300"/>
                <h1 className="font-anton text-6xl text-white tracking-wider uppercase">GAME MODES</h1>
                <p className="text-slate-400 mb-8">Choose a different way to play and test your knowledge!</p>

                <div className="w-full max-w-xl space-y-6">
                    <div className="bg-slate-800 p-6 text-center rounded-lg border-2 border-slate-700 hover:border-amber-400 transition-colors">
                        <h2 className="text-3xl font-anton text-amber-300">Draft Mode</h2>
                        <p className="text-slate-400 my-2">Build a squad of 11 players by picking from random selections for each position. Then, answer trivia about your drafted players to see how high you can score!</p>
                        <button 
                            onClick={onStartDraft}                            
                            className="font-anton text-2xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 mt-4 inline-block"
                        >
                            Start Draft
                        </button>
                    </div>
                    {/* Future modes can be added here */}
                     <div className="bg-slate-800 p-6 text-center rounded-lg border-2 border-slate-700 opacity-50">
                        <h2 className="text-3xl font-anton text-slate-500">More Modes Coming Soon!</h2>
                        <p className="text-slate-500 my-2">New challenges and ways to play will be added in the future. Stay tuned!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModesScreen;