import { Card } from '../types';
import { ALL_PLAYERS } from './player-database';
import { ALL_MANAGERS } from './manager-database';
import { ALL_COUNTRIES } from './country-database';

// prettier-ignore
export const ALL_CARDS: Card[] = [
    ...ALL_PLAYERS,
    ...ALL_MANAGERS,
    ...ALL_COUNTRIES,
];