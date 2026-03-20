import type { ObfuscatedValue } from './common';

export type BydShopmallGoodsExtra = {
    discountBeginTime: string;
    discountEndTime: string;
    discountRate: number;
    goodsId: number;
} & ObfuscatedValue;
