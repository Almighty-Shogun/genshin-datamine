import type { ObfuscatedValue } from './common';

export type TransPointRewardConfigData = {
    sceneId: number;
    pointId: number;
    rewardId: number;
    groupIdVec: number[];
} & ObfuscatedValue;
