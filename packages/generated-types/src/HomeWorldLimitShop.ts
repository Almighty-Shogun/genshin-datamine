import type { ObfuscatedValue } from './common';

export type HomeWorldLimitShop = {
    buyLimit: number;
    cond: {
        condition: string;
        conditionParam: number[];
    }[];
    goodsId: number;
    itemID: number;
    poolID: number;
    weight: number;
} & ObfuscatedValue;
