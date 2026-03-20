import type { ObfuscatedValue } from './common';

export type BeyondPose = {
    bodyType: string;
    descriptionTextMapHash: number;
    id: number;
    isHide: boolean;
    nameTextMapHash: number;
    rarity: number;
} & ObfuscatedValue;
