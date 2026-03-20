import type { ObfuscatedValue } from './common';

export type DieTypeTips = {
    abilityName: string;
    dieType: string;
    id: number;
    modifierName: string;
    monsterID: number;
    tips: number[];
} & ObfuscatedValue;
