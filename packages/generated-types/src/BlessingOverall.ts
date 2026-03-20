import type { ObfuscatedValue } from './common';

export type BlessingOverall = {
    pushTipsId: number;
    rewardId: number;
    ruleTextMaps: string[];
    scanTime: number;
    scheduleId: number;
} & ObfuscatedValue;
