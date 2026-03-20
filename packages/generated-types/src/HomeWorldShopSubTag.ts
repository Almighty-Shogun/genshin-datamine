import type { ObfuscatedValue } from './common';

export type HomeWorldShopSubTag = {
    showNewMark: boolean;
    subID: number;
    subTagTextMapHash: number;
    tagIconHash: number;
} & ObfuscatedValue;
