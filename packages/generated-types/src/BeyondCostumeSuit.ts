import type { ObfuscatedValue } from './common';

export type BeyondCostumeSuit = {
    descriptionTextMapHash: number;
    iconHash: number;
    nameTextMapHash: number;
    showType: string;
    sortId: number;
    suitId: number;
} & ObfuscatedValue;
