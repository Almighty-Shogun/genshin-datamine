import type { ObfuscatedValue } from './common';

export type AutoChessActivityLevel = {
    activityID: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
