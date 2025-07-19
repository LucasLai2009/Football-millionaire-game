

import React, { useState, useRef, useEffect } from 'react';
import { Card, Collection } from '../types';
import { ALL_CARDS } from '../data/card-database';
import PackOpeningAnimation from './PackOpeningAnimation';
import { CardComponent } from './CardComponent';
import { BackIcon } from './icons';

interface ShopScreenProps {
    balance: number;
    collection: Collection;
    onPurchase: (cost: number, cards: Card[]) => void;
    onBack: () => void;
    onCardClick: (card: Card) => void;
}

type ShopView = 'packs' | 'opening' | 'results';

export interface PackDefinition {
    name: string;
    cost: number;
    description: string;
    contents: {
        total: number;
        guaranteed: {
            rarity: 'Rare' | 'Epic' | 'Legendary';
            count: number;
        } | null;
    };
    color: string;
    rarity: Card['rarity'] | 'Bronze' | 'Silver';
}

export interface OpenedCard {
    card: Card;
    isNew: boolean;
}

const PACKS: PackDefinition[] = [
    { name: 'Bronze Pack', cost: 300000, description: '3 cards. Mostly common, with a small chance for better.', contents: { total: 3, guaranteed: null }, color: 'from-orange-900 to-orange-700', rarity: 'Bronze'},
    { name: 'Silver Pack', cost: 500000, description: '5 cards. Increased chance for Rare cards.', contents: { total: 5, guaranteed: null }, color: 'from-slate-600 to-slate-500', rarity: 'Silver' },
    { name: 'Gold Pack', cost: 700000, description: '7 cards, with at least one guaranteed Rare or better.', contents: { total: 7, guaranteed: { rarity: 'Rare', count: 1 } }, color: 'from-amber-500 to-amber-400', rarity: 'Rare' },
    { name: 'Platinum Pack', cost: 800000, description: '8 cards, including at least two Rare cards or better.', contents: { total: 8, guaranteed: { rarity: 'Rare', count: 2 } }, color: 'from-purple-700 to-purple-500', rarity: 'Epic' },
    { name: 'Ultimate Pack', cost: 1000000, description: '10 cards, all guaranteed to be Rare or better!', contents: { total: 10, guaranteed: { rarity: 'Rare', count: 10 } }, color: 'from-sky-700 to-sky-500', rarity: 'Legendary' },
];

const pullCard = (rarity: Card['rarity'], currentPackCards: Card[]): Card | null => {
    const pool = ALL_CARDS.filter(c => c.rarity === rarity && !currentPackCards.some(pc => pc.id === c.id));
    if (pool.length === 0) {
        // Failsafe: if no unique cards of that rarity are left for this pack, try any card of that rarity
        const anyPool = ALL_CARDS.filter(c => c.rarity === rarity);
        if (anyPool.length === 0) return null;
        return anyPool[Math.floor(Math.random() * anyPool.length)];
    };
    return pool[Math.floor(Math.random() * pool.length)];
};


const openPack = (pack: PackDefinition): Card[] => {
    const newCards: Card[] = [];

    const pullGuaranteedCard = (minRarity: Card['rarity']) => {
        const rand = Math.random();
        let desiredRarities: Card['rarity'][] = [];

        if (minRarity === 'Legendary') {
            desiredRarities = ['Legendary', 'Epic', 'Rare', 'Common'];
        } else if (minRarity === 'Epic') {
            desiredRarities = rand > 0.9 ? ['Legendary', 'Epic', 'Rare', 'Common'] : ['Epic', 'Rare', 'Common'];
        } else { // Rare
            if (rand > 0.99) desiredRarities = ['Legendary', 'Epic', 'Rare', 'Common'];
            else if (rand > 0.9) desiredRarities = ['Epic', 'Rare', 'Common'];
            else desiredRarities = ['Rare', 'Common'];
        }

        for (const r of desiredRarities) {
            const card = pullCard(r, newCards);
            if (card) return card;
        }
        return null;
    };
    
    // Simplified logic for Ultimate pack
    if (pack.name === 'Ultimate Pack') {
        while (newCards.length < pack.contents.total) {
            const rand = Math.random();
            let rarity: 'Legendary' | 'Epic' | 'Rare' = 'Rare';
            if(rand < 0.05) rarity = 'Legendary';
            else if (rand < 0.20) rarity = 'Epic';
            
            const card = pullCard(rarity, newCards);
            if(card) newCards.push(card);
            else break; // Should not happen if pools are sufficient
        }
        return newCards;
    }


    if (pack.contents.guaranteed) {
        for (let i = 0; i < pack.contents.guaranteed.count; i++) {
            const card = pullGuaranteedCard(pack.contents.guaranteed.rarity);
            if (card) newCards.push(card);
        }
    }

    const odds = {
        'Bronze Pack': { leg: 0.005, epi: 0.02, rar: 0.1 },
        'Silver Pack': { leg: 0.01, epi: 0.05, rar: 0.25 },
        'Gold Pack':   { leg: 0.02, epi: 0.1, rar: 0.4 },
        'Platinum Pack': { leg: 0.04, epi: 0.15, rar: 0.5 },
    }[pack.name] || { leg: 0.001, epi: 0.01, rar: 0.1 };

    while (newCards.length < pack.contents.total) {
        const rand = Math.random();
        let rarity: Card['rarity'] = 'Common';

        if (rand < odds.leg) rarity = 'Legendary';
        else if (rand < odds.leg + odds.epi) rarity = 'Epic';
        else if (rand < odds.leg + odds.epi + odds.rar) rarity = 'Rare';
        
        const card = pullCard(rarity, newCards);
        if (card) newCards.push(card);
        else break; // Failsafe
    }

    return newCards;
};

const ShopScreen: React.FC<ShopScreenProps> = ({ balance, collection, onPurchase, onBack, onCardClick }) => {
    const [view, setView] = useState<ShopView>('packs');
    const [openedPack, setOpenedPack] = useState<PackDefinition | null>(null);
    const [revealedCards, setRevealedCards] = useState<OpenedCard[]>([]);
    const [error, setError] = useState<string | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (view !== 'results' || !scrollContainerRef.current) return;
    
        const element = scrollContainerRef.current;
        const hasOverflow = element.scrollWidth > element.clientWidth;

        if (!hasOverflow) return;

        // Give a moment for cards to render and then start scrolling
        const scrollToEnd = setTimeout(() => {
            element.scrollTo({
                left: element.scrollWidth - element.clientWidth,
                behavior: 'smooth'
            });
        }, 1500);

        const scrollToStart = setTimeout(() => {
            element.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }, 5000);

        return () => {
            clearTimeout(scrollToEnd);
            clearTimeout(scrollToStart);
        };
    }, [view, revealedCards]);

    const handleBuyPack = (pack: PackDefinition) => {
        if (balance < pack.cost) {
            setError("Not enough funds!");
            setTimeout(() => setError(null), 3000);
            return;
        }

        const newCards = openPack(pack);
        
        // Determine which cards are new BEFORE updating the main state
        const openedCardData = newCards.map(c => ({
            card: c,
            isNew: !collection[c.id] || collection[c.id] === 0,
        }));

        if (newCards.length > 0) {
            setRevealedCards(openedCardData);
            setOpenedPack(pack);
            setView('opening');
            onPurchase(pack.cost, newCards);
        } else {
            setError("Could not generate cards. You might own them all!");
            setTimeout(() => setError(null), 3000);
        }
    };

    const getPackRarityColor = (packName: string) => {
        if (packName.includes('Ultimate')) return 'text-sky-400';
        if (packName.includes('Platinum')) return 'text-purple-400';
        if (packName.includes('Gold')) return 'text-amber-400';
        if (packName.includes('Silver')) return 'text-slate-300';
        return 'text-orange-400';
    };

    const renderPacks = () => (
        <div className="text-center flex flex-col items-center">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-wrap justify-center items-stretch gap-6 w-full max-w-7xl">
                {PACKS.map(pack => (
                    <div key={pack.name} className={`w-full max-w-xs bg-slate-800 rounded-xl p-6 border-2 border-slate-700 flex flex-col justify-between`}>
                        <div className="flex-grow">
                            <h3 className={`font-anton text-3xl ${getPackRarityColor(pack.name)}`}>{pack.name}</h3>
                            <p className="text-slate-400 mb-4 h-12">{pack.description}</p>
                        </div>
                        <div className="text-center mt-4">
                            <p className="font-anton text-4xl text-white mb-6">${pack.cost.toLocaleString()}</p>
                            <button
                                onClick={() => handleBuyPack(pack)}
                                disabled={balance < pack.cost}
                                className={`font-anton text-2xl bg-gradient-to-br ${pack.color} hover:brightness-110 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:from-slate-700 disabled:to-slate-600 disabled:cursor-not-allowed`}
                            >
                                BUY NOW
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-full min-h-screen p-8 relative">
            <button 
                onClick={onBack} 
                className="absolute top-4 left-4 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-30"
            >
                <BackIcon className="w-6 h-6" />
                <span>Back to Menu</span>
            </button>

            <div className="pt-12">
                {view === 'packs' && renderPacks()}

                {view === 'opening' && openedPack && (
                    <PackOpeningAnimation 
                        pack={openedPack}
                        cardsToReveal={revealedCards}
                        onComplete={() => setView('results')} 
                    />
                )}

                {view === 'results' && (
                    <div className="text-center animate-fade-in">
                        <h2 className="text-white font-bold text-3xl mb-6">Facts Unlocked!</h2>
                        <div ref={scrollContainerRef} className="flex flex-nowrap overflow-x-auto gap-6 py-4 scrollbar-hide -mx-8 px-8">
                            {revealedCards.map(openedCard => (
                                <div key={openedCard.card.id} className="w-52 flex-shrink-0">
                                    <CardComponent
                                        card={openedCard.card}
                                        isOwned={true} // They are owned now
                                        count={collection[openedCard.card.id] || 1}
                                        isNew={openedCard.isNew}
                                        onClick={() => onCardClick(openedCard.card)}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setView('packs')}
                            className="mt-8 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600"
                        >
                            Back to Shop
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopScreen;