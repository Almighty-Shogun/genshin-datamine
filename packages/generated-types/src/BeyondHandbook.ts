import type { ObfuscatedValue } from './common';

export type BeyondHandbook = {
    isDisuse: boolean;
    rewardId: number;
    score: number;
    watcherIdList: number[];
} & ObfuscatedValue;
