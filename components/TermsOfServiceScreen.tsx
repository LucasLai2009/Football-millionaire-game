import React from 'react';
import { BackIcon, Logo } from './icons';

interface TermsOfServiceScreenProps {
    onBack: () => void;
}

const TermsOfServiceScreen: React.FC<TermsOfServiceScreenProps> = ({ onBack }) => {
    return (
        <div className="w-full max-w-4xl relative p-4 animate-fade-in text-left">
            <button onClick={onBack} className="absolute top-0 left-0 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-10">
                <BackIcon className="w-6 h-6" />
                <span>Back to Menu</span>
            </button>
            <div className="mt-12 flex flex-col items-center w-full">
                <Logo className="w-24 h-24 mb-4 text-amber-300"/>
                <h1 className="font-anton text-6xl text-white tracking-wider uppercase">Terms of Service</h1>
                <p className="text-slate-400 mb-8 text-center">Last Updated: July 18, 2025</p>
                
                <div className="w-full text-slate-300 space-y-6 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or playing Football Millionaire Game (the "Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
                        </p>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">2. Use of the Service</h2>
                        <p>
                            The Service is provided for your personal, non-commercial entertainment purposes only. The virtual currency and items (cards) within the game have no real-world monetary value and cannot be redeemed for cash or other items of value.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">3. User Conduct</h2>
                        <p>
                            You agree not to use the Service to:
                        </p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                            <li>Engage in any activity that is illegal or fraudulent.</li>
                            <li>Attempt to exploit, hack, or reverse-engineer the game's mechanics.</li>
                            <li>Disrupt or interfere with the experience of other players.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">4. Intellectual Property & Fair Use</h2>
                        <p>
                           All original game content, features, and functionality are the property of Football Millionaire. The use of third-party trademarks, such as player names, club names, and logos, is for identification and informational purposes only, which we believe constitutes "fair use." This Service is not endorsed by or affiliated with any football player, club, or governing body. All trademarks are the property of their respective owners.
                        </p>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">5. Disclaimer of Warranties</h2>
                        <p>
                           The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, that the Service will be uninterrupted, error-free, or that all information will be perfectly accurate, as football facts can become outdated.
                        </p>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">6. Limitation of Liability</h2>
                        <p>
                           In no event shall Football Millionaire Game, nor its creators, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Service. Since your game progress is stored locally on your device, we are not responsible for any loss of data.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">7. Changes to Terms</h2>
                        <p>
                           We reserve the right to modify or replace these Terms at any time. We will provide notice of changes by updating the "Last Updated" date on this page. By continuing to access the Service after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">8. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at: <a href="mailto:playfootballmillionaire@gmail.com" className="text-amber-400 hover:underline">playfootballmillionaire@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServiceScreen;
