import type { ObfuscatedValue } from './common';

export type ProductMcoinDetailConfigData = {
    configId: number;
    icon: string;
    itemNameTextMapHash: number;
    mcoinNonFirst: number;
    priceTier: string;
    primNameTextMapHash: number;
    seqence: number;
    shopType: string;
} & ObfuscatedValue;
