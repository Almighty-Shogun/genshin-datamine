import type { ObfuscatedValue } from './common';

export type AquariumDivingWeapon = {
    orderId: number;
    weaponId: number;
    weaponType: string;
} & ObfuscatedValue;
