import type { ObfuscatedValue } from './common';

export type LocalLegendGroup = {
    id: number;
    nameTextMapHash: number;
    order: number;
} & ObfuscatedValue;
