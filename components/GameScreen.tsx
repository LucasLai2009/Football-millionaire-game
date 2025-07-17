
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Question, Lifeline } from '../types';
import PrizeLadder from './PrizeLadder';
import QuestionDisplay from './QuestionDisplay';
import Lifelines from './Lifelines';
import Timer from './Timer';

interface GameScreenProps {
    question: Question;
    questionNumber: number;
    onAnswer: (isCorrect: boolean) => void;
    onWalkAway: () => void;
    lifelines: Record<Lifeline, boolean>;
    useLifeline: (lifeline: Lifeline) => void;
    isAudiencePollModalOpen: boolean;
    closeAudiencePollModal: () => void;
}

interface AudienceData {
    name: string;
    votes: number;
}

const GameScreen: React.FC<GameScreenProps> = ({
    question,
    questionNumber,
    onAnswer,
    onWalkAway,
    lifelines,
    useLifeline,
    isAudiencePollModalOpen,
    closeAudiencePollModal
}) => {
    const [audienceData, setAudienceData] = useState<AudienceData[]>([]);
    const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);
    const [isPaused, setIsPaused] = useState(false);
    const [shouldStopTimer, setShouldStopTimer] = useState(false);

    // Reset lifelines effects when question changes
    useEffect(() => {
        setHiddenOptions([]);
        setIsPaused(false);
        setShouldStopTimer(false);
    }, [question]);

    useEffect(() => {
        if (isAudiencePollModalOpen) {
            setIsPaused(true);
        } else {
            setIsPaused(false);
        }
    }, [isAudiencePollModalOpen]);


    useEffect(() => {
        if (isAudiencePollModalOpen) {
            const { options, correctAnswer } = question;
            const percentages = [0, 0, 0, 0];
            let remaining = 100;

            const correctIndex = options.indexOf(correctAnswer);
            
            // Give correct answer a high percentage
            const correctPercentage = Math.floor(Math.random() * 40) + 50; // 50-89%
            percentages[correctIndex] = correctPercentage;
            remaining -= correctPercentage;

            // Distribute remaining percentage among others
            for (let i = 0; i < 3; i++) {
                const incorrectIndex = (correctIndex + 1 + i) % 4;
                if (i === 2) {
                     percentages[incorrectIndex] = remaining;
                } else {
                    const randomPortion = Math.floor(Math.random() * remaining);
                    percentages[incorrectIndex] = randomPortion;
                    remaining -= randomPortion;
                }
            }
            
            // Shuffle to avoid pattern
            for (let i = percentages.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [percentages[i], percentages[j]] = [percentages[j], percentages[i]];
            }

            const data = options.map((_, i) => ({
                name: String.fromCharCode(65 + i),
                votes: percentages[i],
            }));
            setAudienceData(data);
        }
    }, [isAudiencePollModalOpen, question]);

    const handleUseLifeline = (lifeline: Lifeline) => {
        if (!lifelines[lifeline]) return;

        if (lifeline === Lifeline.FiftyFifty) {
            const incorrectOptions = question.options.filter(opt => opt !== question.correctAnswer);
            const shuffled = incorrectOptions.sort(() => 0.5 - Math.random());
            setHiddenOptions(shuffled.slice(0, 2));
        }

        useLifeline(lifeline);
    };

    const handleAnswerSelected = (isCorrect: boolean) => {
        onAnswer(isCorrect);
    };


    return (
        <div className="w-full h-full flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center p-4">
            {/* Main Content */}
            <div className="w-full lg:w-2/3 flex flex-col justify-between items-center h-[calc(100vh-10rem)] min-h-[500px]">
                <div className="w-full flex justify-between items-center">
                    <Lifelines lifelines={lifelines} useLifeline={handleUseLifeline} />
                    <Timer
                        key={question.question}
                        duration={10}
                        onComplete={() => onAnswer(false)}
                        isPaused={isPaused}
                        shouldStop={shouldStopTimer}
                    />
                </div>
                <QuestionDisplay
                    key={question.question} // Force re-render on new question
                    question={question}
                    onAnswerSelected={handleAnswerSelected}
                    hiddenOptions={hiddenOptions}
                    onAnswerAttempt={() => setShouldStopTimer(true)}
                />
                <button 
                    onClick={onWalkAway}
                    className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    Walk Away
                </button>
            </div>
            {/* Prize Ladder */}
            <div className="w-full lg:w-1/3 max-w-sm lg:max-w-none">
                <PrizeLadder currentQuestion={questionNumber} />
            </div>

             {/* Audience Poll Modal */}
            {isAudiencePollModalOpen && (
                 <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-800 rounded-2xl p-8 border border-cyan-400 max-w-lg w-full text-center">
                         <h2 className="text-2xl font-bold mb-6 text-cyan-400">Ask the Audience</h2>
                         <div className="w-full h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={audienceData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="name" stroke="#9ca3af" />
                                    <YAxis stroke="#9ca3af" unit="%" />
                                    <Tooltip cursor={{fill: 'rgba(30, 58, 138, 0.3)'}} contentStyle={{backgroundColor: '#1f2937', border: '1px solid #374151'}} />
                                    <Bar dataKey="votes" fill="#22d3ee">
                                        {audienceData.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill="#22d3ee" />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                         </div>
                         <button onClick={closeAudiencePollModal} className="mt-6 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold py-2 px-6 rounded-lg">
                             Okay, I see.
                         </button>
                     </div>
                 </div>
            )}
        </div>
    );
};

export default GameScreen;
