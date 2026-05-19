import type { ObfuscatedValue } from './common';

export type OfferingLevelUp = {
    consumeItemConfigVec: {
        count: number;
        id: number;
    }[];
    cutSceneId: number;
    level: number;
    offeringId: number;
    rewardId: number;
} & ObfuscatedValue;
