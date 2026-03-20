import type { ObfuscatedValue } from './common';

export type SorushTrialStage = {
    detailLevels: number[];
    levelId: number;
    levelTitleTextMapHash: number;
    preLevelId: number;
} & ObfuscatedValue;
