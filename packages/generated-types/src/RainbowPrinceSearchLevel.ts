import type { ObfuscatedValue } from './common';

export type RainbowPrinceSearchLevel = {
    activityID: number;
    galleryID: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
