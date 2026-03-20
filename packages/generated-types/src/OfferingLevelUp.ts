import type { ObfuscatedValue } from './common';

export type OfferingLevelUp = {
    cutSceneId: number;
    level: number;
    offeringId: number;
    rewardId: number;
} & ObfuscatedValue;
