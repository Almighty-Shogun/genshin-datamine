import type { ObfuscatedValue } from './common';

export type FishBait = {
    featureList: {
        bonusRange: number;
        featureTag: number;
        weight: number;
    }[];
    id: number;
    poolIdList: number[];
} & ObfuscatedValue;
