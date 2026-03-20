import type { ObfuscatedValue } from './common';

export type PuzzleFighterCardData = {
    cardId: number;
    hp: number;
} & ObfuscatedValue;
