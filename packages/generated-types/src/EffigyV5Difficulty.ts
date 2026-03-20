import type { ObfuscatedValue } from './common';

export type EffigyV5Difficulty = {
    challengeId: number;
    descTextMapHash: number;
    id: number;
    monsterDifficulty: string;
} & ObfuscatedValue;
