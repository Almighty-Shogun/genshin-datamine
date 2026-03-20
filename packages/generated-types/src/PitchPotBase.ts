import type { ObfuscatedValue } from './common';

export type PitchPotBase = {
    buffIconHash: number;
    normalIconHash: number;
    scheduleId: number;
} & ObfuscatedValue;
