import type { ObfuscatedValue } from './common';

export type ActivityFilmfestSniperLevel = {
    activityID: number;
    dungeonId: number;
    galleryId: number;
    levelID: number;
    levelType: string;
    nameTextMapHash: number;
    openDay: number;
    pushtipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
