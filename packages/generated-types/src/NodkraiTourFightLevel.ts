import type { ObfuscatedValue } from './common';

export type NodkraiTourFightLevel = {
    activityID: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
