import type { ObfuscatedValue } from './common';

export type ProductIdConfigData = {
    catalogItemId: string;
    configId: number;
    entitlementId: string;
    isInternal: boolean;
    productId: string;
} & ObfuscatedValue;
