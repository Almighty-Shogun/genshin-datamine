import type { ObfuscatedValue } from './common';

export type HolidayResortAdventureLevel = {
    activityID: number;
    characterList: number[];
    descTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushtipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
