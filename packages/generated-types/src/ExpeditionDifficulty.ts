import type { ObfuscatedValue } from './common';

export type ExpeditionDifficulty = {
    coef: number;
    id: number;
    maxPlayer: number;
    minPlayer: number;
    needHours: number;
} & ObfuscatedValue;
