import type { ObfuscatedValue } from './common';

export type ActivityWatergunLevel = {
    activityID: number;
    draftId: number;
    levelDescTextMapHash: number;
    levelID: number;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
