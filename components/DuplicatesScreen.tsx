

import React, { useState, useMemo } from 'react';
import { Card, Collection } from '../types';
import { BackIcon, DuplicatesIcon } from './icons';
import { CardComponent } from './CardComponent';

interface DuplicatesScreenProps {
    collection: Collection;
    allCards: Card[];
    onBack: () => void;
    onExchange: (cardsToSpend: Card[], cardToReceive: Card) => void;
}

const EXCHANGE_RATES: Record<Card['rarity'], { from: Card['rarity'], count: number } | null> = {
    'Common': null,
    'Rare': { from: 'Common', count: 10 },
    'Epic': { from: 'Rare', count: 10 },
    'Legendary': { from: 'Epic', count: 10 },
};

interface DuplicateInfo {
    card: Card;
    count: number; // Number of duplicates (owned - 1)
}


export const DuplicatesScreen: React.FC<DuplicatesScreenProps> = ({ collection, allCards, onBack, onExchange }) => {
    const [newlyReceivedCard, setNewlyReceivedCard] = useState<Card | null>(null);

    const duplicates = useMemo(() => {
        const dupes: Record<Card['rarity'], DuplicateInfo[]> = { Common: [], Rare: [], Epic: [], Legendary: [] };
        Object.entries(collection).forEach(([cardId, count]) => {
            if (count > 1) {
                const card = allCards.find(c => c.id === cardId);
                if (card) {
                    dupes[card.rarity].push({ card, count: count - 1 });
                }
            }
        });
        return dupes;
    }, [collection, allCards]);

    const handleExchangeClick = (targetRarity: 'Rare' | 'Epic' | 'Legendary') => {
        const rule = EXCHANGE_RATES[targetRarity];
        if (!rule) return;

        const availableDuplicateInfos = duplicates[rule.from];
        const totalAvailable = availableDuplicateInfos.reduce((sum, info) => sum + info.count, 0);

        if (totalAvailable < rule.count) {
            // Not enough duplicates
            return;
        }

        const cardsToSpend: Card[] = [];
        let needed = rule.count;
        for (const dupeInfo of availableDuplicateInfos) {
            const canTake = Math.min(needed, dupeInfo.count);
            for (let i = 0; i < canTake; i++) {
                cardsToSpend.push(dupeInfo.card);
            }
            needed -= canTake;
            if (needed <= 0) break;
        }
        
        // Find a new card to receive
        const potentialCards = allCards.filter(c => c.rarity === targetRarity && !collection[c.id]);
        let cardToReceive: Card | null = null;
        
        if (potentialCards.length > 0) {
            cardToReceive = potentialCards[Math.floor(Math.random() * potentialCards.length)];
        } else {
            // If user has all cards of that rarity, give a random one as a duplicate
            const allTargetRarityCards = allCards.filter(c => c.rarity === targetRarity);
            if (allTargetRarityCards.length > 0) {
                cardToReceive = allTargetRarityCards[Math.floor(Math.random() * allTargetRarityCards.length)];
            }
        }
        
        if (cardToReceive) {
            onExchange(cardsToSpend, cardToReceive);
            setNewlyReceivedCard(cardToReceive);
            setTimeout(() => setNewlyReceivedCard(null), 3000);
        }
    };

    return (
        <div className="w-full relative p-4 animate-fade-in">
            <button onClick={onBack} className="absolute top-4 left-4 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-10">
                <BackIcon className="w-6 h-6" />
                <span>Back to Menu</span>
            </button>
            <div className="mt-16 flex flex-col items-center w-full">
                <DuplicatesIcon className="w-24 h-24 mb-4 text-amber-300"/>
                <h1 className="font-anton text-6xl text-white tracking-wider uppercase">DUPLICATE EXCHANGE</h1>
                <p className="text-slate-400 mb-8">Trade your duplicate cards for a chance to unlock new facts!</p>
                
                {newlyReceivedCard && (
                    <div className="mb-8 p-4 bg-green-900/50 border border-green-500 rounded-lg flex flex-col items-center gap-4 w-full max-w-md animate-fade-in">
                        <p className="text-green-300 font-bold text-lg">Success! You crafted a new card:</p>
                         <div className="w-48">
                            <CardComponent card={newlyReceivedCard} />
                        </div>
                    </div>
                )}
                
                <div className="w-full max-w-4xl space-y-8">
                    {Object.entries(EXCHANGE_RATES).map(([rarity, rule]) => {
                        if (!rule) return null;
                        const targetRarity = rarity as 'Rare' | 'Epic' | 'Legendary';
                        const availableCount = duplicates[rule.from].reduce((sum, info) => sum + info.count, 0);
                        const canExchange = availableCount >= rule.count;

                        return (
                            <div key={targetRarity} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center sm:text-left">
                                <h2 className="text-2xl font-bold mb-4">Craft a <span className={`rarity-text-${targetRarity}`}>{targetRarity}</span> Card</h2>
                                <p className="text-slate-400 mb-4">Exchange {rule.count} {rule.from} duplicates for 1 random {targetRarity} card.</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
                                    <button
                                        onClick={() => handleExchangeClick(targetRarity)}
                                        disabled={!canExchange}
                                        className="font-bold py-2 px-6 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Exchange
                                    </button>
                                    <p className={`font-semibold ${canExchange ? 'text-green-400' : 'text-red-400'}`}>
                                        You have {availableCount} / {rule.count} needed {rule.from} duplicates.
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="w-full mt-12">
                    <h2 className="font-anton text-4xl text-center mb-6">Your Duplicates</h2>
                     {Object.entries(duplicates).map(([rarity, dupeInfos]) => {
                        const totalDuplicatesInRarity = dupeInfos.reduce((sum, info) => sum + info.count, 0);
                        return dupeInfos.length > 0 && (
                            <div key={rarity} className="mb-8">
                                <h3 className={`text-2xl font-bold border-b-2 border-slate-700 pb-2 mb-4 rarity-text-${rarity}`}>{rarity} ({totalDuplicatesInRarity})</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {dupeInfos.map(({ card, count }) => (
                                        <CardComponent 
                                            key={card.id} 
                                            card={card} 
                                            count={count}
                                        />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                    {Object.values(duplicates).every(arr => arr.length === 0) && (
                        <p className="text-center text-slate-400 text-lg">You don't have any duplicates right now. Open some packs to unlock more cards!</p>
                    )}
                </div>

            </div>
        </div>
    );
};
