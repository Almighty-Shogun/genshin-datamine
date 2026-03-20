import type { ObfuscatedValue } from './common';

export type ReputationLevel = {
    cityId: number;
    functionId: number;
    goodsId: number;
    id: number;
    level: number;
    levelNameTextMapHash: number;
    nextLevelExp: number;
    requestGroupId: number;
    rewardId: number;
} & ObfuscatedValue;
