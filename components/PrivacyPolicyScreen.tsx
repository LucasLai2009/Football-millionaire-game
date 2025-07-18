
import React from 'react';
import { BackIcon, Logo } from './icons';

interface PrivacyPolicyScreenProps {
    onBack: () => void;
}

const PrivacyPolicyScreen: React.FC<PrivacyPolicyScreenProps> = ({ onBack }) => {
    return (
        <div className="w-full max-w-4xl relative p-4 animate-fade-in text-left">
            <button onClick={onBack} className="absolute top-0 left-0 flex items-center gap-2 text-slate-300 hover:text-white transition-colors z-10">
                <BackIcon className="w-6 h-6" />
                <span>Back to Menu</span>
            </button>
            <div className="mt-12 flex flex-col items-center w-full">
                <Logo className="w-24 h-24 mb-4 text-amber-300"/>
                <h1 className="font-anton text-6xl text-white tracking-wider uppercase">Privacy Policy</h1>
                <p className="text-slate-400 mb-8 text-center">Last Updated: July 18, 2025</p>
                
                <div className="w-full text-slate-300 space-y-6 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">1. Introduction</h2>
                        <p>
                            Welcome to Football Millionaire Game ("we", "us", "our"). This Privacy Policy explains how we handle information in connection with our game. Your privacy is important to us, and we are committed to being transparent about our data practices to ensure compliance with policies such as Google AdSense.
                        </p>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">2. Information We Handle</h2>
                        <p>
                            To enhance your gaming experience, we store certain information directly on your device using your web browser's Local Storage. This includes:
                        </p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                            <li><strong>Game Progress Data (Essential):</strong> Your virtual balance, your collection of unlocked cards, and the order in which you acquired them.</li>
                            <li><strong>Consent Information (Essential):</strong> A confirmation of your privacy choices.</li>
                        </ul>
                        <p className="mt-2 font-bold text-yellow-400">
                            We do not collect, store on our servers, or transmit any of this personal game data. Your progress is completely private and local to your device and browser.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">3. Third-Party Advertising and Cookies (Optional)</h2>
                        <p>
                            If you provide consent, we may use third-party advertising companies, such as Google, to serve ads. These companies may use cookies and similar technologies to collect non-personal information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                        </p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                            <li>Third-party vendors, including Google, use advertising cookies to serve ads based on your prior visits to our website or other websites.</li>
                            <li>Google's use of these cookies enables it and its partners to serve relevant ads to you. These cookies do not track personal information like your name, email address, or physical address.</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">4. Analytics (Optional)</h2>
                        <p>
                            If you provide consent by clicking "Accept All", we use Google Analytics to collect anonymous information about how you play the game. This helps us understand which features are popular, identify areas for improvement, and enhance the overall user experience.
                        </p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                            <li><strong>Data Collected:</strong> This includes data such as which screens you visit, how long you play, and which game modes are used.</li>
                            <li><strong>Anonymity:</strong> This data is aggregated and does not contain any personally identifiable information. We cannot and do not use it to identify individual players.</li>
                            <li><strong>Opt-Out:</strong> You can opt-out by selecting "Accept Essential Only" on the privacy banner. If you have already accepted, you can withdraw consent by clearing your browser's data for this site, which will also reset your game progress and allow you to choose again.</li>
                        </ul>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">5. Your Data Protection Rights (GDPR & CCPA)</h2>
                         <p>Depending on your location, you may have the following rights regarding your data:</p>
                          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                            <li><strong>The right to be informed:</strong> You have the right to know how your data is being used, which is the purpose of this Privacy Policy.</li>
                            <li><strong>The right of access:</strong> Your game progress data is stored locally and can be implicitly accessed by playing the game.</li>
                            <li><strong>The right to rectification:</strong> As data is stored locally, there is no mechanism for us to rectify it. You can reset your progress to start fresh.</li>
                            <li><strong>The right to erasure:</strong> You can erase all your locally stored game data at any time by using the "Reset Progress" button on the main menu of the game.</li>
                            <li><strong>The right to restrict processing:</strong> You can restrict the use of optional cookies by selecting "Accept Essential Only" on our consent banner.</li>
                            <li><strong>The right to object to processing:</strong> You can object to data processing for marketing by managing your ad settings as described below.</li>
                        </ul>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">6. Your Choices & Opt-Outs</h2>
                         <h3 className="font-semibold text-lg text-slate-200 mt-2">Managing Game Data</h3>
                        <p>
                            You have full control over your locally stored game data. You can clear all your saved progress using the "Reset Progress" button on the main menu, which permanently deletes the data from your browser's local storage.
                        </p>

                        <h3 className="font-semibold text-lg text-slate-200 mt-4">Opting Out of Personalized Advertising</h3>
                        <p>
                           You may opt out of personalized advertising from Google by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Ads Settings</a>.
                        </p>
                        <p className="mt-2">
                           Alternatively, you can opt out of many third-party vendors' use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">www.aboutads.info/choices/</a>.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">7. Use of Football Trademarks</h2>
                        <p>
                           This game displays names and trademarks related to football clubs, players, and organizations for identification and informational purposes only, which we believe constitutes fair use.
                        </p>
                         <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                            <li><strong>Ownership Disclaimer:</strong> We do not claim ownership of any third-party images, or trademarks. All rights to these materials are held by their respective owners. This game is not endorsed by or affiliated with any football governing body, club, or player.</li>
                            <li><strong>Removal Requests:</strong> If you are a rights holder and would like your material removed, please contact us at the email below, and we will address your request promptly.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">8. Children's Privacy</h2>
                        <p>
                           This game is intended for a general audience and is not directed at children under the age of 13. We do not knowingly collect any personal data from children.
                        </p>
                    </div>
                     
                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">9. Changes to This Privacy Policy</h2>
                        <p>
                           We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Policy periodically for any changes.
                        </p>
                    </div>

                     <div>
                        <h2 className="font-bold text-xl text-amber-300 mb-2">10. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:playfootballmillionaire@gmail.com" className="text-amber-400 hover:underline">playfootballmillionaire@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyScreen;