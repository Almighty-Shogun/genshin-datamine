import type { ObfuscatedValue } from './common';

export type RogueSequence = {
    id: number;
    dungeonId: number;
} & ObfuscatedValue;
