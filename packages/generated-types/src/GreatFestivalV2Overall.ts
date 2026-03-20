import type { ObfuscatedValue } from './common';

export type GreatFestivalV2Overall = {
    configID: number;
    questID: number;
    rewardPreviewID: number;
    watcherList: number[];
} & ObfuscatedValue;
