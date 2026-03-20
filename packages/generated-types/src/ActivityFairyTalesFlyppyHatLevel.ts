import type { ObfuscatedValue } from './common';

export type ActivityFairyTalesFlyppyHatLevel = {
    activityID: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
