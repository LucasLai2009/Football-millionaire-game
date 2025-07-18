import React from 'react';
import { BackIcon, Logo } from './icons';

interface HowToPlayScreenProps {
    onBack: () => void;
}

const HowToPlayScreen: React.FC<HowToPlayScreenProps> = ({ onBack }) => {
    return (
        <div className="w-full max-w-4xl relative p-4 animate-fade-in text-left">
            <button onClick={onBack} className="absolute top-0 left-0 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-10">
                <BackIcon className="w-6 h-6" />
                <span>Back to Menu</span>
            </button>
            <div className="mt-12 flex flex-col items-center w-full">
                <Logo className="w-24 h-24 mb-4 text-amber-300"/>
                <h1 className="font-anton text-6xl text-white tracking-wider uppercase">HOW TO PLAY</h1>
                <p className="text-slate-400 mb-8 text-center">A guide to becoming a Football Millionaire!</p>

                <div className="w-full text-slate-300 space-y-8">
                    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                        <h2 className="font-anton text-3xl text-amber-300 mb-3">1. Classic Quiz Mode</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>The Goal:</strong> Answer 15 multiple-choice football trivia questions correctly to win the grand prize of $1,000,000 in virtual cash.</li>
                            <li><strong>Prize Ladder:</strong> Each question you answer correctly moves you up the prize ladder. The questions get harder as the prize money increases.</li>
                            <li><strong>Safe Havens:</strong> Reaching question 5 ($1,000) and question 10 ($32,000) guarantees you that amount of money, even if you answer a later question incorrectly.</li>
                            <li><strong>Lifelines:</strong> You have two lifelines to help you:
                                <ul className="list-['-_'] list-inside ml-6 mt-1">
                                    <li><strong>50:50:</strong> Removes two incorrect answers, leaving you with a 50/50 choice.</li>
                                    <li><strong>Ask the Audience:</strong> Shows a poll of what a virtual audience thinks the correct answer is.</li>
                                </ul>
                            </li>
                             <li><strong>Walking Away:</strong> If you're unsure of an answer, you can choose to 'Walk Away' at any point to keep the prize money you've already won.</li>
                        </ul>
                    </div>
                     <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                        <h2 className="font-anton text-3xl text-sky-300 mb-3">2. Shop & Collection</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Use Your Winnings:</strong> Spend the virtual cash you've won from the quiz in the <strong>Shop</strong> to buy card packs.</li>
                            <li><strong>Unlock Facts:</strong> Packs contain cards for Players, Managers, and Countries. Each card is a unique football fact!</li>
                            <li><strong>Rarities:</strong> Cards come in different rarities: Common, Rare, Epic, and Legendary. Better packs give you a higher chance of finding rarer cards.</li>
                            <li><strong>My Collection:</strong> View all the unique facts you've unlocked in your <strong>Collection</strong>. Can you collect them all?</li>
                        </ul>
                    </div>
                     <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                        <h2 className="font-anton text-3xl text-purple-300 mb-3">3. Duplicate Exchange</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Extra Cards:</strong> As you open packs, you'll eventually get duplicates of cards you already own.</li>
                            <li><strong>Trade Up:</strong> Visit the <strong>Duplicates</strong> screen to exchange a set number of lower-rarity duplicates for one brand new, higher-rarity card that you don't own yet.</li>
                            <li><strong>Example:</strong> Trade 10 duplicate 'Common' cards to receive 1 random 'Rare' card that is new to your collection.</li>
                        </ul>
                    </div>
                     <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                        <h2 className="font-anton text-3xl text-green-300 mb-3">4. Draft Mode</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Build Your Squad:</strong> First, choose a tactical formation (e.g., 4-4-2, 4-3-3).</li>
                            <li><strong>Draft Players:</strong> For each of the 11 positions in your formation, you'll be given a random selection of 5 players. Pick one to add to your team.</li>
                             <li><strong>Player-Specific Quiz:</strong> Once your squad is complete, a timed quiz begins! You'll face 3 questions (Easy, Medium, Hard) for each of the 11 players you drafted.</li>
                             <li><strong>Score Points & Win:</strong> Answering correctly earns you points. The higher your final score, the more prize money you win to spend in the shop!</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowToPlayScreen;
