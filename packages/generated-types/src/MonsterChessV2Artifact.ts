import type { ObfuscatedValue } from './common';

export type MonsterChessV2Artifact = {
    descTextMapHash: number;
    icon: string;
    id: number;
    nameTextMapHash: number;
    skillId: number;
} & ObfuscatedValue;
