
import React from 'react';
import { Card, CardType } from '../types';
import { Logo } from './icons';
import { NATIONALITY_FLAG_MAP } from '../data/nationality-flag-map';

const rarityStyles = {
    Common: { border: 'border-slate-500', text: 'text-slate-300' },
    Rare: { border: 'border-blue-500', text: 'text-blue-400' },
    Epic: { border: 'border-purple-500', text: 'text-purple-300' },
    Legendary: { border: 'border-amber-400', text: 'text-amber-300' },
};

interface CardDetailModalProps {
    card: Card;
    onClose: () => void;
    isOwned: boolean;
}

export default function CardDetailModal({ card, onClose, isOwned }: CardDetailModalProps): React.ReactElement {
    const style = rarityStyles[card.rarity] || rarityStyles.Common;

    if (!isOwned) {
        return (
            <div 
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
                onClick={onClose}
            >
                <div 
                    className={`relative w-full max-w-md bg-slate-800 rounded-2xl border-2 ${style.border} shadow-2xl m-4 overflow-hidden flex flex-col`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors z-20">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    
                    <div className="relative h-80 bg-slate-900 shrink-0 flex items-center justify-center">
                        <span className="font-anton text-9xl text-slate-700 select-none">?</span>
                    </div>

                    <div className="p-6 overflow-y-auto">
                        <div className="flex justify-between items-start gap-4">
                            <h2 className="font-anton text-4xl tracking-wide leading-tight text-white">Unknown Fact</h2>
                            <div className={`mt-2 px-3 py-1 border ${style.border} rounded-full text-sm font-bold uppercase tracking-wider ${style.text} whitespace-nowrap shrink-0`}>
                                {card.rarity}
                            </div>
                        </div>
                        <p className={`font-bold text-md uppercase tracking-wider mb-4 ${style.text}`}>Type: ???</p>
                        <p className="text-slate-300 text-base">This fact has not been unlocked yet. Find this fact in packs from the shop to reveal the information.</p>
                    </div>
                </div>
            </div>
        );
    }

    const isPlayerOrManager = card.type === CardType.Player || card.type === CardType.Manager;
    const isCountryCard = card.type === CardType.Country;
    const flagUrl = isPlayerOrManager && card.nationality ? NATIONALITY_FLAG_MAP[card.nationality] : undefined;

    const finalImageUrl = card.imageUrl
        ? isCountryCard
            ? card.imageUrl
            : `https://images.weserv.nl/?url=${encodeURIComponent(card.imageUrl)}&w=500&h=650&fit=cover&a=face`
        : undefined;

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null; // Prevent infinite loop
        target.style.display = 'none';
    };

    return (
        <div 
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className={`relative w-full max-w-md bg-slate-800 rounded-2xl border-2 ${style.border} shadow-2xl m-4 overflow-hidden flex flex-col ${!isOwned ? 'grayscale' : ''}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal content
            >
                <button onClick={onClose} className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors z-20">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                
                <div className="relative h-80 bg-slate-900 shrink-0">
                    {isPlayerOrManager && flagUrl ? (
                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${flagUrl.replace('h120', 'h240')})` }}
                        >
                            <Logo className="absolute top-4 right-4 w-24 h-24 text-white/10" />
                        </div>
                    ) : finalImageUrl ? (
                         <>
                            <img 
                                src={finalImageUrl}
                                alt={card.name} 
                                className={`w-full h-full ${isCountryCard ? 'object-contain p-8' : 'object-cover'}`}
                                onError={handleImageError}
                            />
                            <Logo className="absolute top-4 right-4 w-24 h-24 text-black/10" />
                        </>
                    ) : (
                         <Logo className="absolute top-4 right-4 w-24 h-24 text-white/10" />
                    )}
                </div>

                <div className="p-6 overflow-y-auto">
                    <div className="flex justify-between items-start gap-4">
                        <h2 className="font-anton text-4xl tracking-wide leading-tight text-white">{card.name}</h2>
                        <div className={`mt-2 px-3 py-1 border ${style.border} rounded-full text-sm font-bold uppercase tracking-wider ${style.text} whitespace-nowrap shrink-0`}>
                            {card.rarity}
                        </div>
                    </div>
                    <p className={`font-bold text-md uppercase tracking-wider mb-4 ${style.text}`}>{card.type}</p>
                    <p className="text-slate-300 text-base">{card.description}</p>
                </div>
            </div>
        </div>
    );
}

