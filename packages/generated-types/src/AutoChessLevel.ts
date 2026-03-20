import type { ObfuscatedValue } from './common';

export type AutoChessLevel = {
    dungeonId: number;
    id: number;
    prefabPath: string;
} & ObfuscatedValue;
