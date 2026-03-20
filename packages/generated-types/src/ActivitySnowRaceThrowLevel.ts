import type { ObfuscatedValue } from './common';

export type ActivitySnowRaceThrowLevel = {
    activityID: number;
    dungeonId: number;
    levelDescTextMapHash: number;
    levelID: number;
    levelNameTextMapHash: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
