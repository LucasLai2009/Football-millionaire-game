

import React from 'react';
import { Card, CardType } from '../types';
import { Logo } from './icons';
import { NATIONALITY_FLAG_MAP } from '../data/nationality-flag-map';

interface CardComponentProps {
    card: Card;
    isOwned?: boolean;
    count?: number;
    className?: string;
    onClick?: (card: Card) => void;
    displayMode?: 'full' | 'initials' | 'teamsheet' | 'draft_selection';
    isNew?: boolean;
}

const rarityStyles = {
    Common: { border: 'border-slate-500', text: 'text-slate-300', glow: '' },
    Rare: { border: 'border-blue-500', text: 'text-blue-400', glow: 'group-hover:animate-[rarity-glow-Rare_1s_ease-in-out_infinite_alternate]' },
    Epic: { border: 'border-purple-500', text: 'text-purple-300', glow: 'group-hover:animate-[rarity-glow-Epic_1s_ease-in-out_infinite_alternate]' },
    Legendary: { border: 'border-amber-400', text: 'text-amber-300', glow: 'group-hover:animate-[rarity-glow-Legendary_1s_ease-in-out_infinite_alternate]' },
};

const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const getLastName = (name: string): string => {
    const parts = name.split(' ');
    return parts[parts.length - 1];
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none'; // Hide the broken image icon
    target.onerror = null; // Prevent infinite loop if fallback also fails
};


export const CardComponent: React.FC<CardComponentProps> = ({ card, isOwned = true, count = 1, className = '', onClick, displayMode = 'full', isNew = false }) => {
    if (!isOwned && displayMode === 'full') {
        const style = rarityStyles[card.rarity] || rarityStyles.Common;
        return (
            <div 
                className={`group w-full rounded-xl overflow-hidden shadow-lg ${className} ${onClick ? 'cursor-pointer' : ''}`}
                onClick={onClick ? () => onClick(card) : undefined}
            >
                 <div className={`relative rounded-lg h-full flex flex-col justify-between overflow-hidden border-2 ${style.border} bg-slate-900 card-background-pattern`}>
                    <div className="relative h-48 bg-slate-900 flex items-center justify-center">
                        <span className="font-anton text-8xl text-slate-700 select-none">?</span>
                    </div>
                    <div className="p-4 -mt-16 relative z-10 text-white">
                         <div className="flex justify-between items-start gap-2">
                            <h3 className="font-anton text-xl tracking-wide leading-tight pr-2 h-14">???????</h3>
                             <div className={`px-2 py-0.5 border ${style.border} rounded-full text-xs font-bold uppercase tracking-wider ${style.text} whitespace-nowrap self-start mt-1`}>
                                {card.rarity}
                            </div>
                         </div>
                         <p className={`font-bold text-xs uppercase tracking-wider mb-2 ${style.text}`}>?????</p>
                         <p className="text-slate-300 text-xs h-10 overflow-hidden">This fact is locked. Find this card in packs to reveal it!</p>
                    </div>
                </div>
            </div>
        );
    }

    const style = rarityStyles[card.rarity] || rarityStyles.Common;
    const isLegendary = card.rarity === 'Legendary';
    const backgroundClass = isLegendary ? 'legendary-card-background' : 'card-background-pattern';

    const isPlayerOrManager = card.type === CardType.Player || card.type === CardType.Manager;
    const isCountryCard = card.type === CardType.Country;
    const flagUrl = isPlayerOrManager && card.nationality ? NATIONALITY_FLAG_MAP[card.nationality] : undefined;
    
    if (displayMode === 'teamsheet') {
        return (
             <div 
                className={`w-full h-full flex flex-col items-center justify-center cursor-pointer group gap-1`}
                onClick={onClick ? () => onClick(card) : undefined}
            >
                <div
                    className={`relative w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-slate-500 transition-transform group-hover:scale-110`}
                >
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-center"
                        style={flagUrl ? { backgroundImage: `url(${flagUrl})` } : { backgroundColor: '#334155' }}
                    >
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <span className="font-anton text-xl text-white z-10" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                            {getInitials(card.name)}
                        </span>
                    </div>
                     <div className={`absolute bottom-0 w-full bg-black/60 text-center py-0`}>
                         <p className={`font-bold text-[8px] uppercase tracking-wider text-slate-300`}>{card.position}</p>
                     </div>
                </div>
                 <div className="w-16 text-center">
                    <p className={`text-xs font-semibold text-white bg-slate-900/70 rounded-md px-1 py-0.5 truncate`}>
                        {getLastName(card.name)}
                    </p>
                </div>
            </div>
        );
    }
    
    if (displayMode === 'draft_selection') {
        const finalImageUrl = card.imageUrl
            ? `https://images.weserv.nl/?url=${encodeURIComponent(card.imageUrl)}&w=300&h=400&fit=cover&a=face`
            : undefined;

        return (
            <div 
                className={`group w-full rounded-xl overflow-hidden shadow-lg ${className} transform transition-transform hover:scale-105 cursor-pointer`}
                onClick={onClick ? () => onClick(card) : undefined}
            >
                <div className="relative rounded-lg h-full flex flex-col justify-between overflow-hidden border-2 border-slate-700 bg-slate-800 card-background-pattern">
                    <div className="relative h-48 bg-slate-900">
                        {finalImageUrl ? (
                            <img 
                                src={finalImageUrl}
                                alt={card.name} 
                                className="w-full h-full object-cover" 
                                loading="lazy"
                                onError={handleImageError}
                            />
                        ) : (
                            <div
                                className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
                                style={flagUrl ? { backgroundImage: `url(${flagUrl})` } : {}}
                            >
                                <span className="font-anton text-7xl text-white/90" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
                                    {getInitials(card.name)}
                                </span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/50 to-transparent"></div>
                    </div>
                    <div className="p-3 -mt-16 relative z-10 text-white">
                        <h3 className="font-anton text-lg tracking-wide leading-tight truncate">{card.name}</h3>
                    </div>
                </div>
            </div>
        );
    }


    const finalImageUrl = card.imageUrl
        ? isCountryCard
            ? card.imageUrl
            : `https://images.weserv.nl/?url=${encodeURIComponent(card.imageUrl)}&w=300&h=400&fit=cover&a=face`
        : undefined;

    return (
        <div 
            className={`group w-full rounded-xl overflow-hidden shadow-lg ${className} transform transition-transform hover:scale-105 ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick ? () => onClick(card) : undefined}
        >
             <div className={`relative rounded-lg h-full flex flex-col justify-between overflow-hidden border-2 ${style.border} bg-slate-800 ${backgroundClass} ${!isOwned ? '' : style.glow}`}>
                
                {/* Shimmer for Legendary cards */}
                {isLegendary && isOwned && (
                    <div className="absolute inset-0 overflow-hidden rounded-lg shimmer-overlay"></div>
                )}
                
                {isNew && (
                    <div className="absolute top-2 left-2 bg-yellow-400 text-slate-900 font-bold text-xs uppercase px-2 py-0.5 rounded-full z-10 shadow-md transform -rotate-12">
                        New!
                    </div>
                )}
                
                {isOwned && count > 1 && !isNew && (
                    <div className="absolute top-2 right-2 bg-amber-500 text-slate-900 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center z-10 shadow-md">
                        x{count}
                    </div>
                )}
                
                {/* Image Section */}
                <div className="relative h-48 bg-slate-900">
                     {displayMode === 'initials' && isPlayerOrManager ? (
                        <div
                            className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
                            style={flagUrl ? { backgroundImage: `url(${flagUrl})` } : {}}
                        >
                            <span className="font-anton text-7xl text-white/90" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
                                {getInitials(card.name)}
                            </span>
                        </div>
                    ) : isPlayerOrManager && flagUrl ? (
                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${flagUrl})` }}
                        >
                           <Logo className="absolute top-2 right-2 w-16 h-16 text-white/10" />
                        </div>
                    ) : finalImageUrl ? (
                        <>
                            <img 
                                src={finalImageUrl}
                                alt={card.name} 
                                className={`w-full h-full ${isCountryCard ? 'object-contain p-4' : 'object-cover'}`} 
                                loading="lazy"
                                onError={handleImageError}
                            />
                            <Logo className="absolute top-2 right-2 w-16 h-16 text-black/10" />
                        </>
                    ) : (
                        <Logo className="absolute top-2 right-2 w-16 h-16 text-white/10" />
                    )}
                    {/* Gradient overlay for text section to blend */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/50 to-transparent"></div>
                </div>

                {/* Text Section pulled up over the image */}
                <div className="p-4 -mt-16 relative z-10 text-white">
                     <div className="flex justify-between items-start gap-2">
                        {displayMode === 'initials' ? (
                            <h3 className="font-anton text-xl tracking-wide leading-tight pr-2 h-14">???</h3>
                        ) : (
                            <h3 className="font-anton text-xl tracking-wide leading-tight pr-2 h-14" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>{card.name}</h3>
                        )}
                         <div className={`px-2 py-0.5 border ${style.border} rounded-full text-xs font-bold uppercase tracking-wider ${style.text} whitespace-nowrap self-start mt-1`}>
                            {card.rarity}
                        </div>
                     </div>
                     <p className={`font-bold text-xs uppercase tracking-wider mb-2 ${style.text}`}>{card.type}</p>
                     <p className="text-slate-300 text-xs h-10 overflow-hidden">{displayMode === 'initials' ? 'This player\'s identity is hidden until you draft them.' : card.description}</p>
                </div>
            </div>
        </div>
    );
};
