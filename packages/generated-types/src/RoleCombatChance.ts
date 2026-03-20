import type { ObfuscatedValue } from './common';

export type RoleCombatChance = {
    descParamList: number[];
    iconName: string;
    id: number;
    tag: number;
} & ObfuscatedValue;
