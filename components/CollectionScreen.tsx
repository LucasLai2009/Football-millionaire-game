
import React, { useState, useMemo } from 'react';
import { Card, CardType, Collection } from '../types';
import { CardComponent } from './CardComponent';
import { BackIcon, CollectionIcon, SearchIcon } from './icons';

interface CollectionScreenProps {
    allCards: Card[];
    collection: Collection;
    acquiredOrder: string[];
    onBack: () => void;
    onCardClick: (card: Card) => void;
}

const rarityOrder: Record<Card['rarity'], number> = {
    'Common': 1,
    'Rare': 2,
    'Epic': 3,
    'Legendary': 4,
};

const getLastName = (name: string): string => {
    const parts = name.split(' ');
    return parts[parts.length - 1];
};


const CollectionScreen: React.FC<CollectionScreenProps> = ({ allCards, collection, acquiredOrder, onBack, onCardClick }) => {
    const [typeFilter, setTypeFilter] = useState<'All' | CardType>('All');
    const [rarityFilter, setRarityFilter] = useState<'All' | Card['rarity']>('All');
    const [sortBy, setSortBy] = useState<'recent' | 'rarity' | 'name'>('recent');
    const [showOwnedOnly, setShowOwnedOnly] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const uniqueDisplayCards = useMemo(() => {
        // Create a de-duplicated list of cards by ID. This ensures each unique
        // card from the database is represented once, allowing users to see all
        // variations of players they've collected (e.g., both a Common and Rare version).
        const uniqueById = Array.from(new Map(allCards.map(card => [card.id, card])).values());
        return uniqueById;
    }, [allCards]);


    const ownedCount = uniqueDisplayCards.filter(c => collection[c.id] > 0).length;
    const totalCount = uniqueDisplayCards.length;
    const completionPercentage = totalCount > 0 ? Math.round((ownedCount / totalCount) * 100) : 0;
    
    const cardsToDisplay = useMemo(() => {
        const filtered = uniqueDisplayCards.filter(card => {
            const isOwned = collection[card.id] > 0;
            // Search filter
            const nameMatch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
            if (searchTerm && !nameMatch) return false;
            // Type filter
            const typeMatch = typeFilter === 'All' || card.type === typeFilter;
            if (!typeMatch) return false;
            // Rarity filter
            const rarityMatch = rarityFilter === 'All' || card.rarity === rarityFilter;
            if (!rarityMatch) return false;
            // Owned filter
            const ownedMatch = !showOwnedOnly || isOwned;
            if (!ownedMatch) return false;
            
            return true;
        });

        return filtered.sort((a, b) => {
            if (sortBy === 'recent') {
                const indexA = acquiredOrder.indexOf(a.id);
                const indexB = acquiredOrder.indexOf(b.id);
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            }
            if (sortBy === 'name') {
                return getLastName(a.name).localeCompare(getLastName(b.name));
            }
            // Default sort: by rarity descending
            const rarityAValue = rarityOrder[a.rarity];
            const rarityBValue = rarityOrder[b.rarity];
            if (rarityAValue !== rarityBValue) {
                return rarityBValue - rarityAValue;
            }
            // Secondary sort: alphabetical
            return a.name.localeCompare(b.name);
        });

    }, [uniqueDisplayCards, collection, searchTerm, typeFilter, rarityFilter, showOwnedOnly, sortBy, acquiredOrder]);
        
    const typeFilters: ('All' | CardType)[] = ['All', CardType.Player, CardType.Team, CardType.Country, CardType.Manager];
    const rarityFilters: ('All' | Card['rarity'])[] = ['All', 'Common', 'Rare', 'Epic', 'Legendary'];

    return (
        <div className="w-full relative p-4">
             <button onClick={onBack} className="absolute top-4 left-4 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-10">
                <BackIcon className="w-6 h-6" />
                <span>Back to Menu</span>
            </button>
            <div className="mt-16 flex flex-col items-center w-full">
                 <CollectionIcon className="w-24 h-24 mb-4 text-amber-300"/>
                 <h1 className="font-anton text-6xl text-white tracking-wider uppercase">MY COLLECTION</h1>
                 <div className="w-full max-w-md my-4">
                    <p className="text-center text-lg text-amber-300">{ownedCount} / {totalCount} Facts Unlocked ({completionPercentage}%)</p>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 mt-1">
                        <div className="bg-amber-400 h-2.5 rounded-full" style={{width: `${completionPercentage}%`}}></div>
                    </div>
                 </div>

                 <div className="flex flex-col items-center justify-center gap-4 my-8 w-full max-w-4xl">
                    {/* Search Input */}
                    <div className="relative w-full max-w-lg">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-slate-800 border-2 border-slate-700 rounded-full py-2 pl-11 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                            aria-label="Search cards by name"
                        />
                    </div>
                    {/* Filter/Sort Rows */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                         {/* Type Filters */}
                        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-800 rounded-full">
                            {typeFilters.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setTypeFilter(f)}
                                    className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${typeFilter === f ? 'bg-amber-500 text-slate-900' : 'text-slate-300 hover:bg-slate-700'}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                         {/* Owned Toggle */}
                        <div className="flex items-center gap-3 bg-slate-800 p-1.5 rounded-full">
                            <span className={`font-semibold text-sm transition-colors px-2 ${!showOwnedOnly ? 'text-white' : 'text-slate-400'}`}>All</span>
                            <button
                                onClick={() => setShowOwnedOnly(!showOwnedOnly)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${showOwnedOnly ? 'bg-amber-500' : 'bg-slate-700'}`}
                                aria-label="Toggle owned cards"
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${showOwnedOnly ? 'translate-x-6' : 'translate-x-1'}`}
                                />
                            </button>
                            <span className={`font-semibold text-sm transition-colors px-2 ${showOwnedOnly ? 'text-white' : 'text-slate-400'}`}>Unlocked</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                        {/* Rarity Filters */}
                        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-800 rounded-full">
                             {rarityFilters.map(r => (
                                <button
                                    key={r}
                                    onClick={() => setRarityFilter(r)}
                                    className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${rarityFilter === r ? 'bg-amber-500 text-slate-900' : `rarity-text-${r} hover:bg-slate-700`}`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-full">
                            <label htmlFor="sort-by" className="text-sm font-semibold text-slate-300 pl-2">Sort by:</label>
                            <select id="sort-by" value={sortBy} onChange={e => setSortBy(e.target.value as any)} className="bg-slate-700 text-white text-sm rounded-full p-1 border-0 focus:ring-2 focus:ring-amber-500">
                                <option value="recent">Most Recent</option>
                                <option value="rarity">Rarity</option>
                                <option value="name">Name</option>
                            </select>
                        </div>
                    </div>
                 </div>

                 {cardsToDisplay.length === 0 ? (
                    <div className="text-center p-8 bg-slate-800/50 rounded-lg mt-8">
                        <p className="text-xl text-slate-400">
                            {searchTerm ? 'No cards match your search.' : (showOwnedOnly ? `You haven't unlocked any facts of this type yet.` : `No cards available for this filter.`)}
                        </p>
                        {showOwnedOnly && !searchTerm && <p className="text-slate-500 mt-2">Go to the Shop to buy some packs!</p>}
                    </div>
                 ) : (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {cardsToDisplay.map(card => (
                            <CardComponent 
                                key={card.id} 
                                card={card} 
                                isOwned={(collection[card.id] || 0) > 0} 
                                count={collection[card.id] || 0}
                                onClick={() => onCardClick(card)} 
                            />
                        ))}
                    </div>
                 )}
            </div>
        </div>
    );
};

export default CollectionScreen;
