export interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

export enum GameStatus {
    Welcome = 'welcome',
    Playing = 'playing',
    Lost = 'lost',
    Won = 'won',
    WalkedAway = 'walked_away',
    Shop = 'shop',
    Collection = 'collection',
    Duplicates = 'duplicates',
    Modes = 'modes',
    DraftFormation = 'draft_formation',
    Drafting = 'drafting',
    DraftQuiz = 'draft_quiz',
}

export enum Lifeline {
    FiftyFifty = '50:50',
    AskTheAudience = 'Ask the Audience',
}

// Types for Reward System
export enum CardType {
    Player = 'Player',
    Country = 'Country',
    Manager = 'Manager',
}

export type PlayerPosition = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';

export interface Card {
    id: string;
    type: CardType;
    name: string;
    description: string;
    rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
    imageUrl?: string;
    position?: PlayerPosition;
    nationality?: string;
    age?: number;
}

// Types for Duplicates/Collection
export type Collection = Record<string, number>; // Card ID -> Count

// Types for Draft Mode
export interface Formation {
    name: string;
    positions: PlayerPosition[];
}

export interface DraftedPlayer {
    key: string; // A unique identifier for this specific drafted player instance
    position: PlayerPosition;
    card: Card;
}

export interface PlayerQuestions {
    easy: Question[];
    medium: Question[];
    hard: Question[];
}