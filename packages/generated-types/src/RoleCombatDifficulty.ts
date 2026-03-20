import type { ObfuscatedValue } from './common';

export type RoleCombatDifficulty = {
    difficultyId: number;
    difficultyLevel: number;
} & ObfuscatedValue;
