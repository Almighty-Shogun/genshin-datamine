import type { ObfuscatedValue } from './common';

export type DiversityBattleLevel = {
    activityID: number;
    dungeonId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
