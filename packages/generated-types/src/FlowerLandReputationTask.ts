import type { ObfuscatedValue } from './common';

export type FlowerLandReputationTask = {
    parentQuestIdList: number[];
    preQuestIdList: number[];
    startQuestId: number;
} & ObfuscatedValue;
