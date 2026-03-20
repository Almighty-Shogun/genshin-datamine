import type { ObfuscatedValue } from './common';

export type InazumaBadmintonLevel = {
    activityID: number;
    bossDescTextMapHash: number;
    dungeonId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
