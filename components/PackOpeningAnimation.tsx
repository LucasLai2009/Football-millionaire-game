import React, { useState, useEffect, useMemo } from 'react';
import { Card } from '../types';
import { PackDefinition, OpenedCard } from './ShopScreen';
import { CardComponent } from './CardComponent';

const rarityOrder: Record<Card['rarity'], number> = { 'Common': 0, 'Rare': 1, 'Epic': 2, 'Legendary': 3 };

type AnimationStep = 'idle' | 'opening' | 'revealing';

const PackOpeningAnimation: React.FC<{ pack: PackDefinition; cardsToReveal: OpenedCard[]; onComplete: () => void; }> = ({ pack, cardsToReveal, onComplete }) => {
    const [step, setStep] = useState<AnimationStep>('idle');
    const [revealedCount, setRevealedCount] = useState(0);

    const sortedCards = useMemo(() => {
        // Sort common to legendary for suspenseful reveal
        return [...cardsToReveal].sort((a, b) => rarityOrder[a.card.rarity] - rarityOrder[b.card.rarity]);
    }, [cardsToReveal]);

    const glowClass = useMemo(() => {
        switch (pack.rarity) {
            case 'Bronze': return 'animate-pack-glow-Bronze';
            case 'Silver': return 'animate-pack-glow-Silver';
            case 'Rare': return 'animate-pack-glow-Rare';
            case 'Epic': return 'animate-pack-glow-Epic';
            case 'Legendary': return 'animate-pack-glow-Legendary';
            default: return '';
        }
    }, [pack.rarity]);
    
    const handlePackClick = () => {
        if (step === 'idle') {
            setStep('opening');
        }
    };

    useEffect(() => {
        let revealTimeout: number | undefined;
        let completeTimeout: number | undefined;

        if (step === 'opening') {
            // After the pack tear animation (1s), start revealing cards
            revealTimeout = window.setTimeout(() => setStep('revealing'), 1000);
        } else if (step === 'revealing' && revealedCount < sortedCards.length) {
            // Reveal cards one by one
            revealTimeout = window.setTimeout(() => {
                setRevealedCount(prev => prev + 1);
            }, 400); // Stagger the reveal of each card
        } else if (step === 'revealing' && revealedCount === sortedCards.length) {
            // All cards revealed, wait a bit then complete
            completeTimeout = window.setTimeout(() => {
                onComplete();
            }, 3000);
        }

        return () => {
            clearTimeout(revealTimeout);
            clearTimeout(completeTimeout);
        };
    }, [step, onComplete, sortedCards.length, revealedCount]);
    
    const packAnimationClass = step === 'idle' ? 'animate-pack-idle-pulse' : 'animate-pack-tear-open';

    const PackFront = () => (
        <div 
            onClick={handlePackClick}
            className={`relative w-64 h-96 cursor-pointer transition-all duration-300 ${glowClass} ${packAnimationClass}`}
        >
             {/* Base Layer */}
            <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${pack.color} shadow-2xl`}></div>
            {/* Trim */}
            <div className="absolute top-4 bottom-4 left-3 right-3 border-2 border-white/50 rounded-xl"></div>
            {/* Centerpiece */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <p className="font-anton text-4xl text-white tracking-widest uppercase" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>{pack.rarity}</p>
                <p className="font-semibold text-white/80">PACK</p>
            </div>
             {/* Holographic Shine */}
             <div className="absolute inset-0 rounded-2xl overflow-hidden mix-blend-color-dodge">
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/30 via-transparent to-white/30" style={{ animation: 'rotate 10s infinite linear' }}></div>
            </div>
             {step === 'idle' &&
                <div className="absolute bottom-6 w-full text-center">
                    <p className="font-anton text-2xl text-white/80 animate-pulse tracking-wider uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Tap to open</p>
                </div>
            }
        </div>
    );
    
    return (
        <div className="w-full h-full fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center overflow-hidden">
            
            <div className="relative w-full h-full flex items-center justify-center">
                {step !== 'revealing' && <PackFront />}
                
                {/* Revealed Cards Area */}
                <div className={`absolute w-full max-w-7xl flex justify-center items-center flex-wrap gap-4 px-4`}>
                    {sortedCards.slice(0, revealedCount).map((openedCard, index) => (
                        <div 
                            key={openedCard.card.id + index} 
                            className="w-44 animate-card-reveal"
                        >
                            <CardComponent card={openedCard.card} isNew={openedCard.isNew} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackOpeningAnimation;