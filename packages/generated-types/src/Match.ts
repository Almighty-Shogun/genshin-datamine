import type { ObfuscatedValue } from './common';

export type Match = {
    confirmTime: number;
    id: number;
    levelId: number;
    matchSubType: string;
} & ObfuscatedValue;
