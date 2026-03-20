import type { ObfuscatedValue } from './common';

export type BeyondGachaPreview = {
    bannerNameTextMapHash: number;
    iconNameHash: number;
    suitId: number;
} & ObfuscatedValue;
