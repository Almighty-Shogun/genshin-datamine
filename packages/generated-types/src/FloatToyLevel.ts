import type { ObfuscatedValue } from './common';

export type FloatToyLevel = {
    activityID: number;
    descTextMapHash: number;
    jsonName: string;
    levelID: number;
    medalScoreList: number[];
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
