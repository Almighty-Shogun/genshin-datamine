import type { ObfuscatedValue } from './common';

export type PuzzleFighterEnemyData = {
    hp: number;
    icon: string;
    id: number;
} & ObfuscatedValue;
