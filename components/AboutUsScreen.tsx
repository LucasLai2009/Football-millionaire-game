import React from 'react';
import { BackIcon, Logo } from './icons';

interface AboutUsScreenProps {
    onBack: () => void;
}

const AboutUsScreen: React.FC<AboutUsScreenProps> = ({ onBack }) => {
    return (
        <div className="w-full max-w-4xl relative p-4 animate-fade-in text-left">
            <button onClick={onBack} className="absolute top-0 left-0 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-10">
                <BackIcon className="w-6 h-6" />
                <span>Back to Menu</span>
            </button>
            <div className="mt-12 flex flex-col items-center w-full">
                <Logo className="w-24 h-24 mb-4 text-amber-300"/>
                <h1 className="font-anton text-6xl text-white tracking-wider uppercase">About Us</h1>
                <p className="text-slate-400 mb-8 text-center">Our Mission: To Celebrate Football Knowledge</p>
                
                <div className="w-full text-slate-300 space-y-6 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">A Passion Project</h2>
                        <p>
                            Football Millionaire is a game created by fans, for fans. It was born from a deep love for the beautiful game and a desire to create a fun, engaging, and challenging trivia experience that celebrates football's rich history, its legendary players, and its most iconic moments.
                        </p>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">Our Goal</h2>
                        <p>
                           Our primary goal is to provide a high-quality, free-to-play game that you can enjoy anytime. We are dedicated to continually updating the game with new questions, cards, and features to ensure the content remains fresh, accurate, and exciting. We believe in creating a positive and fair gaming environment.
                        </p>
                    </div>
                    
                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">Contact Us</h2>
                        <p>
                            We love hearing from our players! Whether you have a question, a suggestion, or have found a bug, please don't hesitate to get in touch. Your feedback is invaluable in helping us improve the game.
                        </p>
                        <p className="mt-2">
                           Email: <a href="mailto:playfootballmillionaire@gmail.com" className="text-amber-400 hover:underline">playfootballmillionaire@gmail.com</a>
                        </p>
                    </div>
                    
                    <div className="pt-4 text-center text-lg">
                        <p>Thank you for playing and sharing in our passion!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsScreen;
