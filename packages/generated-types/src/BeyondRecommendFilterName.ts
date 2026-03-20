import type { ObfuscatedValue } from './common';

export type BeyondRecommendFilterName = {
    id: number;
    nameTextMapHash: number;
    subType: string;
} & ObfuscatedValue;
