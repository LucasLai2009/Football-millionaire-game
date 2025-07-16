

import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';

type AnswerState = 'idle' | 'selected' | 'locked' | 'correct' | 'incorrect';

interface QuestionDisplayProps {
    question: Question;
    onAnswerSelected: (isCorrect: boolean) => void;
    hiddenOptions: string[];
    onAnswerAttempt?: () => void;
}

const AnswerButton: React.FC<{
    option: string;
    index: number;
    state: AnswerState;
    isHidden: boolean;
    onClick: () => void;
}> = ({ option, index, state, isHidden, onClick }) => {
    const getBgColor = () => {
        switch (state) {
            case 'selected': return 'bg-amber-500 animate-pulse';
            case 'correct': return 'bg-green-500 animate-flash';
            case 'incorrect': return 'bg-red-500 animate-flash';
            default: return 'bg-blue-900 hover:bg-blue-800 border-blue-700';
        }
    };

    return (
        <button
            onClick={onClick}
            disabled={state !== 'idle' || isHidden}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 transform flex items-center text-lg md:text-xl ${getBgColor()} ${isHidden ? 'invisible' : 'visible'}`}
            aria-hidden={isHidden}
        >
            <span className="font-bold text-amber-300 mr-4">{String.fromCharCode(65 + index)}:</span>
            <span>{option}</span>
        </button>
    );
};

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question, onAnswerSelected, hiddenOptions, onAnswerAttempt }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answerStates, setAnswerStates] = useState<Record<string, AnswerState>>({});
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        // Reset states when question changes
        setSelectedAnswer(null);
        const initialStates: Record<string, AnswerState> = {};
        question.options.forEach(opt => initialStates[opt] = 'idle');
        setAnswerStates(initialStates);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [question]);

    const handleSelect = (option: string) => {
        if (selectedAnswer !== null) return;
        
        onAnswerAttempt?.();
        setSelectedAnswer(option);
        setAnswerStates(prev => ({ ...prev, [option]: 'selected' }));

        // Lock in answer
        timeoutRef.current = setTimeout(() => {
            const isCorrect = option === question.correctAnswer;
            setAnswerStates(prev => ({
                ...prev,
                [option]: isCorrect ? 'correct' : 'incorrect',
                [question.correctAnswer]: 'correct'
            }));
            
            // Move to next question or end game
            timeoutRef.current = setTimeout(() => {
                onAnswerSelected(isCorrect);
            }, 2000);

        }, 2000);
    };

    return (
        <div className="w-full max-w-4xl flex flex-col items-center">
            <div className="w-full bg-slate-900/70 border-2 border-slate-700 rounded-lg p-6 text-center mb-6 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-medium leading-tight">{question.question}</h2>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => (
                    <AnswerButton
                        key={option}
                        option={option}
                        index={index}
                        state={answerStates[option] || 'idle'}
                        isHidden={hiddenOptions.includes(option)}
                        onClick={() => handleSelect(option)}
                    />
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;