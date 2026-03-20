import type { ObfuscatedValue } from './common';

export type RoleCombatBuild = {
    abilityGroup: string;
    descParamList: string[];
    iconName: string;
    id: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
