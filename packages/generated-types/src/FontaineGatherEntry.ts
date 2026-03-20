import type { ObfuscatedValue } from './common';

export type FontaineGatherEntry = {
    groupBundleID: number;
    id: number;
    indexID: number;
    pointID: number;
    watcherID: number;
} & ObfuscatedValue;
