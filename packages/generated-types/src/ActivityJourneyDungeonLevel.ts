import type { ObfuscatedValue } from './common';

export type ActivityJourneyDungeonLevel = {
    dungeonID: number;
    galleryID: number;
    levelId: number;
    levelTitleTextMapHash: number;
    openDay: number;
    rateList: number[];
    skillDescTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
