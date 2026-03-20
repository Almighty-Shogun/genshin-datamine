import type { ObfuscatedValue } from './common';

export type ActivityFairyTalesCapsuleToysLevel = {
    activityID: number;
    groupLinkId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
