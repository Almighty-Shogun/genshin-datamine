import type { ObfuscatedValue } from './common';

export type MonsterVsMonsterCard = {
    cardNameTextMapHash: number;
    cardType: string;
    cd: number;
    elementType: string;
    iconPath: string;
} & ObfuscatedValue;
