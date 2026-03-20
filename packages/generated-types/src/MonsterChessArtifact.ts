import type { ObfuscatedValue } from './common';

export type MonsterChessArtifact = {
    descTextMapHash: number;
    icon: string;
    id: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
