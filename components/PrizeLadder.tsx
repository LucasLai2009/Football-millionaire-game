
import React from 'react';
import { PRIZE_LADDER } from '../constants';

interface PrizeLadderProps {
    currentQuestion: number; // 1-based index
}

const PrizeLadder: React.FC<PrizeLadderProps> = ({ currentQuestion }) => {
    return (
        <div className="bg-slate-900/70 p-4 rounded-lg border-2 border-slate-700 w-full h-full">
            <ul className="flex flex-col-reverse space-y-reverse space-y-1">
                {PRIZE_LADDER.map((prize, index) => {
                    const questionNumber = index + 1;
                    const isCurrent = questionNumber === currentQuestion;
                    const isAchieved = questionNumber < currentQuestion;
                    const isSafeHaven = [5, 10, 15].includes(questionNumber);

                    let itemClass = 'text-slate-400';
                    if (isSafeHaven) itemClass = 'text-white font-bold';
                    if (isAchieved) itemClass = 'text-amber-500';
                    if (isCurrent) itemClass = 'bg-amber-500 text-slate-900 font-bold animate-pulse';

                    return (
                        <li
                            key={prize}
                            className={`flex justify-between items-center p-2 rounded-md transition-colors duration-300 ${itemClass}`}
                        >
                            <span className="text-lg">{questionNumber}</span>
                            <span className="text-lg font-mono">${prize.toLocaleString()}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PrizeLadder;
