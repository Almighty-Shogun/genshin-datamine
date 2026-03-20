import type { ObfuscatedValue } from './common';

export type MonsterChessBase = {
    activityID: number;
    dungeonID: number;
    endQuestId: number;
    seriesId: number;
} & ObfuscatedValue;
