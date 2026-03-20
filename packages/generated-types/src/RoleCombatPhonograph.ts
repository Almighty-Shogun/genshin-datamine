import type { ObfuscatedValue } from './common';

export type RoleCombatPhonograph = {
    bgmPath: string;
    isDefault: boolean;
    nameTextMapHash: number;
    order: number;
} & ObfuscatedValue;
