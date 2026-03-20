import type { ObfuscatedValue } from './common';

export type MonsterChessV2Base = {
    activityID: number;
    dungeonID: number;
    endQuestId: number;
    seriesId: number;
} & ObfuscatedValue;
