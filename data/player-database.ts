
import { Card } from '../types';
import { LEGENDARY_PLAYERS } from './players/legendary-players';
import { EPIC_PLAYERS } from './players/epic-players';
import { RARE_PLAYERS } from './players/rare-players';
import { COMMON_PLAYERS } from './players/common-players';


// prettier-ignore
export const ALL_PLAYERS: Card[] = [
    ...LEGENDARY_PLAYERS,
    ...EPIC_PLAYERS,
    ...RARE_PLAYERS,
    ...COMMON_PLAYERS,
];
