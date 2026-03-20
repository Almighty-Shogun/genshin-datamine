import type { ObfuscatedValue } from './common';

export type BeyondActivityScoreInfo = {
    day: number;
    levelList: number[];
    stageId: number;
} & ObfuscatedValue;
