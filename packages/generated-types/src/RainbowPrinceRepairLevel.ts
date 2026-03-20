import type { ObfuscatedValue } from './common';

export type RainbowPrinceRepairLevel = {
    activityID: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsID: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
