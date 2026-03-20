import type { ObfuscatedValue } from './common';

export type BeyondTransferEffect = {
    descriptionTextMapHash: number;
    effectName: string;
    id: number;
    nameTextMapHash: number;
    rarity: number;
} & ObfuscatedValue;
