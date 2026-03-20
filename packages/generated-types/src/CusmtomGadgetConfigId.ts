import type { ObfuscatedValue } from './common';

export type CusmtomGadgetConfigId = {
    configId: number;
    gadgetId: number;
    itemId: number;
    optionNameTextMapHash: number;
    optionTitleTextMapHash: number;
} & ObfuscatedValue;
