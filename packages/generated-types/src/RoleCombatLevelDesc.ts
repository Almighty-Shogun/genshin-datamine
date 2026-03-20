import type { ObfuscatedValue } from './common';

export type RoleCombatLevelDesc = {
    id: number;
    levelDescTextMapHash: number;
    levelNameTextMapHash: number;
    levelType: string;
} & ObfuscatedValue;
