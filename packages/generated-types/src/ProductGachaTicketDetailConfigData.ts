import type { ObfuscatedValue } from './common';

export type ProductGachaTicketDetailConfigData = {
    configId: number;
    priceTier: string;
    shopType: string;
} & ObfuscatedValue;
