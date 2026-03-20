import type { ObfuscatedValue } from './common';

export type RoleCombatBuff = {
    abilityGroup: string;
    buffDescTextMapHash: number;
    descParamList: string[];
    iconName: string;
    id: number;
    tag: number;
} & ObfuscatedValue;
