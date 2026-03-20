import type { ObfuscatedValue } from './common';

export type EffigyV4Difficulty = {
    baseScore: number;
    challengeId: number;
    difficultyDescTextMapHash: number;
    id: number;
    monsterDifficulty: string;
    monsterLevel: number;
    scoreRatio: number;
} & ObfuscatedValue;
