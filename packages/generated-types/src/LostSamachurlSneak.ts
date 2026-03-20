import type { ObfuscatedValue } from './common';

export type LostSamachurlSneak = {
    activityID: number;
    dungeonID: number;
    groupId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    previewPath: string;
    questList: unknown[];
    scanTime: number;
    watcherList: number[];
} & ObfuscatedValue;
