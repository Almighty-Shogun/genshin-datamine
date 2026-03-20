import type { ObfuscatedValue } from './common';

export type ActivityGear = {
    id: number;
    activityId: number;
    pushTipsId: number;
    watcherIdList: number[];
} & ObfuscatedValue;
