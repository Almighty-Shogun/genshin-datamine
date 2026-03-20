import type { ObfuscatedValue } from './common';

export type ActivityCookGameLevel = {
    activityID: number;
    levelDescriptionTextMapHash: number;
    levelID: number;
    materialList: number[];
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
