import type { ObfuscatedValue } from './common';

export type TribalReputationLevel = {
    id: number;
    level: number;
    nextLevelExp: number;
    rewardId: number;
} & ObfuscatedValue;
