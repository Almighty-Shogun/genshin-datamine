import type { ObfuscatedValue, AdditionProp, CostItem } from '../common';

export type WeaponPromote = {
    addProps: AdditionProp[];
    coinCost: number;
    costItems: CostItem[];
    promoteLevel: number;
    requiredPlayerLevel: number;
    unlockMaxLevel: number;
    weaponPromoteId: number;
} & ObfuscatedValue;
