import type { ObfuscatedValue } from './common';

export type ActivityShortVideoLevel = {
    activityID: number;
    controlGroupId: number;
    dungeonId: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
