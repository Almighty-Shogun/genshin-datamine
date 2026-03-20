import type { ObfuscatedValue } from './common';

export type Shop = {
    cityDiscountLevel: number;
    cityId: number;
    hasSubSheet: boolean;
    openStateType: string;
    refreshParam: number;
    refreshType: string;
    scoinDiscountRate: number;
    shopId: number;
    shopType: string;
    vipFuncID: number;
} & ObfuscatedValue;
