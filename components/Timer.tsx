import React, { useState, useEffect, useRef } from 'react';

interface TimerProps {
    duration: number;
    onComplete: () => void;
    isPaused: boolean;
    size?: number;
    strokeWidth?: number;
    shouldStop?: boolean;
}

const Timer: React.FC<TimerProps> = ({ 
    duration, 
    onComplete, 
    isPaused, 
    size = 80, 
    strokeWidth = 8,
    shouldStop = false
}) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const onCompleteRef = useRef(onComplete);

    // Keep the onComplete callback reference up to date without causing the timer effect to re-run
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    // Reset timer when a new question starts (indicated by duration or key changing)
    useEffect(() => {
        setTimeLeft(duration);
    }, [duration]);

    useEffect(() => {
        // Halt the timer if it's paused, stopped, or has run out of time.
        if (isPaused || shouldStop || timeLeft <= 0) {
            return;
        }

        // Set up the next tick.
        const timerId = setTimeout(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        // The cleanup function is crucial. It runs when dependencies change (e.g., shouldStop becomes true)
        // or when the component unmounts. This prevents the timer from ticking after being stopped.
        return () => clearTimeout(timerId);

    }, [timeLeft, isPaused, shouldStop]);
    
    // A separate effect to handle the completion logic.
    // This runs after any state updates to ensure it has the latest values.
    useEffect(() => {
        if (timeLeft === 0 && !isPaused && !shouldStop) {
            onCompleteRef.current();
        }
    }, [timeLeft, isPaused, shouldStop]);


    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = timeLeft / duration;
    const offset = circumference * (1 - progress);

    const getColor = () => {
        if (progress > 0.5) return 'text-green-500';
        if (progress > 0.2) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                <circle
                    className="text-slate-700"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className={`transform -rotate-90 origin-center transition-colors duration-500 ${getColor()}`}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className={`absolute inset-0 flex items-center justify-center font-anton text-3xl ${getColor()}`}>
                {timeLeft}
            </div>
        </div>
    );
};

export default Timer;
