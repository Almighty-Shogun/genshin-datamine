import type { ObfuscatedValue } from './common';

export type BattlePassLevel = {
    level: number;
    levelUpNeedPoint: number;
} & ObfuscatedValue;
