import type { ObfuscatedValue } from './common';

export type MonsterSnapAllLevel = {
    activityID: number;
    levelID: number;
    levelType: string;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
