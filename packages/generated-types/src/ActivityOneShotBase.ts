import type { ObfuscatedValue } from './common';

export type ActivityOneShotBase = {
    activityId: number;
    limitTime: number;
} & ObfuscatedValue;
