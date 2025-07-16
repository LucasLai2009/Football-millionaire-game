
import React from 'react';
import { GameStatus } from '../types';
import { Logo, ShopIcon, HomeIcon } from './icons';

interface EndScreenProps {
    status: GameStatus.Won | GameStatus.Lost | GameStatus.WalkedAway;
    winnings: number;
    onPlayAgain: () => void;
    onGoToShop: () => void;
    onBackToMenu: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ status, winnings, onPlayAgain, onGoToShop, onBackToMenu }) => {
    const messages = {
        [GameStatus.Won]: {
            title: "CONGRATULATIONS!",
            subtitle: "You are the Football Millionaire!",
        },
        [GameStatus.Lost]: {
            title: "GAME OVER",
            subtitle: "Better luck next time!",
        },
        [GameStatus.WalkedAway]: {
            title: "YOU WALKED AWAY",
            subtitle: "A wise decision perhaps!",
        },
    };

    const { title, subtitle } = messages[status] || { title: "GAME OVER", subtitle: ""};

    return (
        <div className="text-center flex flex-col items-center justify-center p-4 sm:p-8 z-10 animate-fade-in gap-y-6">
            <Logo className="w-32 h-32" />
            <div>
                <h1 className="font-anton text-6xl md:text-8xl text-amber-300 tracking-wider uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300">{subtitle}</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 w-full max-w-md">
                <p className="text-lg text-slate-400">YOU'VE WON</p>
                <p className="font-anton text-7xl text-white mt-1">
                    ${winnings.toLocaleString()}
                </p>
            </div>
            <div className="flex flex-col gap-4 items-center w-full max-w-md">
                <div className="w-full flex flex-col sm:flex-row justify-center gap-4 items-center">
                     <button
                        onClick={onPlayAgain}
                        className="w-full sm:w-auto font-anton text-3xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        PLAY AGAIN
                    </button>
                    <button
                        onClick={onGoToShop}
                        className="w-full sm:w-auto font-anton text-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <ShopIcon className="w-6 h-6"/>
                        GO TO SHOP
                    </button>
                </div>
                <button
                    onClick={onBackToMenu}
                    className="font-anton text-xl bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2"
                >
                    <HomeIcon className="w-5 h-5"/>
                    MAIN MENU
                </button>
            </div>
        </div>
    );
};

export default EndScreen;
