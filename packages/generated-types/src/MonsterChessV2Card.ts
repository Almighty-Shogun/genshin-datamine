import type { ObfuscatedValue } from './common';

export type MonsterChessV2Card = {
    cardNameTextMapHash: number;
    elementType: string;
} & ObfuscatedValue;
