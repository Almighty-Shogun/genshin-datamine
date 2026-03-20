import type { ObfuscatedValue } from './common';

export type NodkraiTourHackLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    gadgetId: number;
    galleryId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
