import type { ObfuscatedValue } from './common';

export type DreamExploreLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    galleryId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
