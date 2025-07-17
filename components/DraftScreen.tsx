

import React, { useState, useMemo, useEffect } from 'react';
import { Formation, PlayerPosition, Card, DraftedPlayer } from '../types';
import { FORMATION_DATABASE } from '../data/formation-database';
import { ALL_CARDS } from '../data/card-database';
import { DRAFTABLE_PLAYER_IDS } from '../data/player-question-database';
import { CardComponent } from './CardComponent';
import { BackIcon } from './icons';

// Helper to get random items from an array
const getRandomItems = <T,>(arr: T[], num: number): T[] => {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, num);
};

const FormationPitch = ({ formation, squad, onPositionClick }: {
    formation: Formation,
    squad: (DraftedPlayer | null)[],
    onPositionClick: (index: number) => void
}) => {

    const getLayout = () => {
        // Defines the visual layout for each formation. Each inner array is a row on the pitch.
        // The numbers correspond to the index in the formation.positions array.
        switch (formation.name) {
            case '4-4-2':
                return [[10, 9], [8, 7, 6, 5], [4, 3, 2, 1], [0]];
            case '4-3-3':
                return [[10, 9, 8], [7, 6, 5], [4, 3, 2, 1], [0]];
            case '3-5-2':
                return [[10, 9], [8, 7, 6, 5, 4], [3, 2, 1], [0]];
            case '4-2-3-1':
                // GK, 4D, 2DM, 3AM, 1F
                return [[10], [9, 8, 7], [6, 5], [4, 3, 2, 1], [0]];
            case '5-3-2':
                return [[10, 9], [8, 7, 6], [5, 4, 3, 2, 1], [0]];
            case '4-1-2-1-2 (Diamond)':
                // GK, 4D, 1DM, 2CM, 1AM, 2F
                return [[10, 9], [8], [7, 6], [5], [4, 3, 2, 1], [0]];
            case '3-4-3':
                return [[10, 9, 8], [7, 6, 5, 4], [3, 2, 1], [0]];
            default:
                // Default to a 4-4-2 layout if unknown
                return [[10, 9], [8, 7, 6, 5], [4, 3, 2, 1], [0]];
        }
    };

    const layout = getLayout();

    const renderLine = (lineIndices: number[]) => (
        <div className="flex justify-center items-center gap-1 sm:gap-2 w-full my-4 z-10 flex-nowrap">
            {lineIndices.map((slotIndex) => {
                const player = squad[slotIndex];
                return (
                    <div key={slotIndex} className="flex flex-col items-center justify-center gap-1 w-20 h-24" onClick={() => onPositionClick(slotIndex)}>
                        {player ? (
                             <CardComponent card={player.card} displayMode="teamsheet" />
                        ) : (
                            <div className="w-14 h-14 rounded-full border-2 border-dashed border-slate-400/50 bg-slate-800/20 flex flex-col items-center justify-center cursor-pointer hover:border-amber-400 hover:bg-slate-700/50 transition-colors">
                                <span className="text-2xl font-bold text-slate-400/50">+</span>
                                <span className="text-[10px] text-slate-400/70 mt-1">{formation.positions[slotIndex]}</span>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div 
            className="w-full max-w-lg p-4 bg-green-800 border-4 border-green-600/50 rounded-lg relative overflow-hidden"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%),
                    repeating-linear-gradient(to bottom, #047857, #047857 50px, #059669 50px, #059669 100px)
                `
            }}
        >
             {/* Pitch markings */}
            <div className="absolute inset-4 border-2 border-white/20 rounded-md"></div>
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-4 w-24 h-48 border-2 border-l-0 border-white/20 rounded-r-md"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 w-24 h-48 border-2 border-r-0 border-white/20 rounded-l-md"></div>

            <div className="flex flex-col relative">
                {layout.map((line, index) => (
                    <div key={index}>
                        {renderLine(line)}
                    </div>
                ))}
            </div>
        </div>
    );
};


const PlayerSelection = ({ options, onSelect, position }: {
    options: Card[],
    onSelect: (card: Card) => void,
    position: PlayerPosition
}) => {
    if (options.length === 0) {
        return (
             <div className="w-full text-center animate-fade-in">
                <h1 className="font-anton text-5xl mb-2">No Players Available</h1>
                <p className="text-slate-400 mb-6">There are no players available for the {position} position.</p>
                <p className="text-amber-400 mt-2 animate-pulse">Returning to squad...</p>
            </div>
        )
    }

    return (
        <div className="w-full text-center animate-fade-in">
            <h1 className="font-anton text-5xl mb-2">Choose a {position}</h1>
            <p className="text-slate-400 mb-6">Select one of these five players to add to your squad.</p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {options.map(card => (
                    <div key={card.id} onClick={() => onSelect(card)}>
                        <CardComponent card={card} displayMode="draft_selection" />
                    </div>
                ))}
            </div>
        </div>
    );
};


interface DraftScreenProps {
    onDraftComplete: (team: DraftedPlayer[]) => void;
    onBack: () => void;
}

export const DraftScreen: React.FC<DraftScreenProps> = ({ onDraftComplete, onBack }) => {
    const [step, setStep] = useState<'formation' | 'picking'>('formation');
    const [formation, setFormation] = useState<Formation | null>(null);
    const [squad, setSquad] = useState<(DraftedPlayer | null)[]>([]);
    const [pickingForSlot, setPickingForSlot] = useState<number | null>(null);

    const formations = FORMATION_DATABASE;
    
    const playerPools = useMemo(() => {
        const pools: Record<PlayerPosition, Card[]> = { Goalkeeper: [], Defender: [], Midfielder: [], Forward: [] };
        const draftableCards = ALL_CARDS.filter(c => DRAFTABLE_PLAYER_IDS.includes(c.id));
        draftableCards.forEach(card => {
            if (card.position && pools[card.position]) {
                pools[card.position].push(card);
            }
        });
        return pools;
    }, []);

    const currentPickOptions = useMemo(() => {
        if (pickingForSlot === null || !formation) return [];
        const positionToPick = formation.positions[pickingForSlot];
        const draftedIds = squad.map(p => p?.card.id).filter(Boolean);
        const availablePlayers = playerPools[positionToPick].filter(p => !draftedIds.includes(p.id));
        return getRandomItems(availablePlayers, 5);
    }, [pickingForSlot, formation, playerPools, squad]);
    
    useEffect(() => {
        if (pickingForSlot !== null && currentPickOptions.length === 0) {
            const timer = setTimeout(() => {
                setPickingForSlot(null); // Go back to squad view automatically
            }, 2000); // After 2 seconds to let user read the message
            return () => clearTimeout(timer);
        }
    }, [pickingForSlot, currentPickOptions]);

    const selectFormation = (f: Formation) => {
        setFormation(f);
        setSquad(Array(f.positions.length).fill(null));
        setStep('picking');
    };

    const handlePositionClick = (slotIndex: number) => {
        if (squad[slotIndex] === null) {
            setPickingForSlot(slotIndex);
        }
    };

    const selectPlayer = (card: Card) => {
        if (pickingForSlot === null || !formation || !card.position) return;
        
        const newSquad = [...squad];
        newSquad[pickingForSlot] = { position: card.position, card, key: `${pickingForSlot}-${card.id}` };
        setSquad(newSquad);
        
        const isComplete = newSquad.every(p => p !== null);
        if (isComplete) {
            onDraftComplete(newSquad as DraftedPlayer[]);
        } else {
            setPickingForSlot(null);
        }
    };
    
    if (step === 'formation') {
        return (
            <div className="w-full text-center animate-fade-in">
                <button onClick={onBack} className="absolute top-4 left-4 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-10">
                    <BackIcon className="w-6 h-6" />
                    <span>Back to Modes</span>
                </button>
                <h1 className="font-anton text-5xl mb-4">Choose Your Formation</h1>
                <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Select one of the formations below. This will determine the positions you need to fill to build your draft squad.</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {formations.map(f => (
                        <button key={f.name} onClick={() => selectFormation(f)} className="p-8 bg-slate-800 rounded-lg border-2 border-slate-700 hover:bg-slate-700 hover:border-amber-400 transition-colors w-48 h-32 flex items-center justify-center">
                            <p className="font-anton text-4xl">{f.name}</p>
                        </button>
                    ))}
                </div>
            </div>
        );
    }
    
    const filledSlots = squad.filter(p => p !== null).length;
    const totalSlots = squad.length;

    return (
        <div className="w-full flex flex-col items-center animate-fade-in">
             <button onClick={onBack} className={`absolute top-4 right-4 flex items-center gap-2 text-slate-400 hover:text-white transition-colors z-10 ${pickingForSlot !== null ? 'hidden' : ''}`}>
                <span>Start Over</span>
            </button>

            {pickingForSlot !== null ? (
                <PlayerSelection
                    options={currentPickOptions}
                    onSelect={selectPlayer}
                    position={formation!.positions[pickingForSlot]}
                />
            ) : (
                <>
                    <h1 className="font-anton text-5xl mb-2">Build Your Squad ({formation?.name})</h1>
                    <p className="text-slate-400 mb-6">
                        {filledSlots} / {totalSlots} Players Drafted. Click an empty position to pick a player.
                    </p>
                    <FormationPitch
                        formation={formation!}
                        squad={squad}
                        onPositionClick={handlePositionClick}
                    />
                </>
            )}
        </div>
    );
};