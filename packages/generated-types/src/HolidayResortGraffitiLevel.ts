import type { ObfuscatedValue } from './common';

export type HolidayResortGraffitiLevel = {
    activityID: number;
    colorList: number[];
    dungeonId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushtipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
