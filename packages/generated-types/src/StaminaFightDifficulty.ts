import type { ObfuscatedValue } from './common';

export type StaminaFightDifficulty = {
    difficultyDescTextMapHash: number;
    reviseLevel: number;
    timeLimit: number;
} & ObfuscatedValue;
