import type { ObfuscatedValue } from './common';

export type RogueMonsterPool = {
    id: number;
    dungeonId: number;
    difficulty: string;
} & ObfuscatedValue;
