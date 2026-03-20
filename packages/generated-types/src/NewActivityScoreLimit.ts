import type { ObfuscatedValue } from './common';

export type NewActivityScoreLimit = {
    activityID: number;
    id: number;
} & ObfuscatedValue;
