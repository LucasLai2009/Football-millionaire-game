import React from 'react';
import { DRAFT_MILESTONES } from '../constants';

interface DraftPrizeLadderProps {
    currentScore: number;
}

const DraftPrizeLadder: React.FC<DraftPrizeLadderProps> = ({ currentScore }) => {
    let highestAchievedLevel = -1;
    for (let i = DRAFT_MILESTONES.length - 1; i >= 0; i--) {
        if (currentScore >= DRAFT_MILESTONES[i].score) {
            highestAchievedLevel = i;
            break;
        }
    }

    return (
        <div className="bg-slate-900/70 p-4 rounded-lg border-2 border-slate-700 w-full h-full">
            <h2 className="font-anton text-2xl text-center text-amber-300 mb-2">PRIZE LADDER</h2>
            <ul className="flex flex-col-reverse space-y-reverse space-y-1">
                {DRAFT_MILESTONES.map((milestone, index) => {
                    const isCurrent = index === highestAchievedLevel;
                    const hasBeenAchieved = index < highestAchievedLevel;

                    let itemClass = 'text-slate-400';
                    if (hasBeenAchieved) itemClass = 'text-amber-500';
                    if (isCurrent) itemClass = 'bg-amber-500 text-slate-900 font-bold animate-pulse';

                    return (
                        <li
                            key={milestone.score}
                            className={`flex justify-between items-center p-2 rounded-md transition-colors duration-300 ${itemClass}`}
                        >
                            <span className="text-lg font-mono">{milestone.score.toLocaleString()} pts</span>
                            <span className="text-lg font-mono">${milestone.prize.toLocaleString()}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default DraftPrizeLadder;