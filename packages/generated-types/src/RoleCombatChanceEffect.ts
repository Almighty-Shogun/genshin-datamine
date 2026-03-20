import type { ObfuscatedValue } from './common';

export type RoleCombatChanceEffect = {
    condType: string;
    effectDescTextMapHash: number;
    effectId: number;
    effectType: string;
} & ObfuscatedValue;
