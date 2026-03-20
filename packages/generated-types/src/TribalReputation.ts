import type { ObfuscatedValue } from './common';

export type TribalReputation = {
    cityId: number;
    exploreAreaVec: number[];
    openState: string;
    order: number;
    titleTextMapHash: number;
    virtualItemId: number;
} & ObfuscatedValue;
