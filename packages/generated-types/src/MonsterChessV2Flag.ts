import type { ObfuscatedValue } from './common';

export type MonsterChessV2Flag = {
    descTextMapHash: number;
    gadgetId: number;
    icon: string;
    id: number;
    level: number;
    nameTextMapHash: number;
    skillId: number;
} & ObfuscatedValue;
