import type { ObfuscatedValue } from './common';

export type BeyondActivity = {
    activityCoinIdList: number[];
    activityId: number;
    activityType: string;
    watcherIdList: number[];
} & ObfuscatedValue;
