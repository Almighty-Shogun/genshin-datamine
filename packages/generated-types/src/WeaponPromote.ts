import type { ObfuscatedValue } from './common';

export type WeaponPromote = {
    addProps: {
        propType: string;
        value: number;
    }[];
    coinCost: number;
    promoteLevel: number;
    requiredPlayerLevel: number;
    unlockMaxLevel: number;
    weaponPromoteId: number;
} & ObfuscatedValue;
