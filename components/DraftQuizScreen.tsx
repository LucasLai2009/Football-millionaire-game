
import React, { useState, useEffect } from 'react';
import { DraftedPlayer, Question } from '../types';
import { getQuestionsForPlayer } from '../data/player-question-database';
import { Logo } from './icons';
import DraftPrizeLadder from './DraftPrizeLadder';

interface DraftQuizScreenProps {
    draftedTeam: DraftedPlayer[];
    onQuizComplete: (winnings: number) => void;
    onFinish: () => void;
}

type AnswerState = 'idle' | 'correct' | 'incorrect';

const DRAFT_QUIZ_DURATION = 300; // 5 minutes
const PRIZE_MAP = { 0: 0, 1: 20000, 2: 50000, 3: 100000 };

export const DraftQuizScreen: React.FC<DraftQuizScreenProps> = ({ draftedTeam, onQuizComplete, onFinish }) => {
    const [questionsByPlayer, setQuestionsByPlayer] = useState<Record<string, Question[] | null>>({});
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [winnings, setWinnings] = useState<number | null>(null);
    const [isQuizOver, setIsQuizOver] = useState(false);
    const [answerState, setAnswerState] = useState<AnswerState>('idle');
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState(DRAFT_QUIZ_DURATION);

    const [playerResults, setPlayerResults] = useState<Record<string, number>>({});
    const [correctAnswersForCurrentPlayer, setCorrectAnswersForCurrentPlayer] = useState(0);

    useEffect(() => {
        const allQuestions: Record<string, Question[] | null> = {};
        for (const player of draftedTeam) {
            allQuestions[player.card.id] = getQuestionsForPlayer(player.card.id);
        }
        setQuestionsByPlayer(allQuestions);
    }, [draftedTeam]);

    useEffect(() => {
        if (isQuizOver || draftedTeam.length === 0) return;
        if (timeLeft <= 0) {
            const finalPlayerResults = { ...playerResults, [draftedTeam[currentPlayerIndex].key]: correctAnswersForCurrentPlayer };
            finishQuiz(finalPlayerResults);
            return;
        }
        const timerId = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeLeft, isQuizOver, playerResults, currentPlayerIndex, correctAnswersForCurrentPlayer, draftedTeam]);


    const finishQuiz = (finalResults: Record<string, number>) => {
        const totalWinnings = Object.values(finalResults)
            .reduce((acc, count) => acc + (PRIZE_MAP[count as keyof typeof PRIZE_MAP] || 0), 0);
        
        setWinnings(totalWinnings);
        onQuizComplete(totalWinnings);
        setIsQuizOver(true);
    };
    
    const advanceToNextPlayer = (finalCorrectCount: number) => {
        const currentPlayerKey = draftedTeam[currentPlayerIndex].key;
        const updatedResults = { ...playerResults, [currentPlayerKey]: finalCorrectCount };
        setPlayerResults(updatedResults);

        if (currentPlayerIndex >= draftedTeam.length - 1) {
            finishQuiz(updatedResults);
        } else {
            setAnswerState('idle');
            setSelectedOption(null);
            setCurrentPlayerIndex(prev => prev + 1);
            setCurrentQuestionIndex(0);
            setCorrectAnswersForCurrentPlayer(0);
        }
    };
    
    useEffect(() => {
        if (Object.keys(questionsByPlayer).length !== draftedTeam.length || draftedTeam.length === 0) return;
        
        const currentPlayer = draftedTeam[currentPlayerIndex];
        if (currentPlayer && questionsByPlayer[currentPlayer.card.id] === null) {
            // If there are no questions for the current player, skip them immediately.
            // This is a failsafe; it shouldn't happen with the current logic but is good practice.
            advanceToNextPlayer(0);
        }
    }, [currentPlayerIndex, questionsByPlayer, draftedTeam]);


    const handleAnswer = (option: string) => {
        if (answerState !== 'idle') return;

        setSelectedOption(option);
        const currentQuestionSet = questionsByPlayer[draftedTeam[currentPlayerIndex].card.id];
        if (!currentQuestionSet) return;
        
        const currentQuestion = currentQuestionSet[currentQuestionIndex];
        const isCorrect = option === currentQuestion.correctAnswer;
        let newCorrectCount = correctAnswersForCurrentPlayer;

        if (isCorrect) {
            newCorrectCount++;
            const points = [100, 200, 300][currentQuestionIndex] || 100;
            setScore(s => s + points);
            setAnswerState('correct');
            setCorrectAnswersForCurrentPlayer(newCorrectCount);

            setTimeout(() => {
                if (currentQuestionIndex >= 2) { // Last question for this player
                    advanceToNextPlayer(newCorrectCount);
                } else {
                    setAnswerState('idle');
                    setSelectedOption(null);
                    setCurrentQuestionIndex(q => q + 1);
                }
            }, 1500);

        } else {
            setAnswerState('incorrect');
            setTimeout(() => {
                advanceToNextPlayer(correctAnswersForCurrentPlayer);
            }, 1500);
        }
    };
    
    if (Object.keys(questionsByPlayer).length !== draftedTeam.length || draftedTeam.length === 0) {
         return <div className="text-center"><Logo className="w-24 h-24 animate-spin"/> <p className="mt-4 text-xl">Building your custom quiz...</p></div>;
    }

    if (isQuizOver) {
        return (
            <div className="text-center animate-fade-in flex flex-col items-center">
                <h1 className="font-anton text-6xl text-amber-300">Draft Complete!</h1>
                <div className="bg-slate-800/50 rounded-lg p-6 my-8 border border-slate-700 w-full max-w-md">
                    <p className="text-lg text-slate-400">FINAL SCORE</p>
                    <p className="font-anton text-7xl text-white">
                        {score.toLocaleString()}
                    </p>
                    <p className="text-lg text-slate-400 mt-4">WINNINGS</p>
                    <p className="font-anton text-5xl text-amber-300">
                        +${winnings?.toLocaleString()}
                    </p>
                </div>
                <button onClick={onFinish} className="font-anton text-3xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:scale-105">
                    Back to Menu
                </button>
            </div>
        );
    }
    
    const currentPlayer = draftedTeam[currentPlayerIndex];
    const currentQuestionSet = questionsByPlayer[currentPlayer.card.id];
    
    // This check handles the brief moment before the useEffect skip can kick in
    if (!currentQuestionSet) {
        return <div className="text-center"><p className="mt-4 text-xl">No questions for {currentPlayer.card.name}, skipping...</p></div>;
    }

    const currentQuestion = currentQuestionSet[currentQuestionIndex];
    const difficultyText = ['Easy', 'Medium', 'Hard'][currentQuestionIndex];

    const getProgressBarColor = (index: number): string => {
        if (index < currentPlayerIndex) {
            const correctCount = playerResults[draftedTeam[index].key];
            if (correctCount === undefined) return 'bg-slate-600';
            switch (correctCount) {
                case 0: return 'bg-red-600';
                case 1: return 'bg-orange-500';
                case 2: return 'bg-yellow-400';
                case 3: return 'bg-green-500';
                default: return 'bg-slate-600';
            }
        }
        if (index === currentPlayerIndex) {
            return 'bg-amber-400 animate-pulse';
        }
        return 'bg-slate-600';
    };


    return (
        <div className="w-full h-full flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-center p-4">
            {/* Main Content */}
            <div className="w-full lg:w-2/3 flex flex-col items-center">
                 {/* Header */}
                <div className="w-full flex justify-between items-center mb-4">
                    <div className="text-left">
                        <p className="text-xl">Player {currentPlayerIndex + 1} / {draftedTeam.length}</p>
                        <p className="text-2xl font-bold text-amber-300">{currentPlayer.card.name}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-anton text-4xl text-white">{`${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}</p>
                        <p className="text-sm text-slate-400">Time Remaining</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xl">Score</p>
                        <p className="text-2xl font-bold text-amber-300">{score.toLocaleString()}</p>
                    </div>
                </div>

                {/* Question Area */}
                <div className="relative w-full flex flex-col items-center">
                    <div className="w-full bg-slate-900/70 border-2 border-slate-700 rounded-lg p-6 text-center mb-6 shadow-lg">
                        <p className={`font-bold mb-2 ${
                            difficultyText === 'Easy' ? 'text-green-400' :
                            difficultyText === 'Medium' ? 'text-yellow-400' :
                            'text-red-400'
                        }`}>
                            {difficultyText} Question (+{[100, 200, 300][currentQuestionIndex]} pts)
                        </p>
                        <h2 className="text-2xl md:text-3xl font-medium leading-tight">{currentQuestion.question}</h2>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentQuestion.options.map((option, index) => {
                            const isCorrectAnswer = option === currentQuestion.correctAnswer;
                            let bgColor = 'bg-blue-900 hover:bg-blue-800 border-blue-700';
                            if (answerState !== 'idle') {
                                if (isCorrectAnswer) {
                                    bgColor = 'bg-green-500 animate-pulse border-green-400';
                                } else if (selectedOption === option) {
                                    bgColor = 'bg-red-500 border-red-400';
                                } else {
                                    bgColor = 'bg-blue-900/50 border-blue-800/50';
                                }
                            }

                            return (
                                <button
                                    key={`${currentQuestion.question}-${option}`}
                                    onClick={() => handleAnswer(option)}
                                    disabled={answerState !== 'idle'}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-colors duration-300 flex items-center text-lg md:text-xl ${bgColor}`}
                                >
                                    <span className="font-bold text-amber-300 mr-4">{String.fromCharCode(65 + index)}:</span>
                                    <span>{option}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Team Progress Bar */}
                <div className="w-full mt-8">
                    <h3 className="text-lg font-bold text-center mb-2">Team Progress</h3>
                    <div className="flex flex-wrap gap-1 justify-center p-2 bg-slate-800/50 rounded-lg">
                    {draftedTeam.map((player, index) => (
                        <div key={player.key} className={`h-3 rounded-full flex-1 transition-all duration-300 ${getProgressBarColor(index)}`}></div>
                    ))}
                    </div>
                </div>
            </div>

            {/* Prize Ladder */}
            <div className="w-full lg:w-1/3 max-w-sm lg:max-w-none mt-8 lg:mt-0">
                <DraftPrizeLadder currentScore={score} />
            </div>
        </div>
    );
};
