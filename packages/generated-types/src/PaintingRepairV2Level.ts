import type { ObfuscatedValue } from './common';

export type PaintingRepairV2Level = {
    activityID: number;
    groupId: number;
    groupLinkId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: unknown[];
} & ObfuscatedValue;
