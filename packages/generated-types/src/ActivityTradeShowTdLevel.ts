import type { ObfuscatedValue } from './common';

export type ActivityTradeShowTdLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonID: number;
    galleryId: number;
    groupId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
