import type { ObfuscatedValue } from './common';

export type ActivityLoliRunLevel = {
    activityID: number;
    buffIdList: number[];
    dungeonId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
