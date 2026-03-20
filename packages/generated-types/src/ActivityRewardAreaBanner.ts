import type { ObfuscatedValue } from './common';

export type ActivityRewardAreaBanner = {
    activityId: number;
    pointId: number;
    prefabPath: string;
    questId: number[];
    sceneId: number;
} & ObfuscatedValue;
