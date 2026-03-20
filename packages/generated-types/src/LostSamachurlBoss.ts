import type { ObfuscatedValue } from './common';

export type LostSamachurlBoss = {
    activityID: number;
    dungeonID: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    previewPath: string;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
