

import React from 'react';

interface PrivacyConsentBannerProps {
    onAccept: () => void;
    onShowPrivacyPolicy: () => void;
}

const PrivacyConsentBanner: React.FC<PrivacyConsentBannerProps> = ({ onAccept, onShowPrivacyPolicy }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t-2 border-amber-400 p-4 z-50 animate-fade-in">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-slate-300 text-sm sm:text-base text-center sm:text-left">
                    This game uses your browser's local storage to save progress. By continuing to play, you agree to this. Read our{' '}
                    <button onClick={onShowPrivacyPolicy} className="text-amber-400 hover:underline font-semibold">
                        Privacy Policy
                    </button>
                    {' '}for more details.
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