import type { ObfuscatedValue } from './common';

export type GoalChallengeDifficulty = {
    id: number;
    reviseLevel: number;
    tipsTextMapHash: number;
} & ObfuscatedValue;
