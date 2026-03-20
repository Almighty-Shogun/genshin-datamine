import type { ObfuscatedValue } from './common';

export type ActivityBubbleDramaPhotoLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questId: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
