import type { ObfuscatedValue } from './common';

export type MonsterChessCard = {
    cardNameTextMapHash: number;
    elementType: string;
} & ObfuscatedValue;
