import type { ObfuscatedValue } from './common';

export type ReunionV2Area = {
    areaNameTextMapHash: number;
    id: number;
    markID: number;
    priority: number;
    watcherList: number[];
} & ObfuscatedValue;
