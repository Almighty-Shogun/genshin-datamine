import type { ObfuscatedValue } from './common';

export type BeyondBattlePassReward = {
    freeRewardIdList: number[];
    indexId: number;
    level: number;
    paidRewardIdList: number[];
    showUp: boolean;
} & ObfuscatedValue;
