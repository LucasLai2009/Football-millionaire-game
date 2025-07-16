
import { Question } from '../types';

import { LEVEL_1_QUESTIONS } from './level-01-questions';
import { LEVEL_2_QUESTIONS } from './level-02-questions';
import { LEVEL_3_QUESTIONS } from './level-03-questions';
import { LEVEL_4_QUESTIONS } from './level-04-questions';
import { LEVEL_5_QUESTIONS } from './level-05-questions';
import { LEVEL_6_QUESTIONS } from './level-06-questions';
import { LEVEL_7_QUESTIONS } from './level-07-questions';
import { LEVEL_8_QUESTIONS } from './level-08-questions';
import { LEVEL_9_QUESTIONS } from './level-09-questions';
import { LEVEL_10_QUESTIONS } from './level-10-questions';
import { LEVEL_11_QUESTIONS } from './level-11-questions';
import { LEVEL_12_QUESTIONS } from './level-12-questions';
import { LEVEL_13_QUESTIONS } from './level-13-questions';
import { LEVEL_14_QUESTIONS } from './level-14-questions';
import { LEVEL_15_QUESTIONS } from './level-15-questions';

/**
 * A static database of quiz questions, organized by difficulty level.
 * Each inner array is imported from a dedicated file for that level.
 */
export const QUESTION_DATABASE: Question[][] = [
    LEVEL_1_QUESTIONS,
    LEVEL_2_QUESTIONS,
    LEVEL_3_QUESTIONS,
    LEVEL_4_QUESTIONS,
    LEVEL_5_QUESTIONS,
    LEVEL_6_QUESTIONS,
    LEVEL_7_QUESTIONS,
    LEVEL_8_QUESTIONS,
    LEVEL_9_QUESTIONS,
    LEVEL_10_QUESTIONS,
    LEVEL_11_QUESTIONS,
    LEVEL_12_QUESTIONS,
    LEVEL_13_QUESTIONS,
    LEVEL_14_QUESTIONS,
    LEVEL_15_QUESTIONS,
];
