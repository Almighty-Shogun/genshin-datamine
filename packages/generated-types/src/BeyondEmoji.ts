import type { ObfuscatedValue } from './common';

export type BeyondEmoji = {
    descriptionTextMapHash: number;
    id: number;
    nameTextMapHash: number;
    prefabName: string;
    rarity: number;
} & ObfuscatedValue;
