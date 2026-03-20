import type { ObfuscatedValue } from './common';

export type FruitPickLevel = {
    activityID: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: unknown[];
    stageId: number;
    watcherList: number[];
} & ObfuscatedValue;
