import type { ObfuscatedValue } from './common';

export type NewActivity = {
    activityCoinIdList: number[];
    activityId: number;
    activitySceneTag: string;
    activityType: string;
    condGroupId: number[];
    dungeonIdList: number[];
    isLoadTerrain: boolean;
    nameTextMapHash: number;
    watcherId: number[];
} & ObfuscatedValue;
