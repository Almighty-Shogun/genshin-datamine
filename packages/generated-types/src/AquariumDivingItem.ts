import type { ObfuscatedValue } from './common';

export type AquariumDivingItem = {
    gadgetId: number;
    itemIcon: string;
    itemId: number;
    itemNameTextMapHash: number;
    itemType: string;
    modelPath: string;
    monsterId: number;
} & ObfuscatedValue;
