import type { ObfuscatedValue } from './common';

export type RoleCombatExtraLevelTarget = {
    descParamList: string[];
    descTextMapHash: number;
    id: number;
    type: string;
} & ObfuscatedValue;
