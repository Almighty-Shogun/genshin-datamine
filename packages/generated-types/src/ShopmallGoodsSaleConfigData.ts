import type { ObfuscatedValue } from './common';

export type ShopmallGoodsSaleConfigData = {
    discountBeginTime: string;
    discountEndTime: string;
    discountMcoin: number;
    discountRate: number;
    goodsId: number;
    id: number;
} & ObfuscatedValue;
