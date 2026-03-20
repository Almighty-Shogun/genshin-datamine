import type { ObfuscatedValue } from './common';

export type BeyondCostumeUISlotEntry = {
    configID: number;
    iconHash: number;
    nameTextMapHash: number;
    order: number;
} & ObfuscatedValue;
