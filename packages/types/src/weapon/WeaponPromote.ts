import type { ObfuscatedValue, AdditionProp } from '../common';

export type WeaponPromote = {
    addProps: AdditionProp[];
    coinCost: number;
    promoteLevel: number;
    requiredPlayerLevel: number;
    unlockMaxLevel: number;
    weaponPromoteId: number;
} & ObfuscatedValue;
