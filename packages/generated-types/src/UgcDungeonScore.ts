import type { ObfuscatedValue } from './common';

export type UgcDungeonScore = {
    id: number;
    score: number;
    type: string;
} & ObfuscatedValue;
