import type { ObfuscatedValue } from './common';

export type ProductBydMcoinDetailConfigData = {
    configId: number;
    icon: string;
    itemNameTextMapHash: number;
    priceTier: string;
    shopType: string;
} & ObfuscatedValue;
