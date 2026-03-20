import type { ObfuscatedValue } from './common';

export type SumeruAdventureGoalFightingLevel = {
    activityID: number;
    buffId: number;
    descTextMapHash: number;
    dungeonId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
