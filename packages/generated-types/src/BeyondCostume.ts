import type { ObfuscatedValue } from './common';

export type BeyondCostume = {
    costumeId: number;
    descriptionTextMapHash: number;
    nameTextMapHash: number;
    sortId: number;
    suitId: number;
} & ObfuscatedValue;
