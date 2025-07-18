
import React from 'react';

interface PrivacyConsentBannerProps {
    onAcceptAll: () => void;
    onAcceptEssential: () => void;
    onShowPrivacyPolicy: () => void;
}

const PrivacyConsentBanner: React.FC<PrivacyConsentBannerProps> = ({ onAcceptAll, onAcceptEssential, onShowPrivacyPolicy }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t-2 border-amber-400 p-4 z-50 animate-fade-in">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-slate-300 text-sm text-center md:text-left">
                    <h3 className="font-bold text-white mb-1">Your Privacy</h3>
                    <p>
                        We use local storage to save your game progress (essential) and cookies for ads & analytics (optional).
                        Read our{' '}
                        <button onClick={onShowPrivacyPolicy} className="text-amber-400 hover:underline font-semibold">
                            Privacy Policy
                        </button>
                        {' '}for more details.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                     <button
                        onClick={onAcceptEssential}
                        className="font-anton text-base bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        Accept Essential Only
                    </button>
                    <button
                        onClick={onAcceptAll}
                        className="font-anton text-lg bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyConsentBanner;
