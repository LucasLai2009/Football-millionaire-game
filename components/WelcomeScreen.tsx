

import React from 'react';
import { Logo, ShopIcon, CollectionIcon, DuplicatesIcon, ModesIcon, ResetIcon } from './icons';

interface WelcomeScreenProps {
    onStartGame: () => void;
    onGoToShop: () => void;
    onGoToCollection: () => void;
    onGoToDuplicates: () => void;
    onGoToModes: () => void;
    onOpenResetConfirm: () => void;
    onGoToPrivacyPolicy: () => void;
    onGoToHowToPlay: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartGame, onGoToShop, onGoToCollection, onGoToDuplicates, onGoToModes, onOpenResetConfirm, onGoToPrivacyPolicy, onGoToHowToPlay }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-8 z-10 animate-fade-in w-full max-w-3xl text-center">
            <Logo className="w-48 h-48 mb-6" />
            <h1 className="font-anton text-5xl md:text-7xl text-amber-300 tracking-wider uppercase mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Football Millionaire
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
                Test your football knowledge, win virtual cash to unlock cards, and discover facts about your favorite players, managers, and countries!

            <div className="w-full flex flex-col items-center gap-5 mb-12">
                <button
                    onClick={onStartGame}
                    className="w-full max-w-xs font-anton text-3xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105"
                >
                    PLAY NOW
                </button>
                 <button
                    onClick={onGoToModes}
                    className="w-full max-w-xs font-anton text-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
                >
                    <ModesIcon className="w-6 h-6"/>
                    MORE MODES
                </button>
            </div>


             <div className="flex items-center justify-center gap-x-8 sm:gap-x-16 w-full max-w-sm mb-8">
                <button onClick={onGoToShop} className="flex flex-col items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors">
                    <ShopIcon className="w-10 h-10"/>
                    <span className="font-semibold">Shop</span>
                </button>
                 <button onClick={onGoToCollection} className="flex flex-col items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors">
                    <CollectionIcon className="w-10 h-10"/>
                    <span className="font-semibold">Collection</span>
                </button>
                 <button onClick={onGoToDuplicates} className="flex flex-col items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors">
                    <DuplicatesIcon className="w-10 h-10"/>
                    <span className="font-semibold">Duplicates</span>
                </button>
            </div>
            
            <div className="mt-8 text-xs text-slate-600 max-w-xl mx-auto space-y-2">
                 <div className="flex justify-center items-center gap-4 text-sm text-slate-400 mb-4">
                    <button onClick={onGoToHowToPlay} className="hover:text-amber-300 transition-colors">How to Play</button>
                    <span className="text-slate-600">|</span>
                    <button onClick={onGoToPrivacyPolicy} className="hover:text-amber-300 transition-colors">Privacy Policy</button>
                     <span className="text-slate-600">|</span>
                    <button
                        onClick={onOpenResetConfirm}
                        className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors"
                        aria-label="Reset all game progress"
                    >
                        <ResetIcon className="w-4 h-4" />
                        <span>Reset Progress</span>
                    </button>
                </div>
                <p>
                    All player names, team names, logos, and brands are property of their respective owners. The use of these trademarks is for identification and informational purposes only and does not imply endorsement or affiliation.
                </p>
                <p className="italic text-slate-500">
                    Please note: This game is still in the making. Some information may be false or outdated, and new features will be added and adjusted.
                </p>
                <p className="pt-2 text-slate-500">
                    For inquiries or to report bug issues, please contact: <a href="mailto:playfootballmillionaire@gmail.com" className="text-amber-400 hover:underline">playfootballmillionaire@gmail.com</a>
                </p>
            </div>
        </div>
    );
};

export default WelcomeScreen;

