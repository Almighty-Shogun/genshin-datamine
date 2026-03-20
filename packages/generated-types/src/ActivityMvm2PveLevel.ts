import type { ObfuscatedValue } from './common';

export type ActivityMvm2PveLevel = {
    activityID: number;
    groupId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
