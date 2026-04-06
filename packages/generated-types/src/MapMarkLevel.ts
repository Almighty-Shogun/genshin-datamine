import type { ObfuscatedValue } from './common';

export type MapMarkLevel = {
    activityID: number;
    dungeonId: number;
    galleryId: number;
    groupId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
