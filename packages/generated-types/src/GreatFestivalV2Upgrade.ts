import type { ObfuscatedValue } from './common';

export type GreatFestivalV2Upgrade = {
    configID: number;
    descTextMapHash: number;
    iconHash: number;
    openDay: number;
    rewardId: number;
    watcherList: number[];
} & ObfuscatedValue;
