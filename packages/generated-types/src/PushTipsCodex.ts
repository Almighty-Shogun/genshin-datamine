import type { ObfuscatedValue } from './common';

export type PushTipsCodex = {
    cityID: number;
    id: number;
    isDisuse: boolean;
    priority: number;
    pushTipId: number;
    sortOrder: number;
} & ObfuscatedValue;
