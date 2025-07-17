
import React from 'react';

interface PrivacyConsentBannerProps {
    onAccept: () => void;
}

const PrivacyConsentBanner: React.FC<PrivacyConsentBannerProps> = ({ onAccept }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t-2 border-amber-400 p-4 z-50 animate-fade-in">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-300 text-sm sm:text-base text-center sm:text-left">
                    This game uses your browser's local storage to save your progress (like your balance and card collection). This data stays on your device and is not shared. By continuing to play, you agree to this.
                </p>
                <button
                    onClick={onAccept}
                    className="font-anton text-lg bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap"
                >
                    I Understand
                </button>
            </div>
        </div>
    );
};

export default PrivacyConsentBanner;
