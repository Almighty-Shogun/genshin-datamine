import type { ObfuscatedValue } from './common';

export type ActivityBirdBallSingleLevel = {
    activityID: number;
    descTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    prefabPath: string;
    questList: unknown[];
    seriesId: number;
    targetType: string;
    watcherList: unknown[];
} & ObfuscatedValue;
