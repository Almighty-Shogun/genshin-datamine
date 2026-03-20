import type { ObfuscatedValue } from './common';

export type CoinCollectOverall = {
    activityDays: number;
    activityID: number;
    prepareTime: number;
    pushTipsId: number;
    widgetID: number;
} & ObfuscatedValue;
