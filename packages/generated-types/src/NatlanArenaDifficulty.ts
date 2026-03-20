import type { ObfuscatedValue } from './common';

export type NatlanArenaDifficulty = {
    difficultyDescTextMapHash: number;
    dungeonLevel: number;
} & ObfuscatedValue;
