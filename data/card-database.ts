<<<<<<< HEAD

import { Card } from '../types';
import { ALL_PLAYERS } from './player-database';
import { ALL_MANAGERS } from './manager-database';
import { ALL_TEAMS } from './team-database';
=======
import { Card } from '../types';
import { ALL_PLAYERS } from './player-database';
import { ALL_MANAGERS } from './manager-database';
>>>>>>> 1ea21bf (Removed teams (legal purposes))
import { ALL_COUNTRIES } from './country-database';

// prettier-ignore
export const ALL_CARDS: Card[] = [
    ...ALL_PLAYERS,
    ...ALL_MANAGERS,
<<<<<<< HEAD
    ...ALL_TEAMS,
=======
>>>>>>> 1ea21bf (Removed teams (legal purposes))
    ...ALL_COUNTRIES,
];