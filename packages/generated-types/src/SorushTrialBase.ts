import type { ObfuscatedValue } from './common';

export type SorushTrialBase = {
    gVkey: string;
    scheduleId: number;
} & ObfuscatedValue;
