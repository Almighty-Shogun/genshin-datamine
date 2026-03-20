import type { ObfuscatedValue } from './common';

export type FishStock = {
    fishWeight: ObfuscatedValue;
    id: number;
    type: string;
} & ObfuscatedValue;
