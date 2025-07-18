import { PlayerQuestions, Question } from '../types';

import { LEGENDARY_PLAYER_QUESTIONS } from './player-questions/legendary-player-questions';
import { EPIC_PLAYER_QUESTIONS } from './player-questions/epic-player-questions';
import { RARE_PLAYER_QUESTIONS } from './player-questions/rare-player-questions';
import { COMMON_PLAYER_QUESTIONS } from './player-questions/common-player-questions';

const DRAFT_PLAYER_QUESTIONS_DB: Record<string, PlayerQuestions> = {
    ...LEGENDARY_PLAYER_QUESTIONS,
    ...EPIC_PLAYER_QUESTIONS,
    ...RARE_PLAYER_QUESTIONS,
    ...COMMON_PLAYER_QUESTIONS,
    // Note: The Epic, Rare, and Common files are currently placeholders.
    // They can be populated with questions in the same format as the legendary file.
};

// This function now randomly selects one question from each difficulty for a given player, making each quiz unique.
export const getQuestionsForPlayer = (cardId: string): Question[] | null => {
    const playerQuestions = DRAFT_PLAYER_QUESTIONS_DB[cardId];
    if (!playerQuestions || !playerQuestions.easy?.length || !playerQuestions.medium?.length || !playerQuestions.hard?.length) {
        // Fallback for players without a full question set
        return null;
    }

    const getRandomItem = <T>(arr: T[]): T => {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    const easy = getRandomItem(playerQuestions.easy);
    const medium = getRandomItem(playerQuestions.medium);
    const hard = getRandomItem(playerQuestions.hard);
    
    return [easy, medium, hard];
};

export const DRAFTABLE_PLAYER_IDS = Object.keys(DRAFT_PLAYER_QUESTIONS_DB).filter(id => {
    const q = DRAFT_PLAYER_QUESTIONS_DB[id];
    return q && q.easy?.length > 0 && q.medium?.length > 0 && q.hard?.length > 0;
});
