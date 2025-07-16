

import React from 'react';
import { Lifeline } from '../types';
import { AudiencePoll } from './icons';

interface LifelinesProps {
    lifelines: Record<Lifeline, boolean>;
    useLifeline: (lifeline: Lifeline) => void;
}

const LifelineButton: React.FC<{
    name: Lifeline;
    isAvailable: boolean;
    onClick: () => void;
    children: React.ReactNode;
}> = ({ name, isAvailable, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            disabled={!isAvailable}
            className="relative w-20 h-20 md:w-24 md:h-24 bg-blue-900 rounded-full border-4 border-blue-700 flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-blue-800 hover:enabled:border-amber-400 group"
            aria-label={`Use lifeline: ${name}`}
        >
            {children}
            {!isAvailable && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full">
                    <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            )}
        </button>
    );
};

const Lifelines: React.FC<LifelinesProps> = ({ lifelines, useLifeline }) => {
    return (
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-8">
            <LifelineButton name={Lifeline.FiftyFifty} isAvailable={lifelines[Lifeline.FiftyFifty]} onClick={() => useLifeline(Lifeline.FiftyFifty)}>
                <span className="font-anton text-xl md:text-2xl text-amber-300 group-hover:enabled:text-white transition-colors">
                    50:50
                </span>
            </LifelineButton>
            <LifelineButton name={Lifeline.AskTheAudience} isAvailable={lifelines[Lifeline.AskTheAudience]} onClick={() => useLifeline(Lifeline.AskTheAudience)}>
                <AudiencePoll className="w-10 h-10 md:w-12 md:h-12 text-amber-300 group-hover:enabled:text-white" />
            </LifelineButton>
        </div>
    );
};

export default Lifelines;