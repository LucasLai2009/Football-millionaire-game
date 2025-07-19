
import React, { useState, useCallback, useEffect } from 'react';
import { GameStatus, Lifeline, Question, Card, Collection, DraftedPlayer } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import ShopScreen from './components/ShopScreen';
import CollectionScreen from './components/CollectionScreen';
import CardDetailModal from './components/CardDetailModal';
import { DuplicatesScreen } from './components/DuplicatesScreen';
import ModesScreen from './components/ModesScreen';
import { DraftScreen } from './components/DraftScreen';
import { DraftQuizScreen } from './components/DraftQuizScreen';
import { PRIZE_LADDER } from './constants';
import { ALL_CARDS } from './data/card-database';
import { QUESTION_DATABASE } from './data/question-database';
import PrivacyConsentBanner from './components/PrivacyConsentBanner';
import PrivacyPolicyScreen from './components/PrivacyPolicyScreen';
import HowToPlayScreen from './components/HowToPlayScreen';
import AboutUsScreen from './components/AboutUsScreen';
import TermsOfServiceScreen from './components/TermsOfServiceScreen';

// Migration logic to ensure progress is saved across updates
const migrateV3ToStable = () => {
    const V3_BALANCE_KEY = 'footballMillionaire_balance_v3';
    const STABLE_BALANCE_KEY = 'footballMillionaire_balance';
    const oldBalance = localStorage.getItem(V3_BALANCE_KEY);
    if (oldBalance) {
        localStorage.setItem(STABLE_BALANCE_KEY, oldBalance);
        localStorage.removeItem(V3_BALANCE_KEY);
    }

    const V3_COLLECTION_KEY = 'footballMillionaire_collection_v3';
    const STABLE_COLLECTION_KEY = 'footballMillionaire_collection';
    const oldCollection = localStorage.getItem(V3_COLLECTION_KEY);
    if (oldCollection) {
        localStorage.setItem(STABLE_COLLECTION_KEY, oldCollection);
        localStorage.removeItem(V3_COLLECTION_KEY);
    }
    
    const V3_ACQUIRED_ORDER_KEY = 'footballMillionaire_acquiredOrder_v3';
    const STABLE_ACQUIRED_ORDER_KEY = 'footballMillionaire_acquiredOrder';
    const oldOrder = localStorage.getItem(V3_ACQUIRED_ORDER_KEY);
    if (oldOrder) {
        localStorage.setItem(STABLE_ACQUIRED_ORDER_KEY, oldOrder);
        localStorage.removeItem(V3_ACQUIRED_ORDER_KEY);
    }
};
// Run this migration once on script load.
migrateV3ToStable();


const BALANCE_KEY = 'footballMillionaire_balance';
const COLLECTION_KEY = 'footballMillionaire_collection';
const ACQUIRED_ORDER_KEY = 'footballMillionaire_acquiredOrder';
const PRIVACY_CONSENT_KEY = 'footballMillionaire_privacyConsent';


const App: React.FC = () => {
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Welcome);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [lifelines, setLifelines] = useState<Record<Lifeline, boolean>>({
        [Lifeline.FiftyFifty]: true,
        [Lifeline.AskTheAudience]: true,
    });
    const [isAudiencePollModalOpen, setIsAudiencePollModalOpen] = useState(false);
    
    // --- State for Economy and Collection ---
    const [balance, setBalance] = useState<number>(() => {
        const savedBalance = localStorage.getItem(BALANCE_KEY);
        return savedBalance ? JSON.parse(savedBalance) : 50000; // Start with some money
    });
    const [collection, setCollection] = useState<Collection>(() => {
        const savedCollection = localStorage.getItem(COLLECTION_KEY);
        return savedCollection ? JSON.parse(savedCollection) : {};
    });
    const [acquiredOrder, setAcquiredOrder] = useState<string[]>(() => {
        const saved = localStorage.getItem(ACQUIRED_ORDER_KEY);
        return saved ? JSON.parse(saved) : [];
    });
    const [detailedCardInfo, setDetailedCardInfo] = useState<{ card: Card; isOwned: boolean } | null>(null);
    const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

    const [privacyConsent, setPrivacyConsent] = useState<'all' | 'essential' | null>(() => {
        const consent = localStorage.getItem(PRIVACY_CONSENT_KEY);
        return consent as 'all' | 'essential' | null;
    });

    // --- State for Draft Mode ---
    const [draftedTeam, setDraftedTeam] = useState<DraftedPlayer[]>([]);
    
    // --- LocalStorage Effects ---
    useEffect(() => {
        localStorage.setItem(BALANCE_KEY, JSON.stringify(balance));
    }, [balance]);

    useEffect(() => {
        localStorage.setItem(COLLECTION_KEY, JSON.stringify(collection));
    }, [collection]);

    useEffect(() => {
        localStorage.setItem(ACQUIRED_ORDER_KEY, JSON.stringify(acquiredOrder));
    }, [acquiredOrder]);

    const handleResetProgress = useCallback(() => {
        localStorage.removeItem(BALANCE_KEY);
        localStorage.removeItem(COLLECTION_KEY);
        localStorage.removeItem(ACQUIRED_ORDER_KEY);
        localStorage.removeItem(PRIVACY_CONSENT_KEY);
        window.location.reload();
    }, []);

    const handleAcceptAllPrivacy = useCallback(() => {
        localStorage.setItem(PRIVACY_CONSENT_KEY, 'all');
        setPrivacyConsent('all');
    }, []);

    const handleAcceptEssentialPrivacy = useCallback(() => {
        localStorage.setItem(PRIVACY_CONSENT_KEY, 'essential');
        setPrivacyConsent('essential');
    }, []);

    const startGame = () => {
        const gameQuestions: Question[] = [];
        if (QUESTION_DATABASE.length < PRIZE_LADDER.length) {
            console.error("Not enough question levels in the database for a full game.");
            return;
        }

        for (let i = 0; i < PRIZE_LADDER.length; i++) {
            const levelQuestions = QUESTION_DATABASE[i];
            if (levelQuestions && levelQuestions.length > 0) {
                const randomQuestion = levelQuestions[Math.floor(Math.random() * levelQuestions.length)];
                gameQuestions.push(randomQuestion);
            } else {
                console.error(`No questions available for level ${i + 1}.`);
                return;
            }
        }

        if (gameQuestions.length === PRIZE_LADDER.length) {
            setQuestions(gameQuestions);
            setCurrentQuestionIndex(0);
            setGameStatus(GameStatus.Playing);
            setLifelines({
                [Lifeline.FiftyFifty]: true,
                [Lifeline.AskTheAudience]: true,
            });
        }
    };
    
    const endCurrentGame = (status: GameStatus.Won | GameStatus.Lost | GameStatus.WalkedAway) => {
        let winnings = 0;
        if (status === GameStatus.Won) {
            winnings = PRIZE_LADDER[PRIZE_LADDER.length - 1];
        } else if (status === GameStatus.Lost) {
            const safeHavenIndex = [4, 9, 14].reverse().find(i => currentQuestionIndex > i);
            winnings = safeHavenIndex !== undefined ? PRIZE_LADDER[safeHavenIndex] : 0;
        } else if (status === GameStatus.WalkedAway) {
            winnings = currentQuestionIndex > 0 ? PRIZE_LADDER[currentQuestionIndex - 1] : 0;
        }

        setBalance(prevBalance => prevBalance + winnings);
        setGameStatus(status);
    };

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            if (currentQuestionIndex === questions.length - 1) {
                endCurrentGame(GameStatus.Won);
            } else {
                setCurrentQuestionIndex(prev => prev + 1);
            }
        } else {
            endCurrentGame(GameStatus.Lost);
        }
    };

    const handleWalkAway = () => {
        endCurrentGame(GameStatus.WalkedAway);
    };

    const handlePlayAgain = () => {
        setGameStatus(GameStatus.Welcome);
        setQuestions([]);
        setCurrentQuestionIndex(0);
    };
    
    const useLifeline = useCallback((lifeline: Lifeline) => {
        if (!lifelines[lifeline]) return;

        setLifelines(prev => ({ ...prev, [lifeline]: false }));
        
        if (lifeline === Lifeline.AskTheAudience) {
            setIsAudiencePollModalOpen(true);
        }

    }, [lifelines]);

    const goToShop = () => setGameStatus(GameStatus.Shop);
    const goToCollection = () => setGameStatus(GameStatus.Collection);
    const goToDuplicates = () => setGameStatus(GameStatus.Duplicates);
    const goToModes = () => setGameStatus(GameStatus.Modes);
    const goToPrivacyPolicy = () => setGameStatus(GameStatus.PrivacyPolicy);
    const goToHowToPlay = () => setGameStatus(GameStatus.HowToPlay);
    const goToAboutUs = () => setGameStatus(GameStatus.AboutUs);
    const goToTermsOfService = () => setGameStatus(GameStatus.TermsOfService);
    const backToMenu = () => {
        setDraftedTeam([]); // Clear draft when going back to menu
        setGameStatus(GameStatus.Welcome);
    }

    const handlePurchase = (cost: number, newCards: Card[]) => {
        if (balance >= cost) {
            setBalance(prev => prev - cost);
            setCollection(prev => {
                const newCollection = { ...prev };
                newCards.forEach(card => {
                    newCollection[card.id] = (newCollection[card.id] || 0) + 1;
                });
                return newCollection;
            });
             setAcquiredOrder(prev => {
                const newCardIds = newCards.map(c => c.id);
                const existingFiltered = prev.filter(id => !newCardIds.includes(id));
                return [...newCardIds, ...existingFiltered];
            });
        }
    };
    
    const handleExchange = (cardsToSpend: Card[], cardToReceive: Card) => {
        setCollection(prev => {
            const newCollection = { ...prev };
            cardsToSpend.forEach(card => {
                newCollection[card.id] -= 1;
            });
            newCollection[cardToReceive.id] = (newCollection[cardToReceive.id] || 0) + 1;
            return newCollection;
        });
        setAcquiredOrder(prev => {
            const existingFiltered = prev.filter(id => id !== cardToReceive.id);
            return [cardToReceive.id, ...existingFiltered];
        });
    };

    const completeDraft = (team: DraftedPlayer[]) => {
        setDraftedTeam(team);
        setGameStatus(GameStatus.DraftQuiz);
    };


    const finalWinningsForDisplay = (): number => {
        if (gameStatus === GameStatus.Won) return PRIZE_LADDER[PRIZE_LADDER.length - 1];
        if (gameStatus === GameStatus.Lost) {
            const safeHavenIndex = [4, 9, 14].reverse().find(i => currentQuestionIndex > i);
            return safeHavenIndex !== undefined ? PRIZE_LADDER[safeHavenIndex] : 0;
        }
        if (gameStatus === GameStatus.WalkedAway) {
            return currentQuestionIndex > 0 ? PRIZE_LADDER[currentQuestionIndex - 1] : 0;
        }
        return 0;
    };

    const openCardDetails = (card: Card) => {
        setDetailedCardInfo({ card, isOwned: collection[card.id] > 0 });
    };

    const closeCardDetails = () => {
        setDetailedCardInfo(null);
    };


    const renderContent = () => {
        switch (gameStatus) {
            case GameStatus.Playing:
                return (
                    <GameScreen
                        question={questions[currentQuestionIndex]}
                        questionNumber={currentQuestionIndex + 1}
                        onAnswer={handleAnswer}
                        onWalkAway={handleWalkAway}
                        lifelines={lifelines}
                        useLifeline={useLifeline}
                        isAudiencePollModalOpen={isAudiencePollModalOpen}
                        closeAudiencePollModal={() => setIsAudiencePollModalOpen(false)}
                    />
                );
            case GameStatus.Won:
            case GameStatus.Lost:
            case GameStatus.WalkedAway:
                return (
                    <EndScreen
                        status={gameStatus}
                        winnings={finalWinningsForDisplay()}
                        onPlayAgain={handlePlayAgain}
                        onGoToShop={goToShop}
                        onBackToMenu={backToMenu}
                    />
                );
            case GameStatus.Shop:
                return (
                    <ShopScreen
                        balance={balance}
                        collection={collection}
                        onPurchase={handlePurchase}
                        onBack={backToMenu}
                        onCardClick={openCardDetails}
                    />
                );
            case GameStatus.Collection:
                return (
                    <CollectionScreen
                        allCards={ALL_CARDS}
                        collection={collection}
                        acquiredOrder={acquiredOrder}
                        onBack={backToMenu}
                        onCardClick={openCardDetails}
                    />
                );
            case GameStatus.Duplicates:
                 return (
                    <DuplicatesScreen
                        collection={collection}
                        allCards={ALL_CARDS}
                        onBack={backToMenu}
                        onExchange={handleExchange}
                    />
                 );
            case GameStatus.Modes:
                return <ModesScreen onBack={backToMenu} onStartDraft={() => setGameStatus(GameStatus.DraftFormation)} />;
            case GameStatus.DraftFormation:
            case GameStatus.Drafting:
                return <DraftScreen onDraftComplete={completeDraft} onBack={backToMenu} />;
             case GameStatus.DraftQuiz:
                return <DraftQuizScreen 
                            draftedTeam={draftedTeam} 
                            onQuizComplete={(winnings) => setBalance(prev => prev + winnings)}
                            onFinish={backToMenu} 
                        />;
            case GameStatus.PrivacyPolicy:
                return <PrivacyPolicyScreen onBack={backToMenu} />;
            case GameStatus.HowToPlay:
                return <HowToPlayScreen onBack={backToMenu} />;
            case GameStatus.AboutUs:
                return <AboutUsScreen onBack={backToMenu} />;
            case GameStatus.TermsOfService:
                return <TermsOfServiceScreen onBack={backToMenu} />;
            case GameStatus.Welcome:
            default:
                return (
                    <WelcomeScreen
                        onStartGame={startGame}
                        onGoToShop={goToShop}
                        onGoToCollection={goToCollection}
                        onGoToDuplicates={goToDuplicates}
                        onGoToModes={goToModes}
                        onOpenResetConfirm={() => setIsResetConfirmOpen(true)}
                        onGoToPrivacyPolicy={goToPrivacyPolicy}
                        onGoToHowToPlay={goToHowToPlay}
                        onGoToAboutUs={goToAboutUs}
                        onGoToTermsOfService={goToTermsOfService}
                    />

                );
        }
    };

    const Header = () => (
      <div className="absolute top-0 right-0 p-4 z-20 bg-slate-900/50 rounded-bl-xl">
        <p className="text-lg text-slate-400">Balance</p>
        <p className="font-anton text-4xl text-amber-300">${balance.toLocaleString()}</p>
      </div>
    );

    return (
        <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center p-4 sm:p-6 lg:p-8 overflow-auto">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,58,138,0.5),rgba(255,255,255,0))]"></div>
            {gameStatus !== GameStatus.Playing && <Header />}
            <div className="w-full max-w-7xl mx-auto z-10 flex flex-col items-center justify-center flex-grow">
                 {renderContent()}
            </div>
            {detailedCardInfo && <CardDetailModal card={detailedCardInfo.card} isOwned={detailedCardInfo.isOwned} onClose={closeCardDetails} />}
            {isResetConfirmOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
                    <div className="bg-slate-800 rounded-2xl p-8 border border-red-500 max-w-lg w-full text-center shadow-lg" role="alertdialog" aria-modal="true" aria-labelledby="reset-dialog-title" aria-describedby="reset-dialog-description">
                        <h2 id="reset-dialog-title" className="text-2xl font-bold mb-4 text-red-400">Reset Progress?</h2>
                        <p id="reset-dialog-description" className="text-slate-300 mb-6">Are you sure you want to reset all progress? Your balance, card collection, and all other data will be lost forever. This action cannot be undone.</p>
                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={() => setIsResetConfirmOpen(false)}
                                className="font-anton text-xl bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleResetProgress}
                                className="font-anton text-xl bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                            >
                                Confirm Reset
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {!privacyConsent && <PrivacyConsentBanner onAcceptAll={handleAcceptAllPrivacy} onAcceptEssential={handleAcceptEssentialPrivacy} onShowPrivacyPolicy={goToPrivacyPolicy} />}
        </main>
    );
};

export default App;
