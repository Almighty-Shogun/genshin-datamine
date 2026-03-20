import type { ObfuscatedValue } from './common';

export type RechargeDiskLevel = {
    activityID: number;
    dungeonId: number;
    levelDescTextMapHash: number;
    levelID: number;
    medalScoreList: number[];
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
